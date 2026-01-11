import React from 'react';
import Card from '../shared/Card';
import { Avatar } from '../shared/ImagePlaceholder';

const TestimonialCard = ({ testimonial }) => {
  if (!testimonial) return null;

  const {
    name,
    age,
    location,
    image,
    rating,
    treatment,
    date,
    testimonial: text,
    parentName,
  } = testimonial;

  const stars = Array.from({ length: 5 }, (_, i) => i < rating);

  return (
    <Card
      padding="lg"
      className="h-full bg-white/95 backdrop-blur border border-neutral-100 shadow-soft"
    >
      <div className="flex flex-col gap-4 h-full">
        {/* Header */}
        <div className="flex items-center gap-3">
          <Avatar
            src={image}
            alt={name}
            name={name}
            size="md"
            className="shadow-soft border border-neutral-100"
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <p className="text-sm font-semibold text-neutral-900">
                {name}
              </p>
              {parentName && (
                <span className="text-[10px] text-neutral-500">
                  (Parent: {parentName})
                </span>
              )}
            </div>
            <p className="text-[11px] text-neutral-500">
              {age} yrs · {location}
            </p>
            <p className="text-[11px] text-primary-600 font-medium">
              {treatment}
            </p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 text-xs">
          {stars.map((filled, index) => (
            <span
              key={index}
              className={filled ? 'text-yellow-400' : 'text-neutral-300'}
            >
              ★
            </span>
          ))}
          <span className="ml-2 text-[11px] text-neutral-500">
            {rating}.0 / 5 · {date}
          </span>
        </div>

        {/* Text */}
        <p className="text-xs md:text-sm text-neutral-600 leading-relaxed flex-1">
          “{text}”
        </p>

        {/* Footer */}
        <div className="pt-2 flex items-center justify-between text-[11px] text-neutral-500">
          <span>Verified patient</span>
          <span className="inline-flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Care received at GP Nursing Hospital
          </span>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;
