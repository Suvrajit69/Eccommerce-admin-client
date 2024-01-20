"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const SignUpForm = () => {

  const authFormSchema = z.object({
    firstName: z
      .string()
      .min(3, { message: "first name must be at least 3 charecter log" }),
    lastName: z
      .string()
      .min(3, { message: "last name must be at least 3 charecter log" }),
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "password must be at least 8 charecter log" }),
  });

  // type TauthFormSchema = z.infer<typeof authFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof authFormSchema>>({
    resolver: zodResolver(authFormSchema),
  });

  const onSubmit = () => {};

  return (
    <section id="signUpForm" className="grid gap-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2 px-4 md:px-0">
          <div className="grid grid-cols-2 gap-1 py-2">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                {...register("firstName")}
                className={cn({
                  "focus-visible:ring-red-500": errors.firstName,
                })}
                placeholder="what is your first name?"
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                {...register("lastName")}
                className={cn({
                  "focus-visible:ring-red-500": errors.lastName,
                })}
                placeholder="what is your first name?"
              />
            </div>
          </div>
          <div className="grid gap-1 py-2">
            <Label htmlFor="email">Email</Label>
            <Input
              {...register("email")}
              className={cn({
                "focus-visible:ring-red-500": errors.email,
              })}
              placeholder="what is your email?"
            />
          </div>
          <div className="grid gap-1 py-2">
            <Label htmlFor="password">Password</Label>
            <Input
              {...register("password")}
              className={cn({
                "focus-visible:ring-red-500": errors.password,
              })}
              placeholder="write a strong password?"
            />
          </div>
          <Button type="submit">Sign up</Button>
        </div>
      </form>
    </section>
  );
};

export default SignUpForm;
