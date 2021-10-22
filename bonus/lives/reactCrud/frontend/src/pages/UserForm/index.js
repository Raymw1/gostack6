import React, { useState, useEffect } from "react";
import { Form, Input, Scope } from "unform";
import * as Yup from "yup";
import api from "../../services/api";

const schema = Yup.object()
  .shape({
    name: Yup.string().required(),
    email: Yup.string().required(),
    address: Yup.object()
      .shape({
        street: Yup.string().required(),
        number: Yup.string().required(),
      })
      .required(),
  })
  .required();

export default function UserForm({ history, match }) {
  const [data, setData] = useState({});

  async function handleSubmit(data) {
    await api.postOrPut("/users", match.params.id, data);
    history.push("/users");
  }

  useEffect(() => {
    async function loadData() {
      const response = await api.get(`/users/${match.params.id}`);
      setData(response.data);
    }
    if (match.params.id) {
      loadData();
    }
  }, [match.params.id]);

  return (
    <Form initialData={data} schema={schema} onSubmit={handleSubmit}>
      <Input name="name" label="Name" />
      <Input name="email" label="Email" />
      <Scope path="address">
        <Input name="street" label="Street" />
        <Input name="number" label="Number" />
      </Scope>
      <button type="submit">Create</button>
    </Form>
  );
}
