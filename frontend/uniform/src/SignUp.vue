<template>
    <view class="container">
        <image 
            :style="{width: 200, height: 275, }"
            :source="logo" />
        <text-input
            :style= textInputStyle
            placeholder= "First Name"
        />
        <text-input
            :style= textInputStyle
            placeholder= "Last Name"
        />
        <text-input
            :style= textInputStyle
            placeholder= "Email"
        />
        <text-input
            :style= textInputStyle
            placeholder= "Phone Number"
        />
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
                backgroundColor: '#F8B500'
                }"
        >
        <button
            :on-press="handleButton"
            title="Sign Up"
            color="#fff"
            :style="{
            fontWeight: 100, 
            }"
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
        this.navigation.navigate("Measurement")
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