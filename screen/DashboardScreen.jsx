import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const DashboardScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#F9F9F9", padding: 20 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#C91D5A",
          padding: 18,
          borderRadius: 10,
          top: 20,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 14, fontWeight: "bold" }}>
          Provide Home
        </Text>
        <Icon name="bell-outline" size={24} color="#fff" />
      </View>
     

      {/* Greeting Section */}
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize:16, fontWeight: "bold" }}>
          Hello, Ankit Kumar
        </Text>
        <Text style={{ fontSize: 12, color: "gray" }}>Welcome back !</Text>
      </View>

      {/* Total Cash in Hand Card */}
      <View
        style={{
          backgroundColor: "#EAEAF0",
          padding: 15,
          borderRadius: 10,
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            backgroundColor: "#F3B5C8",
            padding: 10,
            borderRadius: 50,
          }}
        >
          <Icon name="wallet-outline" size={24} color="#C91D5A" />
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            flex: 1,
            marginLeft: 10,
          }}
        >
          Total cash in hand
        </Text>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>₹10,62</Text>
      </View>

      {/* Stats Cards */}
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        {[
          { number: "3", label: "Total Booking", icon: "book-open-outline" },
          { number: "8", label: "Total Service", icon: "headset" },
          { number: "₹0.00", label: "Remaining Payout", icon: "cash-minus" },
          { number: "₹0.00", label: "Total Revenue", icon: "currency-usd" },
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              backgroundColor: "#C91D5A",
              width: "48%",
              padding: 20,
              borderRadius: 10,
              alignItems: "center",
              marginBottom: 15,
            }}
          >
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              {item.number}
            </Text>
            <Icon name={item.icon} size={24} color="#fff" />
            <Text
              style={{
                color: "#fff",
                fontSize: 14,
                marginTop: 5,
                textAlign: "center",
              }}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default DashboardScreen;
