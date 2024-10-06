import { NextResponse } from 'next/server'
import axios from 'axios'

export async function POST(req: Request) {
  const formData = await req.formData()
  const file = formData.get('file') as File

  if (!file) {
    return NextResponse.json({ error: 'No file provided' }, { status: 400 })
  }

  const assemblyAIApiKey = process.env.ASSEMBLYAI_API_KEY
  if (!assemblyAIApiKey) {
    return NextResponse.json({ error: 'AssemblyAI API key not configured' }, { status: 500 })
  }

  try {
    // Read file as ArrayBuffer
    const fileBuffer = await file.arrayBuffer()

    // Get upload URL
    const uploadResponse = await axios.post('https://api.assemblyai.com/v2/upload', fileBuffer, {
      headers: {
        'Content-Type': 'application/octet-stream',
        'Authorization': assemblyAIApiKey
      }
    })

    const audioUrl = uploadResponse.data.upload_url

    // Start transcription
    const transcriptionResponse = await axios.post('https://api.assemblyai.com/v2/transcript', {
      audio_url: audioUrl
    }, {
      headers: {
        'Authorization': assemblyAIApiKey,
        'Content-Type': 'application/json'
      }
    })

    const transcriptId = transcriptionResponse.data.id

    // Poll for transcription result
    let transcriptResult
    while (true) {
      const pollingResponse = await axios.get(`https://api.assemblyai.com/v2/transcript/${transcriptId}`, {
        headers: { 'Authorization': assemblyAIApiKey }
      })

      transcriptResult = pollingResponse.data

      if (transcriptResult.status === 'completed' || transcriptResult.status === 'error') {
        break
      }

      await new Promise(resolve => setTimeout(resolve, 3000)) // Wait for 3 seconds before polling again
    }

    if (transcriptResult.status === 'error') {
      throw new Error('Transcription failed')
    }

    return NextResponse.json({ transcription: transcriptResult.text })
  } catch (error) {
    console.error('Transcription error:', error)
    return NextResponse.json({ error: 'Transcription failed' }, { status: 500 })
  }
}