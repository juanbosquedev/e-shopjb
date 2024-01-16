"use client";

import Heading from "../component/products/Heading";
import Input from "../component/inputs/Input";
import Button from "../component/Button";
import { useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";
const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: { name: "", email: "", password: "" },
  });

  const onSubmit:SubmitHandler<FieldValues>= (data)=>{
    setIsLoading(true)
  }
  return (
    <>
      <Heading title="Sun up for E-Shop" />
      <Button outline label="Sign up with Google" icon={AiOutlineGoogle} onClick={()=>{}}></Button>
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
      <Button label={isLoading ? 'Loading' : 'Sign up'} onClick={handleSubmit(onSubmit)}/>
    <p className="text-sm">Already have an account ?<Link className="underline" href='/login'>Log in</Link></p>
    </>
  );
};

export default RegisterForm;
