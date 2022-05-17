import React, { useState } from "react";
import { FlatList, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import HomeHeader from "../Components/HomeHeader";
import { filterData } from "../Components/Data";
import TopNav from "../../TopNav";

const HomeScreen = () => {
  const [delivery, setDelivery] = useState(true);
  const [indexCheck, setIndexCheck] = useState("0");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <HomeHeader title="empShop" />
      </View>
      <View style={styles.getOptions}>
        <View>
          <TouchableOpacity
            onPress={() => {
              setDelivery(true);
            }}
            style={styles.btn}
          >
            <View
              style={[
                { backgroundColor: delivery ? "#FF4500" : "#D3D3D3" },
                styles.btn,
              ]}
            >
              <Text
                style={{ fontSize: 15, color: delivery ? "white" : "black" }}
              >
                Delivery
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              setDelivery(false);
            }}
            style={styles.btn}
          >
            <View
              style={[
                { backgroundColor: delivery ? "#D3D3D3" : "#FF4500" },
                styles.btn,
              ]}
            >
              <Text
                style={{ fontSize: 15, color: delivery ? "black" : "white" }}
              >
                Pick-up
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.Location}>
        <View style={styles.location}>
          <View style={styles.address}>
            <Icon
              type="ionicon"
              name="location-outline"
              color="#191970"
              size={25}
            />
            <Text>Madina,Zongo Junction</Text>
          </View>
          <View style={styles.time}>
            <Icon
              type="ionicon"
              name="time-outline"
              color="#191970"
              size={20}
            />
            <Text>Now</Text>
          </View>
        </View>
        <View style={[styles.location, { marginHorizontal: 10 }]}>
          <View style={styles.filter}>
            <Icon type="material" name="tune" size={20} />
          </View>
        </View>
      </View>

      <View style={styles.Label}>
        <Text style={{ fontSize: 20 }}>Categories</Text>
      </View>
      <View style={styles.List}>
        <TopNav/>
        {/* <FlatList
          horizontal={true}
          data={filterData}
          extraData={indexCheck}
          renderItem={({item})=>(
             <Pressable onPress ={()=>{setIndexCheck(item.id)}}>
                <TouchableOpacity style={indexCheck === item.id ? {...styles.listCard} : {...styles.listCardSelected}}>
                  <Image style={{width: 60, height: 60}} 
                  source={item.image} />
                  <Text style={indexCheck === item.id ? {...styles.itemName}:{...styles.itemNameSelected}}>{item.name}</Text>
                </TouchableOpacity>
             </          keyExtractor={(item) => item.id}
Pressable>
          )}
        /> */}
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.15,
  },
  getOptions: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    padding: 4,
    width: 100,
    borderRadius: 50,
    alignItems: "center",
    marginHorizontal: 5,
  },
  Location: {
    flex: 0.05,
    flexDirection: "row",
    marginHorizontal: 10,
    justifyContent: "center",
  },
  location: {
    backgroundColor: "#A9A9A9",
    flexDirection: "row",
    borderRadius: 20,
    padding: 3,
  },
  address: {
    flexDirection: "row",
    alignItems: "center",
  },
  time: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    paddingRight: 3,
    marginHorizontal: 10,
  },
  filter: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#A9A9A9",
    borderRadius: 20,
    padding: 3,
  },
  Label: {
    backgroundColor: "#D3D3D3",
    alignItems: "center",
    marginVertical: 10,
    padding: 5,
  },
  List: {
     flex: .7,
  },
  listCard: {
   //   flex: .1,
      backgroundColor: 'blue',
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",
      padding: 0,
      width: 100,
      height: 100,
      margin: 8,
  },
  listCardSelected: {
   backgroundColor: 'white',
   borderRadius: 20,
   justifyContent: "center",
   alignItems: "center",
   width: 100,
   margin: 8,
   height: 100,
   padding: 0,
  },
  itemName: {
   fontWeight: "bold",
   color: "white"  
  },
  itemNameSelected: {
   fontWeight: "bold",
   color: "black"  
  }
});
