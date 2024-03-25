"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import Button from "../components/Button";
import { loginPageValidation, LoginPageValidation } from "../validation";
export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPageValidation>({
    resolver: zodResolver(loginPageValidation),
  });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <div className="flex flex-col gap-1 items-center justify-center p-24">
      <h1 className="text-2xl mb-8">Login</h1>
      <form
        className="flex flex-col gap-5 border border-scale-400 p-9 rounded-md"
        onSubmit={onSubmit}
      >
        <Input
          name="userId"
          label="User Id"
          placeHolder="Enter your User Id"
          register={{ ...register("userId") }}
          errorMessage={errors.userId?.message}
          sx={"w-80"}
        />
        <Input
          name="password"
          label="Password"
          placeHolder="Enter your Password"
          register={{ ...register("password") }}
          sx={"w-80"}
          required
        />
        <Button name="Login" />
        <p className="text-sm flex justify-center">
          {"Don't"} have an account?{" "}
          <a href="/register" className="text-blue-500 mx-1">
            {" "}
            Register here
          </a>
        </p>
      </form>
    </div>
  );
}
