import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Card from './Card'
import { FoodData } from './Data'

const Food = () => {
   return (
      <View style={styles.container}>
         <Card Data={FoodData}/>
      </View>
   )
}

export default Food

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'white'
   }
})
