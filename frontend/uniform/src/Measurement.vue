<template>
    <!-- <scroll-view> -->
        <view class="container">
            <image 
                :style="{width: 200, height: 275, }"
                :source="logo" />
            <text :style= headerStyle>
                Upload Measurements
            </text>
            <text-input
                :style= textInputStyle
                placeholder= "Arm Length (Inches)"
            />
            <text-input
                :style= textInputStyle
                placeholder= "Chest (Inches)"
            />
            <text-input
                :style= textInputStyle
                placeholder= "Waist (Inches)"
            />
            <text-input
                :style= textInputStyle
                placeholder= "Hips (Inches)"
            />
            <text-input
                :style= textInputStyle
                placeholder= "Inseam (Inches)"
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
                :on-press="handleButton"
                title="Submit"
                color="#fff"
                :style="{
                fontWeight: 500, 
                }"
            />
            </touchable-opacity>
        </view>
    <!-- </scroll-view> -->
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
        headerStyle: {
            fontSize: 25,
            fontWeight: 'bold',
            width: '100%' ,
            backgroundColor: '#03ADB5',
            color: '#fff',
            padding:15,
            marginBottom:30,
            marginTop: 30,
            alignItems: 'center',
            textAlign: 'center',
            overflow: 'hidden'
        },
        logo
    }},
    methods: {
        handleButton() {
        this.myInput = 'Button clicked'
        this.navigation.navigate("Profile")
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