<template>
        <view class="container">
            <Text>Request form</Text>
            <image 
                class= "profile-pic"
                :source= "ProfilePic" />
        </view>
</template>

<script>
import React from 'react'
import { Text, Image} from 'react-native'
import logo from "./assets/images/uniform-logo2.png";
import ProfileHead from "./assets/images/profile-header.png";
import ProfilePic from "./assets/images/profile-pic.png";
import Map from "./assets/images/map.png"


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
        profileName: {
            fontSize: 25,
            fontWeight: 'bold',
            color: '#fff'
        },
        profileLocation: {
            fontSize: 20,
            fontWeight: '400',
            color: '#fff',
        },
        logo, 
        ProfileHead,
        ProfilePic,
        Map
    }},
    methods: {
        handleButton() {
        this.myInput = 'Button clicked'
        this.navigation.navigate("")
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
    background-color: #F8B500;
    align-items: center;
    /* justify-content: center; */
    flex: 1;
    width: 100%;
    height: 100%;
}
.profile-pic {
    height: 170px;
    width: 170px;
    border-width: 6px;
    border-color: #fff;
    border-radius: 85px;
    position: absolute;
    left: 120px;
    top: 130px;
    z-index: 7;
}
</style>