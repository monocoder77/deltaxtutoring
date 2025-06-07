import React, { useEffect } from 'react';
import { Calculator, FlaskConical, Star, BookOpen, Users, ChevronDown, GraduationCap, Mail, Phone, MapPin, Menu, X, Calendar, DollarSign, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ContactInfo from '@/components/ContactInfo';
import InteractiveBackground from '@/components/InteractiveBackground';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useEffect(() => {
    // Smooth scroll behavior
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        if (isVisible) {
          element.classList.add('opacity-100');
          element.classList.remove('opacity-0');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <div className="min-h-screen relative">
      <InteractiveBackground />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calculator className="w-8 h-8 text-purple-500 animate-pulse-slow hover-scale" />
              <span className="text-xl font-bold text-white">DeltaXTutoring</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('content')} className="text-gray-300 hover:text-purple-500 transition-colors hover-scale flex items-center gap-2">
                <BookOpen className="w-4 h-4 animate-pulse-slow" />
                Subjects
              </button>
              <button onClick={() => scrollToSection('booking')} className="text-gray-300 hover:text-purple-500 transition-colors hover-scale flex items-center gap-2">
                <Calendar className="w-4 h-4 animate-pulse-slow" />
                Schedule
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-purple-500 transition-colors hover-scale flex items-center gap-2">
                <Mail className="w-4 h-4 animate-pulse-slow" />
                Contact
              </button>
              <Button onClick={() => scrollToSection('booking')} className="bg-purple-600 hover:bg-purple-700 hover-scale">
                Book Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white p-2 hover:bg-purple-500/20 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-gray-800 animate-slide-down">
              <div className="container mx-auto px-4 py-4 space-y-4">
                <button onClick={() => scrollToSection('content')} className="block w-full text-left text-gray-300 hover:text-purple-500 transition-colors py-2">
                  Subjects
                </button>
                <button onClick={() => scrollToSection('booking')} className="block w-full text-left text-gray-300 hover:text-purple-500 transition-colors py-2">
                  Schedule
                </button>
                <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-300 hover:text-purple-500 transition-colors py-2">
                  Contact
                </button>
                <Button onClick={() => scrollToSection('booking')} className="w-full bg-purple-600 hover:bg-purple-700">
                  Book Now
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Parallax */}
      <section className="pt-24 pb-16 relative overflow-hidden min-h-screen flex items-center">
        <div className="parallax-bg bg-gradient-to-br from-purple-900 via-purple-800 to-black" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 fade-in opacity-0 transition-opacity duration-1000">
              <Calculator className="w-20 h-20 mx-auto mb-6 text-purple-300 animate-float hover-scale" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Master Math, Chemistry & 
                <span className="text-purple-300 gradient-text"> Test Prep</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-8 text-purple-100 leading-relaxed">
                Expert 1-on-1 tutoring in mathematics, chemistry, and SAT/ACT math preparation 
                designed to help you excel and achieve top scores
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12">
              <Card className="glass-card hover-lift">
                <CardContent className="p-4 sm:p-6 text-center">
                  <Calculator className="w-8 h-8 mx-auto mb-3 text-purple-300 hover-scale animate-float" />
                  <h3 className="font-semibold mb-2 text-white">Mathematics</h3>
                  <p className="text-purple-100 text-sm">Algebra, Calculus, and advanced math concepts</p>
                </CardContent>
              </Card>
              <Card className="glass-card hover-lift">
                <CardContent className="p-4 sm:p-6 text-center">
                  <FlaskConical className="w-8 h-8 mx-auto mb-3 text-purple-300 hover-scale animate-float" />
                  <h3 className="font-semibold mb-2 text-white">Chemistry</h3>
                  <p className="text-purple-100 text-sm">General and AP Chemistry mastery</p>
                </CardContent>
              </Card>
              <Card className="glass-card hover-lift">
                <CardContent className="p-4 sm:p-6 text-center">
                  <GraduationCap className="w-8 h-8 mx-auto mb-3 text-purple-300 hover-scale animate-float" />
                  <h3 className="font-semibold mb-2 text-white">Test Prep</h3>
                  <p className="text-purple-100 text-sm">SAT and ACT math preparation</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Button 
                onClick={() => scrollToSection('booking')} 
                size="lg" 
                className="w-full sm:w-auto bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold hover-glow hover-scale"
              >
                Schedule Session
              </Button>
              <Button 
                onClick={() => scrollToSection('content')} 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold hover-glow hover-scale"
              >
                View Subjects
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <ChevronDown className="w-6 h-6 text-white/70" />
        </div>
      </section>

      {/* Split Screen About Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="fade-in opacity-0 transition-opacity duration-1000">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Expert 1-on-1 Tutoring</h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-8">
                Personalized tutoring sessions tailored to your learning style and academic goals
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center animate-pulse-slow">
                    <Star className="w-6 h-6 text-white animate-float" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Personalized Learning</h3>
                    <p className="text-gray-400">Customized approach to match your learning style</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center animate-pulse-slow">
                    <BookOpen className="w-6 h-6 text-white animate-float" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Comprehensive Curriculum</h3>
                    <p className="text-gray-400">Covering all aspects of your chosen subject</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center animate-pulse-slow">
                    <Users className="w-6 h-6 text-white animate-float" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Expert Tutors</h3>
                    <p className="text-gray-400">Learn from experienced and qualified educators</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative fade-in opacity-0 transition-opacity duration-1000">
              <div className="glass-card p-6 sm:p-8 shadow-float">
                <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0 animate-pulse-slow" />
                    <p className="text-gray-300">Personalized learning plans tailored to your goals</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0 animate-pulse-slow" />
                    <p className="text-gray-300">Flexible scheduling to fit your busy life</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0 animate-pulse-slow" />
                    <p className="text-gray-300">Proven track record of student success</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0 animate-pulse-slow" />
                    <p className="text-gray-300">Comprehensive support for all learning styles</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Form Section */}
      <section id="booking" className="py-16 bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 fade-in opacity-0 transition-opacity duration-1000">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Schedule Your Session</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Fill out the form below to schedule your tutoring session
            </p>
          </div>

          <div className="max-w-4xl mx-auto glass-card p-4">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSchPp6CkoQu9zNKpPIH30U6JHNS7-uhH7GBLUIogFxavHCCGQ/viewform?embedded=true"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="rounded-lg"
            >
              Loading…
            </iframe>
          </div>

          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button 
              onClick={() => scrollToSection('booking')} 
              size="lg" 
              className="w-full sm:w-auto bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold hover-glow hover-scale"
            >
              Schedule Session
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')} 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold hover-glow hover-scale"
            >
              View Rates
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Info Component */}
      <ContactInfo />

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Calculator className="w-6 h-6 text-purple-500 hover-scale animate-pulse-slow" />
                <span className="text-lg font-bold">DeltaXTutoring</span>
              </div>
              <p className="text-gray-400">
                Expert tutoring in mathematics, chemistry, and test preparation. 
                Helping students achieve academic excellence through personalized instruction.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('content')} className="hover:text-white transition-colors hover-scale flex items-center gap-2">
                  <BookOpen className="w-4 h-4 animate-pulse-slow" />
                  Subject Areas
                </button></li>
                <li><button onClick={() => scrollToSection('booking')} className="hover:text-white transition-colors hover-scale flex items-center gap-2">
                  <Calendar className="w-4 h-4 animate-pulse-slow" />
                  Schedule Tutoring
                </button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors hover-scale flex items-center gap-2">
                  <Mail className="w-4 h-4 animate-pulse-slow" />
                  Contact Info
                </button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-purple-500" />
                  deltaxtutoring@gmail.com
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-purple-500" />
                  (254) 271-7880
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-purple-500" />
                  Available for online & in-person tutoring
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2024 DeltaXTutoring. All rights reserved. Ready to excel in your studies?</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
