import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const CompletedBookingScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#FCFCF5" }}>
      {/* Fixed Header */}
      <View
        style={{
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
          backgroundColor: "#FCFCF5",
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
          Completed
        </Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView style={{ flex: 1 }}>
        {/* Booking ID Card */}
        <View
          style={{
            backgroundColor: "#F9F9FB",
            padding: 15,
            marginHorizontal: 15,
            borderRadius: 12,
            marginVertical: 10,
            elevation: 1,
          }}
        >
          {/* Booking ID Header */}
          <View
            style={{
              backgroundColor: "gray",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 12,
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>
              Booking ID
            </Text>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>
              #1
            </Text>
          </View>

          {/* Service Info */}
          <View
            style={{
              backgroundColor: "#FFF",
              padding: 15,
              marginHorizontal: 15,
              borderRadius: 12,
              marginVertical: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 15,
              }}
            >
              <Image
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWNMXSHHIF3TpxWzdxOrm4vpb03tDbTiOt1w&s",
                }}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 12,
                  marginRight: 12,
                }}
              />
              <View>
                <Text
                  style={{ fontSize: 17, fontWeight: "bold", color: "#333" }}
                >
                  Filter Replacement
                </Text>
                <Text
                  style={{ fontSize: 17, color: "#E20056", fontWeight: "600" }}
                >
                  ₹33.23
                </Text>
              </View>
            </View>

            {/* Date & Time */}
            <View
              style={{
                backgroundColor: "#F8F8F8",
                padding: 12,
                borderRadius: 10,
                marginTop: 15,
              }}
            >
              <Text style={{ fontSize: 15, color: "#555" }}>
                <Text style={{ fontWeight: "bold", color: "#222" }}>
                  Date & Time:
                </Text>{" "}
                Mar 22, 2025 at 2:12 PM
              </Text>
            </View>
          </View>
        </View>

        {/* Service Proof */}
        <View
          style={{
            backgroundColor: "#FFF",
            padding: 15,
            marginHorizontal: 15,
            borderRadius: 12,
            marginVertical: 10,
            elevation: 1,
          }}
        >
          {/* Header with Document Icon */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 17, fontWeight: "bold", color: "#333" }}>
              Service Proof
            </Text>

            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/3381/3381607.png",
              }}
              style={{ width: 24, height: 24, tintColor: "#E20056" }}
            />
          </View>

          {/* Images Section */}
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              justifyContent: "space-between", // Space between images
            }}
          >
            <Image
              source={{
                uri: "https://img.freepik.com/free-photo/beautiful-car-washing-service_23-2149212224.jpg",
              }}
              style={{
                width: "48%", // Adjusted width
                height: 100, // Fixed height
                borderRadius: 8,
              }}
            />

            <Image
              source={{
                uri: "https://s3-media0.fl.yelpcdn.com/bphoto/gGSf_vuJDZ3Z51B2Uy8FNQ/180s.jpg",
              }}
              style={{
                width: "48%", // Adjusted width
                height: 100, // Fixed height
                borderRadius: 8,
              }}
            />
          </View>
        </View>

        {/* Status Box */}
        <View
          style={{
            backgroundColor: "#FFE5EC",
            paddingVertical: 8,
            paddingHorizontal: 12,
            borderRadius: 8,
            alignSelf: "flex-start",
            marginLeft: 15, // Adjusted margin for alignment
          }}
        >
          <Text style={{ color: "#E20056", fontSize: 16, fontWeight: "bold" }}>
            Xyz done
          </Text>
        </View>

        {/* About Handyman */}
        <View
          style={{
            backgroundColor: "#FFF",
            padding: 15,
            marginHorizontal: 15,
            borderRadius: 12,
            marginVertical: 10,
            elevation: 1,
          }}
        >
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              color: "#333",
              marginBottom: 8,
            }}
          >
            About Handyman
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJzFrBJ77X-ggGI3xh1cRaaQG1cNqpYnpuSR3Sdcp7gCemOCYvs9cTGlg&s",
                }}
                style={{
                  width: 45,
                  height: 45,
                  borderRadius: 22.5,
                  marginRight: 12,
                  borderWidth: 1.5,
                  borderColor: "#E20056",
                }}
              />
              <Text style={{ fontSize: 16, fontWeight: "bold", color: "#333" }}>
                Ankit
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#E20056", // Red background
                paddingVertical: 8,
                paddingHorizontal: 15,
                borderRadius: 20, // Rounded corners
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
                elevation: 3, // Shadow for Android
              }}
            >
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/724/724715.png", // Chat icon URL
                }}
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 8,
                  tintColor: "#fff",
                }} // White icon color
              />
              <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>
                Chat
              </Text>
            </View>
          </View>
        </View>

        {/* Service Proof Button */}
        <TouchableOpacity
          style={{
            backgroundColor: "#E20056",
            padding: 14,
            borderRadius: 10,
            marginHorizontal: 15,
            alignItems: "center",
            marginTop: 10,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 5,
          }}
          onPress={() => navigation.navigate("cameraScreen")}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            Service Proof
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default CompletedBookingScreen;
