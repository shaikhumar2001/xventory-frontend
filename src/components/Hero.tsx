"use client";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { TypographyH1, TypographyP } from "./ui/typography";

const Hero = () => {
    return (
        <main className="flex items-center justify-center min-h-screen font-[family-name:var(--font-geist-sans)]">
            <div className="flex flex-col items-center justify-center w-3/5 gap-8">
                <Button variant={"outline"} className="rounded-full">
                    Its free for now, but not for long.
                    <span>
                        <a
                            href="#"
                            target="_blank"
                            className="flex items-center font-semibold"
                        >
                            Read More&nbsp;
                            <ArrowRightIcon />
                        </a>
                    </span>
                </Button>
                <TypographyH1 className="text-center">
                    Smart Brand and Product Management for Businesses
                </TypographyH1>
                <TypographyP className="text-center mb-4">
                    Xventory simplifies inventory, brand management, and product
                    tracking—helping businesses streamline operations and stay
                    organized.
                </TypographyP>
                <div className="flex items-center justify-between gap-2">
                    <Button variant={"default"} size={"lg"}>
                        <Link href="/auth/register">Get Started</Link>{" "}
                        <ArrowRightIcon />
                    </Button>
                    <Button variant={"secondary"} size={"lg"}>
                        <Link href="/auth/login">
                            Already have an account ?
                        </Link>
                    </Button>
                </div>
            </div>
        </main>
    );
};

export default Hero;
