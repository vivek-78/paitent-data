export type FormInputProps = {
  name: string;
  label?: string;
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
  required?: boolean;
  sx?: string;
};

export type FormButton = {
  type?: "submit" | "reset" | "button";
  name: string;
  onClick?: () => void;
  sx?:string
};
