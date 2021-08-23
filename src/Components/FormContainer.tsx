import { Form, SubmitButton } from "formik-antd";
import { Formik } from "formik";
import FormikControl from "./FormikControl";
import * as Yup from "yup";
interface FormValues {
  email: string;
  password: string;
  description: string;
  selectCourse: string;
  selectTeam: string;
  finishCourses: string[];
}

export const FormContainer: React.FC = () => {
  const dropDownOptions: { key: string; value: string }[] = [
    { key: "Select an option", value: "" },
    { key: "option1", value: "option1" },
    { key: "option2", value: "option2" },
  ];
  const radioOptions: { key: string; value: string }[] = [
    { key: "option1", value: "option1" },
    { key: "option2", value: "option2" },
  ];
  const initialValues: FormValues = {
    email: "",
    password: "",
    description: "",
    selectCourse: "",
    selectTeam: "",
    finishCourses: [],
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Inavaild Email").required("Required"),
    password: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    selectCourse: Yup.string().required("Required"),
    selectTeam: Yup.string().required("Required"),
    finishCourses: Yup.array().min(1, "Required"),
  });
  const onSubmit = (values: FormValues) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form>
          <FormikControl
            name="email"
            label="Email"
            control="input"
            type="email"
          />
          <FormikControl
            name="password"
            label="Password"
            control="input"
            type="password"
          />
          <FormikControl
            name="description"
            label="Description"
            control="textarea"
          />
          <FormikControl
            name="selectCourse"
            label="select one of this option"
            control="select"
            options={dropDownOptions}
          />
          <FormikControl
            name="selectTeam"
            label="select one of this option"
            control="radio"
            options={radioOptions}
          />
          <SubmitButton type="primary" htmlType="submit">
            Submit
          </SubmitButton>
        </Form>
      )}
    </Formik>
  );
};
