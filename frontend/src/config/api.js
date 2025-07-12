// API configuration
const API_BASE_URL = import.meta.env.PROD
  ? '/api'  // For production (Vercel)
  : 'http://localhost:3000/api';  // For development

export const API_ENDPOINTS = {
  education: `${API_BASE_URL}/education`,
  skills: `${API_BASE_URL}/skills`,
  projects: `${API_BASE_URL}/projects`
};
