import { Button } from "@/components/ui/button";
import { ArrowLeft, Camera, Volume2, Sparkles, Scan, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LiveDemo = () => {
  const navigate = useNavigate();
  const [outputText, setOutputText] = useState("Point your camera at something and tap the analyze button...");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-8 lg:px-16 py-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/demo")}
            className="hover:bg-primary/10 transition-all"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Demo
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-8 lg:px-16 py-8">
        <div className="mb-8 text-center animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Live Vision Analysis
            </span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Experience AI-powered real-time scene understanding
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Camera View - Left Side */}
          <div className="flex flex-col gap-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex-1 bg-gradient-to-br from-muted to-muted/50 rounded-2xl border-2 border-primary/20 flex items-center justify-center relative overflow-hidden shadow-2xl min-h-[500px]">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 animate-pulse"></div>
              
              {/* Corner indicators */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/40 rounded-tl-lg"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/40 rounded-tr-lg"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary/40 rounded-bl-lg"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/40 rounded-br-lg"></div>

              <div className="text-center space-y-4 z-10 relative">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center mx-auto backdrop-blur-sm border-2 border-primary/20 shadow-lg hover-scale">
                  <Camera className="w-12 h-12 text-primary" />
                </div>
                <p className="text-xl font-semibold text-foreground">Camera Feed</p>
                <p className="text-sm text-muted-foreground max-w-md mx-auto px-4">
                  Camera access will be requested when you start the demo
                </p>
                {isAnalyzing && (
                  <div className="flex items-center justify-center gap-2 text-primary animate-fade-in">
                    <Scan className="w-5 h-5 animate-pulse" />
                    <span className="text-sm font-medium">Analyzing...</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex gap-4 justify-center flex-wrap">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground shadow-lg hover:shadow-xl transition-all hover-scale"
              >
                <Camera className="w-5 h-5 mr-2" />
                Analyze Scene
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 hover:bg-primary/10 transition-all hover-scale"
              >
                <Volume2 className="w-5 h-5 mr-2" />
                Read Aloud
              </Button>
            </div>
          </div>

          {/* Text Output - Right Side */}
          <div className="flex flex-col gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-primary/10">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                AI Analysis
              </h2>
            </div>
            
            <div className="flex-1 bg-gradient-to-br from-card to-card/50 border-2 border-border rounded-2xl p-8 overflow-y-auto shadow-xl min-h-[400px] backdrop-blur-sm">
              <p className="text-foreground leading-relaxed text-lg whitespace-pre-wrap">
                {outputText}
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-muted/80 to-muted/50 rounded-xl p-6 border-2 border-border/50 shadow-lg backdrop-blur-sm">
              <h3 className="font-semibold mb-3 flex items-center gap-2 text-lg">
                <span className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse shadow-lg"></span>
                Ready to analyze
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Point your camera at any object, text, or scene and click "Analyze Scene"
              </p>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover-scale transition-all shadow-lg hover:shadow-xl">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold mb-2">Scene Detection</h3>
            <p className="text-sm text-muted-foreground">
              Identifies objects, people, and environments in real-time
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover-scale transition-all shadow-lg hover:shadow-xl">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Scan className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold mb-2">Text Recognition</h3>
            <p className="text-sm text-muted-foreground">
              Reads and extracts text from images instantly
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover-scale transition-all shadow-lg hover:shadow-xl">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Volume2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold mb-2">Audio Output</h3>
            <p className="text-sm text-muted-foreground">
              Converts visual information into clear audio descriptions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveDemo;
