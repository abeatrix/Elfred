import * as React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Image, TextInput } from 'react-native';
import { FlatList  } from 'react-native-gesture-handler';
import CoinListItem from '../components/CoinListItem';

import EditScreenInfo from '../components/EditScreenInfo';
import Searchbar from '../components/Searchbar';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {

  const [coins, setCoins] = useState([])
  const [query, setQuery] = useState("")

  useEffect(()=>{
    const fetchCoins = async () => {
      const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false")
      const coinz = await res.json()
      setCoins(coinz)
    }
    fetchCoins();
}, [])

  function search() {
    if(query){
      const searching = coins.filter(coin => coin.name.toLowerCase().includes(query.toLowerCase()))
      setCoins(searching)
    }
  }

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/logo.png")} style={styles.logo}/>
      <Text style={styles.title}>Elfred</Text>
      <TextInput style={styles.input} placeholderTextColor="#FCFCFC" placeholder="Search" onChangeText={(text) => {setQuery(text); search();}}/>
      {/* <Searchbar onChangeText={(text) => setQuery({text}, () => search()) }/> */}
      {coins? <FlatList
      data={coins}
      showsVerticalScrollIndicator={false}
      snapToAlignment={"center"}
      renderItem={({item})=>
        <CoinListItem key={item.id} coin={item} />
      }/> : null}
      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#070816',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  logo: {
    marginTop: 50,
    height: 100,
    width: 200,
    resizeMode: 'cover',
  },
  input: {
    backgroundColor: "#63609C",
    minWidth: 610,
    padding: 30,
    color: 'white',
  }

});
