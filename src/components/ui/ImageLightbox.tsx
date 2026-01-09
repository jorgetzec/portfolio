import React from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface ImageLightboxProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  images,
  isOpen,
  onClose,
  initialIndex = 0,
}) => {
  const slides = images.map((src) => ({ src }));

  return (
    <Lightbox
      open={isOpen}
      close={onClose}
      slides={slides}
      index={initialIndex}
    />
  );
};

