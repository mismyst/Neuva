'use client'
import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  FileText, 
  Calendar, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Palette,
  Code,
  Cpu,
  BarChart3,
  ArrowLeft,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

// Step Component
const Step = ({ children, className = "" }) => {
  return (
    <div className={`w-full ${className}`}>
      {children}
    </div>
  );
};

// Stepper Component
const Stepper = ({
  children,
  initialStep = 1,
  onStepChange,
  onFinalStepCompleted,
  backButtonText = "Previous",
  nextButtonText = "Next",
  finalButtonText = "Complete",
  showStepNumbers = true,
  className = "",
  canProceed = () => true
}) => {
  const [currentStep, setCurrentStep] = useState(initialStep - 1);
  const [completedSteps, setCompletedSteps] = useState(new Set());
  
  const steps = React.Children.toArray(children);
  const totalSteps = steps.length;

  const goToStep = (stepIndex) => {
    if (stepIndex >= 0 && stepIndex < totalSteps) {
      setCurrentStep(stepIndex);
      if (onStepChange) {
        onStepChange(stepIndex + 1);
      }
    }
  };

  const nextStep = () => {
    if (!canProceed(currentStep)) return;
    
    if (currentStep < totalSteps - 1) {
      setCompletedSteps(prev => new Set([...prev, currentStep]));
      goToStep(currentStep + 1);
    } else {
      setCompletedSteps(prev => new Set([...prev, currentStep]));
      if (onFinalStepCompleted) {
        onFinalStepCompleted();
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      goToStep(currentStep - 1);
    }
  };

  const isStepCompleted = (stepIndex) => completedSteps.has(stepIndex);
  const isCurrentStep = (stepIndex) => stepIndex === currentStep;
  const isStepAccessible = (stepIndex) => stepIndex <= currentStep || isStepCompleted(stepIndex);

  const stepTitles = ['Project Type', 'Contact Details', 'Requirements', 'Meeting', 'Review'];

  return (
    <div className={`w-full ${className}`}>
      {/* Progress Stepper - Blue Theme */}
      {showStepNumbers && (
        <div className="mb-12">
          <div className="flex items-center justify-between max-w-3xl mx-auto px-4">
            {steps.map((_, index) => (
              <div key={index} className="flex flex-col items-center relative group">
                <button
                  onClick={() => isStepAccessible(index) && goToStep(index)}
                  disabled={!isStepAccessible(index)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-500 relative z-10 border-2 ${
                    isStepCompleted(index)
                      ? 'bg-gradient-to-br from-gray-900 to-blue-900 border-gray-800 text-white shadow-lg'
                      : isCurrentStep(index)
                      ? 'bg-white border-blue-600 text-blue-600 shadow-sm'
                      : isStepAccessible(index)
                      ? 'bg-transparent border-blue-300 text-blue-400 hover:border-blue-500 hover:text-blue-500 cursor-pointer'
                      : 'bg-transparent border-gray-200 text-gray-300 cursor-not-allowed'
                  }`}
                >
                  {isStepCompleted(index) ? (
                    <div className="w-2 h-2 bg-white rounded-full" />
                  ) : (
                    index + 1
                  )}
                </button>
                <div className={`text-xs mt-3 text-center transition-all duration-300 font-medium hidden md:block ${
                  isCurrentStep(index)
                    ? 'text-blue-600'
                    : isStepCompleted(index)
                    ? 'text-gray-800'
                    : isStepAccessible(index)
                    ? 'text-blue-400'
                    : 'text-gray-300'
                }`}>
                  {stepTitles[index]}
                </div>
                {/* Connecting Line */}
                {index < totalSteps - 1 && (
                  <div 
                    className={`absolute top-4 left-4 h-px transition-all duration-700 hidden md:block ${
                      isStepCompleted(index)
                        ? 'bg-gradient-to-r from-gray-800 to-blue-800'
                        : 'bg-gray-200'
                    }`}
                    style={{ 
                      width: 'calc(100vw / 5 - 2rem)'
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step Content */}
      <div className="min-h-[600px] bg-white rounded-none border border-gray-200 shadow-sm">
        <div className="p-12 animate-fadeIn">
          {steps[currentStep]}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center px-12 py-8 border-t border-gray-100 bg-gray-50/50">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="flex items-center space-x-2 px-0 py-2 text-gray-500 hover:text-blue-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{backButtonText}</span>
          </button>

          <div className="flex items-center space-x-1">
            {Array.from({ length: totalSteps }, (_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentStep
                    ? 'bg-blue-600'
                    : index < currentStep
                    ? 'bg-gradient-to-r from-gray-800 to-blue-800'
                    : 'bg-gray-200'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextStep}
            disabled={!canProceed(currentStep)}
            className="flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-gray-900 to-blue-900 text-white font-medium hover:from-gray-800 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 text-sm tracking-wide rounded-sm shadow-lg"
          >
            <span>
              {currentStep === totalSteps - 1 ? finalButtonText : nextButtonText}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

// Main Contact Form Component
const ContactQuestionnaire = () => {
  const [formData, setFormData] = useState({
    projectType: '',
    name: '',
    email: '',
    phone: '',
    description: '',
    meetingDate: '',
    meetingTime: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitError, setSubmitError] = useState('');

  const projectTypes = [
    {
      id: 'ui-ux',
      title: 'UI/UX Design',
      description: 'Interface design and user experience optimization',
      icon: Palette
    },
    {
      id: 'web-dev',
      title: 'Web Development',
      description: 'Full-stack development and digital solutions',
      icon: Code
    },
    {
      id: 'embedded',
      title: 'Embedded Systems',
      description: 'Hardware integration and IoT solutions',
      icon: Cpu
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      description: 'Business intelligence and data visualization',
      icon: BarChart3
    }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFinalStep = async () => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setIsSubmitting(false);
    }, 2000);
  };

  const canProceed = (stepIndex) => {
    switch (stepIndex) {
      case 0: return formData.projectType !== '';
      case 1: return formData.name && formData.email && formData.phone;
      case 2: return formData.description.trim() !== '';
      case 3: return formData.meetingDate && formData.meetingTime;
      default: return true;
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23006BB4' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-light text-blue-900 mb-4 tracking-tight">
              Project Consultation
            </h1>
            <p className="text-blue-700 text-lg font-light max-w-2xl mx-auto leading-relaxed">
              Let's discuss your project requirements and schedule a consultation to explore how we can work together.
            </p>
          </div>

          <Stepper
            initialStep={1}
            onStepChange={(step) => {
              console.log(`Moved to step ${step}`);
            }}
            onFinalStepCompleted={handleFinalStep}
            backButtonText="Back"
            nextButtonText="Continue"
            finalButtonText={isSubmitting ? "Processing..." : "Submit Request"}
            canProceed={canProceed}
          >
            <Step>
              <div className="mb-12">
                <h2 className="text-2xl font-light text-blue-900 mb-3">Project Category</h2>
                <p className="text-blue-700 font-light">Select the primary focus of your project</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projectTypes.map((type) => {
                  const IconComponent = type.icon;
                  return (
                    <div
                      key={type.id}
                      onClick={() => handleInputChange('projectType', type.id)}
                      className={`group p-8 border cursor-pointer transition-all duration-300 hover:shadow-sm ${
                        formData.projectType === type.id
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300 bg-white'
                      }`}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`mt-1 transition-colors duration-300 ${
                          formData.projectType === type.id ? 'text-blue-600' : 'text-blue-400 group-hover:text-blue-600'
                        }`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-medium text-blue-900 mb-2">{type.title}</h3>
                          <p className="text-blue-700 text-sm font-light leading-relaxed">{type.description}</p>
                        </div>
                        <ChevronRight className={`w-4 h-4 mt-1 transition-all duration-300 ${
                          formData.projectType === type.id ? 'text-blue-600 transform rotate-90' : 'text-blue-300 group-hover:text-blue-400'
                        }`} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </Step>

            <Step>
              <div className="mb-12">
                <h2 className="text-2xl font-light text-blue-900 mb-3">Contact Information</h2>
                <p className="text-blue-700 font-light">Please provide your contact details</p>
              </div>
              <div className="space-y-8 max-w-2xl">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-blue-800">Full Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-4 border border-gray-200 bg-white text-blue-900 focus:border-blue-600 focus:outline-none transition-all duration-200 text-sm"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-blue-800">Email Address</label>
                  <div className="relative">
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-4 border border-gray-200 bg-white text-blue-900 focus:border-blue-600 focus:outline-none transition-all duration-200 text-sm"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-blue-800">Phone Number</label>
                  <div className="relative">
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-4 border border-gray-200 bg-white text-blue-900 focus:border-blue-600 focus:outline-none transition-all duration-200 text-sm"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
              </div>
            </Step>

            <Step>
              <div className="mb-12">
                <h2 className="text-2xl font-light text-blue-900 mb-3">Project Requirements</h2>
                <p className="text-blue-700 font-light">Describe your project scope and objectives</p>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-blue-800">Project Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Please provide details about your project including goals, requirements, timeline, and any specific challenges or considerations..."
                  rows={8}
                  className="w-full px-4 py-4 border border-gray-200 bg-white text-blue-900 focus:border-blue-600 focus:outline-none transition-all duration-200 resize-none text-sm leading-relaxed"
                />
                <p className="text-xs text-blue-600 mt-2">Minimum 50 characters required</p>
              </div>
            </Step>

            <Step>
              <div className="mb-12">
                <h2 className="text-2xl font-light text-blue-900 mb-3">Schedule Consultation</h2>
                <p className="text-blue-700 font-light">When would you prefer to discuss your project?</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-blue-800">Preferred Date</label>
                  <input
                    type="date"
                    value={formData.meetingDate}
                    onChange={(e) => handleInputChange('meetingDate', e.target.value)}
                    min={today}
                    className="w-full px-4 py-4 border border-gray-200 bg-white text-blue-900 focus:border-blue-600 focus:outline-none transition-all duration-200 text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-blue-800">Preferred Time</label>
                  <input
                    type="time"
                    value={formData.meetingTime}
                    onChange={(e) => handleInputChange('meetingTime', e.target.value)}
                    className="w-full px-4 py-4 border border-gray-200 bg-white text-blue-900 focus:border-blue-600 focus:outline-none transition-all duration-200 text-sm"
                  />
                </div>
              </div>
              <div className="mt-8 p-6 bg-blue-50 border border-blue-200">
                <p className="text-sm text-blue-700 font-light leading-relaxed">
                  <strong className="font-medium">Note:</strong> This consultation request will be reviewed within 24 hours. 
                  We'll confirm availability and send you meeting details via email.
                </p>
              </div>
            </Step>

            <Step>
              <div className="mb-12">
                <h2 className="text-2xl font-light text-blue-900 mb-3">Review & Submit</h2>
                <p className="text-blue-700 font-light">Please review your information before submitting</p>
              </div>
              
              <div className="space-y-8 border border-gray-200 bg-white">
                <div className="p-8 space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                    <div>
                      <p className="text-sm font-medium text-blue-600 uppercase tracking-wide">Project Type</p>
                      <p className="text-lg text-blue-900 mt-1">
                        {projectTypes.find(p => p.id === formData.projectType)?.title || 'Not selected'}
                      </p>
                    </div>
                    <div className="text-blue-400">
                      {formData.projectType && React.createElement(
                        projectTypes.find(p => p.id === formData.projectType)?.icon || Code, 
                        { className: "w-6 h-6" }
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4 border-b border-gray-100">
                    <div>
                      <p className="text-sm font-medium text-blue-600 uppercase tracking-wide">Name</p>
                      <p className="text-blue-900 mt-1">{formData.name || 'Not provided'}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-blue-600 uppercase tracking-wide">Email</p>
                      <p className="text-blue-900 mt-1">{formData.email || 'Not provided'}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-blue-600 uppercase tracking-wide">Phone</p>
                      <p className="text-blue-900 mt-1">{formData.phone || 'Not provided'}</p>
                    </div>
                  </div>
                  
                  <div className="py-4 border-b border-gray-100">
                    <p className="text-sm font-medium text-blue-600 uppercase tracking-wide mb-2">Consultation</p>
                    <p className="text-blue-900">
                      {formData.meetingDate && formData.meetingTime 
                        ? `${new Date(formData.meetingDate).toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })} at ${formData.meetingTime}`
                        : 'Not scheduled'
                      }
                    </p>
                  </div>
                  
                  <div className="py-4">
                    <p className="text-sm font-medium text-blue-600 uppercase tracking-wide mb-3">Project Description</p>
                    <div className="bg-blue-50 p-4 border border-blue-100">
                      <p className="text-blue-900 text-sm leading-relaxed">
                        {formData.description || 'No description provided'}
                      </p>
                    </div>
                  </div>
                </div>

                {submitStatus === 'success' && (
                  <div className="mx-8 mb-8 flex items-start space-x-3 text-green-800 bg-green-50 p-4 border border-green-200">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Request Submitted Successfully</p>
                      <p className="text-sm mt-1">We'll review your consultation request and contact you within 24 hours to confirm the meeting details.</p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mx-8 mb-8 flex items-start space-x-3 text-red-800 bg-red-50 p-4 border border-red-200">
                    <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Submission Error</p>
                      <p className="text-sm mt-1">{submitError || 'There was an error submitting your request. Please try again.'}</p>
                    </div>
                  </div>
                )}
              </div>
            </Step>
          </Stepper>

          <div className="text-center mt-12">
            <p className="text-blue-600 text-sm font-light">
              All information is handled confidentially in accordance with our privacy policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactQuestionnaire;