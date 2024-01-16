"use client";

import Heading from "../component/products/Heading";
import Input from "../component/inputs/Input";
import Button from "../component/Button";
import { useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
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
    </>
  );
};

export default RegisterForm;
