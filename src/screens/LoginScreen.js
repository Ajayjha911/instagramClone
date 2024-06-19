import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { deleteValue, getValue, setValue } from "src/utils/Storage";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("user");
  const [password, setPassword] = useState("password");

  const handleLogin = async () => {
    if (username === "user" && password === "password") {
      await setValue({ key: username, value: password });
      navigation.navigate("HomeNavigation");
    } else {
      alert("Invalid username or password");
    }
  };

  const isLogIn = async () => {
    const info = await getValue({ key: username });

    if (info) {
      // deleteValue({ key: username });
      navigation.navigate("HomeNavigation");
    }
  };
  useEffect(() => {
    isLogIn();
  }, []);
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        autoCapitalize="none"
      />
      <TouchableOpacity
        onPress={() => {
          /* Navigate to Forgot Password screen */
        }}
      >
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.facebookButton}>
        <Text style={styles.facebookButtonText}>Log in with Facebook</Text>
      </TouchableOpacity>
      <View style={styles.separatorContainer}>
        <View style={styles.separator} />
        <Text style={styles.separatorText}>OR</Text>
        <View style={styles.separator} />
      </View>
      <TouchableOpacity
        onPress={() => {
          /* Navigate to Sign Up screen */
        }}
      >
        <Text style={styles.signUpText}>
          Don't have an account? <Text style={styles.signUpLink}>Sign up.</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 30,
  },

  logo: {
    width: 240,
    height: 50,
    marginBottom: 40,
    backgroundColor: "black",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fafafa",
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginVertical: 10,
    color: "#3797EF",
  },
  loginButton: {
    width: "100%",
    height: 40,
    backgroundColor: "#3797EF",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  loginButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  facebookButton: {
    width: "100%",
    height: 40,
    backgroundColor: "#4267B2",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  facebookButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: "#ddd",
  },
  separatorText: {
    marginHorizontal: 10,
    color: "#888",
  },
  signUpText: {
    color: "#888",
  },
  signUpLink: {
    color: "#3797EF",
    fontWeight: "bold",
  },
});

export default LoginScreen;
