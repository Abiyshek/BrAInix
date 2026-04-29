import React from 'react';
import { Star } from 'lucide-react';

export function StarRating() {
  return (
    <div className="stars">
      {[...Array(5)].map((_,i) => <Star key={i} size={13} fill="#F59E0B" color="#F59E0B" />)}
    </div>
  );
}
