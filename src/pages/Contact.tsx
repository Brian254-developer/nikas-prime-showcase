import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { createContact } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await createContact({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: `Subject: ${formData.subject}\n\n${formData.message}`,
      });
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 animate-slide-up">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Ready to find your dream property? Get in touch with our expert team. 
            We're here to make your luxury real estate journey seamless and successful.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-8">
                Get in Touch
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you're looking to buy, sell, or invest in luxury real estate, 
                our team of experts is ready to assist you. Contact us today to schedule 
                a consultation or to learn more about our exclusive properties.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="luxury-gradient p-6 rounded-xl card-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Visit Our Office</h3>
                    <p className="text-muted-foreground">
                      Westland Arcade<br />
                      Nairobi, Westlands<br />
                      Kenya
                    </p>
                  </div>
                </div>
              </div>

              <div className="luxury-gradient p-6 rounded-xl card-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
                    <p className="text-muted-foreground">
                      Main: 0710132320<br />
                      Available during business hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="luxury-gradient p-6 rounded-xl card-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                    <p className="text-muted-foreground">
                      General: nikasrealty@gmail.com<br />
                      Sales: nikasrealty@gmail.com<br />
                      Support: nikasrealty@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="luxury-gradient p-6 rounded-xl card-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 7:00 PM<br />
                      Saturday: 10:00 AM - 6:00 PM<br />
                      Sunday: 12:00 PM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="luxury-gradient p-8 rounded-xl card-shadow">
              <h2 className="font-display text-3xl font-bold text-foreground mb-8">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Your full name"
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      required
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="07xxxxxxxx"
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Select value={formData.subject} onValueChange={(value) => handleChange("subject", value)}>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="buy">Buying Property</SelectItem>
                        <SelectItem value="sell">Selling Property</SelectItem>
                        <SelectItem value="invest">Investment Opportunities</SelectItem>
                        <SelectItem value="valuation">Property Valuation</SelectItem>
                        <SelectItem value="consultation">General Consultation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Tell us about your real estate needs, preferred locations, budget range, or any specific requirements..."
                    rows={6}
                    required
                    className="bg-background resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-4">
                  <p className="text-sm text-muted-foreground">
                    * Required fields
                  </p>
                  <Button type="submit" variant="luxury" size="lg" className="min-w-[150px]" disabled={isSubmitting}>
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20 animate-slide-up">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Find Our Office
            </h2>
            <p className="text-muted-foreground">
              Visit us at our luxury showroom in the heart of the premium district
            </p>
          </div>
          
          <div className="luxury-gradient p-8 rounded-xl card-shadow">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Interactive Map
                </h3>
                <p className="text-muted-foreground">
                  Google Maps integration would be displayed here<br />
                  Westland Arcade, Nairobi, Westlands, Kenya
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 animate-slide-up">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Quick answers to common questions about our services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How do I schedule a property viewing?",
                answer: "You can schedule a viewing by calling us, filling out our contact form, or using the 'Schedule Viewing' button on any property page."
              },
              {
                question: "What areas do you specialize in?",
                answer: "We specialize in luxury properties across Nairobi, Karen, Westlands, Kilimani, and other premium locations in Kenya."
              },
              {
                question: "Do you offer investment consultation?",
                answer: "Yes, our investment specialists provide comprehensive consultation services for both domestic and international real estate investments."
              },
              {
                question: "What is your commission structure?",
                answer: "Our commission structure is competitive and varies based on the property type and value. Contact us for detailed information about our fees."
              }
            ].map((faq, index) => (
              <div key={index} className="luxury-gradient p-6 rounded-xl card-shadow">
                <h3 className="font-semibold text-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
