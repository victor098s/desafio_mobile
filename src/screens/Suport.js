import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import suport from "../../assets/suport.png";

export default function Suport() {
  return (
    <View style={styles.container}>
      <View style={styles.topBand} />

      <View style={styles.content}>
        <View style={styles.heroCircle}>
          <Image source={suport} style={styles.supportImage} />
        </View>

        <Text style={styles.title}>Suporte</Text>

        <View style={styles.supportCard}>
          <Text style={styles.infoText}>Telefone: 11 20930-0120</Text>
          <Text style={styles.infoText}>Email: vlitestoreoficial@gmail.com</Text>
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
  supportImage: {
    width: 70,
    height: 70,
    resizeMode: "contain",
  },
  title: {
    marginTop: 10,
    marginBottom: 38,
    fontSize: 13,
    color: "#111111",
    fontWeight: "500",
  },
  supportCard: {
    width: "100%",
    maxWidth: 348,
    height: 123,
    borderRadius: 4,
    backgroundColor: "#ECF1FF",
    justifyContent: "center",
    paddingHorizontal: 20,
    shadowColor: "#000000",
    shadowOffset: { width: -1, height: 4 },
    shadowOpacity: 0.22,
    shadowRadius: 2,
    elevation: 3,
  },
  infoText: {
    fontSize: 8,
    color: "#111111",
    marginBottom: 26,
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
