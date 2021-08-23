import React from "react";
import { Field, FieldProps } from "formik";
import { Select, FormItem } from "formik-antd";

interface SelectProps {
  name: string;
  label: string;
  options: { key: string; value: string }[];
}

const SelectField: React.FC<SelectProps> = ({
  name,
  label,
  options,
  ...rest
}) => {
  const { Option } = Select;
  return (
    <Field id={name} name={name} {...rest}>
      {({ field, form }: FieldProps) => {
        return (
          <FormItem label={label} validate={form.validateField} {...field}>
            <Select id={name} name={name} placeholder={options[0].key}>
              {options.map((option) => {
                return (
                  <Option key={option.key} value={option.value}>
                    {option.key}
                  </Option>
                );
              })}
            </Select>
          </FormItem>
        );
      }}
    </Field>
  );
};
export default SelectField;
