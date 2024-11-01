"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Switch } from "./ui/switch";
import { ModeToggle } from "./dark-toggle";

export default function Navbar() {
    return (
        <header>
            <nav className="flex items-center justify-between px-9 py-3 ">
                <div className="flex items-center justify-center">
                    <a
                        href="#"
                        className="flex items-center justify-center text-3xl font-bold"
                    >
                        <Image
                            src={"/xventory.svg"}
                            width={40}
                            height={40}
                            alt={"Xevntory Logo"}
                        ></Image>
                        <span>ventory</span>
                    </a>
                </div>
                <div className="flex justify-center items-center gap-x-8">
                    <ModeToggle />
                    <Button size={"default"} variant={"default"}>
                        <Link href="/auth/register">Register</Link>
                    </Button>
                </div>
            </nav>
        </header>
    );
}
