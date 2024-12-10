import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  lastName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(10, "Numéro de téléphone invalide"),
  subject: z.string().min(5, "L'objet doit contenir au moins 5 caractères"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

const ContactForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("Form submitted:", values);
    toast({
      title: "Message envoyé",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    form.reset();
  };

  return (
    <div className="relative overflow-hidden p-8 rounded-2xl bg-gradient-to-br from-white to-[#F8F7FF] shadow-xl border border-gold shadow-gold/10 animate-fadeIn backdrop-blur-sm">
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-gold/30 to-navy/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-tr from-gold/40 to-navy/30 rounded-full blur-3xl" />
      
      {/* Content */}
      <div className="relative space-y-8">
        <div className="space-y-4">
          <h2 className="text-5xl font-aptos font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold via-gold to-navy tracking-tight">
            Formulaire de contact
          </h2>
          <div className="flex items-center space-x-3">
            <div className="w-20 h-1 bg-gradient-to-r from-gold to-navy rounded-full" />
            <div className="w-3 h-1 bg-gold rounded-full" />
            <div className="w-3 h-1 bg-gold/50 rounded-full" />
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-navy font-medium">Nom *</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="bg-white/50 border-gold focus:border-gold focus:ring-gold/30 transition-colors"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-navy font-medium">Prénom *</FormLabel>
                    <FormControl>
                      <Input 
                        {...field}
                        className="bg-white/50 border-gold focus:border-gold focus:ring-gold/30 transition-colors"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-navy font-medium">Email *</FormLabel>
                    <FormControl>
                      <Input 
                        type="email" 
                        {...field}
                        className="bg-white/50 border-gold focus:border-gold focus:ring-gold/30 transition-colors"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-navy font-medium">Téléphone *</FormLabel>
                    <FormControl>
                      <Input 
                        type="tel" 
                        {...field}
                        className="bg-white/50 border-gold focus:border-gold focus:ring-gold/30 transition-colors"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-navy font-medium">Objet *</FormLabel>
                  <FormControl>
                    <Input 
                      {...field}
                      className="bg-white/50 border-gold focus:border-gold focus:ring-gold/30 transition-colors"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-navy font-medium">Message *</FormLabel>
                  <FormControl>
                    <Textarea 
                      rows={5} 
                      {...field}
                      className="bg-white/50 border-gold focus:border-gold focus:ring-gold/30 transition-colors resize-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-gold to-gold/80 hover:from-gold/90 hover:to-gold/70 transition-all text-white font-medium py-6 shadow-lg shadow-gold/20"
            >
              Envoyer
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;