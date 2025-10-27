import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions } from "react-native";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");


const LoginScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>

      {/* Input de Email */}
      <Text style={styles.label}>E-mail</Text>
      <TextInput style={styles.input} placeholder="Digite seu e-mail" placeholderTextColor="#fff" />

      {/* Input de Senha */}
      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.input} placeholder="Digite sua senha" placeholderTextColor="#fff" secureTextEntry />

      {/* Botão Entrar */}
      <TouchableOpacity style={styles.button} onPress={() => router.push("/chat")}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>

      {/* Rodapé */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Não tem uma conta?{"\n"}
          <Text style={styles.footerLink}>fale conosco agora mesmo</Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 80,
    width: width,
    height: height,
  },
  title: {
    fontSize: 64,
    fontWeight: "600",
    color: "#6517c5",
    marginBottom: 50,
    fontFamily: "Gurajada",
  },
  label: {
    fontSize: 24,
    color: "#fff",
    alignSelf: "flex-start",
    marginLeft: 40,
    marginTop: 10,
  },
  input: {
    width: width * 0.77,
    height: 50,
    backgroundColor: "#c595ff",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    color: "#fff",
  },
  button: {
    width: width * 0.77,
    height: 50,
    backgroundColor: "#6517c5",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: "600",
    color: "#fff",
    fontFamily: "Gurajada",
  },
  footer: {
    position: "absolute",
    bottom: 50,
    alignItems: "center",
  },
  footerText: {
    fontSize: 24,
    color: "purple",
    textAlign: "center",
  },
  footerLink: {
    fontWeight: "bold",
  },
});
