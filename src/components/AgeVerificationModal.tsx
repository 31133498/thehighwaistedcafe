"use client";

import React, { useState, useEffect } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { ShieldAlert } from 'lucide-react';

export default function AgeVerificationModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Check if user has already verified their age in this session or previously
    const isVerified = localStorage.getItem('age-verified');
    if (!isVerified) {
      setOpen(true);
    }
  }, []);

  const handleVerify = () => {
    localStorage.setItem('age-verified', 'true');
    setOpen(false);
  };

  const handleExit = () => {
    // Redirect underage users to a safe site
    window.location.href = "https://www.google.com";
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="max-w-md border-primary/20 bg-card/95 backdrop-blur-md">
        <AlertDialogHeader className="items-center text-center">
          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
            <ShieldAlert size={32} />
          </div>
          <AlertDialogTitle className="text-3xl font-headline font-bold text-foreground">
            Age Verification
          </AlertDialogTitle>
          <AlertDialogDescription className="text-base space-y-4">
            <span className="block font-semibold text-foreground text-lg">
              🔞 Strictly 21+ Only
            </span>
            <span className="block text-muted-foreground leading-relaxed">
              This website contains cannabis-infused products and content intended for adults. 
              You must be at least 21 years of age to enter.
            </span>
            <span className="block italic text-sm text-primary/80">
              By entering, you confirm that you are of legal age in your jurisdiction.
            </span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex-col sm:flex-row gap-3 mt-6">
          <AlertDialogCancel 
            onClick={handleExit}
            className="w-full sm:flex-1 border-muted-foreground/20 hover:bg-destructive hover:text-white transition-all"
          >
            I am under 21
          </AlertDialogCancel>
          <AlertDialogAction 
            onClick={handleVerify}
            className="w-full sm:flex-1 font-bold text-lg py-6"
          >
            I am 21+
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
