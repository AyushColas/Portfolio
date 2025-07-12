import { Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_pps1c1h",    // e.g., "service_xyz123"
        "template_ifelltl",   // e.g., "template_abc789"
        form.current,
        "yrQ80O5MgoowgQsMT"     // e.g., "JKlMnO_PqRsTuV"
      )
      .then(() => {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setIsSubmitting(false);
        form.current.reset();
      })
      .catch(() => {
        toast({
          title: "Something went wrong",
          description: "Please try again later.",
        });
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always excited to learn, collaborate, or take on new challenges.
          Feel free to reach out if you have opportunities, questions, or just
          want to connect!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6"> Contact Information </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="text-primary h-6 w-6" />
                </div>
                <div className="flex flex-col text-left">
                  <h4 className="font-medium text-sm leading-none text-left">Email</h4>
                  <a
                    href="mailto:ayushmishra2004op@gmail.com"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    ayushmishra2004op@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="text-primary h-6 w-6" />
                </div>
                <div className="flex flex-col text-left">
                  <h4 className="font-medium text-sm leading-none text-left">Phone</h4>
                  <a
                    href="tel:+919599852151"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 959-985-2151
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="text-primary h-6 w-6" />
                </div>
                <div className="flex flex-col text-left">
                  <h4 className="font-medium text-sm leading-none text-left">Location</h4>
                  <p className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Faridabad, Haryana (Delhi-NCR), India
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me </h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/ayushmi"
                  target="_blank"
                  aria-label="Linkedin"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://www.instagram.com/bhandara_detector_app/"
                  target="_blank"
                  aria-label="Instagram"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram />
                </a>
                <a
                  href="https://discord.com/users/lazyy5666"
                  target="_blank"
                  aria-label="Discord"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 128 128"
                    className="h-6 w-6 fill-current"
                  >
                    <path d="M107.63 20.07A105.15 105.15 0 0083.3 12a77.44 77.44 0 00-3.84 7.91 99.44 99.44 0 00-30.84 0A77.16 77.16 0 0045.74 12a105.15 105.15 0 00-24.33 8.07C6.76 50.34 1.61 79.87 3.71 109.2a105.84 105.84 0 0030.73 9.8 77.63 77.63 0 005.27-8.65 65.71 65.71 0 01-10.45-5.17c.88-.66 1.74-1.35 2.57-2.06a72.54 72.54 0 0060.34 0c.83.71 1.69 1.4 2.57 2.06a65.71 65.71 0 01-10.45 5.17 77.63 77.63 0 005.27 8.65 105.84 105.84 0 0030.73-9.8c2.1-29.33-3.05-58.86-21.69-89.13zM48.52 85.23c-5.92 0-10.74-5.44-10.74-12.12s4.77-12.12 10.74-12.12 10.76 5.44 10.74 12.12c.01 6.68-4.81 12.12-10.74 12.12zm31.04 0c-5.92 0-10.74-5.44-10.74-12.12s4.77-12.12 10.74-12.12 10.76 5.44 10.74 12.12c.01 6.68-4.81 12.12-10.74 12.12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Send a Message </h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  autoComplete="off"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary cursor-text"
                  placeholder="John.."
                />
              </div>

              <div>
                <label htmlFor="Email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="Email"
                  name="user_email"
                  required
                  autoComplete="off"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary cursor-text"
                  placeholder="john@email.com..."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  autoComplete="off"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary cursor-text resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn("fancy-button w-full flex items-center justify-center gap-2")}
              >
                {isSubmitting ? "Sending.." : "Send Message"}
                <Send aria-label="Send" size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
