import React from "react";
import PatientForm from "../components/PatientForm";
export default function page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <PatientForm />
    </div>
  );
}
