<template>
  <view class="container">
    <image 
      :style="{width: 290, height: 400, }"
      :source="logo" />
    <text-input
      :style= textInputStyle
      placeholder= "Username"
    />
    <text-input
      :style= textInputStyle
      placeholder= "Password"
    />
    <touchable-opacity 
      :on-press="handleButton"
      :style="{
        height: 45, 
        width: 250, 
        margin: 15,  
        borderWidth: 0, 
        borderRadius: 20,
        backgroundColor: '#3F5060'
        }"
    >
      <button
        :on-press="onPressButton"
        title="Sign In"
        color="#fff"
        :style="{
          fontWeight: 100, 
          }"
      />
    </touchable-opacity>
    <Text
      :style="{
        fontSize:20,
      }"
      >
      New to Uniform?
    </Text>
    <touchable-opacity 
      :on-press="handleButton"
    >
      <button
        :on-press="handleButton"
        title="Sign Up Here!"
        color="blue"
      />
    </touchable-opacity>
  </view>
</template>

<script>
import React from 'react'
import { Text, Image} from 'react-native'
import logo from "./assets/images/uniform-logo2.png";

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  data(){
    return{
      textInputStyle: {
        height: 40, 
        width: 250, 
        margin:10, 
        borderBottomColor: 'gray', 
        borderBottomWidth: 3
      },
      logo
  }},
  methods: {
    handleButton() {
      this.myInput = 'Button clicked'
      this.navigation.navigate("SignUp")
    },
    onPressButton: function() {
      alert('Clicked Image')
    },
    handleListTap() {
      console.log('poop');
    },
  }
}
</script>

<style>
.container {
  background-color: #FFF4E0;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  height: 100%;
}
.text-color-primary {
  color: blue;
}

</style>
