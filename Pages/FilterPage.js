import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { Button, List, Divider } from 'react-native-paper';

const FilterPage = () => {
  const categories = ['Category', 'Brand', 'Color', 'Price', 'Reviews', 'Delivery'];

  const [selectedCategory, setSelectedCategory] = useState('');
  const [filterOptions, setFilterOptions] = useState([]);

  const sampleData = {
    Category: ['Electronics', 'Clothing', 'Shoes', 'Accessories'],
    Brand: ['Nike', 'Adidas', 'Samsung', 'Apple'],
    Color: ['Red', 'Blue', 'Green', 'Black', 'White'],
    Price: ['Under $25', '$25 - $50', '$50 - $100', '$100 and above'],
    Reviews: ['⭐', '⭐⭐', '⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐'],
    Delivery: ['Next Day Delivery', 'Express Shipping', 'Standard Shipping'],
  };

  const renderFilterOptions = ({ item }) => (
    <TouchableOpacity style={{ marginBottom: 10 }}>
      <Button mode="contained">{item}</Button>
    </TouchableOpacity>
  );

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
    setFilterOptions(sampleData[category]);
  };

  return (
    <SafeAreaView style={{ flex: 1,marginVertical:30, }}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
          <List.Section>
            <List.Subheader>Filter Categories</List.Subheader>
            <FlatList
              data={categories}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleCategoryPress(item)}
                  style={{ padding: 10 }}
                >
                  <List.Item title={item} />
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </List.Section>
        </View>

        <View style={{ flex: 2, borderLeftWidth: 1, borderColor: '#ccc', padding: 10 }}>
          {selectedCategory ? (
            <>
              <Text style={{ fontSize: 18, marginBottom: 10 }}>{selectedCategory} Options:</Text>
              <Divider />
              <FlatList
                data={filterOptions}
                renderItem={renderFilterOptions}
                keyExtractor={(item, index) => index.toString()}
                style={{ flex: 1 }}
              />
            </>
          ) : (
            <Text>Please select a category to see options.</Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FilterPage;
