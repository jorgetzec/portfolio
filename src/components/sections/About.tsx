import React from 'react';
import { motion } from 'framer-motion';
// import { DotGridHero } from '../layout/DotGridHero';
import { personalInfo } from '../../data/personal';
import { SectionTitle } from '../ui/SectionTitle';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 relative z-0">
      {/* <div className="absolute inset-0 -z-10">
        <DotGridHero />
      </div> */}
      <div className="container mx-auto max-w-4xl">
        <SectionTitle
          title="About Me"
          subtitle="A brief introduction to my work and interests"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-56 aspect-[8.5/11] mx-auto rounded-lg border border-smoke-gray overflow-hidden hover-subtle bg-white">
              <img
                src={`${import.meta.env.BASE_URL}images/profile/1000051895.jpg`}
                alt="Jorge Tzec"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <p className="text-lg text-charcoal/80 leading-relaxed">
              {personalInfo.bio}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

