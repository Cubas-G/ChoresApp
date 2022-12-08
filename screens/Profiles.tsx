import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'

import React, { useState, useEffect } from "react";

import { HttpClient } from "../services/http.service";
import { ListCategoriesResponse } from "../interfaces/index";
const COLORS = {
  primary: "#E13E3E",
  secondary: "#FFFFFF",
  tertiary: "#D5AAB3",
  bg: "transparent",
};
const client = new HttpClient();

const Profiles = () => {
  const [categories, setCategories] = useState<ListCategoriesResponse>({
    data: [],
    metadata: {},
  });

  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(1);

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
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {categories.data.map((category, index) => (

        <View
        >
          <Text

          >
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
    alignItems: "center",
    marginLeft: 9,
    marginVertical: 15,
  },
  categoryBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 100,
    marginRight: 10,
    borderRadius: 10,
    paddingTop: 3,
  },
})