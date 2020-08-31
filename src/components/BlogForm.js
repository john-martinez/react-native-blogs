import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';

const BlogForm = ({ label, initialValues, onSubmitHandler }) => {
  const [titleInput, setTitleInput] = useState( initialValues.title );
  const [messageInput, setMessageInput] = useState( initialValues.message );

  return <View style={ styles.container }>
    <Text style={ styles.title }>{ label } Title</Text>
    <TextInput
      style={ styles.input }
      placeholder="Title"
      autoCapitalize="none"
      autoCorrect={ false }
      value={ titleInput }
      onChangeText={ setTitleInput }
    />
    <Text style={ styles.title }>{ label } Message</Text>
    <TextInput
      style={ styles.input }
      placeholder="Message"
      autoCapitalize="none"
      autoCorrect={ false }
      value={ messageInput }
      onChangeText={ setMessageInput }
    />
    <Button 
      title="Save Blog Post"
      onPress={ () => onSubmitHandler(titleInput, messageInput) }
    />
  </View>
}

BlogForm.defaultProps = {
  initialValues: {
    title: '',
    message: ''
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5
  },  
  title: {
    fontSize: 20, 
    fontWeight: "700"
  },
  input: {
    borderWidth: 1,
    fontSize: 17,
    padding: 10
  }
})

export default BlogForm;