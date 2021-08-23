import React from "react";
import InputField from "./InputField";
import Textarea from "./Textarea";
import SelectField from "./SelectField";
import RadioButtons from "./RadioButtons";
interface FormikControlProps {
  control: string;
  name: string;
  label: string;
  type?: string;
  options?: { key: string; value: string }[];
  validate?: (field: string) => void;
}

const FormikControl: React.FC<FormikControlProps> = ({
  control,
  name,
  label,
  options,
  validate,
  ...rest
}) => {
  switch (control) {
    case "input":
      return <InputField name={name} label={label} {...rest} />;
    case "textarea":
      return <Textarea name={name} label={label} {...rest} />;
    case "select":
      return (
        <>
          {options && (
            <SelectField
              name={name}
              label={label}
              options={options}
              {...rest}
            />
          )}
        </>
      );
    case "radio":
      return (
        <>
          {options && (
            <RadioButtons
              name={name}
              label={label}
              options={options}
              {...rest}
            />
          )}
        </>
      );
    default:
      return null;
  }
};
export default FormikControl;
