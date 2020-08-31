import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
  const [titleInput, setTitleInput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const { addBlogPost } = useContext(Context);

  const onSubmitHandler = () => {
    addBlogPost(titleInput, messageInput);
    setTitleInput('');
    setMessageInput('');
    navigation.navigate('Home');
  }
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>Enter Title</Text>
      <TextInput
        style={ styles.input }
        placeholder="Title"
        autoCapitalize="none"
        autoCorrect={ false }
        value={ titleInput }
        onChangeText={ setTitleInput }
      />
      <Text style={ styles.title }>Enter Title</Text>
      <TextInput
        style={ styles.input }
        placeholder="Message"
        autoCapitalize="none"
        autoCorrect={ false }
        value={ messageInput }
        onChangeText={ setMessageInput }
      />
      <Button 
        title="Create Blog Post"
        onPress={ onSubmitHandler }
      />
    </View>
  )
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

export default CreateScreen;