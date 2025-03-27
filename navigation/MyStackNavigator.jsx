import MyMaterialBottomNavigator from "../navigation/MyMaterialBottomNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screen/LoginScreen";
import DashboardScreen from "../screen/DashboardScreen";
import BookingScreen from "../screen/BookingScreen";
import ProfileScreen from "../screen/ProfileScreen";
import OrdersScreen from "../screen/OrdersScreen";
import OrderDetailsScreen from "../screen/OrderDetailsScreen";
import BookingStatusScreen from "../screen/BookingStatusScreen";
import CompletedBookingScreen from "../screen/CompletedBookingScreen";
import CameraScreen from "../screen/CameraScreen";

const Stack = createStackNavigator();

export default function MyStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="loginScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="loginScreen" component={LoginScreen} />
        <Stack.Screen name="homeScreen" component={MyMaterialBottomNavigator} />
        <Stack.Screen name="dashboardScreen" component={DashboardScreen} />
        <Stack.Screen name="bookingScreen" component={BookingScreen} />
        <Stack.Screen name="profileScreen" component={ProfileScreen} />
        <Stack.Screen name="ordersScreen" component={OrdersScreen} />
        <Stack.Screen
          name="orderDetailsScreen"
          component={OrderDetailsScreen}
        />
        <Stack.Screen
          name="bookingStatusScreen"
          component={BookingStatusScreen}
        />
        <Stack.Screen
          name="completedBookingScreen"
          component={CompletedBookingScreen}
        />
        <Stack.Screen name="cameraScreen" component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
