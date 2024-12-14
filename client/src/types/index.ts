// Authentication
export interface AuthResponse {
access: string;
refresh: string;
user: User;
}

export interface LoginCredentials {
email: string;
password: string;
}

export interface RegisterCredentials extends LoginCredentials {
first_name: string;
last_name: string;
is_recruter: boolean;
}

// User
export interface User {
id: number;
email: string;
first_name: string;
last_name: string;
is_recruiter: boolean;
}

// Profile
export interface Skill {
    id: number;
    name: string;
    years: number;
  }
  
export interface Experience {
    id: number;
    title: string;
    date: string;
    description: string;
  }
  
export interface Education {
    id: number;
    diploma: string;
    date: string;
    description: string;
  }
  
export interface Profile {
    id: number;
    user: number;
    desired_position: string;
    min_salary: string;
    max_salary: string;
    experience_years: number;
    skills: Skill[];
    experiences: Experience[];
    education: Education[];
  }

