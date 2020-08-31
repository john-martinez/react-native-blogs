import React, { useContext } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

const EditScreen = ({ route }) => {
  const { data } = useContext(Context);
  const blogPost = data.find( blog => blog.id === route.params.id);
  
  return <View>
    <TextInput>Edit Screen</TextInput>
  </View>
}

const styles = StyleSheet.create({});

export default EditScreen;