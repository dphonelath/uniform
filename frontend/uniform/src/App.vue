<template>
  <app-navigation></app-navigation>
</template>

<script>
  import { StackNavigator } from "vue-native-router";
  import MainScreen from "./Main";
  import SignUpScreen from "./SignUp";
  import MeasurementScreen from "./Measurement";
  import ProfileScreen from "./Profile";
  import RequestScreen from "./Request";
  
  const AppNavigation = StackNavigator(
    {
      Main: MainScreen,
      SignUp: SignUpScreen,
      Measurement: MeasurementScreen,
      Profile: ProfileScreen,
      Request: RequestScreen
    },
    {
      initialRouteName: 'Main',
    }
  );
  export default {
      components: { AppNavigation }
  }
</script>