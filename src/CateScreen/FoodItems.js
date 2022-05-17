import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Card from './Card'

const FoodItems = () => {
   return (
      <View style={styles.container}>
         <Card/>
      </View>
   )
}

export default FoodItems

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'pink'
   }
})
