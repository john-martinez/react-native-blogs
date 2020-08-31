import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { Context } from '../context/BlogContext';

const ShowScreen = ({ navigation, route }) => {
  const { data } = useContext(Context);
  const blogPost = data.find(blog => blog.id === route.params.id);

  React.useLayoutEffect( () => {
    navigation.setOptions({
      headerTitle: "Show Blog",
      headerRight: () => {
        return <TouchableOpacity onPress={ () => navigation.navigate('Edit', { id: route.params.id })}>
          <Entypo name="edit" style={{ fontSize: 30, marginRight: 10 }} />
        </TouchableOpacity>
      }
    })
  })
  
  return <View>
    <Text>{ blogPost.title }</Text>
    <Text>{ blogPost.message }</Text>
  </View>
}




const styles = StyleSheet.create({});

export default ShowScreen;