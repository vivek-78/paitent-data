"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Input from "../Input";
import Button from "../Button";
import { patientFormValidation, PatientFormValidation } from "../../validation";
import Select from "../Select";
export default function PatientForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PatientFormValidation>({
    resolver: zodResolver(patientFormValidation),
  });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center w-full">
        <h1 className="text-2xl mb-8">Patient Details</h1>
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
          />
          <Input
            name="lastName"
            label="Last Name"
            placeHolder="Wick"
            register={{ ...register("lastName") }}
            errorMessage={errors.lastName?.message}
          />
        </div>
        <div className="flex flex-row gap-3">
          <Select
            name="gender"
            label="Gender"
            options={["Male", "Female"]}
            register={{ ...register("gender") }}
          />
          <Input
            name="age"
            label="Age"
            placeHolder="18"
            type="number"
            register={{ ...register("age") }}
            errorMessage={errors.age?.message}
          />
        </div>
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
          name="admitDate"
          label="Date of Admit"
          type="date"
          register={{ ...register("admitDate") }}
        />
        <Button name="Submit" />
      </form>
    </div>
  );
}
