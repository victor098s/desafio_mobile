import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Switch,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

export default function Config() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <View style={styles.configCard}>
        <View style={styles.alterPassword}>
          <Text style={styles.label}>Alterar Senha</Text>
          <View style={styles.password}>
            <TextInput style={styles.input}></TextInput>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.textBtn}>Alterar</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.titulo}>Endereço de entrega </Text>

        <View style={styles.adressContainer}>
          <View style={styles.adressBox}>
            <Text style={styles.label}>CEP</Text>
            <View style={styles.inputAdress}>
              <TextInput style={styles.input}></TextInput>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.textBtn}>Alterar</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.adressBox}>
            <Text style={styles.label}>Rua</Text>
            <View style={styles.inputAdress}>
              <TextInput style={styles.input}></TextInput>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.textBtn}>Alterar</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.adressBox}>
            <Text style={styles.label}>Bairro</Text>
            <View style={styles.inputAdress}>
              <TextInput style={styles.input}></TextInput>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.textBtn}>Alterar</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.adressBox}>
            <Text style={styles.label}>Cidade</Text>
            <View style={styles.inputAdress}>
              <TextInput style={styles.input}></TextInput>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.textBtn}>Alterar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  configCard: {
    width: 350,
    height: 400,
    backgroundColor: "#EDEDED",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: -1, height: 4 },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 0.2,
    padding: 20,
  },

  alterPassword: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 20,
  },

  adressBox: {
    flexDirection: "row",
    gap: 20,
  },

  password: {
    flexDirection: "row",
    gap: 10,
  },
  cep: {
    flexDirection: "row",
    gap: 10,
  },

  inputAdress: {
    flexDirection: "row",
    gap: 10,
  },

  input: {
    width: 100,
    height: 23,
    backgroundColor: "#D1D1D1",
    borderRadius: 8,
    padding: 10
  },
  btn: {
    width: 42,
    height: 23,
    backgroundColor: "#B4C8FF",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: -1, height: 4 },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 0.2,
    alignItems: "center",
    justifyContent: "center",
  },

  textBtn: {
    fontSize: 9,
    color: "#FFFFFF",
  },

  adressContainer: {
    width: 293,
    height: 169,
    backgroundColor: "#ECF1FF",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: -1, height: 4 },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 0.2,
    gap: 20,
    padding: 10,
    marginTop: 20,
  },
});
