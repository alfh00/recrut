import { useNavigate } from 'react-router';

export default function JobListings() {
  const navigate = useNavigate();
  const jobs = [
    {
      id: 1,
      company: "Entreprise",
      title: "Offre",
      description: "Le Lorem Ipsum est simplement du faux texte employé ...",
      logo: "/placeholder.svg"
    },
    {
      id: 2,
      company: "Entreprise",
      title: "Offre",
      description: "Le Lorem Ipsum est simplement du faux texte employé ...",
      logo: "/placeholder.svg"
    },
    {
      id: 3,
      company: "Entreprise",
      title: "Offre",
      description: "Le Lorem Ipsum est simplement du faux texte employé ...",
      logo: "/placeholder.svg"
    },
    {
      id: 4,
      company: "Entreprise",
      title: "Offre",
      description: "Le Lorem Ipsum est simplement du faux texte employé ...",
      logo: "/placeholder.svg"
    }
  ];

  const handleViewJob = (jobId: number) => {
    navigate(`/dashboard/job/${jobId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Liste Offre d&apos;emplois
          </h1>

          {/* Filters */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
              Filtre Offre d&apos;emplois
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Poste"
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <input
                type="text"
                placeholder="Salaire"
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => handleViewJob(job.id)}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <img
                      src={job.logo}
                      alt={`${job.company} logo`}
                      className="w-8 h-8"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {job.company} - {job.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      {job.description}
                    </p>
                  </div>
                </div>
                <button 
                  className="px-4 py-2 bg-green-100 text-green-800 rounded-md hover:bg-green-200 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleViewJob(job.id);
                  }}
                >
                  Voir
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

