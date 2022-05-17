import React, { useState } from "react";
import {
   FlatList,
   Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import HomeHeader from "../Components/HomeHeader";
import { filterData } from "../Components/Data";

const Home = () => {
  const [delivery, setDelivery] = useState(true);
  const [indexCheck, setIndexCheck] = useState("0");
  return (
    <View style={styles.container}>
      <View>
        <HomeHeader title="empShop" />
      </View>
      <ScrollView>
        <View>
          <View style={styles.getOptions}>
            <View>
              <TouchableOpacity
                onPress={() => { setDelivery(true);}}
                style={styles.btn} >
                <View style={[{ backgroundColor: delivery ? "#FF4500" : "#D3D3D3" },styles.btn,]} >
                  <Text style={{fontSize: 20, color: delivery ? "white" : "black",}}>
                    Delivery
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => { setDelivery(false); }}
                style={styles.btn} >
                <View style={[ { backgroundColor: delivery ? "#D3D3D3" : "#FF4500" },
                    styles.btn, ]}>
                  <Text style={{ fontSize: 20, color: delivery ? "black" : "white",}} >
                    Pick-up
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Below Options */}
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
         <View style={styles.location}>
         <View style={styles.address}>
            <Icon
              type="ionicon"
              name="location-outline"
              color="#191970"
              size={30}
            />
            <Text>Madina,Zongo Junction</Text>
          </View>
          <View style={styles.time}>
            <Icon
              type="ionicon"
              name="time-outline"
              color="#191970"
              size={30}
            />
            <Text>Now</Text>
          </View>
         </View>
          <View style={{backgroundColor:"#A9A9A9", borderRadius: 20, alignItems: "center", padding: 5, right: 10}}>
             <Icon 
             type="material"
             name="tune"
             size={30} />
          </View>
        </View>

        
           <View style={styles.Label}>
               <Text style={{ fontSize: 20}}>Categories</Text>
           </View>

           <View>
              <FlatList
               data={filterData}
               keyExtractor={(item)=>item.id}
               extraData={indexCheck} />
           </View>
           
      </ScrollView>
      <Text style={{backgroundColor: 'red'}}>Home Screen</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
    marginHorizontal: 10,
  },
  location: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#A9A9A9",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    right: 5,
    borderRadius: 20,
    marginVertical: 10,
    padding: 5,
   },
   address: {
      flexDirection: "row",
      alignItems: "center", 
    },
   time: {
   flexDirection: "row",
   alignItems: "center", 
   paddingRight: 10,
   borderRadius: 20,
   alignItems: "center", 
   marginHorizontal: 10, 
   backgroundColor: "white"
  },
  Cate:{
     flex: 1,
  },
  Label:{
     backgroundColor: "#D3D3D3",
     alignItems: "center",
     marginVertical: 10,
     padding: 5,
  },
  Items:{
     flex: 1,
     backgroundColor: 'red'
   //   flexDirection: "row",
  },
  item:{
      flex: 1,
      backgroundColor:'yellow'
  }
});
