// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Icon from "react-native-vector-icons/Ionicons";
// import { useRoute } from "@react-navigation/native";
// import DashboardScreen from "../screen/DashboardScreen";
// import BookingScreen from "../screen/BookingScreen";
// import OrdersScreen from "../screen/OrdersScreen";
// import ProfileScreen from "../screen/ProfileScreen";

// const BottomTab = createBottomTabNavigator();

// const MyMaterialBottomNavigator = () => {
//   return (
//     <BottomTab.Navigator
//       initialRouteName="dashboardScreen"
//       screenOptions={{
//         headerShown: false, // Hide headers for all tab screens
//         tabBarActiveTintColor: "#3cf3d1",
//         tabBarInactiveTintColor: "#e6f269",
//         tabBarStyle: {
//           backgroundColor: "#208178",
//           height: 70,
//           borderTopWidth: 0.5,
//           borderTopColor: "#218b6d",
//         },
//       }}
//     >
//       <BottomTab.Screen
//         name="dashboardScreen"
//         component={DashboardScreen}
//         options={{
//           tabBarLabel: "Home",
//           tabBarIcon: ({ color }) => (
//             <Icon name="home-outline" size={24} color={color} />
//           ),
//         }}
//       />
//       <BottomTab.Screen
//         name="bookingScreen"
//         component={BookingScreen}
//         options={{
//           tabBarLabel: "Booking",
//           tabBarIcon: ({ color }) => (
//             <Icon name="checkbox-outline" size={24} color={color} />
//           ),
//         }}
//       />
//       <BottomTab.Screen
//         name="profileScreen"
//         component={ProfileScreen}
//         options={{
//           tabBarLabel: "Account",
//           tabBarIcon: ({ color }) => (
//             <Icon name="person-outline" size={24} color={color} />
//           ),
//         }}
//       />
//     </BottomTab.Navigator>
//   );
// };

// export default MyMaterialBottomNavigator;

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import DashboardScreen from "../screen/DashboardScreen";
import BookingScreen from "../screen/BookingScreen";
import OrdersScreen from "../screen/OrdersScreen"; // Import OrdersScreen
import ProfileScreen from "../screen/ProfileScreen";

const BottomTab = createBottomTabNavigator();

const MyMaterialBottomNavigator = () => {
  const route = useRoute();
  const userRole = route.params?.userRole || "client"; // Default to client

  return (
    <BottomTab.Navigator
      initialRouteName="dashboardScreen"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#3cf3d1",
        tabBarInactiveTintColor: "#e6f269",
        tabBarStyle: {
          backgroundColor: "#208178",
          height: 70,
          borderTopWidth: 0.5,
          borderTopColor: "#218b6d",
        },
      }}
    >
      <BottomTab.Screen
        name="dashboardScreen"
        component={DashboardScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Icon name="home-outline" size={24} color={color} />
          ),
        }}
      />
      {userRole === "client" ? (
        <BottomTab.Screen
          name="bookingScreen"
          component={BookingScreen}
          options={{
            tabBarLabel: "Booking",
            tabBarIcon: ({ color }) => (
              <Icon name="checkbox-outline" size={24} color={color} />
            ),
          }}
        />
      ) : (
        <BottomTab.Screen
          name="ordersScreen"
          component={OrdersScreen} // Show OrdersScreen for repairmen
          options={{
            tabBarLabel: "Orders",
            tabBarIcon: ({ color }) => (
              <Icon name="list-outline" size={24} color={color} />
            ),
          }}
        />
      )}
      <BottomTab.Screen
        name="profileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color }) => (
            <Icon name="person-outline" size={24} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default MyMaterialBottomNavigator;
