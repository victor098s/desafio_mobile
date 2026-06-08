import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import fenderImg from "../../assets/fender.jpg";
import { useFonts } from "expo-font";

function FenderDetails({ navigation }) {
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
        Guitarra elétrica Fender Deluxe Roadhouse Stratocaster-VliteStore
      </Text>

      <View style={styles.alignCard}>
        <View style={styles.card}>
          <Image source={fenderImg} style={styles.img} alt="img" />
        </View>
      </View>

      <Text style={styles.price}>R$ 5100,00</Text>

      <View style={styles.alignBtn}>
        <TouchableOpacity style={styles.btn} onPress={handlePaymentSucess}>
          <Text style={styles.textBtn}>Comprar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.descricao}>
        <Text style={styles.tituloDesc}>Descrição</Text>

        <Text style={styles.paragrafo}>
          A Fender Roadhouse é a escolha definitiva para quem busca o visual
          clássico e a versatilidade sonora do puro Blues, Pop e Rock. Com seu
          icônico formato Stratocaster, escudo icônico e braço em formato
          moderno em "C", ela oferece o máximo conforto tanto para acordes
          estilizados quanto para solos expressivos. Equipada com três
          captadores single-coil Texas Special de alta saída, entrega estalos
          encorpados, médios destacados e limpos cristalinos com total dinâmica.
          Além disso, seu sistema de chaveamento especial garante uma variedade
          incrível de timbres, permitindo que você domine qualquer palco ou
          estúdio.
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

export default FenderDetails;
