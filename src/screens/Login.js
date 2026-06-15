import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import logo from "../../assets/logo.png";
import { useFonts } from "expo-font";

export default function Login({ navigation }) {
  const handleLogin = () => {
    navigation.navigate("drawerRoot");
  };

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <View style={styles.container} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image style={styles.logoImg} source={logo} alt="Logo" />
      </View>
      <View style={styles.loginBox}>
        <View style={styles.alignInput}>
          <Text style={styles.textInput}>Email</Text>

          <TextInput
            underlineColorAndroid="transparent"
            placeholderTextColor="#D5E6FF"
            placeholder="Digite o seu email"
            style={styles.input}
          />
        </View>

        <View style={styles.alignInput}>
          <Text style={styles.textInput}>Senha</Text>
          <TextInput
            underlineColorAndroid="transparent"
            placeholderTextColor="#D5E6FF"
            placeholder="Digite a sua senha"
            style={styles.input}
          />
        </View>

        <TouchableOpacity style={styles.btn} onPress={handleLogin}>
          <Text style={styles.textBtn}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECF1FF",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: 200,
    height: 200,
    borderRadius: 175,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },

  logoImg: {
    width: "125%",
    aspectRatio: 345 / 150,
    resizeMode: "contain",
    borderRadius: 125,
  },

  loginBox: {
    marginTop: 20,
    borderRadius: 8,
    backgroundColor: "#D7E6FF",
    width: 350,
    height: 400,
    alignItems: "center",
    paddingTop: 50,
  },

  alignInput: {
    marginBottom: 70,
  },

  textInput: {
    fontFamily: "Poppins-Regular",
    fontSize: 20,
  },

  input: {
    backgroundColor: "#B3BFF0",
    borderRadius: 8,
    width: 308,
    height: 35,
    fontFamily: "Poppins-Regular",
    paddingLeft: 10,
    paddingTop: 5,
    borderWidth: 0,
  },

  btn: {
    width: 280,
    height: 40,
    backgroundColor: "#B3BFF0",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },

  textBtn: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
  },
});
