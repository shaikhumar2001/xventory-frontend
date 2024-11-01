"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./dark-toggle";

export default function Navbar() {
    return (
        <header>
            <nav className="flex items-center justify-between px-9 py-3 ">
                <div className="flex items-center justify-center">
                    <a
                        href="#"
                        className="flex items-center justify-center text-3xl font-medium"
                    >
                        <Image
                            src={"/xventory.svg"}
                            width={30}
                            height={30}
                            alt={"Xevntory Logo"}
                        ></Image>
                        <span>ventory</span>
                    </a>
                </div>
                <div className="flex justify-center items-center gap-x-8">
                    <ModeToggle />
                    <Button variant={"default"} size={"default"}>
                        <Link href="/auth/register">Get Started</Link>{" "}
                    </Button>
                </div>
            </nav>
        </header>
    );
}
