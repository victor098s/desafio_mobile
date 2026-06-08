import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import prsImg from "../../assets/prs.jpg";
import { useFonts } from "expo-font";

function PrsDetails({ navigation }) {
  const handlePaymentSucess = () => {
    navigation.navigate("PaymentSucess");
  };

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <View style={styles.container} />;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Guitarra PRS SE STANDARD 24 VC ST4 Vintage cherry-VliteStore
      </Text>

      <View style={styles.alignCard}>
        <View style={styles.card}>
          <Image source={prsImg} style={styles.img} alt="img" />
        </View>
      </View>

      <Text style={styles.price}>R$ 8141,00</Text>

      <View style={styles.alignBtn}>
        <TouchableOpacity style={styles.btn} onPress={handlePaymentSucess}>
          <Text style={styles.textBtn}>Comprar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.descricao}>
        <Text style={styles.tituloDesc}>Descrição</Text>

        <Text style={styles.paragrafo}>
          A PRS SE é a escolha definitiva para quem busca o visual sofisticado e
          o equilíbrio sonoro perfeito entre o clássico e o moderno. Com seu
          icônico formato Double Cutaway, tampo em jacarandá trabalhado e as
          famosas marcações de pássaros na escala, ela oferece ergonomia
          impecável e um alcance perfeito a todas as casas. Equipada com dois
          captadores Humbuckers projetados pela PRS, entrega timbres ricos em
          harmônicos, graves profundos e agudos brilhantes. Além disso, seu
          sistema Push-Pull adiciona uma versatilidade incrível, permitindo
          alternar para sons mais estalados e limpos para você dominar qualquer
          estilo musical no palco.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  title: { fontSize: 10, fontFamily: "Poppins-Regular", padding: 10 },
  alignCard: { alignItems: "center" },
  card: {
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: -1, height: 4 },
    elevation: 2,
    shadowRadius: 2,
    shadowOpacity: 0.2,
    marginTop: 10,
  },
  img: { width: 222, height: 222, borderRadius: 8 },
  price: { color: "#517FFF", fontSize: 20, padding: 20 },
  alignBtn: { alignItems: "center", marginBottom: 10 },
  btn: {
    width: 222,
    height: 32,
    backgroundColor: "#8CB8FF",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  textBtn: { color: "#FFFFFF" },
  descricao: { paddingLeft: 20, marginTop: 10, paddingRight: 20 },
  tituloDesc: { fontSize: 20, fontFamily: "Poppins-Regular" },
  paragrafo: { fontSize: 12, fontFamily: "Poppins-Regular", lineHeight: 18 },
});

export default PrsDetails;
