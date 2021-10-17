import React, { Component } from "react";

import logo from "../../assets/logo.png";

import { Container, Form } from "./styles";

import CompareList from "../../components/CompareList";

export default class Main extends Component {
  state = {
    repositories: [
      {
        id: 10270250,
        node_id: "MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==",
        name: "react",
        full_name: "facebook/react",
        private: false,
        owner: {
          login: "facebook",
          id: 69631,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
          avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/facebook",
          html_url: "https://github.com/facebook",
          followers_url: "https://api.github.com/users/facebook/followers",
          following_url:
            "https://api.github.com/users/facebook/following{/other_user}",
          gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/facebook/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/facebook/subscriptions",
          organizations_url: "https://api.github.com/users/facebook/orgs",
          repos_url: "https://api.github.com/users/facebook/repos",
          events_url: "https://api.github.com/users/facebook/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/facebook/received_events",
          type: "Organization",
          site_admin: false,
        },
        html_url: "https://github.com/facebook/react",
        description:
          "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
        fork: false,
        url: "https://api.github.com/repos/facebook/react",
        forks_url: "https://api.github.com/repos/facebook/react/forks",
        keys_url: "https://api.github.com/repos/facebook/react/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/facebook/react/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/facebook/react/teams",
        hooks_url: "https://api.github.com/repos/facebook/react/hooks",
        issue_events_url:
          "https://api.github.com/repos/facebook/react/issues/events{/number}",
        events_url: "https://api.github.com/repos/facebook/react/events",
        assignees_url:
          "https://api.github.com/repos/facebook/react/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/facebook/react/branches{/branch}",
        tags_url: "https://api.github.com/repos/facebook/react/tags",
        blobs_url:
          "https://api.github.com/repos/facebook/react/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/facebook/react/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/facebook/react/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/facebook/react/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/facebook/react/statuses/{sha}",
        languages_url: "https://api.github.com/repos/facebook/react/languages",
        stargazers_url:
          "https://api.github.com/repos/facebook/react/stargazers",
        contributors_url:
          "https://api.github.com/repos/facebook/react/contributors",
        subscribers_url:
          "https://api.github.com/repos/facebook/react/subscribers",
        subscription_url:
          "https://api.github.com/repos/facebook/react/subscription",
        commits_url:
          "https://api.github.com/repos/facebook/react/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/facebook/react/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/facebook/react/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/facebook/react/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/facebook/react/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/facebook/react/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/facebook/react/merges",
        archive_url:
          "https://api.github.com/repos/facebook/react/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/facebook/react/downloads",
        issues_url:
          "https://api.github.com/repos/facebook/react/issues{/number}",
        pulls_url: "https://api.github.com/repos/facebook/react/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/facebook/react/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/facebook/react/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/facebook/react/labels{/name}",
        releases_url:
          "https://api.github.com/repos/facebook/react/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/facebook/react/deployments",
        created_at: "2013-05-24T16:15:54Z",
        updated_at: "2021-10-17T22:00:57Z",
        pushed_at: "2021-10-17T09:49:35Z",
        git_url: "git://github.com/facebook/react.git",
        ssh_url: "git@github.com:facebook/react.git",
        clone_url: "https://github.com/facebook/react.git",
        svn_url: "https://github.com/facebook/react",
        homepage: "https://reactjs.org",
        size: 171754,
        stargazers_count: 176256,
        watchers_count: 176256,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: true,
        forks_count: 35618,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 856,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        topics: [
          "declarative",
          "frontend",
          "javascript",
          "library",
          "react",
          "ui",
        ],
        visibility: "public",
        forks: 35618,
        open_issues: 856,
        watchers: 176256,
        default_branch: "main",
        temp_clone_token: null,
        organization: {
          login: "facebook",
          id: 69631,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
          avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/facebook",
          html_url: "https://github.com/facebook",
          followers_url: "https://api.github.com/users/facebook/followers",
          following_url:
            "https://api.github.com/users/facebook/following{/other_user}",
          gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/facebook/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/facebook/subscriptions",
          organizations_url: "https://api.github.com/users/facebook/orgs",
          repos_url: "https://api.github.com/users/facebook/repos",
          events_url: "https://api.github.com/users/facebook/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/facebook/received_events",
          type: "Organization",
          site_admin: false,
        },
        network_count: 35618,
        subscribers_count: 6666,
      },
      {
        id: 11730342,
        node_id: "MDEwOlJlcG9zaXRvcnkxMTczMDM0Mg==",
        name: "vue",
        full_name: "vuejs/vue",
        private: false,
        owner: {
          login: "vuejs",
          id: 6128107,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjYxMjgxMDc=",
          avatar_url: "https://avatars.githubusercontent.com/u/6128107?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/vuejs",
          html_url: "https://github.com/vuejs",
          followers_url: "https://api.github.com/users/vuejs/followers",
          following_url:
            "https://api.github.com/users/vuejs/following{/other_user}",
          gists_url: "https://api.github.com/users/vuejs/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/vuejs/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/vuejs/subscriptions",
          organizations_url: "https://api.github.com/users/vuejs/orgs",
          repos_url: "https://api.github.com/users/vuejs/repos",
          events_url: "https://api.github.com/users/vuejs/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/vuejs/received_events",
          type: "Organization",
          site_admin: false,
        },
        html_url: "https://github.com/vuejs/vue",
        description:
          "🖖 Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.",
        fork: false,
        url: "https://api.github.com/repos/vuejs/vue",
        forks_url: "https://api.github.com/repos/vuejs/vue/forks",
        keys_url: "https://api.github.com/repos/vuejs/vue/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/vuejs/vue/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/vuejs/vue/teams",
        hooks_url: "https://api.github.com/repos/vuejs/vue/hooks",
        issue_events_url:
          "https://api.github.com/repos/vuejs/vue/issues/events{/number}",
        events_url: "https://api.github.com/repos/vuejs/vue/events",
        assignees_url:
          "https://api.github.com/repos/vuejs/vue/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/vuejs/vue/branches{/branch}",
        tags_url: "https://api.github.com/repos/vuejs/vue/tags",
        blobs_url: "https://api.github.com/repos/vuejs/vue/git/blobs{/sha}",
        git_tags_url: "https://api.github.com/repos/vuejs/vue/git/tags{/sha}",
        git_refs_url: "https://api.github.com/repos/vuejs/vue/git/refs{/sha}",
        trees_url: "https://api.github.com/repos/vuejs/vue/git/trees{/sha}",
        statuses_url: "https://api.github.com/repos/vuejs/vue/statuses/{sha}",
        languages_url: "https://api.github.com/repos/vuejs/vue/languages",
        stargazers_url: "https://api.github.com/repos/vuejs/vue/stargazers",
        contributors_url: "https://api.github.com/repos/vuejs/vue/contributors",
        subscribers_url: "https://api.github.com/repos/vuejs/vue/subscribers",
        subscription_url: "https://api.github.com/repos/vuejs/vue/subscription",
        commits_url: "https://api.github.com/repos/vuejs/vue/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/vuejs/vue/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/vuejs/vue/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/vuejs/vue/issues/comments{/number}",
        contents_url: "https://api.github.com/repos/vuejs/vue/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/vuejs/vue/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/vuejs/vue/merges",
        archive_url:
          "https://api.github.com/repos/vuejs/vue/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/vuejs/vue/downloads",
        issues_url: "https://api.github.com/repos/vuejs/vue/issues{/number}",
        pulls_url: "https://api.github.com/repos/vuejs/vue/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/vuejs/vue/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/vuejs/vue/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/vuejs/vue/labels{/name}",
        releases_url: "https://api.github.com/repos/vuejs/vue/releases{/id}",
        deployments_url: "https://api.github.com/repos/vuejs/vue/deployments",
        created_at: "2013-07-29T03:24:51Z",
        updated_at: "2021-10-17T22:42:15Z",
        pushed_at: "2021-10-15T13:48:56Z",
        git_url: "git://github.com/vuejs/vue.git",
        ssh_url: "git@github.com:vuejs/vue.git",
        clone_url: "https://github.com/vuejs/vue.git",
        svn_url: "https://github.com/vuejs/vue",
        homepage: "http://vuejs.org",
        size: 27632,
        stargazers_count: 189374,
        watchers_count: 189374,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 30424,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 538,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        topics: ["framework", "frontend", "javascript", "vue"],
        visibility: "public",
        forks: 30424,
        open_issues: 538,
        watchers: 189374,
        default_branch: "dev",
        temp_clone_token: null,
        organization: {
          login: "vuejs",
          id: 6128107,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjYxMjgxMDc=",
          avatar_url: "https://avatars.githubusercontent.com/u/6128107?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/vuejs",
          html_url: "https://github.com/vuejs",
          followers_url: "https://api.github.com/users/vuejs/followers",
          following_url:
            "https://api.github.com/users/vuejs/following{/other_user}",
          gists_url: "https://api.github.com/users/vuejs/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/vuejs/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/vuejs/subscriptions",
          organizations_url: "https://api.github.com/users/vuejs/orgs",
          repos_url: "https://api.github.com/users/vuejs/repos",
          events_url: "https://api.github.com/users/vuejs/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/vuejs/received_events",
          type: "Organization",
          site_admin: false,
        },
        network_count: 30424,
        subscribers_count: 6216,
      },
    ],
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="Github Compare" />
        <Form>
          <input type="text" placeholder="User/Repository" />
          <button type="submit">Ok</button>
        </Form>
        <CompareList repositories={this.state.repositories} />
      </Container>
    );
  }
}
