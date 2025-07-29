import React, { useState, useEffect } from "react";
// *Components
import TestimonialCard from "../page-components/TestimonialCard";
import Button from "../Button";
import ErrorBoundaries from "../Custom/Hooks/ErrorBoundaries";
// *Data
import testimonialData from "../../db/testimonials.json";

export default function TestimonialsList() {
  const [testimonials, setTestimonials] = useState(() => {
    return JSON.parse(localStorage.getItem("testimonialData"));
  });

  // *Data state
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  let parseData;

  const getLocalData = () => {
    setIsLoading(true);
    setHasError(false);
    // simulate random error
    function getRandomInt() {
      return Math.floor(Math.random() * 4);
    }

    setTimeout(() => {
      parseData = JSON.parse(localStorage.getItem("testimonialData"));
      // setData(parseData);
      if (getRandomInt() < 2) {
        setHasError(true);
      } else {
        setData(parseData);
      }
      setIsLoading(false);
    }, 2000);
    console.log(data);
  };

  useEffect(() => {
    // setTestimonials(testimonialData);
    localStorage.setItem("testimonialData", JSON.stringify(testimonialData));
    const fetchData = async () => {
      try {
        setIsLoading(true);
        getLocalData();
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setHasError(error);
      }
    };
    fetchData();
  }, [!data]);

  if (isLoading) {
    return <div className="alert alert-warning">Loading...</div>;
  }

  // if (hasError) {
  //   return (
  //     <div className="alert alert-danger">
  //       <p className="mr-1">Something went wrong</p>
  //       <Button text={"Try again"} onClick={getLocalData} />
  //     </div>
  //   );
  // }
  return (
    <>
      {/* {!hasError &&
        data &&
        data.map((item, index) => (
          <TestimonialCard
            key={item.id}
            img={item.img}
            fullName={item.fullName}
            jobTitle={item.jobTitle}
            twitterHandle={item.twitterHandle}
            text={item.text}
          />
        ))} */}
      <ErrorBoundaries hasError={hasError} handleError={getLocalData}>
        {data &&
          data.map((item, index) => (
            <TestimonialCard
              key={item.id}
              img={item.img}
              fullName={item.fullName}
              jobTitle={item.jobTitle}
              twitterHandle={item.twitterHandle}
              text={item.text}
            />
          ))}
      </ErrorBoundaries>
    </>
  );
}
