"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

interface AnimatedPinDemoProps {
  title?: string;
  href?: string;
  titleName?: string;
  description?: string;
  backgroundImageUrl?: string;
}

export function AnimatedPinDemo({
  title = "/ui.aceternity.com",
  href = "https://www.lipsum.com/",
  titleName = "Lorem ipsum dolor ",
  description = "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax ",
  backgroundImageUrl = "https://dummyimage.com/600x400/280a94/f2eff2.jpg&text=Dummy+Image",
}: AnimatedPinDemoProps) {
  return (
    <div className="h-[25rem] w-fit flex items-center justify-center">
      <PinContainer title={title} href={href}>
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold capitalize  text-base text-slate-100">
            {titleName}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">{description} </span>
          </div>
          <div
            className="flex flex-1 w-full mt-4 bg-center bg-cover rounded-lg"
            style={{
              backgroundImage: `url(${backgroundImageUrl})`,
            }}
          />
        </div>
      </PinContainer>
    </div>
  );
}
