import './config/ReactotronConfig';
import './config/DevToolsConfig';
import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import Post from '~/components/Post';

export default class App extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    for (let i = 0; i < 4; i++) {
      this.setState(state => ({
        posts: [
          ...state.posts,
          {
            id: i,
            title: 'Aprendendo React Native',
            author: 'Rayan Wilbert',
            content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dicta dolorum itaque in quisquam eos magni voluptatum, earum commodi sequi nostrum incidunt ratione quis molestias deleniti reiciendis sapiente. Nemo, nobis.`,
          },
        ],
      }));
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleApp}>GoNative App</Text>
        <ScrollView style={styles.postList}>
          {this.state.posts.map(post => (
            <Post key={post.id} title={post.title} author={post.author}>
              {post.content}
            </Post>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleApp: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: '600',
  },
  postList: {
    backgroundColor: '#EE7777',
    padding: 18,
  },
});
