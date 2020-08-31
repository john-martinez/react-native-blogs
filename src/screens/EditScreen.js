import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogForm from '../components/BlogForm';

const EditScreen = ({ navigation, route }) => {
  const { data, editBlogPost } = useContext(Context);
  const id = route.params.id;
  const blogPost = data.find( blog => blog.id === id);

  return <View>
    <BlogForm 
      label="Edit"
      initialValues={ blogPost }
      onSubmitHandler={ (title, message) => {
        editBlogPost(id, title, message, navigation.pop);
      } }
    />
  </View>
}

const styles = StyleSheet.create({});

export default EditScreen;