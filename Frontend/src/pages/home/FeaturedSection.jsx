import React from "react";
import FeaturedImg from "/pineapple-pizza.png"
const FeaturedSection = () => {
  return (
    <div className="overflow-hidden flex md:flex-row flex-col justify-between items-center sm:my20 my-4 md:gap-20 gap-12 px-5 lg:px-10">
      <div className="relative">
        {/* <div className="absolute top-4 left-5 bg-white text-secondary px-3rounded md:uppercase tracking-wider">Featured Recipie</div> */}
        <img src={FeaturedImg} alt="Featured Image" className="rounded"/>
      </div>
      <div className="text-start sm:w-1/2">
        <h2 className="text-3x1 font-semibold text-secondary sm:text-5x1 sm: leading-relaxed">
          Pineapple + Smoked Jackfruit Pizza
        </h2>
        <p className="text-xl mt-4 text-[#5c5c5c]">
          The pain itself will be followed. Praesent mattis nibh vestibulum
          euismod morbi ullamcorper rutrum. Orci tomorrow in phasellus
          ultricies.
        </p>
      </div>
    </div>
  )
}

export default FeaturedSection
