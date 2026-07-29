'use client';

import React, { useState } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { validateEnquireForm } from '@/lib/validators';
import { EnquireRequest, EnquireResponse } from '@/types/api.types';
import { domainHubs } from '@/data/domain-hubs';

interface EnquiryFormProps {
  onSuccess?: () => void;
}

export function EnquiryForm({ onSuccess }: EnquiryFormProps) {
  const [formData, setFormData] = useState<EnquireRequest>({
    name: '',
    email: '',
    company: '',
    teamSize: '',
    trainingArea: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [serverError, setServerError] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError('');

    const validationErrors = validateEnquireForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch('/api/enquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data: EnquireResponse = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        if (onSuccess) onSuccess();
      } else {
        setStatus('error');
        if (data.details) {
          setErrors(data.details);
        } else {
          setServerError(data.error || 'Submission failed. Please try again.');
        }
      }
    } catch (err) {
      console.error('Submit error:', err);
      setStatus('error');
      setServerError('Network error. Please check your connection and try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="py-8 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-success-50 text-success-500 flex items-center justify-center mx-auto border border-success-100">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-neutral-900">Enquiry Received!</h3>
        <p className="text-sm text-neutral-600 max-w-sm mx-auto leading-relaxed">
          Thank you for reaching out. An Accredian L&D Executive will contact you within 24 hours to schedule your consultation.
        </p>
        <div className="pt-4">
          <Button
            variant="secondary"
            size="md"
            onClick={() => {
              setStatus('idle');
              setFormData({
                name: '',
                email: '',
                company: '',
                teamSize: '',
                trainingArea: '',
                message: '',
              });
            }}
          >
            Submit Another Enquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left" noValidate>
      {serverError && (
        <div className="p-3 rounded-lg bg-error-50 border border-error-500/30 text-error-700 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-xs font-semibold text-neutral-700 mb-1">
          Full Name <span className="text-error-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          disabled={status === 'loading'}
          placeholder="e.g. Sarah Jenkins"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent disabled:opacity-50"
        />
        {errors.name && (
          <p id="name-error" className="text-xs text-error-500 mt-1">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-xs font-semibold text-neutral-700 mb-1">
          Work Email <span className="text-error-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled={status === 'loading'}
          placeholder="s.jenkins@company.com"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent disabled:opacity-50"
        />
        {errors.email && (
          <p id="email-error" className="text-xs text-error-500 mt-1">
            {errors.email}
          </p>
        )}
      </div>

      {/* Company & Team Size */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="company" className="block text-xs font-semibold text-neutral-700 mb-1">
            Company Name <span className="text-error-500">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            disabled={status === 'loading'}
            placeholder="e.g. Acme Corp"
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? 'company-error' : undefined}
            className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent disabled:opacity-50"
          />
          {errors.company && (
            <p id="company-error" className="text-xs text-error-500 mt-1">
              {errors.company}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="teamSize" className="block text-xs font-semibold text-neutral-700 mb-1">
            Team Size <span className="text-error-500">*</span>
          </label>
          <select
            id="teamSize"
            name="teamSize"
            value={formData.teamSize}
            onChange={handleChange}
            disabled={status === 'loading'}
            aria-invalid={!!errors.teamSize}
            aria-describedby={errors.teamSize ? 'teamSize-error' : undefined}
            className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent disabled:opacity-50"
          >
            <option value="">Select team size</option>
            <option value="1-50">1 - 50 employees</option>
            <option value="51-200">51 - 200 employees</option>
            <option value="201-500">201 - 500 employees</option>
            <option value="500+">500+ employees</option>
          </select>
          {errors.teamSize && (
            <p id="teamSize-error" className="text-xs text-error-500 mt-1">
              {errors.teamSize}
            </p>
          )}
        </div>
      </div>

      {/* Training Area */}
      <div>
        <label htmlFor="trainingArea" className="block text-xs font-semibold text-neutral-700 mb-1">
          Primary Training Area <span className="text-error-500">*</span>
        </label>
        <select
          id="trainingArea"
          name="trainingArea"
          value={formData.trainingArea}
          onChange={handleChange}
          disabled={status === 'loading'}
          aria-invalid={!!errors.trainingArea}
          aria-describedby={errors.trainingArea ? 'trainingArea-error' : undefined}
          className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent disabled:opacity-50"
        >
          <option value="">Select training focus</option>
          {domainHubs.map((hub) => (
            <option key={hub.id} value={hub.title}>
              {hub.title}
            </option>
          ))}
          <option value="Custom Enterprise Cohort">Custom Enterprise Cohort</option>
        </select>
        {errors.trainingArea && (
          <p id="trainingArea-error" className="text-xs text-error-500 mt-1">
            {errors.trainingArea}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-neutral-700 mb-1">
          Message / Special Requirements
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          disabled={status === 'loading'}
          placeholder="Tell us about your team's specific goals or timeline..."
          className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent resize-none disabled:opacity-50"
        />
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          loading={status === 'loading'}
          className="w-full justify-center"
        >
          Submit Enterprise Enquiry
        </Button>
      </div>
    </form>
  );
}
