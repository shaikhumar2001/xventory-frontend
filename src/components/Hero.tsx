"use client";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const Hero = () => {
    return (
        <main className="flex items-center justify-center min-h-screen font-[family-name:var(--font-geist-sans)]">
            <div className="flex flex-col items-center justify-center w-3/5 gap-8">
                <Button
                    variant={"outline"}
                    className="rounded-full text-accent-foreground"
                >
                    Its free for now, but not for long.
                    <span>
                        <a
                            href="#"
                            target="_blank"
                            className="flex items-center font-semibold text-gray-800"
                        >
                            Read More&nbsp;
                            <ArrowRightIcon />
                        </a>
                    </span>
                </Button>
                <h1 className="text-4xl font-bold tracking-tight dark:text-primary-foreground transition-colors focus-visible:outline-none sm:text-6xl text-center">
                    Smart Brand and Product Management for Businesses
                </h1>
                <p className="mb-4 text-lg leading-8 text-gray-600 text-center">
                    Xventory simplifies inventory, brand management, and product
                    tracking—helping businesses streamline operations and stay
                    organized.
                </p>
                <div className="flex items-center justify-between gap-2">
                    <Button variant={"default"} size={"lg"}>
                        Get Started <ArrowRightIcon />
                    </Button>
                    <Button variant={"secondary"} size={"lg"}>
                        Already have an account ?
                    </Button>
                </div>
            </div>
        </main>
    );
};

export default Hero;
