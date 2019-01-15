<template>
    <scroll-view>
        <view class="container">
            <text :style= headerStyle>Review Appointment</text>
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
            <view 
                :on-press="handleButton"
                :style= requestCard
                >
                <text :style= mapName>
                    Vaji's Tailor & Alterations
                </text>
                <text :style= mapLocation>
                    910 16th St Mall #207, Denver, CO 80202
                </text>
                <image 
                    class= "vaji-pic"
                    :source= "Vaji" />
                <text class= "description-text">Photos</text>
                <image 
                        class= "vaji-pic"
                        :source= "Blazer" />
                <text class="description-text">Description</text>
                <text
                    class="description-input"
                >I would like to have this blazer brought in in the waist. It is baggin around my chest and hips.</text>
            </view>
            <touchable-opacity 
                :on-press="handleButton"
                :style= generalButton
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
    <scroll-view>
</template>

<script>
import React from 'react'
import { Text, Image} from 'react-native'
import logo from "./assets/images/uniform-logo2.png";
import ProfileHead from "./assets/images/profile-header.png";
import ProfilePic from "./assets/images/profile-pic.png";
import Map from "./assets/images/map.png";
import Vaji from "./assets/images/vaji.png";
import Dress from "./assets/icons/dress.png";
import Shirt from "./assets/icons/shirt.png";
import Short from "./assets/icons/short.png";
import Sneaker from "./assets/icons/sneakers.png";
import Suit from "./assets/icons/suit.png";
import Blazer from "./assets/images/suit.jpg"


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
        requestCard: {
            height: 1500, 
            width: 350, 
            margin: 15,  
            borderWidth: 0, 
            borderRadius: 20,
            backgroundColor: '#3F5060',
            alignItems: 'center'
        },
        alterationCard: {
            height: 650, 
            width: 350, 
            margin: 15,  
            borderWidth: 0, 
            borderRadius: 20,
            backgroundColor: '#3F5060',
            flex:1,
            justifyContent: 'center',
            alignItems: 'center'
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
        mapName: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#fff',
            padding: 15,
            alignItems: 'center',
            borderBottomColor: '#fff',
            borderBottomWidth: 3
        },
        mapLocation: {
            fontSize: 15,
            fontWeight: '400',
            color: '#fff',
            paddingBottom: 15,
            alignItems: 'center'
        },
        generalButton: {
            height: 45, 
            width: 250, 
            margin: 15,  
            borderWidth: 0, 
            borderRadius: 20,
            backgroundColor: '#FC3C3C'
        },
        descriptionBox: {
            height: 450,
            width: 270,
            backgroundColor: '#fff',
            margin: 20,
            borderRadius: 20
        },
        logo, 
        ProfileHead,
        ProfilePic,
        Vaji,
        Dress,
        Shirt,
        Short,
        Sneaker,
        Suit,
        Blazer
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
.vaji-pic{
    width: 250px;
    height: 370px;
}
.icons-pic {
    height:80px;
    width: 80px;
    margin-right: 20px;
    margin-left: 25px

}
.icons-button{
    display: flex;
    height: 100px;
    width: 300px;
    flex-direction: row;
    margin: 10px;
    align-items: center;
    background-color: #00ADB5;
    border-width: 0;
    border-radius: 20;
}
.icon-text{
    font-size: 20px;
    font-weight: 700;
    color:#fff
}
.description-text{
    font-size: 25px;
    font-weight: 700;
    margin: 15px;
    color:#fff;
}
.description-input{
    height: 450px;
    width: 270px;
    font-size: 20px;
    background-color: #fff;
    margin: 20px;
    border-radius: 20;
}
</style>