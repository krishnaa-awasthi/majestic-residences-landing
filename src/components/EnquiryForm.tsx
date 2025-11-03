import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const EnquiryForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    unitType: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Required fields missing",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Enquiry Submitted!",
      description: "Thank you for your interest. Our team will contact you soon.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      unitType: "",
    });
  };

  return (
    <section id="enquiry" className="py-20 bg-gradient-to-br from-accent/5 via-gold/5 to-accent/5 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--gold)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Schedule a site visit or request more information about Majestic Residences
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-card p-8 md:p-12 rounded-2xl shadow-luxury"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <Label htmlFor="name" className="text-charcoal font-medium mb-2 block">
                Name *
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="rounded-lg"
                required
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-charcoal font-medium mb-2 block">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="rounded-lg"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <Label htmlFor="phone" className="text-charcoal font-medium mb-2 block">
                Phone *
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="rounded-lg"
                required
              />
            </div>
            <div>
              <Label htmlFor="unitType" className="text-charcoal font-medium mb-2 block">
                Preferred Unit Type
              </Label>
              <Select
                value={formData.unitType}
                onValueChange={(value) =>
                  setFormData({ ...formData, unitType: value })
                }
              >
                <SelectTrigger className="rounded-lg">
                  <SelectValue placeholder="Select unit type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3bhk">3 BHK</SelectItem>
                  <SelectItem value="3bhk-study">3 BHK + Study</SelectItem>
                  <SelectItem value="4bhk">4 BHK</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mb-6">
            <Label htmlFor="message" className="text-charcoal font-medium mb-2 block">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Tell us about your requirements..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="rounded-lg min-h-[120px]"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-gold text-white font-semibold rounded-full py-6 hover:scale-105 transition-transform shadow-luxury"
            size="lg"
          >
            <Send className="mr-2 h-5 w-5" />
            Submit Enquiry
          </Button>

          <p className="text-xs text-muted-foreground text-center mt-4">
            By submitting, you agree to be contacted regarding this property.
          </p>
        </form>
      </div>
    </section>
  );
};

export default EnquiryForm;
