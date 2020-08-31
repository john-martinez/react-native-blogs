import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

const EditScreen = ({ route }) => {
  const { data } = useContext(Context);
  const blogPost = data.find( blog => blog.id === route.params.id);
  
  return <View>
    <Text>Edit Screen</Text>
  </View>
}

const styles = StyleSheet.create({});

export default EditScreen;