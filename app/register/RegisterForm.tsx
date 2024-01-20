"use client";

import Heading from "../component/products/Heading";
import Input from "../component/inputs/Input";
import Button from "../component/Button";
import { useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: { name: "", email: "", password: "" },
  });

  const router = useRouter();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios.post("/api/register", data).then(() => {
      toast.success("Account created");
      signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      })
        .then((callback) => {
          if (callback?.ok) {
            router.push("/cart");
            router.refresh();
            toast.success("Logged In");
          }
          if (callback?.error) {
            toast.error(callback.error);
          }
        })
      })
      .catch(() => {
        toast.error("something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
    };
  return (
    <>
      <Heading title="Sun up for E-Shop" />
      <Button
        outline
        label="Sign up with Google"
        icon={AiOutlineGoogle}
        onClick={() => {}}
      ></Button>
      <hr className="bg-slate-300 w-full h-px" />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
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
        label={isLoading ? "Loading" : "Sign up"}
        onClick={handleSubmit(onSubmit)}
      />
      <p className="text-sm">
        Already have an account ?
        <Link className="underline" href="/login">
          Log in
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
