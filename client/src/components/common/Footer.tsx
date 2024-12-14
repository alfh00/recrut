import { NavLink } from "react-router"

const Footer = () => {
  return (
    
    <footer className="border-t pt-12 pb-8 border-secondary dark:border-dark-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Recrut.ai</h3>
              <p className="text-gray-400">Find the most exciting jobs.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Candidates</h4>
              <ul className="space-y-2">
                <li><NavLink to="/browse-jobs" className="text-gray-400 hover:text-white">Browse Jobs</NavLink></li>
                <li><NavLink to="/browse-categories" className="text-gray-400 hover:text-white">Browse Categories</NavLink></li>
                <li><NavLink to="/candidate-dashboard" className="text-gray-400 hover:text-white">Candidate Dashboard</NavLink></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Employers</h4>
              <ul className="space-y-2">
                <li><NavLink to="/post-job" className="text-gray-400 hover:text-white">Post a Job</NavLink></li>
                <li><NavLink to="/browse-candidates" className="text-gray-400 hover:text-white">Browse Candidates</NavLink></li>
                <li><NavLink to="/employer-dashboard" className="text-gray-400 hover:text-white">Employer Dashboard</NavLink></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">About Us</h4>
              <ul className="space-y-2">
                <li><NavLink to="/about" className="text-gray-400 hover:text-white">About Company</NavLink></li>
                
              </ul>
            </div>
          </div>
          <div className="mt-4 text-center text-gray-400">
            <p>&copy; 2024 Recrut.ai. All rights reserved.</p>
          </div>
        </div>
    </footer>
  )
}

export default Footer