import { Award, Users, Target, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const stats = [
    { number: "500+", label: "Properties Sold", icon: Award },
    { number: "KES 250B+", label: "Total Sales Volume", icon: Target },
    { number: "15+", label: "Years Experience", icon: Users },
    { number: "98%", label: "Client Satisfaction", icon: Heart },
  ];

  const values = [
    {
      title: "Excellence",
      description: "We maintain the highest standards in every aspect of our service, from property selection to client relationships.",
      icon: Award,
    },
    {
      title: "Integrity",
      description: "Trust and transparency form the foundation of our business. We believe in honest, straightforward dealings.",
      icon: Heart,
    },
    {
      title: "Innovation",
      description: "We leverage cutting-edge technology and market insights to provide superior real estate solutions.",
      icon: Target,
    },
    {
      title: "Service",
      description: "Our clients' needs come first. We go above and beyond to exceed expectations and deliver exceptional results.",
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 animate-slide-up">
            About Nikas Realty
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            For over 15 years, Nikas Realty has been the premier destination for luxury real estate, 
            connecting discerning clients with extraordinary properties in the world's most prestigious locations.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2009 by Monicah Githinji, our company began with a simple yet ambitious vision: 
                  to redefine the luxury real estate experience in Kenya by combining unparalleled market expertise 
                  with personalized, white-glove service.
                </p>
                <p>
                  What started as a boutique firm has grown into a respected leader in the Kenyan luxury real estate 
                  market, with a portfolio spanning from Karen mansions to Westlands penthouses. 
                  Our success is built on a foundation of trust, integrity, and an unwavering commitment 
                  to our clients' dreams.
                </p>
                <p>
                  Today, Nikas Realty stands as a testament to the power of vision, dedication, and the 
                  belief that every client deserves nothing less than extraordinary service when making 
                  one of life's most important decisions.
                </p>
              </div>
            </div>
            <div className="animate-slide-up">
              <div className="luxury-gradient p-8 rounded-xl card-shadow">
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  To provide an unmatched luxury real estate experience that exceeds expectations, 
                  builds lasting relationships, and helps clients discover properties that perfectly 
                  align with their lifestyle and investment goals.
                </p>
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted and respected luxury real estate brand globally, 
                  known for our integrity, expertise, and commitment to client success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 luxury-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Our Track Record
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Numbers that speak to our commitment to excellence and client satisfaction
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2 font-display">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and define who we are as a company
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="luxury-gradient p-8 rounded-xl card-shadow animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 luxury-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to helping you find your perfect property
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Monicah Githinji",
                role: "Founder & CEO",
                bio: "With over 15 years in luxury real estate in Kenya, Monicah has built Nikas Realty into a premier brand.",
              },
              {
                name: "Sarah Mitchell",
                role: "Senior Agent",
                bio: "Specializing in high-end residential properties with 12 years of market expertise.",
              },
              {
                name: "David Chen",
                role: "Investment Specialist",
                bio: "Expert in commercial and investment properties with a track record of exceptional returns.",
              },
            ].map((member, index) => (
              <div 
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-32 h-32 bg-accent/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-16 h-16 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {member.name}
                </h3>
                <div className="text-accent font-medium mb-4">{member.role}</div>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-slide-up">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Experience the Nikas Realty difference. Let us help you discover your perfect property 
              and make your real estate dreams a reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="luxury" size="xl">
                Get Started Today
              </Button>
              <Button variant="outline-luxury" size="xl">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;