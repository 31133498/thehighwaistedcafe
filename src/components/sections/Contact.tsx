"use client";

import { useFormState, useFormStatus } from "react-dom";
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, MessageCircle, Phone, MapPin, Loader2 } from 'lucide-react';
import { submitContactForm } from "@/app/actions";
import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";

const initialState = {
  message: "",
  errors: {},
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Send Message
    </Button>
  );
}

export default function Contact() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      toast({
        title: "Message Sent!",
        description: state.message,
      });
      formRef.current?.reset();
    } else if (state.message && !state.success && Object.keys(state.errors).length > 0) {
      // Find the first error and show it.
      const firstErrorKey = Object.keys(state.errors)[0] as keyof typeof state.errors;
      const firstErrorMessage = state.errors[firstErrorKey]?.[0];
      
      toast({
        variant: "destructive",
        title: "Oops! Please check the form.",
        description: firstErrorMessage || "Something went wrong.",
      });
    }
  }, [state, toast]);

  return (
    <section id="contact" className="py-20 md:py-32 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">Get in Touch</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you. Drop us a line or visit us in person.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="bg-card/80 backdrop-blur-sm border-secondary/50">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Contact Us</CardTitle>
              <CardDescription>Fill out the form to send us a message.</CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={formRef} action={formAction} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your Name" />
                   {state?.errors?.name && <p className="text-sm text-destructive pt-1">{state.errors.name[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" />
                   {state?.errors?.email && <p className="text-sm text-destructive pt-1">{state.errors.email[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Your message..." className="min-h-[120px]" />
                  {state?.errors?.message && <p className="text-sm text-destructive pt-1">{state.errors.message[0]}</p>}
                </div>
                <SubmitButton />
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-8 flex flex-col justify-center">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-full">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Our Address</h3>
                <p className="text-muted-foreground">123 Coffee Lane, Lagos, Nigeria</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-full">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email Us</h3>
                <a href="mailto:hello@highwaisted.cafe" className="text-muted-foreground hover:text-primary">hello@highwaisted.cafe</a>
              </div>
            </div>
             <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-full">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Call Us</h3>
                <a href="tel:+2348012345678" className="text-muted-foreground hover:text-primary">+234 801 234 5678</a>
              </div>
            </div>
            <Button asChild className="w-full bg-green-500 hover:bg-green-600 text-white">
              <Link href="https://wa.me/2348012345678" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat with us on WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
