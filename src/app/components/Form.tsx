// components/Form.tsx
'use client';

import { useState } from 'react';

export default function Form() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Імітація надсилання
    setTimeout(() => {
      setStatus('success');
      // Очищення через 3 секунди
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="animate-in fade-in zoom-in py-12 text-center duration-500">
        <div className="text-brand-light mb-4 text-4xl">✓</div>
        <h4 className="text-xl font-bold uppercase">Thank you!</h4>
        <p className="mt-2 text-gray-400">
          Your message has been sent successfully.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="group relative">
          <input
            type="text"
            placeholder="Full Name"
            className="input-item py-1"
            required
            disabled={status === 'sending'}
          />
        </div>

        <div className="group relative">
          <input
            type="email"
            placeholder="Email Address"
            className="input-item py-1"
            required
            disabled={status === 'sending'}
          />
        </div>

        <div className="group relative">
          <textarea
            placeholder="How can we help you?"
            rows={4}
            className="input-item resize-none py-1"
            required
            disabled={status === 'sending'}
          ></textarea>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn btn-primary"
      >
        {status === 'sending' ? (
          <span className="flex items-center gap-2">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
}
