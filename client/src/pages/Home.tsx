import { Search, MapPin, Briefcase, ChevronDown, ArrowRight } from 'lucide-react'
import { NavLink } from 'react-router'
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">


      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Dream Job</h1>
          <p className="text-xl mb-8">Thousands of jobs available.</p>
          <div className="bg-white rounded-lg p-4 max-w-4xl mx-auto flex flex-wrap items-center justify-between">
            <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
              <Search className="text-gray-400 mr-2" />
              <input type="text" placeholder="Job title, keywords, or company" className="w-full md:w-64 text-gray-800 focus:outline-none" />
            </div>
            <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
              <MapPin className="text-gray-400 mr-2" />
              <input type="text" placeholder="City or postcode" className="w-full md:w-48 text-gray-800 focus:outline-none" />
            </div>
            <button className="w-full md:w-auto bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
              Find Jobs
            </button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Job Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Accounting', 'Marketing', 'Design', 'Development', 'Human Resource', 'Automotive', 'Customer Service', 'Health and Care'].map((category) => (
              <div key={category} className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                <Briefcase className="mx-auto mb-4 text-blue-600" size={40} />
                <h3 className="font-semibold mb-2">{category}</h3>
                <p className="text-gray-500">(20 open positions)</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Jobs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((job) => (
              <div key={job} className="bg-white p-6 rounded-lg shadow-sm flex items-start hover:shadow-md transition-shadow">
                <img src={`https://via.placeholder.com/60`} alt="Company logo" className="w-15 h-15 rounded-full mr-4" />
                <div className="flex-grow">
                  <h3 className="font-semibold mb-2">Software Engineer</h3>
                  <p className="text-gray-500 mb-2">Acme Inc. • New York, NY</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Full-time</span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">$50k-$70k</span>
                  </div>
                </div>
                <button className="text-blue-600 hover:underline">Apply</button>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <NavLink to="/jobs" className="inline-flex items-center text-blue-600 hover:underline">
              Browse All Jobs <ArrowRight className="ml-2" size={16} />
            </NavLink>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Create Account', description: 'Sign up for free, set up your profile.' },
              { title: 'Find Jobs', description: 'Browse and apply to jobs that match your skills.' },
              { title: 'Save & Apply', description: 'Save jobs and apply with just one click.' },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  )
}


