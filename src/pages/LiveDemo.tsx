import { Button } from "@/components/ui/button";
import { ArrowLeft, Camera, Volume2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const LiveDemo = () => {
  const navigate = useNavigate();
  const [outputText, setOutputText] = useState("Point your camera at something and tap the analyze button...");
  const [isStreaming, setIsStreaming] = useState(false);
  const [capturedFrame, setCapturedFrame] = useState<string | null>(null);
  const [cameraError, setCameraError] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let stream: MediaStream | null = null;

    const initCamera = async () => {
      if (!navigator.mediaDevices?.getUserMedia) {
        setCameraError("Camera access isn't supported in this browser.");
        return;
      }

      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
          audio: false,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
          setIsStreaming(true);
          setCameraError(null);
        }
      } catch (error) {
        console.error("Unable to access camera:", error);
        setCameraError("We couldn't access your camera. Please allow camera permission and try again.");
      }
    };

    initCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const handleAnalyze = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas || !isStreaming) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    canvas.width = video.videoWidth || 1280;
    canvas.height = video.videoHeight || 720;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const dataUrl = canvas.toDataURL("image/png");
    setCapturedFrame(dataUrl);
    video.pause();
    setIsStreaming(false);
    setOutputText("Frame captured. Running AI vision analysis...");
  };

  const handleResume = async () => {
    const video = videoRef.current;
    if (!video) return;
    try {
      await video.play();
      setCapturedFrame(null);
      setIsStreaming(true);
      setOutputText("Live feed resumed. Point at something new and analyze again.");
    } catch (error) {
      console.error("Unable to resume video:", error);
      setCameraError("We couldn't resume the live feed. Refresh the page to try again.");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-8 lg:px-16 py-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/demo")}
            className="hover:bg-primary/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Demo
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-8 lg:px-16 py-8">
        <div className="grid lg:grid-cols-2 gap-8 h-[calc(100vh-200px)]">
          {/* Camera View - Left Side */}
          <div className="flex flex-col gap-4">
            <div className="flex-1 bg-muted rounded-2xl border-2 border-primary/20 flex items-center justify-center relative overflow-hidden">
              {cameraError ? (
                <div className="text-center space-y-4 px-6">
                  <p className="text-lg font-semibold text-destructive">Camera Error</p>
                  <p className="text-sm text-muted-foreground">{cameraError}</p>
                </div>
              ) : (
                <>
                  <video
                    ref={videoRef}
                    className={`w-full h-full object-cover ${capturedFrame ? "opacity-0" : "opacity-100"}`}
                    autoPlay
                    playsInline
                    muted
                  />
                  {capturedFrame && (
                    <img
                      src={capturedFrame}
                      alt="Captured frame"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}
                  {!isStreaming && !capturedFrame && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-background/80">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                        <Camera className="w-8 h-8 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">Requesting camera access...</p>
                    </div>
                  )}
                </>
              )}
              <canvas ref={canvasRef} className="hidden" aria-hidden="true" />
            </div>
            
            <div className="flex gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50"
                onClick={handleAnalyze}
                disabled={!isStreaming || !!cameraError}
              >
                <Camera className="w-5 h-5 mr-2" />
                {capturedFrame ? "Captured" : "Analyze Scene"}
              </Button>
              {capturedFrame && (
                <Button size="lg" variant="secondary" onClick={handleResume}>
                  Resume Live Feed
                </Button>
              )}
              <Button size="lg" variant="outline">
                <Volume2 className="w-5 h-5 mr-2" />
                Read Aloud
              </Button>
            </div>
          </div>

          {/* Text Output - Right Side */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">AI Analysis</h2>
            <div className="flex-1 bg-card border-2 border-border rounded-2xl p-6 overflow-y-auto">
              <p className="text-foreground leading-relaxed whitespace-pre-wrap">
                {outputText}
              </p>
            </div>
            
            <div className="bg-muted/50 rounded-xl p-4 border border-border">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${capturedFrame ? "bg-amber-500" : isStreaming ? "bg-primary animate-pulse" : "bg-muted-foreground"}`}></span>
                {capturedFrame ? "Frame captured" : isStreaming ? "Live feed active" : "Initializing camera"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {capturedFrame
                  ? "Great shot! Review the frozen frame or resume the live feed whenever you're ready."
                  : "Point your camera at any object, text, or scene and click \"Analyze Scene\""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveDemo;
