"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const CardCategory = ({ cardCategory }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <Link
      href={`/movies/category/${cardCategory.path}`}
      className="w-240 h-[9.4vw] block overflow-hidden border-[3.5px] border-solid rounded-[10px] border-[#3a3c4a] shadow-[#000000b0_0_26px_30px_-10px,#000000b0_0_16px_10px_-10px] relative scale-100 hover:scale-105 duration-300 hover:duration-300 transition-[transform,box-shadow] hover:transition-[transform,box-shadow] ease-out hover:ease-out hover:shadow-[rgba(0,0,0,0.8)_0px_40px_58px_-16px,rgba(0,0,0,0.72)_0px_30px_22px_-10px] hover:border-[#fff]"
    >
      <div
        className="w-full h-full relative overflow-hidden border-2 rounded-lg border-[#434450] shadow-[#000000b0_0_26px30px-10px,#000000b0_0_16px10px-10px] bg-[#3a3c4a] bg-gradient-to-b from-[#3a3c4a] to-[#242632]"
        onMouseEnter={() => setShowVideo(true)}
        onMouseLeave={() => setShowVideo(false)}
      >
        <Image
          src={cardCategory.img}
          alt="category img"
          width={140}
          height={140}
          className="object-cover z-10 rounded-[10px] absolute top-2/4 left-2/4 translate-x-5000 translate-y-5000 w-full"
        />
        {showVideo && (
          <video
            preload="none"
            loading="lazy"
            src={cardCategory.video}
            autoPlay
            loop
            playsInline
            muted
            className="object-cover rounded-[6px] absolute top-0 left-0 w-full h-full"
          ></video>
        )}
      </div>
    </Link>
  );
};

export default CardCategory;
