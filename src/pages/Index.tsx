import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Camera, 
  FileText, 
  ScanLine, 
  Eye, 
  Glasses, 
  Users, 
  Book, 
  Smartphone,
  Volume2,
  Zap,
  Shield,
  CheckCircle,
  Calendar
} from "lucide-react";
import heroImage from "@/assets/hero-mockup.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary/30 via-background to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(180,65%,45%,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(175,70%,50%,0.05),transparent_50%)]" />
        
        <div className="relative container mx-auto px-6 py-16 lg:py-24">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium">
              <Zap className="w-4 h-4" />
              <span>AI-Powered Accessibility</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              AI Vision for the{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Visually Impaired
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
              See the world through AI. Describe scenes, read text, and identify objects — instantly and independently.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all">
                <Camera className="w-5 h-5 mr-2" />
                Try SeeSense Demo
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-primary/30 hover:bg-primary/5 hover:border-primary">
                How It Works
              </Button>
            </div>

            {/* Hero Image */}
            <div className="pt-12 animate-slide-up">
              <div className="relative max-w-4xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                <img 
                  src={heroImage} 
                  alt="SeeSense interface showing AI-powered scene description on a smartphone" 
                  className="rounded-2xl shadow-2xl w-full border border-border"
                />
                {/* Floating feature badges */}
                <div className="absolute -left-4 top-1/4 hidden lg:flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-3 shadow-lg animate-fade-in">
                  <FileText className="w-5 h-5 text-primary" />
                  <span className="font-medium text-sm">Text Reader</span>
                </div>
                <div className="absolute -right-4 top-1/2 hidden lg:flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-3 shadow-lg animate-fade-in">
                  <ScanLine className="w-5 h-5 text-primary" />
                  <span className="font-medium text-sm">Object ID</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            285 Million People Struggle with Visual Information{" "}
            <span className="text-primary">Every Day</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FileText, text: "Can't read menus, labels, medication instructions" },
              { icon: ScanLine, text: "Can't identify products or packaging" },
              { icon: Eye, text: "Can't understand their surroundings without assistance" },
              { icon: Shield, text: "Accessible tech is expensive or limited" },
            ].map((item, i) => (
              <Card key={i} className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <item.icon className="w-12 h-12 text-primary" />
                  <p className="text-lg">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4">
            SeeSense Gives Instant,{" "}
            <span className="text-primary">Affordable Accessibility</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16">
            Three powerful features working together
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Camera,
                title: "Scene Description",
                description: "AI explains the environment in real time.",
              },
              {
                icon: FileText,
                title: "Text Reader",
                description: "Reads menus, signs, documents, and labels aloud.",
              },
              {
                icon: ScanLine,
                title: "Object Identification",
                description: "Recognizes items with simple descriptions.",
              },
            ].map((feature, i) => (
              <Card key={i} className="bg-card border-border hover:border-primary transition-all hover:shadow-[0_0_30px_hsl(180,70%,50%,0.2)] group">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                  <p className="text-lg text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Try the <span className="text-primary">SeeSense Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Point your camera. Tap. Hear everything.
          </p>
          
          <div className="max-w-4xl mx-auto rounded-2xl bg-card border-2 border-primary/20 p-4 shadow-2xl">
            <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                  <Camera className="w-10 h-10 text-primary" />
                </div>
                <p className="text-lg text-muted-foreground">Video Demo Placeholder</p>
              </div>
            </div>
          </div>
          
          <Button size="lg" className="mt-8 text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground">
            Watch 30-Second Demo
          </Button>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            How It <span className="text-primary">Works</span>
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Smartphone, text: "User opens web app" },
              { icon: Camera, text: "Camera activates" },
              { icon: Zap, text: "AI analyzes image" },
              { icon: Volume2, text: "Audio description plays aloud" },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <p className="text-lg font-medium">{step.text}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            Designed for Real-World{" "}
            <span className="text-primary">Independence</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: "2 seconds", text: "to convert image → speech" },
              { stat: "100%", text: "browser-based, no downloads" },
              { stat: "Anyone", text: "with a smartphone can access" },
            ].map((item, i) => (
              <Card key={i} className="bg-card border-border text-center">
                <CardContent className="p-8 space-y-2">
                  <p className="text-5xl font-bold text-primary">{item.stat}</p>
                  <p className="text-lg text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who It Helps */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            Who It <span className="text-primary">Helps</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: Eye, text: "Blind users" },
              { icon: Glasses, text: "Low-vision users" },
              { icon: Users, text: "Elderly users" },
              { icon: Book, text: "People with reading disabilities" },
              { icon: Smartphone, text: "Anyone needing hands-free access" },
            ].map((item, i) => (
              <Card key={i} className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                  <item.icon className="w-12 h-12 text-primary" />
                  <p className="font-medium">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            Built with <span className="text-primary">Accessibility First</span>
          </h2>
          
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
            {[
              "High contrast",
              "Large buttons",
              "Keyboard shortcuts",
              "Voice output",
              "Screen reader friendly",
              "Works on low-end phones",
            ].map((feature, i) => (
              <div key={i} className="flex items-center space-x-3 bg-card p-4 rounded-lg border border-border">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <p className="text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            What's <span className="text-primary">Coming Next</span>
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              "Real-time scene streaming",
              "Smart navigation assistance",
              "Context-aware alerts",
              "Offline mode",
              "Face recognition (with consent)",
            ].map((feature, i) => (
              <Card key={i} className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6 flex items-center space-x-4">
                  <Calendar className="w-8 h-8 text-primary flex-shrink-0" />
                  <p className="text-lg">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Help Us Build the Future of{" "}
            <span className="text-primary">AI Accessibility</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands making the digital world more accessible for everyone.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_hsl(180,70%,50%,0.3)]">
              Try SeeSense
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/10 hover:border-primary">
              Join as Early Tester
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-8 text-sm text-muted-foreground">
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
              <a href="#privacy" className="hover:text-primary transition-colors">Privacy</a>
            </div>
            <p className="text-sm text-muted-foreground">
              Built for Horizon Hacks — AI for Accessibility and Equity
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
