import { create } from 'zustand'
import { getProfile, updateProfile } from '../services/profileApi'
import { Profile } from '../types'

interface ProfileStore {
  profile: Profile | null
  isLoading: boolean
  error: string | null
  getProfile: () => Promise<void>
  updateProfile: (data: Partial<Profile>) => Promise<void>
}

export default create<ProfileStore>((set) => ({
  profile: null,
  isLoading: false,
  error: null,

  getProfile: async () => {
    set({ isLoading: true, error: null })
    try {
      const profile = await getProfile()
      set({ profile, isLoading: false })
    } catch (error) {
      set({ error: 'Failed to fetch profile', isLoading: false })
    }
  },

  updateProfile: async (data) => {
    set({ isLoading: true, error: null })
    try {
      const updatedProfile = await updateProfile(data)
      set({ profile: updatedProfile, isLoading: false })
    } catch (error) {
      set({ error: 'Failed to update profile', isLoading: false })
    }
  },

  // addSkill: () => {
  //   const { profile } = get()
  //   if (!profile) return
  //   set({
  //     profile: {
  //       ...profile,
  //       skills: [...profile.skills, { id: Date.now(), name: '', years: 0 }]
  //     }
  //   })
  // },

  // addExperience: () => {
  //   const { profile } = get()
  //   if (!profile) return
  //   set({
  //     profile: {
  //       ...profile,
  //       experiences: [...profile.experiences, { 
  //         id: Date.now(), 
  //         title: '', 
  //         date: new Date().toISOString().split('T')[0],
  //         description: '' 
  //       }]
  //     }
  //   })
  // },

  // addEducation: () => {
  //   const { profile } = get()
  //   if (!profile) return
  //   set({
  //     profile: {
  //       ...profile,
  //       education: [...profile.education, { 
  //         id: Date.now(), 
  //         diploma: '', 
  //         date: new Date().toISOString().split('T')[0],
  //         description: '' 
  //       }]
  //     }
  //   })
  // },

  // updateField: (field, value) => {
  //   const { profile } = get()
  //   if (!profile) return
  //   set({
  //     profile: { ...profile, [field]: value }
  //   })
  // }
})) 