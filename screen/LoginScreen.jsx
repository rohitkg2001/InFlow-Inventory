import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TextInput, Button } from "react-native-paper";
import { users } from "../utils/Faker"; // Assuming users data contains roles

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      console.log("Login Successful");
      navigation.navigate("homeScreen", { userRole: user.role }); // Pass role to homeScreen
    } else {
      Alert.alert("Login Failed", "Invalid email or password");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello</Text>

      {/* Email Input */}
      <TextInput
        placeholder="Phone number, username or email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        mode="flat"
        underlineColor="transparent"
      />

      {/* Password Input */}

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!showPassword}
        style={styles.input}
        mode="flat"
        underlineColor="transparent"
        right={
          <TextInput.Icon
            icon={showPassword ? "eye-off" : "eye"}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <Button
        mode="contained"
        onPress={handleLogin}
        style={styles.button}
        contentStyle={styles.buttonContent}
        labelStyle={{ fontSize: 16 }}
      >
        Log in
      </Button>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "serif",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    marginBottom: 10,
    backgroundColor: "#F7F7F7",
    borderRadius: 10,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    color: "#3797EF",
    marginBottom: 15,
    left: 100,
  },
  button: {
    width: "100%",
    borderRadius: 5,
  },
  buttonContent: {
    backgroundColor: "#C91D5A",
    height: 45,
  },
};

export default LoginScreen;
