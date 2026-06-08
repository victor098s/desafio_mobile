import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from "react-native";

export default function Adress() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Meus Endereços</Text>
      </View>
      <View style={styles.addressCard}>
        <Text style={styles.label}>Endereço Principal</Text>
        <Text style={styles.address}>Rua Exemplo, 123 - São Paulo, SP</Text>
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
    padding: 20,
    backgroundColor: "#ECF1FF",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  addressCard: {
    padding: 15,
    margin: 10,
    backgroundColor: "#ECF1FF",
    borderRadius: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  address: {
    fontSize: 12,
    color: "#666",
  },
});
