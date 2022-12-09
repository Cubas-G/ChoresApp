import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'

import React, { useState, useEffect } from "react";

import { HttpClient } from "../services/http.service";
import { ListCategoriesResponse } from "../interfaces/index";

const client = new HttpClient();

const Profiles = () => {
  const [categories, setCategories] = useState<ListCategoriesResponse>({
    data: []
  });

  const getPopularCategories = async () => {
    const response = await client.get("categories");
    console.log(response);

    setCategories(response);
  };

  useEffect(() => {
    getPopularCategories();
  }, []);
  return (
    <ScrollView
      
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {categories.data.map((category, index) => (
        <View style={styles.containerView} key={index}>
          <Text style={styles.text}>
            {category.name},{category.description},
          </Text>
        </View>
      ))}
    </ScrollView>
  )
}

export default Profiles

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor: '#0b3054',
  },
  containerView:{
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 10,
    marginLeft: 10,
    borderWidth: 3,
    borderColor: '#fffff',
    marginTop: 10,
  },
  text: {
    fontSize: 24,
    color: '#ffffff'
},
})