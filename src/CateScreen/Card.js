import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { PhoneData } from "./Data";

const Card = ({Data}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.food}>
              <Image style={{ width: 100, height: 100 }} source={item.image} />
              </View>
              <View style={styles.info}>
                <View style={styles.name}>
                  <Text style={[styles.text, {fontSize: 20}]}>
                     {item.name}</Text>
                </View>
                <Text style={{fontSize: 20}}>${item.price}</Text>
              </View>
              <View style={styles.order}>
                 <TouchableOpacity style={styles.btn}>
                    <Text style={styles.Text}>Order</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.btn}>
                    <Text style={styles.Text}>PickUp</Text>
                 </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
   card: {
      borderBottomWidth: 2,
      marginHorizontal: 10,
      marginVertical: 10,
      flexDirection: "row",
      justifyContent: "space-between"
   },
  food: {
    flexDirection: "row",
    marginVertical: 10,
  },
  info: {
    justifyContent: "center",
    left: 0,
  },
  name: {
     backgroundColor: "black",
     borderRadius: 10,
     padding: 7,
  },
  text: {
    color: "white",
    height: 30,
    width: '100%',
    borderRadius: 10,
    fontWeight: "bold",
  },
  order: {
     justifyContent: "center",
  },
  btn: {
     backgroundColor: "red",
     marginHorizontal: 10,
     marginVertical: 10,
     padding: 10,
     borderRadius: 10,
  },
  Text: {
     color: "white",
  }
});
