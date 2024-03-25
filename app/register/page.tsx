"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";
import { RegisterFormValidation, registerFormValidation } from "../validation";
export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValidation>({
    resolver: zodResolver(registerFormValidation),
  });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <div className="flex flex-col gap-1 items-center justify-center p-24">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl mb-8">Register</h1>
      </div>
      <form
        className="flex flex-col gap-5 border border-scale-400 p-9 rounded-md drop-shadow-sm"
        onSubmit={onSubmit}
      >
        <div className="flex sm:flex-col md:flex-row gap-3">
          <Input
            name="firstName"
            label="First Name"
            placeHolder="ex:Jhon"
            register={{ ...register("firstName") }}
            errorMessage={errors.firstName?.message}
            sx="w-full"
          />
          <Input
            name="lastName"
            label="Last Name"
            placeHolder="Wick"
            register={{ ...register("lastName") }}
            errorMessage={errors.lastName?.message}
            sx="w-full"
          />
        </div>
        <Input
          name="userId"
          label="User Id"
          placeHolder="Enter User Id"
          register={{ ...register("userId") }}
          errorMessage={errors.lastName?.message}
          sx="w-full"
        />
        <Input
          name="email"
          label="Email"
          placeHolder="Jhonwick@example.com"
          register={{ ...register("email") }}
          errorMessage={errors.email?.message}
        />
        <Input
          name="mobile"
          label="Mobile"
          placeHolder="+91 9237236421"
          register={{ ...register("mobile") }}
          errorMessage={errors.mobile?.message}
        />
        <Input
          name="password"
          label="Password"
          placeHolder="Enter your password"
          register={{ ...register("password") }}
          errorMessage={errors.lastName?.message}
          sx="w-full"
        />
        <Button name="Submit" />
        <p className="text-sm flex justify-center">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 mx-1">
            {" "}
            Login here
          </a>
        </p>
      </form>
    </div>
  );
}
