import { Button, Image, Text, View } from "react-native";

export default function ProdukCard(props) {
  return (
    <View style={{width: 150, height: 200, borderWidth: 1, padding: 10}}>
      <Image
        style={{maxWidth: 120, height: 70}}
        source={props.img} 
      />
      <Text>{props.nama}</Text>
      <Text>{props.harga}</Text>
      <Button title='Pesan' />
    </View>
  )
}