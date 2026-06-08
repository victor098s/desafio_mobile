import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import psucess from "../../assets/psucess.png";
import { useFonts } from "expo-font";

export default function PaymentSucess({ navigation }) {
  const HandleBack = () => {
    navigation.navigate("homeScreen");
  };

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });

  return (
    <View style={styles.container}>
      <View style={styles.cardSucess}>
        <Image source={psucess} style={styles.imgPayment} />
        <Text style={styles.text}>Produto Comprado com sucesso</Text>
      </View>
      <TouchableOpacity style={styles.btn} onPress={HandleBack}>
        <Text style={styles.textBtn}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  cardSucess: {
    width: 280,
    height: 280,
    backgroundColor: "#ECF1FF",
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
  },

  imgPayment: {
    width: 100,
    height: 100,
  },

  text: {
    fontFamily: "Poppins-Regular",
    fontSize: 20,
  },

  btn: {
    width: 222,
    height: 32,
    borderRadius: 8,
    backgroundColor: "#8CB8FF",
    alignItems: "center",
    justifyContent: "center",
  },

  textBtn: {
    width: 222,
    height: 32,
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: -1, height: 4 },
    elevation: 2,
    shadowRadius: 2,
    shadowOpacity: 0.2,
  },
});
