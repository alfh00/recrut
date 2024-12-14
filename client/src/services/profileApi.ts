import api from './api';
import { BASE_URL } from './api';
import { Profile } from '../types';

const PROFILE_ENDPOINTS = {
    profile: BASE_URL + '/profile/'
  };

export const getProfile = async (): Promise<Profile> => {
  const response = await api.get(PROFILE_ENDPOINTS.profile);
  return response.data;
};

export const updateProfile = async (profileData: Partial<Profile>): Promise<Profile> => {
  const response = await api.put(PROFILE_ENDPOINTS.profile, profileData);
  return response.data;
};
