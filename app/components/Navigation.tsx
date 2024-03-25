import React from "react";
import Button from "./Button";
export default function Navigation() {
  return (
    <div className="flex flex-row  justify-between items-center w-full gap-2 border border-b-1 p-2 shadow-sm mb-10">
      <h1 className="text-xl ml-2">Navigation</h1>
      <div>
        <ul className="flex flex-row gap-5 items-center justify-center">
          <li>
            <a>Dashboard</a>
          </li>
          <li>
            <a href="/add-patient">Add patient</a>
          </li>
          <li>
            <a href="/patients">Patients</a>
          </li>
          <li>
            <a href="/login">
              <Button name="Log out" sx="p-2 w-28 mb-1" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
