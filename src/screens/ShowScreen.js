import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

const ShowScreen = ({ route }) => {
  const { data } = useContext(Context);
  const blogPost = data.find(blog => blog.id === route.params.id)
  return <View>
    <Text>{ blogPost.title }</Text>
    <Text>{ blogPost.message }</Text>
  </View>
}

const styles = StyleSheet.create({});

export default ShowScreen;