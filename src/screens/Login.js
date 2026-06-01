import { View, StyleSheet, Text, Image, TextInput } from "react-native";
import logo from "../../assets/logo.png";

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image style={styles.logoImg} source={logo} alt="Logo" />
      </View>
      <View style={styles.loginBox}>
        <TextInput placeholder="Digite o seu email"/>
      </View>
      <View style={styles.loginBox}>
        <TextInput placeholder="Digite a sua senha "/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECF1FF",
    alignItems:'center',

  },

  logo: {
    width: 250,
    height: 250,
    borderRadius: 175,
    backgroundColor: "#000",
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

  loginBox:{
    flex:1,
    backgroundColor: '#000',
    width: 350
  }

});
