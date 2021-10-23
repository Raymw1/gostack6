import React, { Component } from "react";
import axios from "axios";

import { Header, Repositories, GlobalStyle, Offline } from "./styles";

export default class App extends Component {
  state = {
    online: navigator.onLine,
    newRepoInput: "",
    repositories:
      JSON.parse(localStorage.getItem("@pwaReact/repositories")) || [],
  };

  componentDidMount() {
    window.addEventListener("online", this.handleNetworkChange);
    window.addEventListener("offline", this.handleNetworkChange);
  }

  componentWillUnmount() {
    window.removeEventListener("online", this.handleNetworkChange);
    window.removeEventListener("offline", this.handleNetworkChange);
  }

  handleNetworkChange = () => {
    this.setState({ online: navigator.onLine });
  };

  addRepository = async () => {
    if (!this.state.online) {
      alert("You're offline, connect to get the data!");
      return;
    }
    const { newRepoInput } = this.state;
    if (!newRepoInput.trim()) return;
    const { data } = await axios.get(
      `https://api.github.com/repos/${newRepoInput}`
    );
    this.setState({
      newRepoInput: "",
      repositories: [...this.state.repositories, data],
    });

    localStorage.setItem(
      "@pwaReact/repositories",
      JSON.stringify(this.state.repositories)
    );
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
        {!this.state.online && <Offline>You're offline</Offline>}
        <GlobalStyle />
      </>
    );
  }
}
