import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import Swiper from "react-native-swiper";
import * as Animatable from "react-native-animatable";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";


const Welcome = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      {/* Introduction */}
      <View style={styles.intro}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Discover More Arround You{" "}
        </Text>
      </View>

      {/* Swiper */}
      <View style={styles.swiper}>
        <Swiper autoplay={true}>
          <View style={styles.sider1}>
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../../assets/shopping.png")}
            />
          </View>
          <View style={styles.sider2}>
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../../assets/Add.png")}
            />
          </View>
          <View style={styles.sider3}>
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../../assets/online.png")}
            />
          </View>
          <View style={styles.sider4}>
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../../assets/arrived.png")}
            />
          </View>
        </Swiper>
      </View>


      {/* Buttons */}
      <View style={styles.button}>
        <TouchableOpacity onPress={()=>navigation.navigate('SignIn')} style={[styles.signGoogle, styles.shadowProp]}>
          <Text style={{ color: "white" }}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.newAccount, styles.shadowProp]}>
          <Text style={{ color: "black" }}>Create a new Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  // Sub Styling
  intro: {
    flex: 0.25,
    alignItems: "center",
    justifyContent: "center",
  },

  //   Swiper
  swiper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  swip: {
    width: "100%",
  },
  sider1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  sider2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sider3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sider4: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  //   End
  button: {
    flex: 0.35,
  },

  shadowProp: {
    shadowRadius: 3,
    shadowOpacity: 0.15,
    shadowColor: "#171717",
    shadowOffset: { width: 1, height: 10 },
  },
  newAccount: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 2,
    marginHorizontal: 40,
    height: 40,
    backgroundColor: "white",
    marginVertical: 10,
  },
  signGoogle: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginHorizontal: 40,
    height: 40,
    backgroundColor: "#CC2200",
    marginVertical: 10,
  },
});
