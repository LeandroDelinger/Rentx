import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { CarDetails } from "../screens/CarDetails/index";
import { Scheduling } from "../screens/Scheduling";
import { SchedulingComplete } from "../screens/SchedulingComplete";
import { SchedulingDetails } from "../screens/SchedulingDetails";

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="SchedulingComplete" component={SchedulingComplete} />
    </Navigator>
  );
}
