import { useRouter } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Button } from "../components/Button";

const { width } = Dimensions.get("window");

export default function Welcome() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/images/react-logo.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Bem-vindo!</Text>
          <Text style={styles.subtitle}>
            Comece sua jornada conosco e descubra um mundo de possibilidades
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        {/* <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity> */}
        <Button
          onPress={() => router.push("/signin")}
          style={{ marginBottom: 12 }}
        >
          Entrar
        </Button>

        <Button
          onPress={() => router.push("/signup")}
          variant="secondary"
          style={{ marginBottom: 12 }}
        >
          Criar conta
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  imageContainer: {
    width: width * 0.8,
    height: width * 0.8,
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  footer: {
    padding: 24,
    paddingBottom: 32,
  },
  loginButton: {
    backgroundColor: "#007AFF",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 12,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  registerButton: {
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#007AFF",
  },
  registerButtonText: {
    color: "#007AFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
