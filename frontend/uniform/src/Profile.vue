<template>
    <scroll-view>
        <view class="container">
            <image 
                class= "header-image"
                :source= "ProfileHead" />
            <image 
                class= "profile-pic"
                :source= "ProfilePic" />
            <touchable-opacity 
                class='hidden-btn'
            > </touchable-opacity>
            <text :style= profileName>
                Daniel Phonelath
            </text>
            <text :style= profileLocation>
                Denver, CO
            </text>
            <touchable-opacity 
                :on-press="handleButton"
                class='request-button'
            >
                <button
                    :on-press="handleButton"
                    title="Make a New Request"
                    color="#fff"
                    :style="{
                    fontWeight: 600, 
                    fontSize: 30,
                    }"
                />
            </touchable-opacity>
            <image 
                class= "map-pic"
                :source= "Map" />
            <touchable-opacity 
                :on-press="handleButton"
                class= 'tailor-button'
            >
                <button
                    :on-press="handleButton"
                    title="Choose Tailor"
                    color="#fff"
                    :style="{
                    fontWeight: 600, 
                    fontSize: 30,
                    }"
                />
            </touchable-opacity>
        </view>
    </scroll-view>
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
        this.navigation.navigate("Request")
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
    background-color: #3E4F60;
    align-items: center;
    /* justify-content: center; */
    flex: 1;
    width: 100%;
    height: 100%;
}
.text-color-primary {
    color: blue;
}
.header-image { 
    width: 100%;
    height: 230px;
    margin-top: 0;
    padding-top: 0;
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
.request-button {
    height: 40px;
    width: 300px; 
    margin: 20px; 
    border-width: 0;
    border-radius: 20px;
    background-color: #FC3C3C;
}
.tailor-button {
    height: 40px;
    width: 300px; 
    margin: 20px; 
    border-width: 0;
    border-radius: 20px;
    background-color: #F8B500;
}
.hidden-btn{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 80px;
    opacity: 0;
}
.map-pic{
    width: 300px;
    height: 400px;
}
</style>