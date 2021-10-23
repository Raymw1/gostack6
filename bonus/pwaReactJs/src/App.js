import React, { Component } from "react";
import axios from "axios";

import { Header, Repositories } from "./styles";

export default class App extends Component {
  state = {
    newRepoInput: "",
    repositories: [],
  };

  addRepository = async () => {
    const { newRepoInput } = this.state;
    if (!newRepoInput.trim()) return;
    const { data } = await axios.get(
      `https://api.github.com/repos/${newRepoInput}`
    );
    this.setState({
      newRepoInput: "",
      repositories: [...this.state.repositories, data],
    });
  };

  render() {
    return (
      <>
        <Header>
          <input
            type="text"
            placeholder="Add repository"
            onChange={(e) => this.setState({ newRepoInput: e.target.value })}
            value={this.state.newRepoInput}
          />
          <button onClick={this.addRepository}>Add</button>
        </Header>
        <Repositories>
          {this.state.repositories.map((repository) => (
            <li key={repository.id}>
              <img src={repository.owner.avatar_url} alt={repository.name} />
              <div>
                <strong>{repository.name}</strong>
                <p>{repository.description}</p>
                <a href={repository.html_url}>Access</a>
              </div>
            </li>
          ))}
        </Repositories>
      </>
    );
  }
}
