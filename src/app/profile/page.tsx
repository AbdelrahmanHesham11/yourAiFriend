"use client";

import { UserProfile, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { MessageSquare, Heart, Clock, TrendingUp } from "lucide-react";

const ProfilePage = () => {
  const { user } = useUser();

  return (
    <div className="flex flex-col min-h-screen text-foreground overflow-hidden">
      <section className="relative z-10 py-24 flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
            {/* CORNER DECORATION */}
            <div className="absolute -top-10 left-0 w-40 h-40 border-l-2 border-t-2 border-border" />

            {/* LEFT SIDE - USER INFO */}
            <div className="lg:col-span-5 space-y-8 relative">
              <div className="relative">
                {/* CORNER PIECES */}
                <div className="absolute -inset-4 pointer-events-none">
                  <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-border" />
                  <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-border" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-border" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-border" />
                </div>

                {/* PROFILE CARD */}
                <div className="relative overflow-hidden rounded-lg bg-card p-8 border border-border">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative">
                      <img
                        src={user?.imageUrl}
                        alt={user?.fullName || "User"}
                        className="w-32 h-32 rounded-full object-cover border-4 border-primary"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent" />
                    </div>

                    <div>
                      <h2 className="text-3xl font-bold text-foreground">
                        {user?.fullName || "User"}
                      </h2>
                      <p className="text-muted-foreground font-mono text-sm">
                        @{user?.username || user?.firstName?.toLowerCase()}
                      </p>
                    </div>

                    <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

                    <p className="text-muted-foreground">
                      Member since{" "}
                      {user?.createdAt
                        ? new Date(user.createdAt).toLocaleDateString("en-US", {
                            month: "long",
                            year: "numeric",
                          })
                        : "Recently"}
                    </p>
                  </div>

                  {/* WARM GLOW EFFECT */}
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,transparent_calc(50%-1px),var(--warm-glow-strong)_50%,transparent_calc(50%+1px),transparent_100%)] bg-[length:100%_8px] animate-warm-pulse pointer-events-none opacity-30" />
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - CLERK PROFILE */}
            <div className="lg:col-span-7 space-y-8 relative">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
                  <span className="text-foreground">Your</span>
                  <span className="text-primary"> Profile</span>
                </h1>

                <div className="h-px w-full bg-gradient-to-r from-primary via-secondary to-transparent opacity-50 mb-8" />

                <p className="text-xl text-muted-foreground mb-8">
                  Manage your account settings and preferences
                </p>
              </div>

              {/* CLERK USER PROFILE COMPONENT */}
              <div className="relative">
                <div className="absolute -top-6 right-0 w-32 h-32 border-r-2 border-t-2 border-border" />

                <UserProfile
                  appearance={{
                    elements: {
                      rootBox: "w-full",
                      card: "bg-card border border-border shadow-none",
                      navbar: "bg-card",
                      navbarButton: "text-foreground hover:bg-primary/10",
                      navbarButtonActive: "bg-primary text-primary-foreground",
                      headerTitle: "text-foreground",
                      headerSubtitle: "text-muted-foreground",
                      formButtonPrimary: "bg-primary hover:bg-primary/90",
                      formFieldInput: "bg-background border-border",
                      formFieldLabel: "text-foreground",
                      profileSectionTitle: "text-foreground",
                      profileSectionContent: "text-muted-foreground",
                      badge: "bg-primary/10 text-primary",
                    },
                  }}
                />
              </div>

              {/* BOTTOM DECORATION */}
              <div className="absolute -bottom-6 left-0 w-32 h-32 border-l-2 border-b-2 border-border" />
            </div>
          </div>

          {/* ACTIVITY SECTION */}
          <div className="mt-16 relative">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 mb-8" />

            <h2 className="text-3xl font-bold mb-8">
              <span className="text-foreground">Recent</span>{" "}
              <span className="text-primary">Activity</span>{" "}
              <span className="text-muted-foreground">Coming soon!</span>
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
