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
                <Text style={styles.name}>${coin.symbol.toUpperCase()}</Text>
            </View>
            <Text style={styles.text}>${coin.current_price.toFixed(2)}</Text>
            { coin.price_change_24h > 0 ?
            <Text style={styles.up}>+${coin.price_change_24h.toFixed(2)}</Text>
            : <Text style={styles.down}>{coin.price_change_24h.toFixed(2)}</Text>}
            {coin.price_change_percentage_24h > 0?
            <Text style={styles.up}>+${coin.price_change_percentage_24h.toFixed(2)}%</Text>
            : <Text style={styles.down}>{coin.price_change_percentage_24h.toFixed(2)}%</Text>}

        </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
container: {
    margin: 10,
    backgroundColor: '#343756',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
},
wrapper: {
    flexDirection: 'row',
    backgroundColor: '#343756',
    alignItems: 'center',
    justifyContent: 'space-evenly',
},
col: {
    backgroundColor: '#343756',
    alignItems: 'center',
    marginRight: 10,
    minWidth: 200,
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
    minWidth: 100,
},
up: {
    color: '#00CFC7',
    marginHorizontal: 10,
    minWidth: 100,
},
down: {
    color: '#E21B59',
    marginHorizontal: 10,
    minWidth: 100,
}
});
