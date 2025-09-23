import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, SendIcon, MessageCircleIcon } from "lucide-react";
import Link from "next/link";

const ContactUs = () => {
  return (
    <div className="flex flex-col min-h-screen text-foreground overflow-hidden">
      <section className="relative z-10 py-24 flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            {/* CORNER DECORATION */}
            <div className="absolute -top-10 left-0 w-40 h-40 border-l-2 border-t-2 border-primary/30" />

            {/* LEFT SIDE CONTENT */}
            <div className="lg:col-span-7 space-y-8 relative">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <div>
                  <span className="text-foreground">Get In</span>
                </div>
                <div>
                  <span className="text-primary">Touch</span>
                </div>
                <div className="pt-2">
                  <span className="text-foreground">With me!</span>
                </div>
                <div className="pt-2">
                  <span className="text-primary">I would Love</span>
                  <span className="text-foreground"> To Hear</span>
                </div>
                <div className="pt-1">
                  <span className="text-foreground">From You!</span>

                </div>
              </h1>

              {/* SEPARATOR LINE */}
              <div className="h-px w-full bg-gradient-to-r from-primary via-secondary to-primary opacity-50"></div>

              <p className="text-xl text-muted-foreground w-2/3">
                Have questions, feedback, or just want to say hello? I am  here to listen and help make your AI friend experience even better.
              </p>

              {/* CONTACT INFO */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-card warm-shadow">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <MailIcon className="size-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">Email me for quicker response!</p>
                    <Link 
                      href="mailto:abdelrahman.heshamfathala@gmail.com"
                      className="text-lg font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      abdelrahman.heshamfathala@gmail.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-card warm-shadow">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10">
                    <MessageCircleIcon className="size-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">Response Time</p>
                    <p className="text-lg font-medium text-foreground">Usually within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* STATS */}
              <div className="flex items-center gap-10 py-6 font-mono">
                <div className="flex flex-col">
                  <div className="text-2xl text-primary">24hrs</div>
                  <div className="text-xs uppercase tracking-wider">RESPONSE TIME</div>
                </div>
                <div className="h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent"></div>
                <div className="flex flex-col">
                  <div className="text-2xl text-primary">100%</div>
                  <div className="text-xs uppercase tracking-wider">PERSONAL REPLIES</div>
                </div>
                <div className="h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent"></div>
                <div className="flex flex-col">
                  <div className="text-2xl text-primary"></div>

                </div>
              </div>
            </div>

            {/* RIGHT SIDE CONTENT - CONTACT FORM */}
            <div className="lg:col-span-5 relative">
              {/* CORNER PIECES */}
              <div className="absolute -inset-4 pointer-events-none">
                <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-border" />
                <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-border" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-border" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-border" />
              </div>

              {/* CONTACT FORM */}
              <div className="relative max-w-lg mx-auto">
                <div className="relative overflow-hidden rounded-lg bg-card warm-shadow p-6 space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Send Me a message</h3>
                    <p className="text-muted-foreground">I will get back to you soon!</p>
                  </div>

                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        className="w-full bg-background/50 border-primary/20 focus:border-primary warm-border"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="w-full bg-background/50 border-primary/20 focus:border-primary warm-border"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="What's this about?"
                        className="w-full bg-background/50 border-primary/20 focus:border-primary warm-border"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        rows={4}
                        placeholder="Tell me what's on your mind..."
                        className="w-full bg-background/50 border-primary/20 focus:border-primary warm-border resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary text-primary-foreground px-8 py-6 text-lg font-medium animate-warm-glow"
                    >
                      <SendIcon className="mr-2 size-5" />
                      Send Message
                    </Button>
                  </form>

                  {/* WARM GLOW EFFECT */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none rounded-lg" />
                  
                  {/* DECORATIVE ELEMENTS */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-primary/50 rounded-full animate-warm-pulse" />
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-secondary/50 rounded-full animate-warm-pulse" style={{animationDelay: '1s'}} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;