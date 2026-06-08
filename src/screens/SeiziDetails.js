import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import SeizeImg from "../../assets/seize.jpg";
import { useFonts } from "expo-font";

function SeiziDetails({ navigation }) {
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
        Guitarra Seizi Katana Venom HH Gold PH Space Grey-VliteStore
      </Text>

      <View style={styles.alignCard}>
        <View style={styles.card}>
          <Image source={SeizeImg} style={styles.img} alt="img" />
        </View>
      </View>

      <Text style={styles.price}>R$ 3200,00</Text>

      <View style={styles.alignBtn}>
        <TouchableOpacity style={styles.btn} onPress={handlePaymentSucess}>
          <Text style={styles.textBtn}>Comprar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.descricao}>
        <Text style={styles.tituloDesc}>Descrição</Text>

        <Text style={styles.paragrafo}>
          A Seizi Katana Venom é a escolha definitiva para quem busca o visual
          futurista e a alta performance do design japonês com estilo moderno.
          Com seu icônico acabado em Space Grey, headstock reverso e braço super
          ergonômico com trastes em aço inoxidável, ela oferece velocidade
          incomparável e um conforto extremo para técnicas avançadas. Equipada
          com os captadores Humbuckers Seizi de alta saída, entrega distorções
          agressivas, timbres definidos e um sustain prolongado. Além disso, sua
          ponte hardtail garante uma estabilidade cirúrgica de afinação,
          tornando-a a máquina perfeita para você dominar bases pesadas e solos
          velozes em qualquer palco.
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

export default SeiziDetails;
