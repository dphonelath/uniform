<template>
  <view class="container">
    <image 
      :style="{width: 290, height: 400}"
      :source="logo" />
    <text-input
      :style="{height: 40, width: 250, margin:10, borderBottomColor: 'gray', borderBottomWidth: 3}"
      v-model= "text"
      placeholder= "Username"
    />
    <text-input
      :style="{height: 40, width: 250, margin:10, borderBottomColor: 'gray', borderBottomWidth: 3}"
      v-model= "text"
      placeholder= "Password"
    />
    <touchable-opacity 
      :on-press="onPressButton"
      :style="{height: 40, width: 250, margin:10, borderColor: 'gray', borderWidth: 3, borderRadius: 5}"
    >
      <button
        :on-press="onPressButton"
        title="Sign In"
        color="#841584"
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
      text: '',
      message: 'Hello, motherfuckin\' world!',
      myInput: '',
      logo
  }},
  methods: {
    handleButton() {
      this.myInput = 'Button clicked'
      this.navigation.navigate("Another")
    },
    onPressButton: function() {
      alert('Clicked Image')
    },
    handleListTap() {
      console.log('poop');
    }
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
