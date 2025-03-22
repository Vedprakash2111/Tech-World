import Link from 'next/link'
import { 
  ChartBarIcon, 
  ChatBubbleLeftRightIcon, 
  BookOpenIcon, 
  HeartIcon,
  ArrowRightIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    title: 'Track Your Mood',
    description: 'Log and monitor your daily emotional well-being with our intuitive tracking system.',
    icon: ChartBarIcon,
    href: '/mood-tracker',
    color: 'bg-blue-500',
  },
  {
    title: 'Journal Your Thoughts',
    description: 'Express yourself freely in a private, secure digital journal.',
    icon: BookOpenIcon,
    href: '/journal',
    color: 'bg-purple-500',
  },
  {
    title: 'Connect Anonymously',
    description: 'Share experiences and support others in our anonymous community.',
    icon: ChatBubbleLeftRightIcon,
    href: '/community',
    color: 'bg-green-500',
  },
  {
    title: 'Access Resources',
    description: 'Find helpful resources, relaxation techniques, and professional support.',
    icon: HeartIcon,
    href: '/resources',
    color: 'bg-red-500',
  },
]

const testimonials = [
  {
    quote: "This platform has helped me manage my stress levels during exam season.",
    author: "Computer Science Student",
    mood: "Relieved"
  },
  {
    quote: "The anonymous community support made me feel less alone in my struggles.",
    author: "Engineering Student",
    mood: "Supported"
  },
  {
    quote: "Daily mood tracking helped me identify patterns and improve my well-being.",
    author: "Medical Student",
    mood: "Empowered"
  }
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-8">
              <SparklesIcon className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Your Journey to Better Mental Health Starts Here</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl tracking-tight">
              Your Mental Health
              <span className="block text-primary mt-2">Matters</span>
            </h1>
            <p className="mt-6 max-w-md mx-auto text-lg text-gray-600 sm:text-xl md:mt-8 md:text-2xl md:max-w-3xl leading-relaxed">
              A safe space for students to track their wellness, share experiences, and access support.
            </p>
            <div className="mt-10 flex justify-center space-x-4">
              <Link 
                href="/get-started" 
                className="btn-primary inline-flex items-center px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Get Started
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/resources" 
                className="btn-secondary px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 transform opacity-20">
          <div className="h-96 w-96 rounded-full bg-primary blur-3xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 transform opacity-20">
          <div className="h-96 w-96 rounded-full bg-secondary blur-3xl"></div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">How We Can Help</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Tools and resources designed specifically for your well-being journey</p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Link 
              key={feature.title}
              href={feature.href}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="card h-full group-hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <div className={`h-14 w-14 rounded-xl ${feature.color} bg-opacity-10 flex items-center justify-center mb-6`}>
                  <feature.icon className={`h-7 w-7 ${feature.color} text-opacity-100`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Student Stories</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Real experiences from students who've found support and growth</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="card animate-slide-up hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative">
                  <svg
                    className="absolute -top-4 -left-4 h-8 w-8 text-primary opacity-20"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-gray-600 italic text-lg mb-6 leading-relaxed">{testimonial.quote}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">{testimonial.author}</span>
                    <span className="badge badge-primary px-3 py-1">{testimonial.mood}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary to-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold sm:text-4xl mb-6">Ready to Take Care of Your Mental Health?</h2>
            <p className="text-lg text-primary-100 mb-10 max-w-2xl mx-auto">Join our community of students supporting each other on the journey to better mental well-being.</p>
            <Link 
              href="/get-started" 
              className="inline-flex items-center px-8 py-3 text-lg bg-white text-primary rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-white/90"
            >
              Start Your Journey
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 