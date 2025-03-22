import { PencilSquareIcon, BookOpenIcon } from '@heroicons/react/24/outline'

const sampleEntries = [
  {
    id: 1,
    title: 'First Day of Finals Week',
    excerpt: 'Today was challenging but I managed to stay focused...',
    date: '2024-02-20',
    mood: 'Determined',
  },
  {
    id: 2,
    title: 'Group Project Success',
    excerpt: 'Our team finally completed the major milestone...',
    date: '2024-02-19',
    mood: 'Excited',
  },
]

export default function Journal() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Journal</h1>
          <p className="mt-2 text-lg text-gray-600">A safe space for your thoughts and reflections</p>
        </div>
        <button className="btn-primary inline-flex items-center">
          <PencilSquareIcon className="h-5 w-5 mr-2" />
          New Entry
        </button>
      </div>

      {/* New Entry Form */}
      <div className="card mb-8">
        <div className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="Give your entry a title"
            />
          </div>
          <div>
            <label htmlFor="entry" className="block text-sm font-medium text-gray-700">
              What's on your mind?
            </label>
            <textarea
              id="entry"
              rows={6}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="Write your thoughts here..."
            />
          </div>
          <div>
            <label htmlFor="mood" className="block text-sm font-medium text-gray-700">
              Current Mood
            </label>
            <select
              id="mood"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            >
              <option value="">Select a mood</option>
              <option value="happy">Happy</option>
              <option value="anxious">Anxious</option>
              <option value="stressed">Stressed</option>
              <option value="motivated">Motivated</option>
              <option value="tired">Tired</option>
            </select>
          </div>
          <div className="flex justify-end space-x-3">
            <button className="btn-secondary">Save as Draft</button>
            <button className="btn-primary">Publish Entry</button>
          </div>
        </div>
      </div>

      {/* Journal Entries List */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">Recent Entries</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {sampleEntries.map((entry) => (
            <div key={entry.id} className="card hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <BookOpenIcon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-medium text-gray-900">{entry.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{entry.excerpt}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {entry.mood}
                    </span>
                    <time className="text-sm text-gray-500">{entry.date}</time>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 