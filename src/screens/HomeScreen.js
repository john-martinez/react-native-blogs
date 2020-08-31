import React, { useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 


const HomeScreen = ({ navigation }) => {
  const { data, addBlogPost, deleteBlogPost } = useContext(Context);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Blog Posts",
      headerRight: () => {
        return <TouchableOpacity onPress={ ()=> navigation.navigate('Create') } >
          <AntDesign name="plus" style={{ fontSize: 30, marginRight: 10 }}/>
        </TouchableOpacity>
      } 
    })
  })
  
  return (
    <>
      <Text>HomeScreen</Text>
      <Button 
        title="click me"
        onPress={()=> addBlogPost({title: 'jor', message: 'gago ka'}) } 
      />
      <FlatList 
        data={ data }
        keyExtractor={ (_,index) => index.toString() }
        renderItem={ ({ item }) => {
          return <TouchableOpacity onPress={ () => navigation.navigate('Show', { id: item.id }) }>
            <View style={ styles.listItem }>
              <Text>{ item.title } - { item.id }</Text>
              <TouchableOpacity onPress={ () => deleteBlogPost(item.id)} >
                <Feather name="trash-2" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        }}
      />
    </>
  )
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "black",
    paddingRight: 10,
    paddingLeft: 5,
    paddingVertical: 10
  }
})
export default HomeScreen;