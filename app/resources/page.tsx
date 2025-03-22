'use client';

import { motion } from 'framer-motion';
import {
  PhoneIcon,
  AcademicCapIcon,
  HeartIcon,
  UserGroupIcon,
  BookOpenIcon,
  BoltIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline'

type ResourceItem = {
  title: string;
  description: string;
  contact?: string;
  link?: string;
  urgent?: boolean;
};

const resources: ResourceItem[] = [
  {
    title: 'Crisis Helpline',
    description: '24/7 confidential support for students in crisis',
    contact: '1-800-273-8255',
    urgent: true,
  },
  {
    title: 'Student Counseling Services',
    description: 'Professional counseling and mental health services',
    contact: '555-0123',
  },
  {
    title: 'Wellness Resources',
    description: 'Online resources and self-help tools',
    link: 'https://example.com/wellness',
  },
  {
    title: 'Peer Support Network',
    description: 'Connect with trained peer supporters',
    contact: '555-0124',
  },
];

const quickLinks = [
  {
    title: 'Wellness Library',
    description: 'Articles and resources on mental health topics',
    icon: BookOpenIcon,
    link: '/library',
  },
  {
    title: 'Quick Tips',
    description: 'Instant strategies for common challenges',
    icon: BoltIcon,
    link: '/tips',
  },
]

export default function Resources() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl font-bold text-gray-900">Support Resources</h1>
        <p className="mt-2 text-lg text-gray-600">
          Access mental health support and resources whenever you need them
        </p>
      </motion.div>

      {/* Emergency Support Banner */}
      <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-8">
        <div className="flex">
          <div className="flex-shrink-0">
            <PhoneIcon className="h-5 w-5 text-red-400" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">
              Need immediate help?
            </h3>
            <div className="mt-2 text-sm text-red-700">
              <p>
                If you're experiencing a mental health emergency, call the 24/7 Crisis Helpline:
                <br />
                <a href="tel:1-800-273-8255" className="font-semibold hover:underline">
                  1-800-273-8255
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid gap-6 md:grid-cols-2 mb-12">
        {quickLinks.map((link) => (
          <div key={link.title} className="card hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <link.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">{link.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{link.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Resource Categories */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`card overflow-hidden ${
              item.urgent ? 'border-2 border-red-500' : ''
            }`}
          >
            <div className="p-6">
              {item.urgent && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 mb-4">
                  Urgent Support
                </span>
              )}
              <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{item.description}</p>
              {item.contact && (
                <a
                  href={`tel:${item.contact}`}
                  className={`mt-4 inline-flex items-center text-sm font-medium ${
                    item.urgent ? 'text-red-600 hover:text-red-500' : 'text-primary hover:text-primary/80'
                  }`}
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  {item.contact}
                </a>
              )}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
                >
                  <GlobeAltIcon className="h-5 w-5 mr-2" />
                  Visit Website
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-12 text-center"
      >
        <p className="text-gray-500">
          If you're experiencing a medical emergency, please dial{' '}
          <a href="tel:911" className="text-primary hover:text-primary/80 font-medium">
            911
          </a>{' '}
          or visit your nearest emergency room.
        </p>
      </motion.div>
    </div>
  )
} 