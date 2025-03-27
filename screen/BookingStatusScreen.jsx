import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Modal from "react-native-modal"; // Import the modal library
import { MaterialIcons } from "@expo/vector-icons";

const BookingStatusScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.screenContainer}>
      {/* Bottom Sheet */}
      <Modal
        isVisible={isVisible}
        onBackdropPress={() => setIsVisible(false)}
        onSwipeComplete={() => setIsVisible(false)}
        swipeDirection="down"
        style={styles.bottomModal}
      >
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerText}>Booking Status</Text>
            <TouchableOpacity onPress={() => setIsVisible(false)}>
              <MaterialIcons name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>

          {/* Booking ID */}
          <View style={styles.bookingIdContainer}>
            <Text style={styles.bookingIdText}>Booking ID:</Text>
            <Text style={styles.bookingId}>#4</Text>
          </View>

          {/* Booking Details */}
          <View style={styles.bookingCard}>
            <View style={styles.row}>
              <View style={styles.redDot} />
              <Text style={styles.bookingTitle}>Add Booking</Text>
              <Text style={styles.dateTime}>March 21, 2025, 5:30 P.M</Text>
            </View>
            <Text style={styles.bookingDescription}>
              Rohan booked your service.{"\n"}
              Please confirm your booking on your dashboard.
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  container: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  bookingIdContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  bookingIdText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  bookingId: {
    fontSize: 16,
    fontWeight: "bold",
  },
  bookingCard: {
    backgroundColor: "#E8EAF0",
    padding: 15,
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  redDot: {
    width: 12,
    height: 12,
    backgroundColor: "red",
    borderRadius: 6,
    marginRight: 8,
  },
  bookingTitle: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
  },
  dateTime: {
    fontSize: 14,
    color: "#333",
  },
  bookingDescription: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default BookingStatusScreen;
