import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import jacksonImg from "../../assets/jackson.jpg";
import { useFonts } from "expo-font";

function JacksonDetails({ navigation }) {
  const handlePaymentSucess = () => {
    navigation.navigate("PaymentSucess");
  };

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });

  // 🛠️ Proteção de carregamento de fonte
  if (!fontsLoaded) {
    return <View style={styles.container} />;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Guitarra Jackson JS Series Dink Arc Top JS32 DKA Satin Black-VliteStore
      </Text>

      <View style={styles.alignCard}>
        <View style={styles.card}>
          <Image source={jacksonImg} style={styles.img} alt="img" />
        </View>
      </View>

      <Text style={styles.price}>R$ 4000,00</Text>

      <View style={styles.alignBtn}>
        <TouchableOpacity style={styles.btn} onPress={handlePaymentSucess}>
          <Text style={styles.textBtn}>Comprar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.descricao}>
        <Text style={styles.tituloDesc}>Descrição</Text>

        {/* 🛠️ Substituído <br /> por quebras de linha normais */}
        <Text style={styles.paragrafo}>
          A Jackson JS32 é a escolha definitiva para quem busca o visual
          agressivo e a sonoridade pesada do puro Rock e Metal. Com seu icônico
          formato em V, marcações em dente de tubarão e braço ultraveloz de
          escala composta, ela oferece o máximo conforto tanto para riffs quanto
          para solos rápidos. Equipada com captadores humbuckers de alta saída,
          entrega distorções encorpadas e limpos definidos com total potência.
          Além disso, sua ponte Floyd Rose garante estabilidade total de
          afinação, permitindo alavancadas extremas para você dominar qualquer
          palco.
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

export default JacksonDetails;
