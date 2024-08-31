import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchBar = ({ placeholder, onSearch }) => {
  const [text, setText] = useState('');

  const handleSearch = () => {
    console.log(text); 
    if (text.trim()) {
      onSearch(text.trim());
      setText(''); // Clear the input after search
    } else {
      Alert.alert('Error', 'Please enter a city or country name'); // Show alert if input is empty
    }
  };

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchBar}
        placeholder="Enter city or country"
        placeholderTextColor="white"
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
        <Ionicons name="search" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    width: '90%',
    alignSelf: 'center',
    marginLeft:30,
  },
  searchBar: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 20, // Rounded corners
    width: '80%',
    paddingHorizontal: 10,
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Slightly transparent background
  },
  searchButton: {
    marginLeft: 10,
    padding: 10,
    borderRadius: 20, // Rounded corners for consistency
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Slightly transparent background for button
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchBar;
