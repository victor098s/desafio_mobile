import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import pix from "../../assets/pix.png";
import card from "../../assets/card.png";
import boleto from "../../assets/boleto.png";
import shopping from "../../assets/shopping.png";

export default function Payment() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <View style={styles.paymentCard}>
        <Image source={shopping} alt="img" style={styles.imgShopping} />
      </View>
      <Text style={styles.textPayment}>Formas de pagamento</Text>

      <View style={styles.section}>
        <View style={styles.alignCard}>
          <Text style={styles.textCard}>PIX</Text>
          <TouchableOpacity style={styles.card}>
            <Image source={pix} style={styles.imgCard} />
          </TouchableOpacity>
        </View>
        <View style={styles.alignCard}>
          <Text style={styles.textCard}>Cartão de débito</Text>
          <TouchableOpacity style={styles.card}>
            <Image source={card} style={styles.imgCard} />
          </TouchableOpacity>
        </View>
        <View style={styles.alignCard}>
          <Text style={styles.textCard}>Cartão de crédito em até 12x</Text>
          <TouchableOpacity style={styles.card}>
            <Image source={card} style={styles.imgCard} />
          </TouchableOpacity>
        </View>
        <View style={styles.alignCard}>
          <Text style={styles.textCard}>Boleto</Text>
          <TouchableOpacity style={styles.card}>
            <Image source={boleto} style={styles.imgCard} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  section: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  imgCard: {
    width: 40,
    height: 40,
  },

  paymentCard: {
    marginTop: 20,
    marginBottom: 8,
    borderRadius: 75,
    backgroundColor: "#ECF1FF",
    width: 150,
    height: 150,
  },

  imgShopping: {
    width: 150,
    height: 150,
  },

  textCard: {
    marginBottom: 10,
  },

  card: {
    width: 150,
    height: 150,
    backgroundColor: "#ECF1FF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 5,
    shadowColor: "#000",
    shadowOffset: { width: -1, height: 4 },
    elevation: 2,
    shadowRadius: 2,
    shadowOpacity: 0.2,
    borderRadius: 8,
  },
});
