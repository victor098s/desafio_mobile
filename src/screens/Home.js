import { TouchableOpacity, Text, View, StyleSheet, Image } from "react-native";
import ImgBanner from "../../assets/jacksonBanner.png";
import jacksonImg from "../../assets/jackson.jpg";
import fender from "../../assets/fender.jpg";
import prs from "../../assets/prs.jpg";
import seizi from "../../assets/seize.jpg";

export default function Home({ navigation }) {
  const handleCardJackson = () => {
    navigation.navigate("JacksonDetails");
  };
  const handleCardFender = () => {
    navigation.navigate("FenderDetails");
  };
  const handleCardPrs = () => {
    navigation.navigate("PrsDetails");
  };
  const handleCardSeize = () => {
    navigation.navigate("SeiziDetails");
  };

  const handleProfille = () => {
    navigation.navigate("Profille");
  };

  return (
    <View style={styles.container}>
      <View style={styles.alignImageBanner}>
        <Image
          style={styles.ImgBanner}
          source={ImgBanner}
          alt="Imagem de banner"
        />
      </View>
      <View style={styles.section}>
        <View style={styles.alignCard}>
          <Text style={styles.textCard}>Jackson JS32</Text>
          <TouchableOpacity style={styles.card} onPress={handleCardJackson}>
            <Image source={jacksonImg} style={styles.imgCard} />
          </TouchableOpacity>
        </View>
        <View style={styles.alignCard}>
          <Text style={styles.textCard}>Fender RoadHouse</Text>
          <TouchableOpacity style={styles.card} onPress={handleCardFender}>
            <Image source={fender} style={styles.imgCard} />
          </TouchableOpacity>
        </View>
        <View style={styles.alignCard}>
          <Text style={styles.textCard}>PRS ST4</Text>
          <TouchableOpacity style={styles.card} onPress={handleCardPrs}>
            <Image source={prs} style={styles.imgCard} />
          </TouchableOpacity>
        </View>
        <View style={styles.alignCard}>
          <Text style={styles.textCard}>Seizi Katana Venom</Text>
          <TouchableOpacity style={styles.card} onPress={handleCardSeize}>
            <Image source={seizi} style={styles.imgCard} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  alignImageBanner: {
    alignItems: "center",
    marginTop: 10,
  },

  ImgBanner: {
    width: 350,
    height: 150,
    borderRadius: 8,
  },
  section: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 10,
  },

  alignCard: {
    marginBottom: 10,
  },

  card: {
    width: 150,
    height: 150,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: -1, height: 4 },
    elevation: 2,
    shadowRadius: 5,
    shadowOpacity: 0.2,
    marginTop: 5,
  },

  imgCard: {
    borderRadius: 8,
    width: 150,
    height: 150,
  },
});
