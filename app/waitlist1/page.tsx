import React from "react";

import { BackgroundLines } from "@/components/aceternity/background-lines";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Waitlist1 = () => {
  return (
    <section className="flex h-full min-h-screen w-screen items-center justify-center overflow-hidden py-32">
      <BackgroundLines className="container flex w-full flex-col items-center justify-center px-4 md:h-full">
        <h2 className="relative z-20 py-2 text-center font-sans text-5xl font-semibold tracking-tighter md:py-10 lg:text-8xl">
          Join the Waitlist
        </h2>
        <p className="text-md text-muted-foreground mx-auto max-w-xl text-center lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="relative z-20 mt-10 flex w-full max-w-md items-center gap-3 rounded-full p-1">
          <Input
            placeholder="Enter your email"
          />
          <Button>Join the Waitlist</Button>
        </div>
        <div className="mt-10 flex items-center gap-2">
          <span className="inline-flex items-center -space-x-2.5">
            {Array.from({ length: 6 }).map((_, index) => (
              <Avatar key={index} className="size-8">
                <AvatarImage
                  src={`https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/avatar${index + 1}.png`}
                  alt="placeholder"
                />
              </Avatar>
            ))}
          </span>
          <p className="text-muted-foreground/80 tracking-tight">
            +1000 people already joined
          </p>
        </div>
      </BackgroundLines>
    </section>
  );
};

export default Waitlist1 
