'use client';

import { useState } from 'react';
import { ChevronDown, ArrowRight, Zap, Brain, Globe, Shield, MessageCircle, Cpu } from 'lucide-react';

const features = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Advanced Reasoning",
    description: "GPT-5 demonstrates unprecedented reasoning capabilities with complex multi-step problem solving."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning Fast",
    description: "Experience faster response times with optimized architecture for real-time conversations."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Multilingual Mastery",
    description: "Enhanced support for 100+ languages with improved cultural context understanding."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Enhanced Safety",
    description: "Advanced safety measures and alignment improvements for more reliable interactions."
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Context Awareness",
    description: "Longer context windows allowing for more coherent long-form conversations."
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Specialized Models",
    description: "Purpose-built variants optimized for coding, analysis, creative writing, and more."
  }
];

const usageSteps = [
  {
    step: "1",
    title: "Sign Up",
    description: "Create your OpenAI account or log in to your existing account"
  },
  {
    step: "2", 
    title: "Choose Your Plan",
    description: "Select from Free, Plus, or Team plans based on your needs"
  },
  {
    step: "3",
    title: "Start Chatting",
    description: "Begin your conversation with GPT-5 and experience the next generation of AI"
  }
];

const faqs = [
  {
    question: "What's new in GPT-5 compared to GPT-4?",
    answer: "GPT-5 features significantly improved reasoning abilities, faster response times, enhanced safety measures, better multilingual support, and specialized model variants for different use cases."
  },
  {
    question: "How can I access GPT-5?",
    answer: "GPT-5 is available through the OpenAI website, mobile apps, and API. You can start with a free tier or upgrade to Plus/Team for enhanced features and priority access."
  },
  {
    question: "What are the usage limits for GPT-5?",
    answer: "Usage limits vary by plan. Free users get limited messages per hour, Plus subscribers get higher limits, and Team/Enterprise users get the highest capacity with priority access."
  },
  {
    question: "Is GPT-5 available via API?",
    answer: "Yes, GPT-5 is available through OpenAI's API with various pricing tiers. Developers can integrate GPT-5 into their applications with comprehensive documentation and support."
  },
  {
    question: "How does GPT-5 handle data privacy?",
    answer: "OpenAI maintains strict data privacy standards. Conversations are not used to train models without explicit consent, and enterprise customers have additional privacy controls and compliance features."
  },
  {
    question: "Can GPT-5 browse the internet?",
    answer: "Yes, GPT-5 has enhanced web browsing capabilities when enabled, allowing it to access current information and provide up-to-date responses on recent events and developments."
  }
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Get answers to common questions about GPT-5
        </p>
      </div>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200"
          >
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-semibold text-lg">{faq.question}</span>
              <ChevronDown 
                className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4">
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              GPT-5
            </div>
            <div className="flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#usage" className="text-gray-600 hover:text-gray-900 transition-colors">How to Use</a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors">FAQ</a>
              <a 
                href="https://openai.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105"
              >
                Try GPT-5
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              🚀 Now Available
            </span>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
              Introducing GPT-5
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              The most advanced AI language model ever created. Experience unprecedented reasoning, creativity, 
              and problem-solving capabilities that redefine what's possible with artificial intelligence.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a 
              href="https://chat.openai.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              Start Chatting Now
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="https://openai.com/api" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-blue-400 hover:text-blue-600 transition-all duration-300"
            >
              View API Docs
            </a>
          </div>

          {/* Hero Visual */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 rounded-2xl p-8 shadow-xl">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  <span className="font-semibold text-gray-700">GPT-5</span>
                </div>
                <p className="text-left text-gray-600 mb-4">
                  Hello! I'm GPT-5, OpenAI's most advanced language model. I can help you with complex reasoning, 
                  creative writing, coding, analysis, and much more. How can I assist you today?
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Online and ready to help
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Breakthrough Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              GPT-5 pushes the boundaries of what AI can do with revolutionary improvements across all areas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Section */}
      <section id="usage" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              How to Get Started
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting started with GPT-5 is simple and takes just a few minutes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {usageSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Ready to Experience GPT-5?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join millions of users who are already using GPT-5 to enhance their productivity, creativity, and learning.
            </p>
            <a 
              href="https://chat.openai.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 bg-gray-50">
        <FAQ />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                GPT-5
              </div>
              <p className="text-gray-400">
                The most advanced AI language model, pushing the boundaries of what's possible.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ChatGPT</a></li>
                <li><a href="https://openai.com/api" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">API</a></li>
                <li><a href="https://openai.com/pricing" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://help.openai.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="https://openai.com/blog" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="https://openai.com/research" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Research</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://openai.com/about" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">About</a></li>
                <li><a href="https://openai.com/careers" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="https://openai.com/safety" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Safety</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 OpenAI. This is a demonstration website showcasing GPT-5 capabilities.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}