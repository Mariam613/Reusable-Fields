import React from "react";
import { Field, FieldProps } from "formik";
import { Radio, FormItem } from "formik-antd";

interface SelectProps {
  name: string;
  label: string;
  options: { key: string; value: string }[];
}

const RadioButtons: React.FC<SelectProps> = ({
  name,
  label,
  options,
  ...rest
}) => {
  return (
    <Field name={name} {...rest}>
      {({ field, form }: FieldProps) => {
        return (
          <FormItem label={label} name={name} validate={form.validateField}>
            <Radio.Group id={name} name={name}>
              {options.map((option) => {
                return (
                  <React.Fragment key={option.key}>
                    <Radio id={option.value} {...field} value={option.value}>
                      {option.key}
                    </Radio>
                  </React.Fragment>
                );
              })}
            </Radio.Group>
          </FormItem>
        );
      }}
    </Field>
  );
};
export default RadioButtons;
