"use client";

import Heading from "../component/products/Heading";
import Input from "../component/inputs/Input";
import Button from "../component/Button";
import { useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";


const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: { email: "", password: "" },
  });

  const router = useRouter()

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    signIn("credentials", { ...data, redirect: false }).then((callback) => {
      setIsLoading(false);
      if (callback?.ok) {
        router.push("/cart");
        router.refresh();
        toast.success("Logged In");
      }
      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };
  return (
    <>
      <Heading title="Sign in to E-Shop" />
      <Button
        outline
        label="Continue with Google"
        icon={AiOutlineGoogle}
        onClick={() => {}}
      ></Button>
      <hr className="bg-slate-300 w-full h-px" />

      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Button
        label={isLoading ? "Loading" : "Login"}
        onClick={handleSubmit(onSubmit)}
      />
      <p className="text-sm">
        Do not have an account ?{" "}
        <Link className="underline" href="/register">
          Sign up
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
