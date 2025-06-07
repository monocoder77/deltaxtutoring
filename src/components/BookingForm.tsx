
import React, { useState } from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tutor: '',
    subject: '',
    experience: '',
    goals: ''
  });

  const tutors = [
    {
      id: 'aarav',
      name: 'Aarav Agarwal',
      specialties: ['Chemistry', 'Mathematics'],
      description: 'Perfect 100 in AP Chemistry, Research at Rice & TCU',
      availability: 'Monday-Friday, 2:00-8:00 PM'
    },
    {
      id: 'akhil',
      name: 'Akhil',
      specialties: ['Mathematics', 'SAT/ACT Math'],
      description: 'Perfect scores, 5s on all AP exams',
      availability: 'Monday-Saturday, 4:00-9:00 PM'
    },
    {
      id: 'timi',
      name: 'Timi',
      specialties: ['Chemistry', 'Mathematics'],
      description: '100 test average, 2 years teaching experience',
      availability: 'Tuesday-Sunday, 1:00-7:00 PM'
    }
  ];

  const subjects = ['Mathematics', 'Chemistry', 'SAT/ACT Math'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.tutor || !formData.subject) {
      toast({
        title: "Please fill in required fields",
        description: "Name, email, tutor, and subject selection are required.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Tutoring Request Submitted!",
      description: "Your selected tutor will contact you within 24 hours to schedule your session.",
    });
    
    console.log('Tutoring request submitted:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      tutor: '',
      subject: '',
      experience: '',
      goals: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="booking" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Schedule Your Tutoring</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your tutor and subject area for personalized 1-on-1 instruction
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Available Tutors */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Our Tutors</h3>
            {tutors.map((tutor) => (
              <Card key={tutor.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <User className="w-5 h-5 text-blue-600" />
                    {tutor.name}
                  </CardTitle>
                  <CardDescription className="text-base">{tutor.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 text-gray-600">
                      <span className="font-medium">Specialties:</span>
                      <span>{tutor.specialties.join(', ')}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{tutor.availability}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Booking Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Request Tutoring Session</CardTitle>
              <CardDescription>Fill out the form below to request a tutoring session</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <Label htmlFor="tutor">Select Tutor *</Label>
                  <Select value={formData.tutor} onValueChange={(value) => handleInputChange('tutor', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a tutor" />
                    </SelectTrigger>
                    <SelectContent>
                      {tutors.map((tutor) => (
                        <SelectItem key={tutor.id} value={tutor.id}>
                          {tutor.name} - {tutor.specialties.join(', ')}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="subject">Subject Area *</Label>
                  <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      {subjects.map((subject) => (
                        <SelectItem key={subject} value={subject}>
                          {subject}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="experience">Experience Level</Label>
                  <Select value={formData.experience} onValueChange={(value) => handleInputChange('experience', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                      <SelectItem value="college">College Level</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="goals">Learning Goals (Optional)</Label>
                  <Textarea
                    id="goals"
                    value={formData.goals}
                    onChange={(e) => handleInputChange('goals', e.target.value)}
                    placeholder="What specific topics or skills would you like to focus on?"
                    rows={3}
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
                  Request Tutoring Session
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
