import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Card from './Card'

const HomeElectric = () => {
   return (
      <View style={styles.container}>
         <Card/>
      </View>
   )
}

export default HomeElectric

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'red'
   }
})
