import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

import homeImg from "../../assets/home.png";

export default function AdressVerif() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.containerStyles}
    >
      <View style={styles.homeCard}>
        <Image source={homeImg} alt="img" style={styles.imgHome} />
      </View>
      <Text style={styles.name}>Meus endereços</Text>
      <View style={styles.addressCard}>
        <Image source={homeImg} alt="img" style={styles.homeImgCard} />
        <Text style={styles.label}>Enderço Principal - Verifcado</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerStyles: {
    flex: 1,
    alignItems: "center",
  },

  imgHome: {
    width: 100,
    height: 100,
  },

  homeImgCard: {
    width: 40,
    height: 40,
    marginBottom: 20
  },

  homeCard: {
    width: 150,
    height: 150,
    backgroundColor: "#ECF1FF",
    borderRadius: 75,
    justifyContent: "center",
    alignItems: "center",
  },

  addressCard: {
    marginTop: 50,
    width: 350,
    height: 200,
    backgroundColor: "#ECF1FF",
    shadowColor: "#000",
    shadowOffset: { width: -1, height: 4 },
    elevation: 2,
    shadowRadius: 2,
    shadowOpacity: 0.2,
    alignItems: "center",
    borderRadius: 8,
    padding: 20,
  },
});
