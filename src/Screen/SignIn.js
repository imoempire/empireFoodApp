import React, {useState, useRef} from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Header from "../Components/Header";
import * as Animatable from "react-native-animatable"
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";


const SignIn = () => {
  const navigation = useNavigation();

  // State Here !!!!!!!!
  const [textInput2, setTextInput2] = useState(false)
  const text1 = useRef(1)
  const text2 = useRef(2)


  return (
    <View style={styles.container}>
      <View>
        <Header title="My-Account" />
      </View>
      <View style={styles.signText}>
        <Text style={{ fontSize: 20, color: "black" }}>Sign In</Text>
      </View>
      <View style={styles.signInfo}>
        <Text style={{ fontSize: 13, color: "black" }}>
          Please enter your registed email and password
        </Text>
      </View>

      {/* Form */}
      <View style={styles.form}>
        {/* email */}
        <View>
        <TextInput 
        style={styles.input} 
        placeholder="Enter email"
        ref={text1}
        />
        </View>
        {/* Password */}

        <View style={styles.input1}>
          <Animatable.View animation={textInput2?"":"fadeInLeft"} duration={400}>
            <Icon 
            name="lock"
            iconStyle={{color:'grey'}}
            type= 'material'
             />
          </Animatable.View>
          <TextInput
          style={{width:"70%"}}
          placeholder="Enter password"
          secureTextEntry={true}
          ref={text2}
          onFocus={()=>{
            setTextInput2(false)
          }}
          onBlur={() => {
            setTextInput2(true)
          }}
          />
          <Animatable.View animation={textInput2?"":"fadeInLeft"} duration={400} >
          <Icon 
            name="visibility"
            iconStyle={{color:'grey'}}
            type= 'material'
            style={{marginRight: 15}}
             />
          </Animatable.View>
        </View>
        {/* SignIn btn */}

        <TouchableOpacity style={[styles.signButton, styles.shadowProp]}
          onPress={() => navigation.navigate('Home')}>
          <Text style={{color: 'white'}}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signForget}>
          <Text style={{textDecorationLine: 'underline'}}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <View>
         <View style={styles.signOptions}>
         <Text>OR REGISTER</Text>
         </View>
        <TouchableOpacity style={[styles.signGoogle, styles.shadowProp]}>
          <Text style={{color: 'white'}}>With Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.signFacebook, styles.shadowProp]}>
          <Text style={{color: 'white'}}>Create a new Account</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  shadowProp: {
    shadowRadius: 3,
    shadowOpacity: 0.15,
    shadowColor: "#171717",
    shadowOffset: { width: 1, height: 10 },
  },
  signText: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  signInfo: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  form: {
    flex: .9,
    marginHorizontal: 15,
  },
  input: {
    borderWidth: 2,
    height: 50,
    borderRadius: 10,
    marginHorizontal: 15,
    marginVertical: 10,
    paddingLeft: 15,
  },
  input1: {
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    borderRadius: 10,
    marginHorizontal: 15,
    marginVertical: 10,
    paddingLeft: 15,
    flexDirection: "row"
  },
  signButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginHorizontal: 70,
    height: 40,
    backgroundColor: "green",
    marginVertical: 20,
  },
  signForget: {
      alignItems: "center",
      justifyContent: "center",
  },
  signOptions: {
     alignItems: "center",
  },
  signFacebook: {
   alignItems: "center",
   justifyContent: "center",
   borderRadius: 10,
   marginHorizontal: 40,
   height: 40,
   backgroundColor: "#1940FF",
   marginVertical: 20,
 },
 signGoogle: {
   alignItems: "center",
   justifyContent: "center",
   borderRadius: 10,
   marginHorizontal: 40,
   height: 40,
   backgroundColor: "#CC2200",
   marginVertical: 20,
 },
});
