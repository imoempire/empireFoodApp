import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon, withBadge } from "react-native-elements";

const HomeHeader = ({ title }) => {
  const navigation = useNavigation();
  const BadgeIcon = withBadge(0)(Icon)
  return (
    <SafeAreaView style={styles.shadowProp}>
      <View style={[styles.container]}>
        <TouchableOpacity>
        <Icon 
            type="material"
            name="menu"
            size= {40}
         />        
         </TouchableOpacity>
        <Text style={{ fontSize: 25, fontWeight: "bold", right: 10 }}>{title}</Text>
        <TouchableOpacity>
        <BadgeIcon
            type="ionicon" 
            name= "cart"
            size= {40}
            color="black"
        />        
         </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    justifyContent: "space-between",
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: 'white'
  },
  shadowProp: {
   shadowRadius: 3,
   shadowOpacity: 0.3,
   shadowColor: "#171717",
   shadowOffset: { width: 1, height: 10 },
 },
});
