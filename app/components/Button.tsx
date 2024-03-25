import React from "react";
import { FormButton } from "../types";
export default function Button({ name, type, onClick }: FormButton) {
  return (
    <div>
      <button
        type={type || "submit"}
        className="bg-slate-900 text-slate-50 p-2 rounded-md mt-2 w-full"
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
}
