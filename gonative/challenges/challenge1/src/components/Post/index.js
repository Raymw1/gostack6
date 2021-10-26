import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import PropTypes from 'prop-types';

const Post = ({title, author, children}) => (
  <View style={styles.postContainer}>
    <Text style={styles.postTitle}>{title}</Text>
    <Text style={styles.postAuthor}>{author}</Text>
    <Text style={styles.postContent}>{children}</Text>
  </View>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 4,
    marginBottom: 8,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  postAuthor: {
    fontSize: 16,
    color: '#999',
    paddingBottom: 8,
    marginBottom: 8,
    borderBottomColor: '#f1f1f1',
    borderBottomWidth: 1,
  },
  postContent: {
    fontSize: 16,
  },
});

export default Post;
