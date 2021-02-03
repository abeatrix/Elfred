import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TextInput, View} from 'react-native';

export default function Searchbar() {
  return (
    <View style={styles.search}>
        <TextInput style={styles.input} placeholderTextColor="#FCFCFC" placeholder="Search"/>
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    margin: 10,
    display: "flex",
    alignItems: "center",
    width: "50%",
  },
  input: {
    backgroundColor: "#63609C",
    width: "70%",
    height: 8,
    padding: 30,
    color: 'white',
  }
});
