import { BookOpen, Video, FileText, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState('');

  const features = [
    {
      icon: FileText,
      title: 'Smart Notes',
      description: 'Paste your study notes and let our AI transform them into structured content',
      color: 'pastel-pink'
    },
    {
      icon: Video,
      title: 'Animated Videos',
      description: 'Watch your notes come alive with engaging animated explanations',
      color: 'pastel-lavender'
    },
    {
      icon: BookOpen,
      title: 'Beautiful Slides',
      description: 'Generate clean, organized slides perfect for quick revision',
      color: 'pastel-mint'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-pastel flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-pastel bg-clip-text text-transparent">
                Study Boost
              </h1>
            </div>
            <nav className="flex items-center gap-4">
              <Button variant="ghost" className="text-foreground/80 hover:text-foreground">
                Features
              </Button>
              <Button variant="ghost" className="text-foreground/80 hover:text-foreground">
                Library
              </Button>
              <Button className="bg-gradient-pastel text-primary-foreground hover:opacity-90">
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-pastel-pink/20 via-pastel-lavender/20 to-pastel-mint/20">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-pastel bg-clip-text text-transparent">
                Transform Your Notes Into
                <br />
                Engaging Study Materials
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Convert your study notes into beautiful slides and animated videos. 
                Understand subjects clearly from basics to ace your tests.
              </p>
            </div>

            {/* Notes Input Card */}
            <Card className="max-w-3xl mx-auto shadow-lg border-2 border-pastel-lavender/30">
              <CardHeader>
                <CardTitle className="text-2xl">Start with Your Notes</CardTitle>
                <CardDescription>
                  Paste or type your study notes below and watch the magic happen
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Example: Photosynthesis is the process by which plants convert light energy into chemical energy..."
                  className="min-h-[200px] resize-none border-2 border-pastel-mint/30 focus:border-pastel-lavender"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
                <div className="flex gap-3">
                  <Button 
                    className="flex-1 bg-gradient-to-r from-pastel-pink to-pastel-lavender text-primary-foreground hover:opacity-90"
                    disabled={!notes.trim()}
                  >
                    <Video className="w-4 h-4 mr-2" />
                    Generate Video
                  </Button>
                  <Button 
                    className="flex-1 bg-gradient-to-r from-pastel-lavender to-pastel-mint text-primary-foreground hover:opacity-90"
                    disabled={!notes.trim()}
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Create Slides
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Why Students Love Study Boost</h3>
              <p className="text-muted-foreground">
                Everything you need to study smarter, not harder
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card 
                  key={index}
                  className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{
                    borderColor: `oklch(var(--${feature.color}) / 0.3)`
                  }}
                >
                  <CardHeader>
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{
                        background: `oklch(var(--${feature.color}) / 0.2)`
                      }}
                    >
                      <feature.icon 
                        className="w-6 h-6"
                        style={{
                          color: `oklch(var(--${feature.color}))`
                        }}
                      />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-pastel-lavender/20 via-pastel-mint/20 to-pastel-peach/20">
          <div className="container mx-auto max-w-4xl text-center">
            <h3 className="text-4xl font-bold mb-6 bg-gradient-pastel bg-clip-text text-transparent">
              Ready to Boost Your Grades?
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of students who are studying smarter with Study Boost
            </p>
            <Button 
              size="lg"
              className="bg-gradient-pastel text-primary-foreground hover:opacity-90 text-lg px-8 py-6"
            >
              Start Learning Now
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-pastel flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold">Study Boost</span>
            </div>
            <div className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} Study Boost. Built with love using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                  typeof window !== 'undefined' ? window.location.hostname : 'study-boost'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pastel-lavender hover:underline font-medium"
              >
                caffeine.ai
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
