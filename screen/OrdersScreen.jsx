import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const orders = [
  // {
  //   id: "#1",
  //   status: "Pending",
  //   title: "Car Interior Sanitization",
  //   price: "₹23.92",
  //   address: "Babra Street",
  //   dateTime: "Mar 22, 2025 at 3:17 PM",
  //   customer: "Ankit",
  //   image:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWNMXSHHIF3TpxWzdxOrm4vpb03tDbTiOt1w&s",
  // },
  {
    id: "#2",
    status: "Pending",
    title: " Filter Replacement",
    price: "₹98.21",
    address: "Mumbai Street",
    dateTime: "Mar 20, 2025 at 2:32 PM",
    customer: "Mukesh Kumar",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1044123806.jpg",
  },
];

const OrdersScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#D71A5B",
          paddingVertical: 20,
          paddingHorizontal: 20,
        }}
      >
        <View style={{ width: 50 }} />
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: 6,
          paddingHorizontal: 10,
          borderBottomWidth: 1,
          borderBottomColor: "#ccc",
        }}
      >
        {/* Back Button with Icon */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ paddingHorizontal: 10 }}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        {/* Title */}
        <Text
          style={{
            fontSize: 20,
            color: "black",
            fontWeight: "bold",
            flex: 1,
            textAlign: "center",
          }}
        >
          Orders
        </Text>

        {/* Right Side Icons */}
        <View style={{ flexDirection: "row", gap: 15 }}>
          {/* Notification Icon */}
          <TouchableOpacity onPress={() => console.log("Notification Clicked")}>
            <Ionicons name="notifications-outline" size={24} color="black" />
          </TouchableOpacity>

          {/* Filter Icon */}
          <TouchableOpacity onPress={() => console.log("Filter Clicked")}>
            <Ionicons name="filter-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ padding: 10 }}>
        {/* Total Amount Section */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#E6E6E6",
            padding: 10,
            borderRadius: 8,
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Total Amount :
          </Text>
          <Text style={{ fontSize: 18, color: "#D71A5B", fontWeight: "bold" }}>
            ₹350,3
          </Text>
          <Text style={{ color: "#007AFF", fontWeight: "600" }}>
            View Breakdown
          </Text>
        </View>
        {/* Orders List */}
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 12,
                padding: 15,
                marginVertical: 10,
                elevation: 2,
              }}
            >
              {/* Order Details */}
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: "#ddd",
                  }}
                />
                <View style={{ flex: 1, marginLeft: 12 }}>
                  {/* Order ID & Status */}
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text
                      style={{
                        backgroundColor: "#D71A5B",
                        color: "white",
                        paddingHorizontal: 12,
                        paddingVertical: 4,
                        borderRadius: 12,
                        fontSize: 12,
                        fontWeight: "bold",
                        marginRight: 6,
                      }}
                    >
                      {item.id}
                    </Text>
                    <Text
                      style={{
                        borderColor: "#D71A5B",
                        borderWidth: 1.5,
                        paddingHorizontal: 12,
                        paddingVertical: 4,
                        borderRadius: 12,
                        fontSize: 12,
                        fontWeight: "bold",
                        color: "#D71A5B",
                      }}
                    >
                      {item.status}
                    </Text>
                  </View>

                  {/* Product Title & Price */}
                  <Text
                    style={{ fontSize: 17, fontWeight: "bold", marginTop: 5 }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      color: "#D71A5B",
                      fontSize: 18,
                      fontWeight: "bold",
                      marginTop: 3,
                    }}
                  >
                    {item.price}
                  </Text>
                </View>
              </View>

              {/* Additional Order Information */}
              <View
                style={{
                  backgroundColor: "#F9F9F9",
                  padding: 12,
                  borderRadius: 10,
                  marginVertical: 12,
                  borderWidth: 1,
                  borderColor: "#EEE",
                }}
              >
                <Text style={{ fontSize: 14, color: "#555" }}>
                  Address:{" "}
                  <Text style={{ fontWeight: "bold", color: "#222" }}>
                    {item.address}
                  </Text>
                </Text>
                <Text style={{ fontSize: 14, color: "#555" }}>
                  Date & Time:{" "}
                  <Text style={{ fontWeight: "bold", color: "#222" }}>
                    {item.dateTime}
                  </Text>
                </Text>
                <Text style={{ fontSize: 14, color: "#555" }}>
                  Customer:{" "}
                  <Text style={{ fontWeight: "bold", color: "#222" }}>
                    {item.customer}
                  </Text>
                </Text>
              </View>

              {/* Action Buttons */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 5,
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "#D71A5B",
                    paddingVertical: 12,
                    paddingHorizontal: 35,
                    borderRadius: 8,
                    elevation: 2,
                  }}
                  onPress={() =>
                    navigation.navigate("orderDetailsScreen", { order: item })
                  }
                >
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: 16,
                      textAlign: "center",
                    }}
                  >
                    Accept
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    backgroundColor: "#E0E0E0",
                    paddingVertical: 12,
                    paddingHorizontal: 35,
                    borderRadius: 8,
                  }}
                >
                  <Text
                    style={{
                      color: "#333",
                      fontWeight: "bold",
                      fontSize: 16,
                      textAlign: "center",
                    }}
                  >
                    Decline
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
        ;
      </View>
    </View>
  );
};

export default OrdersScreen;
