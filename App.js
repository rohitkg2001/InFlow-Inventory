// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import WelcomeScreen from "./screen/WelcomeScreen";
// import CookieSettingsScreen from "./screen/CookieSettingsScreen";
// import MyMaterialBottomNavigator from "./navigation/MyMaterialBottomNavigator";

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     // <NavigationContainer>
//     //   <Stack.Navigator screenOptions={{ headerShown: false }}>
//     //     <Stack.Screen name="welcomScreen" component={WelcomeScreen} />
//     //     <Stack.Screen
//     //       name="cookingSettingScreen"
//     //       component={CookieSettingsScreen}
//     //     />
//     //   </Stack.Navigator>
//     // </NavigationContainer>

//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="welcomeScreen">
//         <Stack.Screen
//           name="welcomeScreen"
//           component={WelcomeScreen}
//           options={{ headerShown: false }}
//         />

//         <Stack.Screen
//           name="cookingSettingScreen"
//           component={CookieSettingsScreen}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="myMaterialBottomNavigator"
//           component={MyMaterialBottomNavigator}
//           options={{ headerShown: false }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// import "react-native-gesture-handler"; //Don't ever remove this line
// //import { useState, useEffect } from "react";
// import { PaperProvider } from "react-native-paper";
// import MyNavigationContainer from "./navigation/MyNavigationContainer";
// import { Provider } from "react-redux";
// //import store from "./store";

// export default function App() {
//   return (
//     <Provider>
//       <PaperProvider>
//         <MyNavigationContainer />
//       </PaperProvider>
//     </Provider>
//   );
// }

import "react-native-gesture-handler"; // Don't ever remove this line
import React from "react";
import { Provider } from "react-redux";
import { PaperProvider } from "react-native-paper";
import MyNavigationContainer from "./navigation/MyNavigationContainer";
import { store } from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <MyNavigationContainer />
      </PaperProvider>
    </Provider>
  );
}
