import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = ({ title }) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.shadowProp}>
      <View style={[styles.container]}>
        <TouchableOpacity>
          <Ionicons
            style={{ left: 15 }}
            name="arrow-back-sharp"
            size={30}
            color="black"
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 25, fontWeight: "bold", right: 10 }}>
          {title}
        </Text>
        <Text></Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;

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
