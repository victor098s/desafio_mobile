
import { Text, Image, View, StyleSheet, ScrollView } from "react-native";
import shopping from "../../assets/shopping.png";
import bossaw3 from "../../assets/boss_wah_awh3.jpg";
import jackson from "../../assets/jackson.jpg";
import seizi from "../../assets/seize.jpg";
import oc5 from "../../assets/oc_5.png";

export default function Shopping() {
  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.header}>
        <View style={styles.shoppingCard}>
          <Image source={shopping} alt="img" style={styles.imgshopping} />
        </View>
        <Text style={styles.name}>Minhas compras</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.alignCard}>
          <Text style={styles.title}>Jackson JS32</Text>
          <View style={styles.card}>
            <Image source={jackson} style={styles.imgCard} alt="img" />
          </View>
        </View>

        <View style={styles.alignCard}>
          <Text style={styles.title}>Seizi Katana Venom</Text>
          <View style={styles.card}>
            <Image source={seizi} style={styles.imgCard} alt="img" />
          </View>
        </View>

        <View style={styles.alignCard}>
          <Text style={styles.title}>Boss AW-3</Text>
          <View style={styles.card}>
            <Image source={bossaw3} style={styles.imgCard} alt="img" />
          </View>
        </View>

        <View style={styles.alignCard}>
          <Text style={styles.title}>Boss Octave OC-5</Text>
          <View style={styles.card}>
            <Image source={oc5} style={styles.imgCard} alt="img" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF", 
  },
  header: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  shoppingCard: {
    width: 150,
    height: 150,
    backgroundColor: "#ECF1FF",
    borderRadius: 75,
    alignItems: "center",
    justifyContent: "center",
  },
  imgshopping: {
    width: 90,
    height: 90,
    resizeMode: "contain",
  },
  name: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  section: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingHorizontal: 10,
  },
  alignCard: {
    marginBottom: 20,
  },
  title: {
    fontSize: 13,
    fontWeight: "500",
    marginBottom: 5,
  },
  card: {
    width: 150,
    height: 150,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: -1, height: 4 },
    elevation: 2,
    shadowRadius: 2,
    shadowOpacity: 0.2,
  },
  imgCard: {
    width: 150,
    height: 150,
    borderRadius: 8,
    resizeMode: "cover",
  },
});
