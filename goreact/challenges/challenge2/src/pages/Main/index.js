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
    repositories:
      JSON.parse(localStorage.getItem("@gitCompare:repositories")) || [],
  };

  handleAddRepository = async (e) => {
    e.preventDefault();
    const { repositoryInput } = this.state;
    if (!repositoryInput.trim()) return;
    this.setState({ loading: true });
    try {
      const { data: repository } = await api.get(`/repos/${repositoryInput}`);
      repository.lastCommit = moment(repository.pushed_at).fromNow();
      this.setState((state) => ({
        repositoryInput: "",
        repositories: [...state.repositories, repository],
        repositoryError: false,
      }));
      localStorage.setItem(
        "@gitCompare:repositories",
        JSON.stringify(this.state.repositories)
      );
    } catch (error) {
      console.error(error);
      this.setState({
        repositoryError: true,
      });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleDeleteRepository = (id) => {
    const repos = this.state.repositories.filter((repo) => repo.id !== id);
    this.setState({ repositories: repos }, () => {
      localStorage.setItem(
        "@gitCompare:repositories",
        JSON.stringify(this.state.repositories)
      );
    });
  };

  handleUpdateRepository = async (id) => {
    const { repositories } = this.state;
    let index = null;
    const repo = this.state.repositories.find((repo, foundIndex) => {
      if (repo.id === id) {
        index = foundIndex;
        return true;
      }
      return false;
    });
    const { data: repository } = await api.get(`/repos/${repo.full_name}`);
    repository.lastCommit = moment(repository.pushed_at).fromNow();
    repositories[index] = repository;
    this.setState({ repositories }, () => {
      localStorage.setItem(
        "@gitCompare:repositories",
        JSON.stringify(this.state.repositories)
      );
    });
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
        <CompareList
          repositories={this.state.repositories}
          handleDeleteRepository={this.handleDeleteRepository}
          handleUpdateRepository={this.handleUpdateRepository}
        />
      </Container>
    );
  }
}
