'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { User, Mail, Phone, School, Calendar, Users, CreditCard, CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';

const steps = ['Personal Info', 'College Details', 'Event Selection', 'Payment'];

const eventOptions = [
  { id: 1, name: 'Code Conquest', category: 'Technical', fee: 200 },
  { id: 2, name: 'RoboWars', category: 'Robotics', fee: 500 },
  { id: 3, name: 'Valorant Championship', category: 'Gaming', fee: 300 },
  { id: 4, name: 'AI Innovation Challenge', category: 'AI/ML', fee: 400 },
  { id: 5, name: 'Drone Racing', category: 'Robotics', fee: 250 },
  { id: 6, name: 'UI/UX Designathon', category: 'Design', fee: 200 },
  { id: 7, name: 'Battle of Bands', category: 'Cultural', fee: 500 },
  { id: 8, name: 'CTF Cybersecurity', category: 'Technical', fee: 300 },
];

const workshopOptions = [
  { id: 1, name: 'Machine Learning Fundamentals', fee: 500 },
  { id: 2, name: 'IoT & Embedded Systems', fee: 600 },
  { id: 3, name: 'Full Stack Web Development', fee: 800 },
  { id: 4, name: 'UI/UX Design Masterclass', fee: 450 },
  { id: 5, name: 'Drone Building & Programming', fee: 1200 },
  { id: 6, name: 'Cybersecurity Essentials', fee: 550 },
];

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    collegeName: '',
    collegeCity: '',
    course: '',
    year: '',
    selectedEvents: [] as number[],
    selectedWorkshops: [] as number[],
    teamName: '',
    teamMembers: '',
  });

  const calculateTotal = () => {
    const eventTotal = formData.selectedEvents.reduce((sum, id) => {
      const event = eventOptions.find(e => e.id === id);
      return sum + (event?.fee || 0);
    }, 0);
    const workshopTotal = formData.selectedWorkshops.reduce((sum, id) => {
      const workshop = workshopOptions.find(w => w.id === id);
      return sum + (workshop?.fee || 0);
    }, 0);
    return eventTotal + workshopTotal;
  };

  const handleEventToggle = (id: number) => {
    setFormData(prev => ({
      ...prev,
      selectedEvents: prev.selectedEvents.includes(id)
        ? prev.selectedEvents.filter(e => e !== id)
        : [...prev.selectedEvents, id]
    }));
  };

  const handleWorkshopToggle = (id: number) => {
    setFormData(prev => ({
      ...prev,
      selectedWorkshops: prev.selectedWorkshops.includes(id)
        ? prev.selectedWorkshops.filter(w => w !== id)
        : [...prev.selectedWorkshops, id]
    }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Registration submitted successfully! You will receive a confirmation email shortly.');
  };

  return (
    <main className="relative min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-8 overflow-hidden">
        <div className="absolute inset-0 bg-dark-900">
          <div className="absolute inset-0 cyber-grid opacity-30"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl mb-6">
            <span className="gradient-text">Register</span> Now
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Join thousands of innovators at Almago 2026. Complete your registration below.
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-dark-800">
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
        </div>
        
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-12">
            {steps.map((step, index) => (
              <div key={step} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm transition-all ${
                      index <= currentStep
                        ? 'bg-gradient-to-r from-accent-cyan to-accent-purple text-dark-900'
                        : 'bg-dark-700 text-gray-500 border border-gray-600'
                    }`}
                  >
                    {index < currentStep ? <CheckCircle size={18} /> : index + 1}
                  </div>
                  <span className={`mt-2 text-xs font-medium ${index <= currentStep ? 'text-accent-cyan' : 'text-gray-500'}`}>
                    {step}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 sm:w-24 h-0.5 mx-2 ${index < currentStep ? 'bg-accent-cyan' : 'bg-gray-700'}`}></div>
                )}
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="card-cyber p-8">
            {/* Step 1: Personal Info */}
            {currentStep === 0 && (
              <div className="space-y-6">
                <h2 className="font-heading font-semibold text-2xl text-white mb-6">Personal Information</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">First Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3 bg-dark-700 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-accent-cyan"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Last Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-3 bg-dark-700 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-accent-cyan"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-700 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-accent-cyan"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-dark-700 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-accent-cyan"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Date of Birth *</label>
                    <input
                      type="date"
                      required
                      value={formData.dob}
                      onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                      className="w-full px-4 py-3 bg-dark-700 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-accent-cyan"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Gender *</label>
                  <select
                    required
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-700 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-accent-cyan"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 2: College Details */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="font-heading font-semibold text-2xl text-white mb-6">College Details</h2>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">College Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.collegeName}
                    onChange={(e) => setFormData({ ...formData, collegeName: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-700 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-accent-cyan"
                    placeholder="Enter your college name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">College City *</label>
                  <input
                    type="text"
                    required
                    value={formData.collegeCity}
                    onChange={(e) => setFormData({ ...formData, collegeCity: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-700 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-accent-cyan"
                    placeholder="Enter city"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Course/Branch *</label>
                    <input
                      type="text"
                      required
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full px-4 py-3 bg-dark-700 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-accent-cyan"
                      placeholder="e.g., B.Tech CSE"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Year of Study *</label>
                    <select
                      required
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      className="w-full px-4 py-3 bg-dark-700 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-accent-cyan"
                    >
                      <option value="">Select Year</option>
                      <option value="1">1st Year</option>
                      <option value="2">2nd Year</option>
                      <option value="3">3rd Year</option>
                      <option value="4">4th Year</option>
                      <option value="5">5th Year</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Event Selection */}
            {currentStep === 2 && (
              <div className="space-y-8">
                <h2 className="font-heading font-semibold text-2xl text-white mb-6">Select Events & Workshops</h2>
                
                {/* Events */}
                <div>
                  <h3 className="text-lg font-medium text-accent-cyan mb-4">Events</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {eventOptions.map((event) => (
                      <label
                        key={event.id}
                        className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-all ${
                          formData.selectedEvents.includes(event.id)
                            ? 'bg-accent-cyan/10 border-accent-cyan'
                            : 'bg-dark-700 border-gray-700 hover:border-gray-600'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={formData.selectedEvents.includes(event.id)}
                            onChange={() => handleEventToggle(event.id)}
                            className="sr-only"
                          />
                          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                            formData.selectedEvents.includes(event.id)
                              ? 'bg-accent-cyan border-accent-cyan'
                              : 'border-gray-500'
                          }`}>
                            {formData.selectedEvents.includes(event.id) && <CheckCircle size={14} className="text-dark-900" />}
                          </div>
                          <div>
                            <p className="text-white text-sm font-medium">{event.name}</p>
                            <p className="text-gray-500 text-xs">{event.category}</p>
                          </div>
                        </div>
                        <span className="text-accent-cyan font-mono text-sm">₹{event.fee}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Workshops */}
                <div>
                  <h3 className="text-lg font-medium text-accent-purple mb-4">Workshops</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {workshopOptions.map((workshop) => (
                      <label
                        key={workshop.id}
                        className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-all ${
                          formData.selectedWorkshops.includes(workshop.id)
                            ? 'bg-accent-purple/10 border-accent-purple'
                            : 'bg-dark-700 border-gray-700 hover:border-gray-600'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={formData.selectedWorkshops.includes(workshop.id)}
                            onChange={() => handleWorkshopToggle(workshop.id)}
                            className="sr-only"
                          />
                          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                            formData.selectedWorkshops.includes(workshop.id)
                              ? 'bg-accent-purple border-accent-purple'
                              : 'border-gray-500'
                          }`}>
                            {formData.selectedWorkshops.includes(workshop.id) && <CheckCircle size={14} className="text-white" />}
                          </div>
                          <p className="text-white text-sm font-medium">{workshop.name}</p>
                        </div>
                        <span className="text-accent-purple font-mono text-sm">₹{workshop.fee}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Payment */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="font-heading font-semibold text-2xl text-white mb-6">Payment Summary</h2>
                
                {/* Summary */}
                <div className="bg-dark-700/50 rounded-xl p-6 border border-gray-800">
                  <h3 className="font-medium text-white mb-4">Selected Items</h3>
                  
                  {formData.selectedEvents.length > 0 && (
                    <div className="mb-4">
                      <p className="text-sm text-gray-400 mb-2">Events:</p>
                      {formData.selectedEvents.map((id) => {
                        const event = eventOptions.find(e => e.id === id);
                        return (
                          <div key={id} className="flex justify-between text-sm py-1">
                            <span className="text-gray-300">{event?.name}</span>
                            <span className="text-accent-cyan">₹{event?.fee}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {formData.selectedWorkshops.length > 0 && (
                    <div className="mb-4">
                      <p className="text-sm text-gray-400 mb-2">Workshops:</p>
                      {formData.selectedWorkshops.map((id) => {
                        const workshop = workshopOptions.find(w => w.id === id);
                        return (
                          <div key={id} className="flex justify-between text-sm py-1">
                            <span className="text-gray-300">{workshop?.name}</span>
                            <span className="text-accent-purple">₹{workshop?.fee}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  <div className="border-t border-gray-700 pt-4 mt-4">
                    <div className="flex justify-between text-lg font-heading font-bold">
                      <span className="text-white">Total Amount</span>
                      <span className="gradient-text">₹{calculateTotal()}</span>
                    </div>
                  </div>
                </div>

                {/* Payment Methods */}
                <div>
                  <p className="text-sm text-gray-400 mb-4">Select Payment Method</p>
                  <div className="grid grid-cols-3 gap-4">
                    {['UPI', 'Card', 'Net Banking'].map((method) => (
                      <button
                        key={method}
                        type="button"
                        className="p-4 bg-dark-700 border border-gray-700 rounded-lg text-center hover:border-accent-cyan transition-colors"
                      >
                        <CreditCard className="mx-auto mb-2 text-gray-400" size={24} />
                        <span className="text-sm text-gray-300">{method}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-accent-cyan/10 border border-accent-cyan/30 rounded-lg">
                  <CheckCircle className="text-accent-cyan flex-shrink-0 mt-0.5" size={18} />
                  <p className="text-sm text-gray-300">
                    By completing this registration, you agree to our terms and conditions. 
                    Your spot will be confirmed upon successful payment.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-800">
              <button
                type="button"
                onClick={handleBack}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                  currentStep === 0
                    ? 'text-gray-600 cursor-not-allowed'
                    : 'text-gray-300 hover:text-white bg-dark-700 hover:bg-dark-600'
                }`}
                disabled={currentStep === 0}
              >
                <ArrowLeft size={16} />
                Back
              </button>
              
              {currentStep < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-purple text-dark-900 font-heading font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  Next
                  <ArrowRight size={16} />
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-accent-cyan to-accent-purple text-dark-900 font-heading font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  Complete Registration
                  <CheckCircle size={16} />
                </button>
              )}
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
