import React from 'react';


import { CATEGORIES, MEALS } from '../data/data';
import { HeaderTitle } from 'react-navigation-stack';
import Colors from "../constants/Colors";

import MealList from '../components/MealList'

const CategoryMealScreen = props => {

  const catId = props.navigation.getParam('categoryId');
  const displayMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >=0);
  return <MealList listData={displayMeals} navigation={props.navigation}/>
};

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};


export default CategoryMealScreen;
