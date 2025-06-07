
import React from 'react';
import { BookOpen, FlaskConical, Calculator, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ContentPreview = () => {
  const sampleProblems = [
    {
      id: 1,
      title: "Algebraic Equations",
      difficulty: "Mathematics",
      topic: "Algebra",
      problem: "Solve for x: 3x² - 12x + 9 = 0 using factoring and the quadratic formula",
      hint: "Look for common factors first, then apply quadratic formula"
    },
    {
      id: 2,
      title: "Equilibrium Calculations",
      difficulty: "Chemistry",
      topic: "Chemical Equilibrium",
      problem: "Calculate the equilibrium concentrations for: N₂(g) + 3H₂(g) ⇌ 2NH₃(g)",
      hint: "Use the ICE table method and Kc = 0.105 at 472°C"
    },
    {
      id: 3,
      title: "SAT Math Strategy",
      difficulty: "Test Prep",
      topic: "SAT/ACT Math",
      problem: "Optimize time management for complex word problems and coordinate geometry",
      hint: "Identify key information quickly and use elimination strategies"
    }
  ];

  const mathTopics = [
    "Algebra & Pre-Algebra",
    "Geometry & Trigonometry", 
    "Pre-Calculus",
    "Calculus AB/BC",
    "Statistics & Probability",
    "Advanced Problem Solving"
  ];

  const chemistryTopics = [
    "Atomic Structure & Bonding",
    "Chemical Reactions & Stoichiometry",
    "Thermodynamics & Kinetics",
    "Equilibrium & Acids/Bases",
    "Electrochemistry",
    "Laboratory Techniques"
  ];

  const testPrepTopics = [
    "SAT Math Sections 1 & 2",
    "ACT Math Strategies",
    "Problem-Solving Techniques",
    "Time Management Skills",
    "Calculator & Non-Calculator",
    "Practice Test Analysis"
  ];

  return (
    <section id="content" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What You'll Learn</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get a preview of the high-quality content and problem-solving techniques you'll master in our tutoring sessions
          </p>
        </div>

        {/* Topics Covered by Subject */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">Core Topics by Subject</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Mathematics */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Calculator className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Mathematics</CardTitle>
                <CardDescription>All levels from Algebra to Calculus</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {mathTopics.map((topic, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{topic}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Chemistry */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <FlaskConical className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Chemistry</CardTitle>
                <CardDescription>General and AP Chemistry mastery</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {chemistryTopics.map((topic, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{topic}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* SAT/ACT Math */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">SAT/ACT Math</CardTitle>
                <CardDescription>Test preparation and strategy</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {testPrepTopics.map((topic, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{topic}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sample Problems */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">Sample Problems</h3>
          <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {sampleProblems.map((problem) => (
              <Card key={problem.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{problem.title}</CardTitle>
                    <Badge variant="secondary">{problem.difficulty}</Badge>
                  </div>
                  <Badge variant="outline" className="w-fit">{problem.topic}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Problem:</h4>
                      <p className="text-gray-600 text-sm">{problem.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Approach:</h4>
                      <p className="text-blue-600 text-sm italic">{problem.hint}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Teaching Approach */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800">Our Tutoring Approach</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h4 className="font-semibold mb-2">Personalized Learning</h4>
              <p className="text-gray-600">Tailored instruction based on your learning style and current skill level</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h4 className="font-semibold mb-2">Problem-Solving Mastery</h4>
              <p className="text-gray-600">Develop systematic approaches to tackle complex problems with confidence</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h4 className="font-semibold mb-2">Academic Excellence</h4>
              <p className="text-gray-600">Build lasting understanding and skills for long-term academic success</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentPreview;
