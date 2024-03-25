import React from "react";
import { patientData } from "../Data";
export default function Page() {
  return (
    <div className="w-96">
      <div className="flex flex-col gap-2 columns-4">
        {patientData.map((patient, index) => (
          <div
            key={index}
            className="flex flex-col p-5 border border-slate-300 rounded-md h-72"
          >
            <h1>
              <span className="font-medium"> Name: </span>{" "}
              <span className="text-md text-slate-900 font-bold ">
                {patient.firstName} {patient.lastName}
              </span>
            </h1>
            <PatientDetail name="Email" value={patient.email} />
            <PatientDetail name="Mobile" value={patient.phone} />
            <PatientDetail name="Address" value={patient.address} />
            <PatientDetail name="Age" value={patient.age} />
            <PatientDetail name="Gender" value={patient.list} />
            <PatientDetail name="Blood Group" value={patient.bloodGroup} />
          </div>
        ))}
      </div>
    </div>
  );
}

function PatientDetail({
  name,
  value,
}: {
  name: string;
  value: string | number;
}) {
  return (
    <p>
      <span className="font-medium">{name}</span>
      {" : "}
      <span>{value}</span>
    </p>
  );
}
