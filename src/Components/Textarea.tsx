import React from "react";
import { Field, FieldProps } from "formik";
import { Input, FormItem } from "formik-antd";
interface InputProps {
  label: string;
  name: string;
}
const Textarea: React.FC<InputProps> = ({ label, name, ...rest }) => {
  return (
    <Field name={name}>
      {({ field, form }: FieldProps) => {
        return (
          <React.Fragment>
            <FormItem label={label} name={name} validate={form.validateField}>
              <Input.TextArea id={name} {...rest} {...field} />
            </FormItem>
          </React.Fragment>
        );
      }}
    </Field>
  );
};

export default Textarea;
