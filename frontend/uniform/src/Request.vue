<template>
    <scroll-view>
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
                <text>Location:</text>
                <text>{{location.latitude}}</text>
                <!-- <map-view class="container"
                        :initial-region="location"
                    /> -->
                <image 
                    class= "vaji-pic"
                    :source= "Vaji" />
                <touchable-opacity 
                    :on-press= "getLocation"
                    :style= generalButton
                    >
                <button
                    :on-press= "getLocation"
                    title="Choose Tailor"
                    color="#fff"
                    :style="{
                    fontWeight: 500, 
                    }"
                />
            </touchable-opacity>
            </view>
            <scroll-view>
                <view
                    :on-press="onPressButton"
                    :style= alterationCard
                >
                    <touchable-opacity
                        class= 'icons-button'
                        :on-press="onPressButton"
                        title="Shirt Alterations"
                        >
                        <image 
                            class= "icons-pic"
                            :source= "Shirt" />
                        <text class= "icon-text">Shirt Alterations</text>
                    </touchable-opacity>
                    <touchable-opacity
                        class= 'icons-button'
                        :on-press="onPressButton"
                        title="Pant Alterations"
                    >
                        <image 
                            class= "icons-pic"
                            :source= "Short" />
                        <text class= "icon-text">Pant Alterations</text>
                    </touchable-opacity>
                    <touchable-opacity
                        class= 'icons-button'
                        :on-press="onPressButton"
                        title="Shoe Repair"
                    >
                        <image 
                            class= "icons-pic"
                            :source= "Sneaker" />
                        <text class= "icon-text">Shoe Repair</text>
                    </touchable-opacity>
                    <touchable-opacity
                        class= 'icons-button'
                        :on-press="onPressButton"
                        title="Dress Alterations"
                    >
                        <image 
                            class= "icons-pic"
                            :source= "Dress" />
                        <text class= "icon-text">Dress Alterations</text>
                    </touchable-opacity>
                    <touchable-opacity
                        :style = iconButton
                        :on-press="changeColor"
                        title="Shirt Alterations"
                    >
                        <image 
                            class= "icons-pic"
                            :source= "Suit" /> 
                        <text class= "icon-text">Suit Alterations</text>
                    </touchable-opacity>  
                </view>
            </scroll-view>
            <view 
                :on-press="onPressButton"
                :style= requestCard
                >
                    <text class= "description-text">Photos</text>
                    <touchable-opacity
                        :style= generalButton
                        :on-press="pickImage"
                        title="Upload Photos"
                    >
                        <button
                            :on-press="pickImage"
                            title="Upload Photos"
                            color="#fff"
                            :style="{
                                fontWeight: 500, 
                            }"
                        />
                    </touchable-opacity>
                    <!-- <camera class="container" :type="this.type"/> -->
                    <image 
                        class= "camera-icon"
                        :source= "CameraIcon"
                        v-if= "!image"
                        />
                    <image 
                        class= "camera-icon"
                        :source= "image"
                        v-if= "image && image.uri"
                        />
            </view>
            <view 
                :style= requestCard
                >
                <text class="description-text">Description</text>
                <text-input
                    :style= descriptionBox
                    placeholder= "Describe the alteration or repair"
                />
            </view>
            <view 
                :style= dateCard
                >
                <text class="description-text">Select Drop-off Date</text>
                <image 
                        class= "calendar-pic"
                        :source= "Calendar" />
                <touchable-opacity
                        :style= generalButton
                        :on-press="onPressButton"
                        title="Take Photos"
                    >
                        <button
                            :on-press="handleButton"
                            title="Select Date"
                            color="#fff"
                            :style="{
                            fontWeight: 500, 
                            }"
                        />
                </touchable-opacity>
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
import React from 'react';
import { Text, Image} from 'react-native';
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
import Blazer from "./assets/images/suit.jpg";
import Calendar from "./assets/images/calendar.png";
import CameraIcon from "./assets/images/cameraIcon.png";
import { Constants, Location, Permissions, MapView, Camera, ImagePicker } from "expo";

export default {
    props: {
        navigation: {
        type: Object
        }
    },
    data(){
        return{
        image: null,
        hasCameraPermission: false,
        alterationItems: [
            {selected:"icon-button"},
            {selected:"icon-button"},
            {selected:"icon-button"},
            {selected:"icon-button"},
            {selected:"icon-button"},
            ],
        iconClass: 'icons-button',
        selectedClass: 'icons-button2',
        type: Camera.Constants.Type.back,
        location: {
            latitude: 39.746583,
            longitude: -104.994424,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        },
        errorMessage: "",
        coordinates: {
            latitude: 37.785834,
            longitude: -122.406417,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
            },
        iconButton: {
            flex: 3,
            flexDirection: 'row',
            height: 50,
            width: 300,
            margin: 15,
            alignItems: 'center',
            backgroundColor: '#00ADB5',
            borderWidth: 0,
            borderRadius: 20
            },
        iconButton2: {
            height: 100,
            width: 300,
            margin: 10,
            alignItems: 'center',
            backgroundColor: '#FC3C3C',
            borderWidth: 0,
            borderRadius: 20
            },
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
            height: 550, 
            width: 350, 
            margin: 15,  
            borderWidth: 0, 
            borderRadius: 20,
            backgroundColor: '#3F5060',
            alignItems: 'center'
        },
        requestCard: {
            height: 600, 
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
            alignItems: 'center'
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
        dateCard: {
            height: 440, 
            width: 350, 
            margin: 15,  
            borderWidth: 0, 
            borderRadius: 20,
            backgroundColor: '#3F5060',
            alignItems: 'center'
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
        Blazer,
        Calendar, 
        CameraIcon
    }},
    components: {
        MapView,
        Camera
    },
    methods: {
        pickImage: function() {
            Permissions.askAsync(Permissions.CAMERA_ROLL).then(status => {
                if (status !== "granted") {
                errorMessage = "Permission to access location was denied";
                }
            Expo.ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                aspect: [1, 1]
                })
                .then((image) => {
                    this.image = image
                })

            }).catch((err)=>{
                console.log(err);
            });
        },
        handleButton() {
            this.myInput = 'Button clicked'
            this.navigation.navigate("Review")
        },
        onPressButton: function() {
            this.data.alterationItems = !this.data.alterationItems[4].selected
        },
        handleListTap() {
        console.log('poop');
        },
        changeColor() {
            this.$data.iconButton.backgroundColor = '#FC3C3C'
            console.log(this.$data.iconButton.backgroundColor)

        },
        getLocation: function() {
            Permissions.askAsync(Permissions.LOCATION).then(status => {
                if (status !== "granted") {
                errorMessage = "Permission to access location was denied";
                }
            Location.getCurrentPositionAsync({}).then(position => {
                // this.$data.coordinates.longitude = position.coords.longitude
                // this.$data.coordinates.latitiude = position.coords.latitude
                this.location.longitude = position.coords.longitude
                this.location.latitiude = position.coords.latitude
                console.log(this.location)
                });
        }).catch((err)=>{
        console.log(err);
            });
        },
    },
    mounted: function() {
        Permissions.askAsync(Permissions.CAMERA)
            .then(status => {
            hasCameraPermission = status.status == "granted" ? true : false;
            }).catch((err)=>{
                console.log(err);
            });
        },
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
.icons-button2{
    display: flex;
    height: 100px;
    width: 300px;
    flex-direction: row;
    margin: 10px;
    align-items: center;
    background-color: #FC3C3C;
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
    margin: 10px;
    color:#fff
}
.calendar-pic {
    height:300px;
    width: 300px;
}
.camera-icon{
    width: 250px;
    height: 250px;
}
</style>