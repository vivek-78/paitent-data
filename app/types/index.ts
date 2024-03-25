export type FormInputProps = {
  name: string;
  label: string;
  onInputChange?: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  placeHolder?: string;
  register: any;
  type?: string;
  options?: string[];
  errorMessage?: string;
  required?:boolean;
  sx?:string
};

export type FormButton = {
  type?: "submit" | "reset" | "button";
  name: string;
  onClick?: () => void;

};
export type PatientData = {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  mobile: string;
  gender: "male" | "female";
  admitDate: Date
};
