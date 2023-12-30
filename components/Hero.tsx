import Image from "next/image";
import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="max-container padding-container flex flex-col gap-20 pb-32 py-10 border-2 border-red-500">
      <div className="hero-map" />
      {/* Left side */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 border-2 border-red-500">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">Putuk Truno Camp Area</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={25}
                  height={25}
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span> Excellent Reviews</span>
          </p>
          <div className="flex flex-col w-full gap-3 sm:flex-row">
            <Button type="button" title="Download App" variant="btn_green" />
            <Button
              type="button"
              title="How we work?"
              icon="/play.svg"
              variant="btn_white_green"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
