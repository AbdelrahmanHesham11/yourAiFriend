"use client";

import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { MessageCircleIcon, HomeIcon, UserIcon, ZapIcon, MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";

const Navbar = () => {
  const { isSignedIn } = useUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border py-3">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
            <div className="p-1 bg-primary/10 rounded">
              <ZapIcon className="w-4 h-4 text-primary" />
            </div>
            <span className="text-xl font-bold font-mono">
              MyAi<span className="text-primary">Friend</span>
            </span>
          </Link>

          {/* HAMBURGER MENU BUTTON - Mobile Only */}
          <button
            className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <XIcon className="w-6 h-6 text-primary" />
            ) : (
              <MenuIcon className="w-6 h-6 text-primary" />
            )}
          </button>

          {/* DESKTOP NAVIGATION - Hidden on Mobile */}
          <nav className="hidden md:flex items-center gap-5">
            {isSignedIn ? (
              <>
                <Link
                  href="/"
                  className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
                >
                  <HomeIcon size={16} />
                  <span>Home</span>
                </Link>

                <Link
                  href="/generate-feedback"
                  className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
                >
                  <MessageCircleIcon size={16} />
                  <span>Generate</span>
                </Link>

                <Link
                  href="/profile"
                  className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
                >
                  <UserIcon size={16} />
                  <span>Profile</span>
                </Link>
                <Button
                  asChild
                  variant="outline"
                  className="ml-2 border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                >
                  <Link href="/generate-feedback">Get Started</Link>
                </Button>
                <UserButton />
              </>
            ) : (
              <>
                <SignInButton>
                  <Button
                    variant={"outline"}
                    className="border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                  >
                    Sign In
                  </Button>
                </SignInButton>

                <SignUpButton>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Sign Up
                  </Button>
                </SignUpButton>
              </>
            )}
          </nav>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden fixed top-[57px] left-0 right-0 bg-card border-b border-border shadow-lg transition-all duration-300 ease-in-out z-40 ${
          mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <nav className="flex flex-col p-4 gap-2">
          {isSignedIn ? (
            <>
              <Link
                href="/"
                className="flex items-center gap-3 px-4 py-3 text-base hover:bg-primary/10 rounded-lg transition-colors"
                onClick={closeMobileMenu}
              >
                <HomeIcon size={20} />
                <span>Home</span>
              </Link>

              <Link
                href="/generate-feedback"
                className="flex items-center gap-3 px-4 py-3 text-base hover:bg-primary/10 rounded-lg transition-colors"
                onClick={closeMobileMenu}
              >
                <MessageCircleIcon size={20} />
                <span>Generate</span>
              </Link>

              <Link
                href="/profile"
                className="flex items-center gap-3 px-4 py-3 text-base hover:bg-primary/10 rounded-lg transition-colors"
                onClick={closeMobileMenu}
              >
                <UserIcon size={20} />
                <span>Profile</span>
              </Link>

              <div className="flex items-center justify-between px-4 py-3 border-t border-border mt-2 pt-4">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-primary/50 text-primary hover:bg-primary/10"
                  onClick={closeMobileMenu}
                >
                  <Link href="/generate-feedback">Get Started</Link>
                </Button>
                <UserButton />
              </div>
            </>
          ) : (
            <div className="flex flex-col gap-3 px-4 py-4">
              <SignInButton>
                <Button
                  variant="outline"
                  className="w-full border-primary/50 text-primary hover:bg-primary/10"
                  onClick={closeMobileMenu}
                >
                  Sign In
                </Button>
              </SignInButton>

              <SignUpButton>
                <Button 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Button>
              </SignUpButton>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};
export default Navbar;