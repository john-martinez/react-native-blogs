import React, { useContext } from 'react';
import { Context } from '../context/BlogContext';
import BlogForm from '../components/BlogForm';

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  return <>
    <BlogForm 
      label="Create"
      onSubmitHandler={ (title, message) => {
        addBlogPost(title, message, () => navigation.navigate('Home') )
      } }
    />
  </>  
}

export default CreateScreen;