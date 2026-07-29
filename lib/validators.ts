import { EnquireRequest } from '@/types/api.types';

export function validateEnquireForm(data: Partial<EnquireRequest>): Record<string, string> {
  const errors: Record<string, string> = {};

  if (!data.name || !data.name.trim()) {
    errors.name = 'Full name is required';
  }

  if (!data.email || !data.email.trim()) {
    errors.email = 'Work email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = 'Please enter a valid work email address';
  }

  if (!data.company || !data.company.trim()) {
    errors.company = 'Company name is required';
  }

  if (!data.teamSize || !data.teamSize.trim()) {
    errors.teamSize = 'Please select your team size';
  }

  if (!data.trainingArea || !data.trainingArea.trim()) {
    errors.trainingArea = 'Please select a primary training area';
  }

  return errors;
}
