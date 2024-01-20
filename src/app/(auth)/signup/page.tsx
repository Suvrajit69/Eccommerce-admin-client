import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SignUpForm from "./_components/signUpForm";

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
        <SignUpForm />
      </div>
    </section>
  );
};

export default signUpPage;
