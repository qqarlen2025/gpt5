'use client';

import { useState } from 'react';
import { ChevronDown, ArrowRight, BookOpen, Puzzle, Wrench, Rocket, Star, TrendingUp } from 'lucide-react';

const categories = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "GPT-5 Tutorials",
    description: "Comprehensive guides and step-by-step tutorials to master GPT-5 features and capabilities.",
    count: "50+ Tutorials"
  },
  {
    icon: <Puzzle className="w-8 h-8" />,
    title: "GPT-5 Plugins",
    description: "Discover the best GPT-5 plugins to extend functionality and enhance your AI experience.",
    count: "200+ Plugins"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "GPT-5 SAAS Tools",
    description: "Curated collection of GPT-5 powered SAAS applications for business and productivity.",
    count: "100+ Tools"
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "GPT-5 Resources",
    description: "Essential resources, documentation, and references for GPT-5 developers and users.",
    count: "300+ Resources"
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Expert Reviews",
    description: "In-depth reviews and comparisons of GPT-5 tools, plugins, and applications.",
    count: "Latest Reviews"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "GPT-5 News & Updates",
    description: "Stay updated with the latest GPT-5 news, updates, and industry developments.",
    count: "Daily Updates"
  }
];

const featuredContent = [
  {
    step: "1",
    title: "Browse Categories",
    description: "Explore our organized categories of GPT-5 tutorials, plugins, tools, and resources"
  },
  {
    step: "2",
    title: "Read Expert Reviews",
    description: "Get insights from our detailed reviews and comparisons of GPT-5 tools and applications"
  },
  {
    step: "3",
    title: "Stay Updated",
    description: "Subscribe to our newsletter for the latest GPT-5 news, tutorials, and tool recommendations"
  }
];

const faqs = [
  {
    question: "What makes GPT-5 Pro different from other GPT-5 resources?",
    answer: "GPT-5 Pro is a comprehensive resource hub that curates the best GPT-5 tutorials, tools, plugins, and expert insights all in one place. We provide in-depth reviews, practical guides, and daily updates to help you maximize your GPT-5 experience."
  },
  {
    question: "How often do you update your GPT-5 content?",
    answer: "We update our content daily with the latest GPT-5 news, new tool discoveries, fresh tutorials, and expert reviews. Our team continuously monitors the GPT-5 ecosystem to bring you the most current information."
  },
  {
    question: "Are the GPT-5 tools and plugins you recommend free?",
    answer: "We feature both free and premium GPT-5 tools and plugins. Each resource is clearly labeled with pricing information, and we provide detailed reviews to help you choose the best options for your needs and budget."
  },
  {
    question: "Can I submit my own GPT-5 tool or tutorial for review?",
    answer: "Yes! We welcome submissions from the GPT-5 community. You can contact us through our submission form to have your GPT-5 tools, plugins, or tutorials considered for inclusion in our directory."
  },
  {
    question: "Do you provide GPT-5 tutorials for beginners?",
    answer: "Absolutely! Our tutorial section includes comprehensive guides for all skill levels, from complete beginners to advanced users. We cover everything from basic GPT-5 usage to advanced prompt engineering and API integration."
  },
  {
    question: "How can I stay updated with the latest GPT-5 developments?",
    answer: "Subscribe to our newsletter to receive weekly updates with the latest GPT-5 news, new tool releases, tutorial highlights, and expert insights delivered directly to your inbox."
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
                className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''
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
              GPT-5 Pro
            </div>
            <div className="flex space-x-8">
              <a href="#categories" className="text-gray-600 hover:text-gray-900 transition-colors">Categories</a>
              <a href="#tutorials" className="text-gray-600 hover:text-gray-900 transition-colors">Tutorials</a>
              <a href="#tools" className="text-gray-600 hover:text-gray-900 transition-colors">Tools</a>
              <a href="#blog" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</a>
              <a
                href="#newsletter"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105"
              >
                Subscribe
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
              🎯 Your Ultimate GPT-5 Resource Hub
            </span>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
              GPT-5 Pro
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Discover the best GPT-5 tutorials, plugins, SAAS tools, and expert insights. Your comprehensive guide
              to mastering GPT-5 with curated resources and in-depth reviews.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#categories"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              Explore Resources
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#newsletter"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-blue-400 hover:text-blue-600 transition-all duration-300"
            >
              Subscribe to Updates
            </a>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">GPT-5 Resources</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Expert Tutorials</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-600">Curated Tools</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">Daily</div>
              <div className="text-gray-600">Fresh Content</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Explore GPT-5 Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive collection of GPT-5 tutorials, tools, plugins, and expert insights all in one place
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 cursor-pointer"
              >
                <div className="text-blue-600 mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{category.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{category.description}</p>
                <div className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
                  {category.count}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section id="tutorials" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              How to Use GPT-5 Pro
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maximize your GPT-5 experience with our comprehensive resource platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredContent.map((step, index) => (
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
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Join Our GPT-5 Community</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get exclusive access to the latest GPT-5 tutorials, tool reviews, and expert insights delivered to your inbox.
            </p>
            <a
              href="#newsletter"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Subscribe Now
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
                GPT-5 Pro
              </div>
              <p className="text-gray-400">
                Your ultimate resource hub for GPT-5 tutorials, tools, plugins, and expert insights.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#tutorials" className="hover:text-white transition-colors">GPT-5 Tutorials</a></li>
                <li><a href="#plugins" className="hover:text-white transition-colors">Plugins Directory</a></li>
                <li><a href="#tools" className="hover:text-white transition-colors">SAAS Tools</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Expert Reviews</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#blog" className="hover:text-white transition-colors">GPT-5 Blog</a></li>
                <li><a href="#guides" className="hover:text-white transition-colors">Beginner Guides</a></li>
                <li><a href="#news" className="hover:text-white transition-colors">Latest News</a></li>
                <li><a href="#newsletter" className="hover:text-white transition-colors">Newsletter</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#submit" className="hover:text-white transition-colors">Submit Tool</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About GPT-5 Pro</a></li>
                <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 GPT-5 Pro (gpt5pro.org). Your comprehensive guide to GPT-5 resources and tools.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}