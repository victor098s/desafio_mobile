import { Text, View, StyleSheet, Image } from "react-native";
import person from "../../assets/person.png";
import { useFonts } from "expo-font";

export default function Profille() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <View style={styles.container} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.personCard}>
        <Image source={person} alt="img" style={styles.imgPerson} />
      </View>
      <Text style={styles.name}>Victor</Text>

      <View style={styles.boxInfo}>
        <View style={styles.alignText}>
          <Text style={styles.title}>Informações pessoais</Text>
          <Text style={styles.text}>Telefone: 10 09209-0102</Text>
          <Text style={styles.text}>Email: victor@gmail.com</Text>
          <Text style={styles.text}>Data de nascimento: 19/02/2000</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  personCard: {
    width: 150,
    height: 150,
    backgroundColor: "#ECF1FF",
    borderRadius: 75, // Corrigido de "50%" para número absoluto
    alignItems: "center",
    justifyContent: "center",
  },
  imgPerson: {
    width: 100,
    height: 100,
  },
  name: {
    marginTop: 10,
    fontSize: 20,
    fontFamily: "Poppins-Regular",
    fontWeight: "bold",
  },
  boxInfo: {
    backgroundColor: "#EDEDED",
    width: 356,
    height: 316,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: -1, height: 4 },
    elevation: 2,
    shadowRadius: 2,
    shadowOpacity: 0.2,
    alignItems: "center",
    paddingTop: 20,
    marginTop: 28,
  },
  text: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    margin: 8,
  },
  title: {
    fontFamily: "Poppins-Regular",
    fontSize: 18,
    fontWeight: "bold",
    margin: 10,
  },
  alignText: {
    width: "100%",
    paddingHorizontal: 20,
  }
});