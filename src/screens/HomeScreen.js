import React, { useContext } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { Context } from '../context/BlogContext';

const HomeScreen = () => {
  const { data, addBlogPost } = useContext(Context);
  
  return (
    <>
      <Text>HomeScreen</Text>
      <Button 
        title="click me"
        onPress={()=> addBlogPost({title: 'jor', message: 'gago ka'}) } 
      />
      <View>
        <FlatList 
          data={ data }
          keyExtractor={ (_,index) => index.toString() }
          renderItem={ ({ item }) => {
            return <>
              <Text>{ item.title }</Text>
              <Text>{ item.message }</Text>
            </>
          }}
        />
      </View>
    </>
  )
}

export default HomeScreen;