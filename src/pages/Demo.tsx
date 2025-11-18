import { Button } from "@/components/ui/button";
import { Camera, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Demo = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-8 lg:px-16 py-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="hover:bg-primary/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </header>

      {/* Demo Section */}
      <section className="py-20">
        <div className="container mx-auto px-8 lg:px-16 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Try the <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">SeeSense Experience</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Point your camera. Tap. Hear everything.
          </p>
          
          <div className="max-w-5xl mx-auto rounded-2xl bg-card border-2 border-primary/20 p-4 shadow-2xl">
            <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                  <Camera className="w-10 h-10 text-primary" />
                </div>
                <p className="text-lg text-muted-foreground">Video Demo Placeholder</p>
                <p className="text-sm text-muted-foreground max-w-md mx-auto">
                  Experience how SeeSense transforms visual information into instant audio descriptions
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 space-y-4">
            <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Camera className="w-5 h-5 mr-2" />
              Launch Live Demo
            </Button>
            <p className="text-sm text-muted-foreground">
              Try it with your device's camera or upload a sample image
            </p>
          </div>
        </div>
      </section>

      {/* Quick Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-8 lg:px-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            What You'll Experience
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Camera className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold">Instant Analysis</h3>
              <p className="text-sm text-muted-foreground">AI processes your image in under 2 seconds</p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Camera className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold">Clear Descriptions</h3>
              <p className="text-sm text-muted-foreground">Detailed audio explanations of scenes and objects</p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Camera className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold">Text Reading</h3>
              <p className="text-sm text-muted-foreground">Reads any visible text aloud automatically</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;
