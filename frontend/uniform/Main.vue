<template>
  <view class="container">
    <text :style="{color: 'green', fontSize: 40}">{{ message }}</text>
    <text>{{ myInput }}</text>
    <text-input
        :style="{height: 40, width: 150, borderColor: 'gray', borderWidth: 1}"
        v-model="myInput"
      />
    <touchable-opacity 
      :on-press="() => handleButton()"
      :style="{backgroundColor: 'green'}"
      >
      <text :style="{color: 'white', padding:10}">My Button</text>
    </touchable-opacity>
      <!-- <button
        :on-press="handleButton"
        title="My Button"
        color="#841584"
        accessibility-label="Learn more about this purple button"
    /> -->
    </view>
    
</template>

<script>
import React from 'react'
import { Text } from 'react-native'

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  data(){
    return {
      message: 'Hello, motherfuckin\' world!',
      myInput: '',
    }
  },
  methods: {
    handleButton() {
      this.myInput = 'Button clicked'
      this.navigation.navigate("Another")
    },
    handleListTap() {
      console.log('poop');
    }
  }
}
</script>

<style>
.container {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-color-primary {
  color: blue;
}
</style>
