<template>
  <app-navigation></app-navigation>
</template>

<script>
  import { StackNavigator } from "vue-native-router";
  import MainScreen from "./Main";
  import SignUpScreen from "./SignUp";
  import MeasurementScreen from "./Measurement";
  
  const AppNavigation = StackNavigator(
    {
      Main: MainScreen,
      SignUp: SignUpScreen,
      Measurement: MeasurementScreen
    },
    {
      initialRouteName: 'Main',
    }
  );
  export default {
      components: { AppNavigation }
  }
</script>