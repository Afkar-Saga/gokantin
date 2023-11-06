import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import ProdukCard from './components/ProdukCard';

export default function App() {
  const [text, setText] = useState('')
  const produk1 = require('./assets/aoka_keju.png')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GoKantin</Text>
      <TextInput 
        value={text}
        style={styles.input}
        placeholder='Cari...'
        onChangeText={(text) => {
          setText(text)
        }}
      />
      <Text style={{fontSize: 50}}>{text}</Text>
      <ProdukCard 
        img={produk1} 
        nama={'Aoka Keju'} 
        harga={'Rp2.500'}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
  },
  input: {
    width: 300,
    height: 50,
    paddingStart: 20,
    borderWidth: 0.5,
    borderRadius: 20,
  }
});
