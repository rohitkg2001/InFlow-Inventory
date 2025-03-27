import { useEffect, useState, useRef } from "react";
import { CameraView, useCameraPermissions } from "expo-camera";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Image,
  FlatList,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";

export default function CameraScreen({
  isCameraOpen,
  setIsCameraOpen,
  // handleSubmission,
}) {
  const [photos, setPhotos] = useState([]);
  const [location, setLocation] = useState(null);
  const [timestamp, setTimestamp] = useState("");
  const cameraRef = useRef(null);
  const navigation = useNavigation();

  const handleSubmission = (photos) => {
    console.log("Photos submitted:", photos);
    // Add further logic (e.g., API call)
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        let loc = await Location.getCurrentPositionAsync({});
        setLocation(loc.coords);
      }
    })();

    const interval = setInterval(() => {
      setTimestamp(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleCapture = async () => {
    if (cameraRef.current && location) {
      const photo = await cameraRef.current.takePictureAsync({ base64: false });

      const photoData = {
        uri: photo.uri,
        lat: location.latitude,
        long: location.longitude,
        timestamp: new Date().toLocaleTimeString(),
      };

      setPhotos((prev) => [photoData, ...prev].slice(0, 2));
    }
  };

  const handleRetake = () => {
    setPhotos([]);
  };

  return (
    <Modal
      visible={isCameraOpen}
      animationType="slide"
      onRequestClose={() => setIsCameraOpen(false)}
    >
      <View style={styles.cameraContainer}>
        <CameraView ref={cameraRef} facing="back" style={styles.camera} />

        <View style={styles.watermark}>
          <Text style={styles.watermarkText}>
            Powered by Dashandots Technology
          </Text>
          <Text style={styles.watermarkText}>
            📍 {location?.latitude}, {location?.longitude}
          </Text>
          <Text style={styles.watermarkText}>⏰ {timestamp}</Text>
        </View>

        <TouchableOpacity
          onPress={() => setIsCameraOpen(false)}
          style={styles.closeButton}
        >
          <Icon name="close" size={35} color="white" />
        </TouchableOpacity>

        <View style={styles.controls}>
          <TouchableOpacity onPress={handleRetake} style={styles.retakeButton}>
            <Icon name="refresh" size={35} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleCapture}
            style={styles.shutterButton}
          >
            <View style={styles.innerShutter} />
          </TouchableOpacity>

          {photos.length >= 2 && (
            <TouchableOpacity
              onPress={() => {
                Alert.alert(
                  "Confirm Submission",
                  "Are you sure you want to submit the task?",
                  [
                    { text: "Cancel", style: "cancel" },
                    {
                      text: "Submit",
                      onPress: () => {
                        handleSubmission(photos);
                        navigation.goBack();
                      },
                    },
                  ]
                );
              }}
              style={styles.submitButton}
            >
              <Icon name="checkmark-circle" size={35} color="green" />
            </TouchableOpacity>
          )}
        </View>

        <FlatList
          data={photos}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          style={styles.photoList}
          renderItem={({ item }) => (
            <View style={styles.photoItem}>
              <Image source={{ uri: item.uri }} style={styles.photo} />
              <Text style={styles.photoText}>
                {item.lat.toFixed(4)}, {item.long.toFixed(4)}
              </Text>
              <Text style={styles.photoText}>{item.timestamp}</Text>
            </View>
          )}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  cameraContainer: { flex: 1 },
  camera: { flex: 1 },
  watermark: { position: "absolute", top: 10, left: 10 },
  watermarkText: { color: "white" },
  closeButton: { position: "absolute", top: 20, right: 20 },
  controls: {
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },
  retakeButton: { padding: 10 },
  shutterButton: {
    padding: 10,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "white",
  },
  innerShutter: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    borderRadius: 25,
  },
  submitButton: { padding: 10 },
  photoList: { position: "absolute", bottom: 80, left: 10 },
  photoItem: { marginRight: 10 },
  photo: { width: 100, height: 100, borderRadius: 10 },
  photoText: { color: "white", textAlign: "center" },
});
