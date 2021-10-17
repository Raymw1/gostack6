import React, { Component } from "react";
import api from "../../services/api";
import moment from "moment";

import logo from "../../assets/logo.png";

import { Container, Form } from "./styles";

import CompareList from "../../components/CompareList";

export default class Main extends Component {
  state = {
    loading: false,
    repositoryInput: "",
    repositoryError: false,
    repositories: [],
  };

  handleAddRepository = async (e) => {
    e.preventDefault();
    const { repositoryInput } = this.state;
    if (!repositoryInput.trim()) return;
    this.setState({ loading: true });
    try {
      const { data: repository } = await api.get(`/repos/${repositoryInput}`);
      repository.lastCommit = moment(repository.pushed_at).fromNow();
      this.setState({
        repositoryInput: "",
        repositories: [...this.state.repositories, repository],
        repositoryError: false,
      });
    } catch (error) {
      console.error(error);
      this.setState({
        repositoryError: true,
      });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="Github Compare" />
        <Form
          onSubmit={this.handleAddRepository}
          withError={this.state.repositoryError}
        >
          <input
            type="text"
            placeholder="User/Repository"
            value={this.state.repositoryInput}
            onChange={(e) => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">
            <i
              className={
                this.state.loading ? "fa fa-spinner fa-pulse" : "fa fa-plus"
              }
            ></i>
          </button>
        </Form>
        <CompareList repositories={this.state.repositories} />
      </Container>
    );
  }
}
