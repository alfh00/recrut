import { useEffect } from 'react'
import { Plus } from 'lucide-react'
import useProfileStore from '../stores/useProfileStore'
import useAuthStore from '../stores/useAuthStore'
import { User } from '../types'

export default function CandidateProfile() {
  const { 
    profile, 
    isLoading, 
    error,
    getProfile, 
    updateProfile,
 
  } = useProfileStore()

  const {first_name, last_name} = useAuthStore<User>((state)=> state.user as User)

  useEffect(() => {
    getProfile()
  }, [getProfile])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!profile) return <div>No profile data</div>

  return (
    <div className="flex flex-col py-10 px-36 bg-primary dark:bg-dark-primary">
      <form className="space-y-4" onSubmit={(e) => {
        e.preventDefault();
        updateProfile(profile);
      }}>
        <h2 className="text-2xl font-semibold text-center text-primary-content dark:text-dark-primary-content">
          Mon CV
        </h2>

        {error && (
          <div className="text-red-500 text-center text-sm">
            {error}
          </div>
        )}

        {/* Profile inputs */}
        <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Prénom
          </label>
          <input
            id="firstname"
            type="text"
            className="w-full px-3 py-2 border border-secondary rounded-md shadow-sm placeholder-secondary-content focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-dark-secondary dark:border-dark-secondary dark:text-dark-primary-content"
            value={first_name}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Nom
          </label>
          <input
            id="lastname"
            type="text"
            className="w-full px-3 py-2 border border-secondary rounded-md shadow-sm placeholder-secondary-content focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-dark-secondary dark:border-dark-secondary dark:text-dark-primary-content"
            value={last_name}
          />
        </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="position" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Poste recherché
          </label>
          <input
            id="position"
            type="text"
            className="w-full px-3 py-2 border border-secondary rounded-md shadow-sm placeholder-secondary-content focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-dark-secondary dark:border-dark-secondary dark:text-dark-primary-content"
            value={profile.desired_position}
            onChange={(e) => {/* Handle position update */}}
          />
        </div>

        {/* Salary Range */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="min-salary" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Salaire Min
            </label>
            <input
              id="min-salary"
              type="number"
              className="w-full px-3 py-2 border border-secondary rounded-md shadow-sm placeholder-secondary-content focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-dark-secondary dark:border-dark-secondary dark:text-dark-primary-content"
              value={profile.min_salary}
              onChange={(e) => {/* Handle min salary update */}}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="max-salary" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Salaire Max
            </label>
            <input
              id="max-salary"
              type="number"
              className="w-full px-3 py-2 border border-secondary rounded-md shadow-sm placeholder-secondary-content focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-dark-secondary dark:border-dark-secondary dark:text-dark-primary-content"
              value={profile.max_salary}
              onChange={(e) => {/* Handle max salary update */}}
            />
          </div>
        </div>

        {/* Skills Section */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Compétences
            </label>
            <button
              type="button"
              className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
          <div className="space-y-2">
            {profile?.skills?.map((skill) => (
              <div key={skill.id} className="flex gap-2">
                <input
                  type="text"
                  value={skill.name}
                  onChange={(e) => {/* Handle skill update */}}
                  placeholder="Compétence"
                  className="flex-1 px-3 py-2 border border-secondary rounded-md shadow-sm placeholder-secondary-content focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-dark-secondary dark:border-dark-secondary dark:text-dark-primary-content"
                />
                <input
                  type="number"
                  value={skill.years}
                  onChange={(e) => {/* Handle years update */}}
                  placeholder="Années"
                  className="w-24 px-3 py-2 border border-secondary rounded-md shadow-sm placeholder-secondary-content focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-dark-secondary dark:border-dark-secondary dark:text-dark-primary-content"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Expériences
            </label>
            <button
              type="button"
              className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
          <div className="space-y-4">
            {profile?.experiences?.map((experience) => (
              <div key={experience.id} className="space-y-2 p-4 border border-secondary rounded-md dark:border-dark-secondary">
                <input
                  type="text"
                  value={experience.title}
                  onChange={(e) => {/* Handle title update */}}
                  placeholder="Titre du poste"
                  className="w-full px-3 py-2 border border-secondary rounded-md shadow-sm placeholder-secondary-content focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-dark-secondary dark:border-dark-secondary dark:text-dark-primary-content"
                />
                <input
                  type="date"
                  value={experience.date}
                  onChange={(e) => {/* Handle date update */}}
                  className="w-full px-3 py-2 border border-secondary rounded-md shadow-sm placeholder-secondary-content focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-dark-secondary dark:border-dark-secondary dark:text-dark-primary-content"
                />
                <textarea
                  value={experience.description}
                  onChange={(e) => {/* Handle description update */}}
                  placeholder="Description"
                  rows={3}
                  className="w-full px-3 py-2 border border-secondary rounded-md shadow-sm placeholder-secondary-content focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-dark-secondary dark:border-dark-secondary dark:text-dark-primary-content"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Formation
            </label>
            <button
              type="button"
              className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
          <div className="space-y-4">
            {profile?.education?.map((edu) => (
              <div key={edu.id} className="space-y-2 p-4 border border-secondary rounded-md dark:border-dark-secondary">
                <input
                  type="text"
                  value={edu.diploma}
                  onChange={(e) => {/* Handle diploma update */}}
                  placeholder="Diplôme"
                  className="w-full px-3 py-2 border border-secondary rounded-md shadow-sm placeholder-secondary-content focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-dark-secondary dark:border-dark-secondary dark:text-dark-primary-content"
                />
                <input
                  type="date"
                  value={edu.date}
                  onChange={(e) => {/* Handle date update */}}
                  className="w-full px-3 py-2 border border-secondary rounded-md shadow-sm placeholder-secondary-content focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-dark-secondary dark:border-dark-secondary dark:text-dark-primary-content"
                />
                <textarea
                  value={edu.description}
                  onChange={(e) => {/* Handle description update */}}
                  placeholder="Description"
                  rows={3}
                  className="w-full px-3 py-2 border border-secondary rounded-md shadow-sm placeholder-secondary-content focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-dark-secondary dark:border-dark-secondary dark:text-dark-primary-content"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Save Profile
        </button>

        {/* ... rest of the form sections (skills, experience, education) with updated styling ... */}
      </form>
    </div>
  )
}




