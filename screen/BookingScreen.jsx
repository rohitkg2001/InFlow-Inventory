import React, { useState } from "react";
import { View } from "react-native";
import { Appbar, Text, TextInput, Button } from "react-native-paper";

const BookingScreen = ({ navigation }) => {
  const [machineName, setMachineName] = useState("");
  const [problem, setProblem] = useState("");
  const [timeOfReport, setTimeOfReport] = useState("");

  const handleBooking = () => {
    if (!machineName || !problem || !timeOfReport) {
      alert("Please fill all fields");
      return;
    }
    alert(
      `Booking confirmed!\nMachine: ${machineName}\nProblem: ${problem}\nTime of Report: ${timeOfReport}`
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Header with Back Arrow */}
      <Appbar.Header style={{ backgroundColor: "#C91D5A" }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Booking" titleStyle={{ color: "#fff" }} />
      </Appbar.Header>

      {/* Booking Form */}
      <View style={{ padding: 20 }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          Report a Problem
        </Text>

        <TextInput
          label="Machine Name"
          value={machineName}
          onChangeText={setMachineName}
          style={{ marginBottom: 10 }}
        />
        <TextInput
          label="Problem"
          value={problem}
          onChangeText={setProblem}
          style={{ marginBottom: 10 }}
        />
        <TextInput
          label="Time of Report"
          value={timeOfReport}
          onChangeText={setTimeOfReport}
          style={{ marginBottom: 10 }}
        />

        <Button
          mode="contained"
          onPress={handleBooking}
          style={{ width: "100%", borderRadius: 5 }}
          contentStyle={{ backgroundColor: "#C91D5A", height: 45 }}
          labelStyle={{ fontSize: 16 }}
        >
          Submit Report
        </Button>
      </View>
    </View>
  );
};

export default BookingScreen;
