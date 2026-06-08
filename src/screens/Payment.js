import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import pix from "../../assets/pix.png";
import card from "../../assets/card.png";
import boleto from "../../assets/boleto.png";
import shopping from "../../assets/shopping.png";

export default function Payment() {
  return (
    <View style={styles.container}>
      <View style={styles.topBand} />

      <View style={styles.content}>
        <View style={styles.heroCircle}>
          <Image source={shopping} style={styles.shoppingImage} />
        </View>

        <Text style={styles.title}>Formas de pagamento</Text>

        <View style={styles.grid}>
          <View style={styles.paymentItem}>
            <Text style={styles.cardLabel}>PIX</Text>
            <TouchableOpacity activeOpacity={0.75} style={styles.card}>
              <Image source={pix} style={styles.paymentImage} />
            </TouchableOpacity>
          </View>

          <View style={styles.paymentItem}>
            <Text style={styles.cardLabel}>Cartão de débito</Text>
            <TouchableOpacity activeOpacity={0.75} style={styles.card}>
              <Image source={card} style={styles.paymentImage} />
            </TouchableOpacity>
          </View>

          <View style={styles.paymentItem}>
            <Text style={styles.cardLabel}>Cartão de Crédito em até 2x</Text>
            <TouchableOpacity activeOpacity={0.75} style={styles.card}>
              <Image source={card} style={styles.paymentImage} />
            </TouchableOpacity>
          </View>

          <View style={styles.paymentItem}>
            <Text style={styles.cardLabel}>Boleto</Text>
            <TouchableOpacity activeOpacity={0.75} style={styles.card}>
              <Image source={boleto} style={styles.paymentImage} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.bottomBar}>
        <Ionicons name="home-outline" size={27} color="#111111" />
        <Ionicons name="search-outline" size={30} color="#111111" />
        <View style={styles.tabBagIcon}>
          <Ionicons name="bag-handle-outline" size={28} color="#111111" />
          <Ionicons
            name="checkmark-outline"
            size={14}
            color="#111111"
            style={styles.tabBagCheck}
          />
        </View>
        <Ionicons name="person-outline" size={27} color="#111111" />
      </View>
    </View>
  );
}

const CARD_SIZE = 96;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  topBand: {
    height: 62,
    backgroundColor: "#ECF1FF",
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 18,
  },
  heroCircle: {
    width: 104,
    height: 104,
    borderRadius: 52,
    backgroundColor: "#ECF1FF",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  shoppingImage: {
    width: 62,
    height: 62,
    resizeMode: "contain",
  },
  title: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 13,
    color: "#111111",
    fontWeight: "500",
  },
  grid: {
    width: "100%",
    maxWidth: 252,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  paymentItem: {
    width: CARD_SIZE,
    marginBottom: 13,
  },
  cardLabel: {
    height: 16,
    marginBottom: 2,
    fontSize: 6,
    color: "#111111",
  },
  card: {
    width: CARD_SIZE,
    height: CARD_SIZE,
    borderRadius: 4,
    backgroundColor: "#ECF1FF",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000000",
    shadowOffset: { width: -1, height: 4 },
    shadowOpacity: 0.22,
    shadowRadius: 2,
    elevation: 3,
  },
  paymentImage: {
    width: 62,
    height: 62,
    resizeMode: "contain",
  },
  bottomBar: {
    height: 39,
    backgroundColor: "#ECF1FF",
    borderTopWidth: 1,
    borderTopColor: "#DCE3F5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 8,
  },
  tabBagIcon: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  tabBagCheck: {
    position: "absolute",
    right: 1,
    bottom: 3,
  },
});
