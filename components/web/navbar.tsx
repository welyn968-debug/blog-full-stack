import Link from "next/dist/client/link";
import {buttonVariants} from "@/components/ui/button";
import {ThemeToggle} from "@/components/web/theme-toggle";

export function Navbar () {
  return (
    <nav>
        <div className="flex h-16 items-center justify-between border-b py-4">
            <div>
                <Link href="/">
                <h1 className="text-3xl font-bold">
                Next<span className="text-3xl font-bold">Pro</span>
                </h1>
                </Link>
            </div>

            <div className="ml-10 space-x-4">
                <Link className={buttonVariants({variant: "ghost"})} href="/home">Home</Link>
                <Link className={buttonVariants({variant: "ghost"})} href="/about">About</Link>
                <Link className={buttonVariants({variant: "ghost"})} href="/services">Services</Link>
                <Link className={buttonVariants({variant: "ghost"})} href="/contact">Contact</Link>
            </div>

            <div className="ml-10 space-x-4">
                <Link className={buttonVariants()} href = "/auth/login">Login</Link>
                <Link className={buttonVariants({variant: "outline"})} href= "/auth/signup">Sign up</Link>

            </div>
            <ThemeToggle />
        </div>
    </nav>
  );
}