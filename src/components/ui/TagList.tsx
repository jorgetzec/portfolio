import React from 'react';
import { Badge } from './Badge';

interface TagListProps {
  tags: string[];
  className?: string;
}

export const TagList: React.FC<TagListProps> = ({ tags, className = '' }) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag, index) => (
        <Badge key={index} variant="default">
          {tag}
        </Badge>
      ))}
    </div>
  );
};

