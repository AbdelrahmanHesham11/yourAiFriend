import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import ContactUs from "@/components/ContactUs";
const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen text-foreground overflow-hidden">
      <section className="relative z-10 py-24 flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            {/* CORNER DECORATION */}
            <div className="absolute -top-10 left-0 w-40 h-40 border-l-2 border-t-2" />

            {/* LEFT SIDE CONTENT */}
            <div className="lg:col-span-7 space-y-8 relative">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <div>
                  <span className="text-foreground">Talk</span>
                </div>
                <div>
                  <span className="text-primary">With Your AI</span>
                </div>
                <div className="pt-2">
                  <span className="text-foreground">Friend</span>
                </div>
                <div className="pt-2">
                  <span className="text-foreground">Get Advice</span>
                  <span className="text-primary"> & Support</span>
                </div>
              </h1>

              {/* SEPARATOR LINE */}
              <div className="h-px w-full bg-gradient-to-r from-primary via-secondary to-primary opacity-50"></div>

              <p className="text-xl text-muted-foreground w-2/3">
                Share your situation, mood, or thoughts, and receive thoughtful, supportive advice
                from your AI friend—personalized just for you.
              </p>

              {/* STATS */}
              <div className="flex items-center gap-10 py-6 font-mono">
                <div className="flex flex-col">
                  <div className="text-2xl text-primary">100+</div>
                  <div className="text-xs uppercase tracking-wider">CONVERSATIONS</div>
                </div>
                <div className="h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent"></div>
                <div className="flex flex-col">
                  <div className="text-2xl text-primary">1min</div>
                  <div className="text-xs uppercase tracking-wider">AVERAGE RESPONSE</div>
                </div>
                <div className="h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent"></div>
                <div className="flex flex-col">
                  <div className="text-2xl text-primary">100%</div>
                  <div className="text-xs uppercase tracking-wider">PERSONALIZED</div>
                </div>
              </div>

              {/* BUTTON */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button
                  size="lg"
                  asChild
                  className="overflow-hidden bg-primary text-primary-foreground px-8 py-6 text-lg font-medium"
                >
                  <Link href={"/generate-feedback"} className="flex items-center font-mono">
                    Start Chatting
                    <ArrowRightIcon className="ml-2 size-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* RIGHT SIDE CONTENT */}
            <div className="lg:col-span-5 relative">
              {/* CORNER PIECES */}
              <div className="absolute -inset-4 pointer-events-none">
                <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-border" />
                <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-border" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-border" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-border" />
              </div>

              {/* IMAGE CONTAINER */}
              <div >
                <div className="relative overflow-hidden rounded-lg bg-card">
                  <img
                    src="/AIfriend.png"
                    alt="AI Friend"
                    className="size-full object-cover object-center"
                  />

                  {/* WARM GLOW EFFECT */}
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,transparent_calc(50%-1px),var(--warm-glow-strong)_50%,transparent_calc(50%+1px),transparent_100%)] bg-[length:100%_8px] animate-warm-pulse pointer-events-none" />

                  {/* DECORATIONS ON TOP THE IMAGE */}
                  <div >
                    <div  />

                    {/* Targeting lines */}
                    <div />
                    <div  />
                    <div />
                    <div/>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactUs />
    </div>
  );
};

export default HomePage;