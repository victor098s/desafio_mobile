import { Text, View, StyleSheet, Image } from "react-native";
import call from "../../assets/call.png";

export default function Suport() {
  return (
    <View style={styles.container}>
      <View style={styles.suportCard}>
        <Image source={call} alt="img" style={styles.imgCall} />
      </View>
      <Text style={styles.name}>Suporte</Text>

      <View style={styles.boxSuport}>
       
          <Text style={styles.text}>Telefone: 11 20930-0120</Text>
          <Text style={styles.text}>Email: vlitestoreoficial@gmail.com</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  suportCard: {
    marginTop: 50,
    width: 150,
    height: 150,
    backgroundColor: "#ECF1FF",
    borderRadius: 75,
    alignItems: "center",
    justifyContent: "center",
  },

  imgCall: {
    width: 100,
    height: 100,
    borderRadius: 75,
  },

  boxSuport: {
    marginTop: 50,

    backgroundColor: "#ECF1FF",
    shadowColor: "#000",
    shadowOffset: { width: -1, height: 4 },
    elevation: 2,
    shadowRadius: 2,
    shadowOpacity: 0.2,
    paddingLeft: 20,
    paddingTop: 20,
    width: 350,
    height: 200,
    borderRadius: 8,
    gap: 50

  }
});
