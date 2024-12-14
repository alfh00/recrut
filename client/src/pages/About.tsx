import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
              About <span className="text-blue-600">Recrut.ai</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Connecting Talent with Opportunity Since 2020
            </p>
            <p className="text-gray-600 mb-8">
              We're dedicated to transforming the way people find jobs and companies hire talent. 
              Our platform serves millions of job seekers and employers worldwide, making the job 
              search and recruitment process more efficient and effective.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">2M+</h3>
            <p className="text-gray-600">Active Users</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">90K+</h3>
            <p className="text-gray-600">Companies</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">500K+</h3>
            <p className="text-gray-600">Jobs Posted</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">1M+</h3>
            <p className="text-gray-600">Successful Hires</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <MapPin className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Location</h3>
            <p className="text-gray-600 text-center">123 Business Avenue, Tech City, TC 12345</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <Phone className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Phone Number</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <Mail className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email Address</h3>
            <p className="text-gray-600">contact@jobconnect.com</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <Clock className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
            <p className="text-gray-600">Mon - Fri: 9AM - 6PM</p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            At JobConnect, we believe everyone deserves to find work that brings out their best. 
            Our mission is to create economic opportunities for every member of the global workforce.
          </p>
          <p className="text-gray-600">
            We're building the world's most efficient job marketplace by connecting the right talent 
            with the right opportunities, fostering career growth and driving business success.
          </p>
        </div>
      </div>
    </div>
  )
}

