import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import React from 'react'
import { Image, Text, View } from 'react-native';
import Food from './src/CateScreen/Food';
import FoodItems from './src/CateScreen/FoodItems';
import HomeElectric from './src/CateScreen/HomeElectric';
import Phone from './src/CateScreen/Phone';
import {Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();

const TopNav = () => {
   return (
      <Tab.Navigator>

         <Tab.Screen name="food" component={Food} 
             options={{
               tabBarLabel: ({ focused, color, size }) => (
                  (color = "black"),
                  (size = 15),
                  (
                    <Text style={{ color: focused ? "black" : color, fontSize: size, top: 10 }}>
                      Food
                    </Text>
                  )
                ), 
                tabBarIcon: () => (
                  (
                     <Image style={{width: 50, height: 40}} 
                     source={require("./assets/food.png")} />
               )
             )
             }}
         />

         <Tab.Screen name="Phone" component={Phone} 
             options={{
               tabBarLabel: ({ focused, color, size }) => (
                  (color = "black"),
                  (size = 15),
                  (
                    <Text style={{ color: focused ? "black" : color, fontSize: size, top: 10 }}>
                      Phone
                    </Text>
                  )
                ),
                 tabBarIcon: () => (
               (
                  <Image style={{width: 50, height: 40}} 
                  source={require("./assets/R.png")} />
               )
          ) }}
         />

         <Tab.Screen name="FoodItems" component={FoodItems} 
             options={{ 
               tabBarLabel: ({ focused, color, size }) => (
                  (color = "black"),
                  (size = 15),
                  (
                    <Text style={{ color: focused ? "black" : color, fontSize: size, top: 10 }}>
                      FoodItem
                    </Text>
                  )
                ),
                tabBarIcon: ({ focused, color}) => (
                   (color = "black"),
               (  
                  <View>
                  <Image style={{width: 50, height: 40}} 
                  source={require("./assets/R.jpg")} />
                  </View>
            )
          ) }}
         />

         <Tab.Screen name="HomeElectric" component={HomeElectric}
             options={{ 
               tabBarLabel: ({ focused, color, size }) => (
                  (color = "black"),
                  (size = 15),
                  (
                    <Text style={{ color: focused ? "black" : color, fontSize: size, top: 10 }}>
                      Home
                    </Text>
                  )
                ),
               tabBarIcon: () => (
               (  
               <View>
                  <Image style={{width: 50, height: 40, }} 
                  source={require("./assets/hom.png")} />
               </View>
            )
          ) }}
         />

      </Tab.Navigator>
   )
}

export default TopNav

