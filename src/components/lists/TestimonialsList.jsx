import React, { useState, useEffect } from "react";
import TestimonialCard from "../page-components/TestimonialCard";
import testimonialData from "../../db/testimonials.json";

export default function TestimonialsList() {
  const [testimonials, setTestimonials] = useState(() => {
    return JSON.parse(localStorage.getItem("testimonialData"));
  });

  useEffect(() => {
    setTestimonials(testimonialData);
    localStorage.setItem("testimonialData", JSON.stringify(testimonialData));
  }, [testimonials]);
  return (
    <>
      {testimonials &&
        testimonials.map((item, index) => (
          <TestimonialCard
            key={item.id}
            img={item.img}
            fullName={item.fullName}
            jobTitle={item.jobTitle}
            twitterHandle={item.twitterHandle}
            text={item.text}
          />
        ))}
    </>
  );
}
