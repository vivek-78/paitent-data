import React from "react";
import { FormInputProps } from "@/app/types";
export default function Select({
  name,
  label,
  onInputChange,
  options,
  register
}: FormInputProps) {
  return (
    <div className="flex flex-col w-full gap-1">
      <label htmlFor={name}>
        {label}
      </label>
      <select
        name={name}
        id={name}
        className="border border-slate-200 rounded-md p-2"
        onChange={onInputChange}
        {...register}
      >
        {options?.map((option) => (
          <option value={option} key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
