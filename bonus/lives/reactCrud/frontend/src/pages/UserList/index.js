import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Input } from "unform";
import api from "../../services/api";

export default function UserList() {
  const [users, setUsers] = useState([]);

  async function loadUsers() {
    const { data } = await api.get("/users");
    setUsers(data);
  }

  useEffect(() => {
    loadUsers();
  }, []);

  async function handleDelete(data) {
    await api.delete(`/users/${data.id}`);
    loadUsers();
  }

  return (
    <>
      <Link to="/users/create">Create User</Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Street</th>
            <th>Number</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address?.street}</td>
              <td>{user.address?.number}</td>
              <td>
                <Link to={`/users/edit/${user._id}`}>Edit</Link>
              </td>
              <td>
                <Form onSubmit={handleDelete}>
                  <Input name="id" value={user._id} type="hidden" />
                  <button type="submit">Delete</button>
                </Form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
