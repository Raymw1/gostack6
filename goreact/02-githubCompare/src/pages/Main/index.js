import React, { Component } from "react";
import api from "../../services/api";

import logo from "../../assets/logo.png";

import { Container, Form } from "./styles";

import CompareList from "../../components/CompareList";

export default class Main extends Component {
  state = {
    repositoryInput: "",
    repositories: [],
  };

  handleAddRepository = async (e) => {
    e.preventDefault();
    const { repositoryInput } = this.state;
    if (!repositoryInput.trim()) return;
    try {
      const { data } = await api.get(`/repos/${repositoryInput}`);
      this.setState({
        repositoryInput: "",
        repositories: [...this.state.repositories, data],
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="Github Compare" />
        <Form onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="User/Repository"
            value={this.state.repositoryInput}
            onChange={(e) => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Ok</button>
        </Form>
        <CompareList repositories={this.state.repositories} />
      </Container>
    );
  }
}
