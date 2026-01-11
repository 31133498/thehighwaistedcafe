"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, MessageCircle, Phone, MapPin, Loader2 } from 'lucide-react';
import { submitContactForm } from "@/app/actions";
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

const contactInfo = [
    { icon: MapPin, title: 'Our Address', content: 'High Waisted Cafe 5494 Brown Road Suite 112 113B Hazelwood MO 63042' },
    { icon: Mail, title: 'Email Us', content: 'info@HighWaistedCafe.com', href: 'mailto:info@HighWaistedCafe.com' },
    { icon: Phone, title: 'Call Us', content: '+1 314-695-6156', href: 'tel:+13146956156' },
];

export default function Contact() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
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
    <section id="contact" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-semibold text-primary">Contact Us</p>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mt-2">Get in Touch</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions or want to place a custom order? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
             {contactInfo.map(item => (
                 <div key={item.title} className="flex items-start gap-4">
                    <div className="bg-accent/50 text-primary p-3 rounded-lg">
                        <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg text-foreground">{item.title}</h3>
                        {item.href ? (
                             <a href={item.href} className="text-muted-foreground hover:text-primary">{item.content}</a>
                        ) : (
                            <p className="text-muted-foreground">{item.content}</p>
                        )}
                    </div>
                </div>
             ))}
             <Button asChild className="w-full bg-green-500 hover:bg-green-600 text-white !mt-12">
              <Link href="https://wa.me/13146956156" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </Link>
            </Button>
          </div>
          <Card className="lg:col-span-3 bg-card border-none">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Send a Message</CardTitle>
              <CardDescription>Fill out the form and we'll get back to you shortly.</CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={formRef} action={formAction} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
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
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Your message..." className="min-h-[150px]" />
                  {state?.errors?.message && <p className="text-sm text-destructive pt-1">{state.errors.message[0]}</p>}
                </div>
                <SubmitButton />
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
