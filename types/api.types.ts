export interface EnquireRequest {
  name: string;
  email: string;
  company: string;
  teamSize: string;
  trainingArea: string;
  message?: string;
}

export interface EnquireResponse {
  success: boolean;
  message?: string;
  error?: string;
  details?: Record<string, string>;
}
