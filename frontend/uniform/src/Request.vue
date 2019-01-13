<template>
        <view class="container">
            <text :style= headerStyle>Request Form</text>
            <!-- <image 
                class= "profile-pic"
                :source= "ProfilePic" /> -->
            <touchable-opacity 
            :on-press="handleButton"
            :style= profileCard
            >
                <image 
                    class= "profile-pic"
                    :source= "ProfilePic" />
                <text :style= profileName>
                    Daniel Phonelath
                </text>
                <text :style= profileLocation>
                    Denver, CO
                </text>
            </touchable-opacity>
            <touchable-opacity 
            :on-press="handleButton"
            :style= mapCard
            >
                <image 
                    class= "map-pic"
                    :source= "Map" />
                <text :style= profileName>
                    Vaji's Tailor & Alterations
                </text>
                <text :style= profileLocation>
                    910 16th St Mall #207, Denver, CO 80202
                </text>
                <image 
                    class= "map-pic"
                    :source= "Map" />
            </touchable-opacity>
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
            fontSize: 30,
            fontWeight: 'bold',
            width: '100%' ,
            backgroundColor: '#03ADB5',
            color: '#fff',
            padding:15,
            marginBottom:30,
            alignItems: 'center',
            textAlign: 'center',
            overflow: 'hidden'
        },
        profileCard: {
            height: 170, 
            width: 350, 
            margin: 15,  
            borderWidth: 0, 
            borderRadius: 20,
            backgroundColor: '#3F5060',
        },
        mapCard: {
            height: 500, 
            width: 350, 
            margin: 15,  
            borderWidth: 0, 
            borderRadius: 20,
            backgroundColor: '#3F5060',
        },
        profileName: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#fff',
            paddingLeft: 170,
            paddingTop: 40
        },
        profileLocation: {
            fontSize: 15,
            fontWeight: '400',
            color: '#fff',
            paddingLeft: 170,
            paddingTop: 10
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
    height: 120px;
    width: 120px;
    border-width: 6px;
    border-color: #fff;
    border-radius: 60px;
    position: absolute;
    left: 20px;
    top: 20px;
    z-index: 7;
}
.map-pic{
    width: 300px;
    height: 400px;
}
</style>