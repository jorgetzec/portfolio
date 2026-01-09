import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
// import { DotGridHero } from '../layout/DotGridHero';
import { SectionTitle } from '../ui/SectionTitle';
import { Button } from '../ui/Button';
import { personalInfo } from '../../data/personal';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    // TODO: Integrate with email service (EmailJS, etc.)
    console.log('Form data:', data);
    alert('Thank you for your message! I will get back to you soon.');
    reset();
  };

  return (
    <section id="contact" className="py-20 px-6 relative z-0">
      {/* <div className="absolute inset-0 -z-10">
        <DotGridHero />
      </div> */}
      <div className="container mx-auto max-w-4xl">
        <SectionTitle
          title="Contact"
          subtitle="Get in touch with me"
        />

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register('name', { required: 'Name is required' })}
              className="w-full px-4 py-2 border border-smoke-gray rounded-md bg-white text-charcoal focus:outline-none focus:border-charcoal transition-colors"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-reddish">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              className="w-full px-4 py-2 border border-smoke-gray rounded-md bg-white text-charcoal focus:outline-none focus:border-charcoal transition-colors"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-reddish">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-charcoal mb-2">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              {...register('subject', { required: 'Subject is required' })}
              className="w-full px-4 py-2 border border-smoke-gray rounded-md bg-white text-charcoal focus:outline-none focus:border-charcoal transition-colors"
            />
            {errors.subject && (
              <p className="mt-1 text-sm text-reddish">{errors.subject.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              {...register('message', { required: 'Message is required' })}
              className="w-full px-4 py-2 border border-smoke-gray rounded-md bg-white text-charcoal focus:outline-none focus:border-charcoal transition-colors resize-none"
            />
            {errors.message && (
              <p className="mt-1 text-sm text-reddish">{errors.message.message}</p>
            )}
          </div>

          <Button type="submit" variant="primary" className="w-full">
            Send Message
          </Button>
        </motion.form>

        <div className="mt-12 text-center">
          <p className="text-charcoal/70 mb-4">Or reach me directly at:</p>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-reddish hover:underline"
          >
            {personalInfo.email}
          </a>
        </div>
      </div>
    </section>
  );
};

