'use client'

import { useState } from 'react'
import { FaceSmileIcon, FaceFrownIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const moods = [
  {
    name: 'Good',
    value: 'good',
    icon: FaceSmileIcon,
    color: 'text-green-500',
    bgColor: 'bg-green-100',
    description: 'I feel positive and energetic',
  },
  {
    name: 'Okay',
    value: 'okay',
    icon: FaceSmileIcon,
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-100',
    description: 'I feel neutral or balanced',
  },
  {
    name: 'Not Great',
    value: 'bad',
    icon: FaceFrownIcon,
    color: 'text-red-500',
    bgColor: 'bg-red-100',
    description: 'I feel down or stressed',
  },
]

const activities = [
  'Study/Work', 'Exercise', 'Social', 'Rest', 'Entertainment', 'Hobbies'
]

export default function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState('')
  const [selectedActivities, setSelectedActivities] = useState<string[]>([])
  const [note, setNote] = useState('')

  const handleActivityToggle = (activity: string) => {
    setSelectedActivities(prev => 
      prev.includes(activity)
        ? prev.filter(a => a !== activity)
        : [...prev, activity]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically save the mood data
    console.log({
      mood: selectedMood,
      activities: selectedActivities,
      note,
      timestamp: new Date().toISOString()
    })
    // Reset form
    setSelectedMood('')
    setSelectedActivities([])
    setNote('')
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl font-bold text-gray-900">How are you feeling today?</h1>
        <p className="mt-2 text-lg text-gray-600">Track your mood to better understand your emotional patterns</p>
      </motion.div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Mood Selection */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 max-w-3xl mx-auto">
          {moods.map((mood, index) => (
            <motion.button
              key={mood.value}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedMood(mood.value)}
              className={`card hover:shadow-md transition-all transform hover:-translate-y-1 cursor-pointer
                ${selectedMood === mood.value ? mood.bgColor + ' ring-2 ring-offset-2 ring-' + mood.color.split('-')[1] + '-500' : 'bg-white'}`}
            >
              <div className="flex flex-col items-center p-6">
                <mood.icon className={`h-12 w-12 ${mood.color}`} />
                <h3 className="mt-4 text-lg font-medium text-gray-900">{mood.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{mood.description}</p>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Activities */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">What have you been up to?</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {activities.map((activity) => (
              <button
                key={activity}
                type="button"
                onClick={() => handleActivityToggle(activity)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                  ${selectedActivities.includes(activity)
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {activity}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Notes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Add a Note</h2>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              rows={4}
              placeholder="How are you feeling? What's on your mind? (optional)"
            />
            <div className="mt-4 flex justify-end">
              <button
                type="submit"
                className="btn-primary"
                disabled={!selectedMood}
              >
                Log Mood
              </button>
            </div>
          </div>
        </motion.div>
      </form>

      {/* Mood History */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-12 max-w-3xl mx-auto"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Your Recent Moods</h2>
        <div className="space-y-4">
          {/* Sample mood entries */}
          <div className="card flex items-center justify-between animate-slide-up">
            <div className="flex items-center">
              <FaceSmileIcon className="h-8 w-8 text-green-500 mr-4" />
              <div>
                <p className="font-medium">Good</p>
                <div className="flex gap-2 mt-1">
                  <span className="badge badge-success">Exercise</span>
                  <span className="badge badge-success">Social</span>
                </div>
              </div>
            </div>
            <time className="text-sm text-gray-500">Today, 2:30 PM</time>
          </div>
        </div>
      </motion.div>
    </div>
  )
} 