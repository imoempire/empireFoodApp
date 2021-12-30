import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HomeHeader from '../Components/HomeHeader'

const Home = () => {
   return (
      <View style={styles.container}>
         <View>
         <HomeHeader title="empShop"/>
         </View>
         <Text>Home Screen</Text>
      </View>
   )
}

export default Home

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "white",
   }
})
