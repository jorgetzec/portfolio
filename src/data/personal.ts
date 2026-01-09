export interface PersonalInfo {
  name: string;
  tagline: string;
  location: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  available: boolean;
}

export const personalInfo: PersonalInfo = {
  name: 'Jorge Tzec',
  tagline: 'Bioinformatician, Developer & Data Scientist',
  location: 'Yucatán, México',
  bio: 'Bioinformatician and data scientist working at the intersection of computational biology, web development, and scientific tool creation. Passionate about open science, scientific education, and building accessible research tools that bridge the gap between data and discovery.',
  email: 'jorgetzec@gmail.com',
  github: 'https://github.com/jorgetzec',
  linkedin: 'https://www.linkedin.com/in/jorgetzec/',
  available: true,
};

