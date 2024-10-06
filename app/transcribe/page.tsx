"use client";

import React, { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Upload,
  FileAudio,
  Loader2,
  X,
  Mic,
  Copy,
  Download,
  Volume2,
  Check,
  Headphones,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TranscribePage() {
  const [file, setFile] = useState<File | null>(null);
  const [transcription, setTranscription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "audio/*": [".mp3", ".wav", ".m4a", ".flac", ".ogg"],
    },
    maxFiles: 1,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please select an audio file to transcribe.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setProgress(0);
    try {
      const formData = new FormData();
      formData.append("file", file);

      // Start progress simulation
      const progressInterval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 90) {
            return 90;
          }
          return prevProgress + 10;
        });
      }, 500);

      const response = await fetch("/api/transcribe", {
        method: "POST",
        body: formData,
      });

      clearInterval(progressInterval);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Transcription failed");
      }

      const data = await response.json();
      setTranscription(data.transcription);
      setProgress(100);
      toast({
        title: "Transcription complete",
        description: "Your audio has been successfully transcribed.",
      });
    } catch (error) {
      console.error("Transcription error:", error);
      toast({
        title: "Transcription failed",
        description:
          error instanceof Error
            ? error.message
            : "An error occurred while transcribing your audio. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const removeFile = () => {
    setFile(null);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(transcription);
    setCopied(true);
    toast({
      title: "Copied to clipboard",
      description: "The transcription has been copied to your clipboard.",
    });
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const downloadTranscription = () => {
    const element = document.createElement("a");
    const file = new Blob([transcription], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "transcription.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-4">
            <Link href="" className="flex items-center space-x-2">
              <Headphones className="h-6 w-6" />
              <span className="font-bold" onClick={() => window.location.reload}>Scribber</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/about">About</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/docs">Docs</Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-primary">
            Audio Transcription
          </h1>
          <Card className="mb-8 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Mic className="mr-2 h-6 w-6 text-primary" />
                Upload Audio File
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all ${
                  isDragActive
                    ? "border-primary bg-primary/10"
                    : "border-gray-300 hover:border-primary hover:bg-gray-50"
                }`}
              >
                <input {...getInputProps()} />
                {file ? (
                  <div className="flex items-center justify-between bg-gray-100 p-3 rounded-md">
                    <div className="flex items-center">
                      <FileAudio className="h-8 w-8 mr-3 text-primary" />
                      <span className="text-sm font-medium">{file.name}</span>
                    </div>
                    <Button variant="ghost" size="sm" onClick={removeFile}>
                      <X className="h-5 w-5 text-gray-500 hover:text-red-500" />
                    </Button>
                  </div>
                ) : (
                  <div>
                    <Upload className="h-16 w-16 mx-auto mb-4 text-primary" />
                    <p className="text-lg text-gray-600 mb-2">
                      Drag and drop your audio file here, or click to select a
                      file
                    </p>
                    <p className="text-sm text-gray-400">
                      Supported formats: MP3, WAV, M4A, FLAC, OGG
                    </p>
                  </div>
                )}
              </div>
              <Button
                onClick={handleSubmit}
                disabled={!file || isLoading}
                className="w-full mt-6 py-6 text-lg"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Transcribing...
                  </>
                ) : (
                  <>
                    <Upload className="mr-2 h-5 w-5" />
                    Transcribe
                  </>
                )}
              </Button>
              {isLoading && (
                <div className="mt-4">
                  <Progress value={progress} className="h-2" />
                  <p className="text-sm text-gray-500 mt-2 text-center">
                    {progress}% Complete
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
          {transcription && (
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-2xl">
                  <span className="flex items-center">
                    <FileAudio className="mr-2 h-6 w-6 text-primary" />
                    Transcription Result
                  </span>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={copyToClipboard}
                      disabled={copied}
                    >
                      {copied ? (
                        <>
                          <Check className="h-4 w-4 mr-2 text-green-500" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4 mr-2" />
                          Copy
                        </>
                      )}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={downloadTranscription}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="text" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="text">Text</TabsTrigger>
                    <TabsTrigger value="audio">Audio</TabsTrigger>
                  </TabsList>
                  <TabsContent value="text">
                    <Textarea
                      value={transcription}
                      readOnly
                      className="min-h-[300px] text-lg leading-relaxed p-4 bg-gray-50 rounded-md shadow-inner"
                    />
                  </TabsContent>
                  <TabsContent value="audio">
                    <div className="flex flex-col items-center justify-center min-h-[300px] bg-gray-50 rounded-md shadow-inner p-4">
                      <Volume2 className="h-16 w-16 text-primary mb-4" />
                      <p className="text-lg text-gray-600 mb-4">
                        Audio playback coming soon!
                      </p>
                      <Button disabled>Play Audio</Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © 2024 Scribber. All rights reserved.
      </footer>
    </div>
  );
}
