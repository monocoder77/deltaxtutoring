import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Star, Award, BookOpen, Trophy, School, Brain, Medal, DollarSign, Heart } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section id="contact" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 fade-in opacity-0 transition-opacity duration-1000">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Expert Tutors</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Learn from experienced educators dedicated to your success
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="glass-card hover-lift">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center animate-pulse-slow">
                  <Trophy className="w-6 h-6 text-white animate-float" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Aarav Agarwal</h3>
                  <p className="text-purple-300">SAT Math: 790/800</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <School className="w-4 h-4 text-purple-500 animate-pulse-slow" />
                  President of Carroll's Math Club
                </li>
                <li className="flex items-center gap-2">
                  <Medal className="w-4 h-4 text-purple-500 animate-pulse-slow" />
                  Chemistry Excellence Award
                </li>
                <li className="flex items-center gap-2">
                  <Brain className="w-4 h-4 text-purple-500 animate-pulse-slow" />
                  Expert in Advanced Mathematics
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-card hover-lift">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center animate-pulse-slow">
                  <Trophy className="w-6 h-6 text-white animate-float" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Timi Odumosu</h3>
                  <p className="text-purple-300">ACT Math: 35/36</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <School className="w-4 h-4 text-purple-500 animate-pulse-slow" />
                  Mathnasium Instructor
                </li>
                <li className="flex items-center gap-2">
                  <Medal className="w-4 h-4 text-purple-500 animate-pulse-slow" />
                  100 Test Average in AP Chemistry
                </li>
                <li className="flex items-center gap-2">
                  <Brain className="w-4 h-4 text-purple-500 animate-pulse-slow" />
                  Expert in Test Preparation
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-card hover-lift">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center animate-pulse-slow">
                  <Trophy className="w-6 h-6 text-white animate-float" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Akhil</h3>
                  <p className="text-purple-300">SAT Math: 800/800</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <School className="w-4 h-4 text-purple-500 animate-pulse-slow" />
                  Kumon Instructor
                </li>
                <li className="flex items-center gap-2">
                  <Medal className="w-4 h-4 text-purple-500 animate-pulse-slow" />
                  100 in Chemistry (Both Years)
                </li>
                <li className="flex items-center gap-2">
                  <Brain className="w-4 h-4 text-purple-500 animate-pulse-slow" />
                  Expert in Mathematics Education
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Rates Section */}
        <div className="glass-card p-8 mb-12 fade-in opacity-0 transition-opacity duration-1000">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-6">Our Rates</h3>
            <div className="flex items-center justify-center gap-4 mb-6">
              <DollarSign className="w-10 h-10 text-purple-500 animate-pulse-slow" />
              <span className="text-4xl font-bold text-white">$20/hour</span>
            </div>
            <p className="text-gray-300 text-lg">
              Start with a free trial session to experience our teaching approach
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          <div className="glass-card p-6 fade-in opacity-0 transition-opacity duration-1000">
            <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-500 animate-pulse-slow" />
                <span className="text-gray-300">deltaxtutoring@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-purple-500 animate-pulse-slow" />
                <span className="text-gray-300">(254) 271-7880</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-purple-500 animate-pulse-slow" />
                <span className="text-gray-300">Available for online & in-person tutoring</span>
              </li>
            </ul>
          </div>

          <div className="glass-card p-6 fade-in opacity-0 transition-opacity duration-1000">
            <h3 className="text-2xl font-bold text-white mb-4">Teaching Philosophy</h3>
            <p className="text-gray-300 mb-4">
              We believe in personalized learning that adapts to each student's unique needs and learning style. 
              Our approach combines expert knowledge with engaging teaching methods to make learning enjoyable and effective.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse-slow" />
                Individualized attention and support
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse-slow" />
                Focus on building strong foundations
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse-slow" />
                Regular progress assessments
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
