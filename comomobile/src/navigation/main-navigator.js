import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MAIN_ROUTES } from "./ROUTES";
import Home from "../screens/home";
import ScanQRCode from "../screens/scan-qr";
import BarCodeRecieved from "../screens/barcode-received";

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={MAIN_ROUTES.HOME}
        screenOptions={{
          header: () => null,
        }}
      >
        <Stack.Screen name={MAIN_ROUTES.HOME} component={Home} />
        <Stack.Screen name={MAIN_ROUTES.SCAN} component={ScanQRCode} />
        <Stack.Screen
          name={MAIN_ROUTES.CODE_RECEIVED}
          component={BarCodeRecieved}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
