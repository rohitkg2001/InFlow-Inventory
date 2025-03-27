import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Modal } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const OrderDetailsScreen = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "#F2F2F2" }}>
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
          Order Details
        </Text>
      </View>

      {/* Booking ID */}
      <View
        style={{
          backgroundColor: "#E0E0E0", // Changed color to gray
          padding: 15,
          borderRadius: 10,
          marginVertical: 10,
          marginHorizontal: 10, // Added left & right spacing
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>
            Booking ID
          </Text>
          <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>
            #1
          </Text>
        </View>
      </View>

      {/* Service Details */}
      <View
        style={{
          backgroundColor: "white",
          padding: 15,
          borderRadius: 12,
          marginVertical: 10,
          marginHorizontal: 15, // Added left & right spacing
          elevation: 3,
          shadowColor: "#000",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWNMXSHHIF3TpxWzdxOrm4vpb03tDbTiOt1w&s",
            }}
            style={{ width: 60, height: 60, borderRadius: 10 }}
          />
          <View style={{ marginLeft: 12 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#333" }}>
              Filter Replacement
            </Text>
            <Text
              style={{ color: "#D71A5B", fontSize: 16, fontWeight: "bold" }}
            >
              ₹12.03
            </Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text
            style={{
              color: "#1976D2",
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            View Status
          </Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Sheet Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          >
            {/* Header Section */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 10,
                paddingBottom: 10,
                borderBottomWidth: 1,
                borderBottomColor: "#ddd",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                Order Status
              </Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Ionicons name="close" size={24} color="black" />
              </TouchableOpacity>
            </View>

            {/* Booking ID */}
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "#E20056",
                marginBottom: 5,
              }}
            >
              Booking ID: #1
            </Text>

            {/* Order Status */}
            <Text
              style={{
                fontSize: 16,
                color: "#444",
                marginTop: 5,
              }}
            >
              Your order is being processed...
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "#444",
                marginTop: 5,
              }}
            >
              Estimated delivery: 2-3 days
            </Text>
          </View>
        </View>
      </Modal>

      {/* Customer Details */}
      <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}>
        About Customer
      </Text>
      <View
        style={{
          backgroundColor: "white",
          padding: 15,
          borderRadius: 12,
          marginVertical: 10,
          marginHorizontal: 15, // Added left & right spacing
          elevation: 3,
          shadowColor: "#000",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJzFrBJ77X-ggGI3xh1cRaaQG1cNqpYnpuSR3Sdcp7gCemOCYvs9cTGlg&s",
            }}
            style={{ width: 50, height: 50, borderRadius: 25 }}
          />
          <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 10 }}>
            Ankit
          </Text>
        </View>
        <Text style={{ fontSize: 14, color: "#444" }}>
          <Text style={{ fontWeight: "bold" }}>Email:</Text> user@123.com
        </Text>
        <Text style={{ fontSize: 14, color: "#444" }}>
          <Text style={{ fontWeight: "bold" }}>Address:</Text> Delhi
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#EEE",
              padding: 10,
              borderRadius: 8,
            }}
          >
            <Ionicons name="call-outline" size={18} color="#1976D2" />
            <Text
              style={{ color: "#1976D2", fontWeight: "bold", marginLeft: 5 }}
            >
              Call
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#D71A5B",
              padding: 10,
              borderRadius: 8,
            }}
          >
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={18}
              color="white"
            />
            <Text style={{ color: "white", fontWeight: "bold", marginLeft: 5 }}>
              Chat
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Price Details */}
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Price Details</Text>
      <View
        style={{
          backgroundColor: "white",
          padding: 15,
          borderRadius: 12,
          marginVertical: 10,
          marginHorizontal: 15, // Added left & right spacing
          elevation: 3,
          shadowColor: "#000",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 5,
          }}
        >
          <Text style={{ color: "#1976D2", fontWeight: "bold" }}>Price</Text>
          <Text style={{ fontWeight: "bold" }}>₹15.00</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 5,
          }}
        >
          <Text style={{ color: "#1976D2", fontWeight: "bold" }}>
            Sub Total
          </Text>
          <Text style={{ fontWeight: "bold" }}>₹15.00</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 5,
          }}
        >
          <Text style={{ color: "#1976D2", fontWeight: "bold" }}>Tax</Text>
          <Text style={{ color: "#1976D2", fontWeight: "bold" }}>₹8.00</Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
          marginHorizontal: 15, // Added left & right spacing
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#D71A5B",
            padding: 12,
            borderRadius: 10,
            flex: 1,
            marginRight: 5,
          }}
          onPress={() => navigation.navigate("completedBookingScreen")} // Navigate on press
        >
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Accept
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#E0E0E0",
            padding: 12,
            borderRadius: 10,
            flex: 1,
            marginLeft: 5,
          }}
        >
          <Text
            style={{ fontSize: 16, fontWeight: "bold", textAlign: "center" }}
          >
            Decline
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderDetailsScreen;
