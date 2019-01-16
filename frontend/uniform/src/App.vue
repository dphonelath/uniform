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
  import ReviewScreen from "./Review";
  import SuccessScreen from "./Success"
  
  const AppNavigation = StackNavigator(
    {
      Main: MainScreen,
      SignUp: SignUpScreen,
      Measurement: MeasurementScreen,
      Profile: ProfileScreen,
      Request: RequestScreen,
      Review: ReviewScreen,
      Success: SuccessScreen
    },
    {
      initialRouteName: "Request",
    }
  );
  export default {
      components: { AppNavigation }
  }
</script>