

import React, { useState } from "react";
import { View, Text } from "react-native";
import { Appbar, TextInput, Button, Avatar, Card } from "react-native-paper";

const ProfileScreen = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [phone, setPhone] = useState("123-456-7890");

  const handleUpdate = () => {
    alert("Profile updated successfully");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
      {/* Header */}
      <Appbar.Header style={{ backgroundColor: "#C91D5A" }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Profile" titleStyle={{ color: "#fff" }} />
      </Appbar.Header>

      {/* Profile Content */}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
      >
        <Card
          style={{
            width: "100%",
            padding: 20,
            borderRadius: 10,
            backgroundColor: "#fff",
            // elevation: 2,
          }}
        >
          <View style={{ alignItems: "center" }}>
            {/* Avatar Section */}
            <Avatar.Image
              size={100}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJzFrBJ77X-ggGI3xh1cRaaQG1cNqpYnpuSR3Sdcp7gCemOCYvs9cTGlg&s",
              }}
              style={{
                marginBottom: 15,
                borderRadius: 50,
                borderWidth: 2,
                borderColor: "#C91D5A",
              }}
            />

            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                color: "#333",
                marginBottom: 20,
              }}
            >
              Your Profile
            </Text>
          </View>

          {/* Input Fields */}
          <TextInput
            label="Full Name"
            value={name}
            onChangeText={setName}
            style={{ marginBottom: 12, backgroundColor: "#fff" }}
            mode="outlined"
          />
          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            style={{ marginBottom: 12, backgroundColor: "#fff" }}
            mode="outlined"
          />
          <TextInput
            label="Phone"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            style={{ marginBottom: 12, backgroundColor: "#fff" }}
            mode="outlined"
          />

          {/* Update Button */}
          <Button
            mode="contained"
            onPress={handleUpdate}
            style={{
              marginTop: 15,
              borderRadius: 8,
              backgroundColor: "#C91D5A",
            }}
            labelStyle={{ fontSize: 16 }}
          >
            Update Profile
          </Button>
        </Card>
      </View>
    </View>
  );
};

export default ProfileScreen;
