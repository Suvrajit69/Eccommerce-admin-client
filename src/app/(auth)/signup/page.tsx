"user client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const signUpPage = () => {
  return (
    <section
      id="signUpContainer"
      className="relative flex pt-20 flex-col items-center justify-center lg:px-0"
    >
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col items-center space-y-2 text-center">
          <span className="text-blue-600 font-semibold text-xl">
            Shopinglala.com
          </span>
          <h1 className="text-2xl font-bold">Create an account</h1>

          <Link
            className="flex gap-1 hover:underline text-xs text-blue-500"
            href="/signin"
          >
            Alreadt have an account? SignIn
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <section id="signUpForm" className="grid gap-6">
          <form>
            <div className="grid gap-2 px-4 md:px-0">
              <div className="grid grid-cols-2 gap-1 py-2">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    className={cn({
                      "focus-visible:ring-red-500": true,
                    })}
                    placeholder="what is your first name?"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    className={cn({
                      "focus-visible:ring-red-500": true,
                    })}
                    placeholder="what is your first name?"
                  />
                </div>
              </div>
              <div className="grid gap-1 py-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  className={cn({
                    "focus-visible:ring-red-500": true,
                  })}
                  placeholder="what is your email?"
                />
              </div>
              <div className="grid gap-1 py-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  className={cn({
                    "focus-visible:ring-red-500": true,
                  })}
                  placeholder="write a strong password?"
                />
              </div>
              <Button type="submit">Sign up</Button>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
};

export default signUpPage;
