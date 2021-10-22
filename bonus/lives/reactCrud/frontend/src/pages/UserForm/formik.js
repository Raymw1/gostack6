import React, { useEffect } from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import api from "../../services/api";
import Select from "react-select";

const tech = [
  { value: 1, label: "ReactJS" },
  { value: 2, label: "NodeJS" },
  { value: 3, label: "React Native" },
];

const UserForm = ({
  history,
  match,
  values,
  handleChange,
  handleSubmit,
  setFieldValue,
  errors,
}) => {
  useEffect(() => {
    async function loadData() {
      const { data } = await api.get(`/users/${match.params.id}`);
      for (let key of Object.keys(data)) {
        if (key !== "_id" && key !== "__v") {
          if (key === "address") {
            setFieldValue("address.street", data[key].street);
            setFieldValue("address.number", data[key].number);
          } else {
            setFieldValue(key, data[key]);
          }
        }
      }
    }
    if (match.params.id) {
      loadData();
    }
  }, [match.params.id]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={values.name}
        type="text"
        placeholder="Name"
        name="name"
      />
      {!!errors.name && <span>{errors.name}</span>}
      <input
        onChange={handleChange}
        value={values.email}
        type="email"
        placeholder="Email"
        name="email"
      />
      {!!errors.email && <span>{errors.email}</span>}
      <input
        onChange={handleChange}
        value={values.address.street}
        type="text"
        placeholder="Street"
        name="address.street"
      />
      <input
        onChange={handleChange}
        value={values.address.number}
        type="text"
        placeholder="Number"
        name="address.number"
      />
      <Select
        placeholder="Techs"
        options={tech}
        isMulti
        onChange={(value) => setFieldValue("tech", value)}
        value={values.tech}
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    name: "",
    email: "",
    address: {
      street: "",
      number: "",
    },
    tech: "",
  }),

  validateOnBlur: false,
  validateOnChange: false,

  validationSchema: Yup.object()
    .shape({
      name: Yup.string().required(),
      email: Yup.string().email("Invalid Email").required(),
      address: Yup.object()
        .shape({
          street: Yup.string().required(),
          number: Yup.string().required(),
        })
        .required(),
    })
    .required(),

  handleSubmit: async (values, { props }) => {
    const { id } = props.match.params;
    await api.postOrPut("/users", id, values);
    props.history.push("/users");
  },
})(UserForm);
