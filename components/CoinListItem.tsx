import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, Image, Pressable } from 'react-native';
import { Text, View } from './Themed';

export default function Searchbar({coin}) {
  return (
    <Pressable style={styles.container}>
        {/* <Text style={styles.name}>{coin.name}</Text> */}
        <View style={styles.wrapper}>
            <View style={styles.col}>
                <Image style={styles.pic} source={{uri: coin.image}}/>
                {/* <Text style={styles.name}>${coin.symbol.toUpperCase()}</Text> */}
            </View>
            <Text style={styles.text}>${coin.current_price.toLocaleString()}</Text>
            { coin.price_change_24h > 0 ?
            <Text style={styles.up}>+${coin.price_change_24h.toLocaleString()}</Text>
            : <Text style={styles.down}>{coin.price_change_24h.toLocaleString()}</Text>}
            {coin.price_change_percentage_24h > 0?
            <Text style={styles.up}>+${coin.price_change_percentage_24h.toLocaleString()}%</Text>
            : <Text style={styles.down}>{coin.price_change_percentage_24h.toLocaleString()}%</Text>}

        </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
container: {
    width: "95%",
    margin: 10,
    backgroundColor: '#343756',
    padding: 20,
    alignItems: 'center',
},
wrapper: {
    width: "100%",
    flexDirection: 'row',
    backgroundColor: '#343756',
    alignItems: 'center',
    justifyContent: 'space-between',
},
col: {
    backgroundColor: '#343756',
    alignItems: 'center',
    width: "10%",
},
pic: {
    width: 50,
    height: 50,
},
name: {
    color: '#FCFCFC',
    fontWeight: 'bold',
    },
text: {
    color: '#FCFCFC',
    marginHorizontal: 10,
    minWidth: "5%",
},
up: {
    color: '#00CFC7',
    marginHorizontal: 10,
    minWidth: "5%",
},
down: {
    color: '#E21B59',
    marginHorizontal: 10,
    minWidth: "5%",
}
});
