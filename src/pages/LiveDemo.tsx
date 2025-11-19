import { Button } from "@/components/ui/button";
import { ArrowLeft, Camera, Volume2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LiveDemo = () => {
  const navigate = useNavigate();
  const [outputText, setOutputText] = useState("Point your camera at something and tap the analyze button...");

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
              <div className="text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                  <Camera className="w-10 h-10 text-primary" />
                </div>
                <p className="text-lg text-muted-foreground">Camera Feed</p>
                <p className="text-sm text-muted-foreground max-w-md mx-auto">
                  Camera access will be requested when you start the demo
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Camera className="w-5 h-5 mr-2" />
                Analyze Scene
              </Button>
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
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Ready to analyze
              </h3>
              <p className="text-sm text-muted-foreground">
                Point your camera at any object, text, or scene and click "Analyze Scene"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveDemo;
