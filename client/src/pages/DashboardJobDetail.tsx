import { useParams } from 'react-router';

export default function DashboardJobDetail() {
  const { jobId } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  alt="Company logo"
                  className="w-12 h-12"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Job Details - {jobId}
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Company Description
                </p>
              </div>
            </div>
            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              Apply
            </button>
          </div>

          {/* Job Details Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Job Description:
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-400">
                  Detailed job description will go here...
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Requirements:
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-400">
                  Job requirements will go here...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  
  