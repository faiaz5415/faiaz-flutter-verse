import { ArrowLeft, ExternalLink, Smartphone, Apple } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const VoyageAI = () => {
  const techStack = [
    "Flutter", "Firebase", "Google Sign-In", "Apple Sign-In", "Provider",
    "GetStorage", "Dio", "RxDart", "SSE", "Google Maps Flutter", "PayPal",
    "FL Chart", "Syncfusion PDF Viewer", "File Picker", "Image Picker",
    "Lottie", "Shimmer", "GetIt", "App Links", "Flutter ScreenUtil",
  ];

  const keyFeatures = [
    { title: "Feature-First Directory Structure", desc: "Organized by feature modules (auth, home, chat, insight, settings, etc.), keeping each domain self-contained and scalable." },
    { title: "Firebase Backend & Authentication", desc: "Secure user session management, real-time data syncing, multi-channel login including Google, Apple, and OTP-based email verification." },
    { title: "Provider State Management", desc: "Manages reactive UI states across the entire app for smooth data flow." },
    { title: "GetStorage Local Persistence", desc: "Lightweight local storage for user preferences, session tokens, and cached settings." },
    { title: "AI Chat — Real-Time Proactive Assistant", desc: "Context-aware AI assistant for itinerary recommendations, travel tips, and support via conversational interface." },
    { title: "SSE Response Handling", desc: "Custom-built SSE client using Dio that captures streamed AI tokens, parses data headers, handles malformed packets, and updates chat UI in real time." },
    { title: "Google Maps — Interactive Trip Routing", desc: "Multi-stop route paths with custom canvas-painted markers and decoded polylines for accurate map visualization." },
    { title: "PayPal In-App Payment", desc: "Secure checkout pipeline with WebView payment flow, redirect tracking, and transaction verification before unlocking premium AI credits." },
    { title: "Google Authentication", desc: "One-tap login with Firebase session syncing." },
  ];

  const challenges = [
    { title: "SSE Stream Parsing", desc: "Custom streaming engine using Dio's raw response stream to decode live AI tokens — handling malformed packets and updating UI state chunk by chunk without freezing." },
    { title: "Custom Canvas Map Markers", desc: "Dynamic numbered markers rendered on Google Maps at runtime using Flutter's Canvas and PictureRecorder APIs." },
    { title: "Polyline Decoding & Camera Fitting", desc: "Custom decodePolyline algorithm with a _fitBounds function that auto-zooms the camera for any trip route." },
    { title: "Cookie-Based Session Management", desc: "Persistent cookie jar with custom Dio interceptors for authorization headers and session syncing across app restarts." },
    { title: "PayPal Checkout Bridge", desc: "Web-based PayPal checkout connected back to native app using url_launcher and deep link interception via app_links." },
  ];

  const contributions = [
    "95% of all static UI and screen design implementation",
    "100% of API integration across all features",
    "Built and integrated the AI chat module with custom SSE stream parsing",
    "Implemented Google Authentication with Firebase session management",
    "Integrated Google Maps with custom marker painting and polyline route rendering",
    "Integrated PayPal checkout pipeline with credit entitlement syncing",
    "Wired dynamic weather forecasts and smart packing list streams",
    "Integrated document upload flow and embedded PDF viewer",
    "Set up interceptor-based cookie session and authorization management",
    "Bug fixing and performance optimization throughout the project",
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-5xl px-4 py-12">
        {/* Back link */}
        <Link
          to="/#portfolio"
          className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          Back to Portfolio
        </Link>

        {/* Top status section */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <Card className="p-5 card-elevation border-none bg-card flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center text-primary">
              <Smartphone size={22} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Play Store</p>
              <p className="font-semibold text-foreground">Will Deploy Soon</p>
            </div>
          </Card>
          <Card className="p-5 card-elevation border-none bg-card flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center text-primary">
              <Apple size={22} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Apple Store</p>
              <p className="font-semibold text-foreground">Will Deploy Soon</p>
            </div>
          </Card>
        </div>

        {/* Title */}
        <div className="mb-10 text-center animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">Voyage AI</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A trip-based application fully powered by AI — where AI handles itinerary
            generation, travel support, and proactive real-time chat.
          </p>
        </div>

        {/* Description */}
        <Card className="p-8 card-elevation border-none bg-card mb-8">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Project Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
            Voyage AI is a premium, cross-platform Flutter application that transforms travel
            planning through generative AI. Users can design single or multi-city trip
            itineraries, visualize interactive routes on Google Maps, track budgets, manage
            travel documents, and get real-time AI assistance — all from one unified app. By
            combining SSE-based streaming AI chat, dynamic weather and packing insights, and a
            secure PayPal payment system, Voyage AI delivers a seamless, intelligent travel
            experience that goes far beyond traditional trip planners.
          </p>
        </Card>

        {/* Tech Stack */}
        <Card className="p-8 card-elevation border-none bg-card mb-8">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-primary-light text-primary text-sm rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </Card>

        {/* Key Features */}
        <Card className="p-8 card-elevation border-none bg-card mb-8">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {keyFeatures.map((f) => (
              <div key={f.title} className="flex gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Engineering Challenges */}
        <Card className="p-8 card-elevation border-none bg-card mb-8">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Key Engineering Challenges</h2>
          <div className="space-y-5">
            {challenges.map((c) => (
              <div key={c.title} className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-foreground mb-1">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* My Contribution */}
        <Card className="p-8 card-elevation border-none bg-card mb-8">
          <h2 className="text-2xl font-bold mb-6 text-foreground">My Contribution</h2>
          <ul className="space-y-3">
            {contributions.map((c, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-muted-foreground">{c}</p>
              </li>
            ))}
          </ul>
        </Card>

        {/* Mockup */}
        <Card className="p-12 card-elevation border-none bg-card mb-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-foreground">App Mockup</h2>
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center text-3xl">
              📱
            </div>
            <Badge className="bg-primary-light text-primary hover:bg-primary-light">Coming Soon</Badge>
          </div>
        </Card>

        {/* Video */}
        <Card className="p-12 card-elevation border-none bg-card mb-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Project Walkthrough Video</h2>
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center text-3xl">
              🎬
            </div>
            <Badge className="bg-primary-light text-primary hover:bg-primary-light">Coming Soon</Badge>
          </div>
        </Card>

        {/* Proof link */}
        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <a
              href="https://drive.google.com/drive/folders/1eCkLLgfqI6KpT4X2Hg-VFkDnojKUk2x8?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Prove that I contributed on this project
              <ExternalLink size={16} />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VoyageAI;
