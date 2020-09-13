import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity ,Platform } from 'react-native';

import { CATEGORIES } from '../data/data';


const CategoriesScreen = props => {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity onPress={() => { 
        props.navigation.navigate( {routeName: 'CategoryMeals' , params: {
          categoryId: itemData.item.id,
        } });
      }}>
        <View style={styles.gridItem}><Text>{itemData.item.title}</Text></View>
      </TouchableOpacity>
    )
  }

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2} />
  )
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories'
};


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
});

export default CategoriesScreen;
