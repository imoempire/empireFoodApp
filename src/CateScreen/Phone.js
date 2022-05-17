import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Card from './Card'
import { PhoneData } from './Data'

const Phone = () => {
   return (
      <View style={styles.container}>
         <Card Data={PhoneData}/>
      </View>
   )
}

export default Phone

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'white'
   }
})
