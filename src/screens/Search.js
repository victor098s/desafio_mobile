import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import jacksonImg from "../../assets/jackson.jpg";
import fender from "../../assets/fender.jpg";
import prs from "../../assets/prs.jpg";
import seizi from "../../assets/seize.jpg";

export default function Search({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");

  const guitars = [
    {
      id: "1",
      name: "Jackson JS32",
      image: jacksonImg,
      route: "JacksonDetails",
    },
    {
      id: "2",
      name: "Fender RoadHouse",
      image: fender,
      route: "FenderDetails",
    },
    { id: "3", name: "PRS ST4", image: prs, route: "PrsDetails" },
    {
      id: "4",
      name: "Seizi Katana Venom",
      image: seizi,
      route: "SeiziDetails",
    },
  ];

  const filteredGuitars = guitars.filter((guitar) =>
    guitar.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.searchBarContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Pesquisar..."
            placeholderTextColor="#888"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
        </View>
        <TouchableOpacity style={styles.searchIconBtn}>
          <Ionicons name="search-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        {filteredGuitars.map((item) => (
          <View key={item.id} style={styles.alignCard}>
            <Text style={styles.textCard}>{item.name}</Text>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate(item.route)}
            >
              <Image source={item.image} style={styles.imgCard} />
            </TouchableOpacity>
          </View>
        ))}

        {filteredGuitars.length === 0 && (
          <Text style={styles.emptyText}>Nenhum produto encontrado.</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 15,
  },

  inputWrapper: {
    flex: 1,
    backgroundColor: "#ECF1FF",
    borderRadius: 8,
    height: 40,
    justifyContent: "center",
    paddingHorizontal: 15,
    marginRight: 10,
  },

  input: {
    fontSize: 14,
    color: "#000",
  },

  searchIconBtn: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  section: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 10,
  },

  alignCard: {
    marginBottom: 15,
  },

  textCard: {
    fontSize: 12,
    marginBottom: 5,
    fontWeight: "500",
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
    backgroundColor: "#FFF",
  },

  imgCard: {
    borderRadius: 8,
    width: 150,
    height: 150,
  },

  emptyText: {
    marginTop: 30,
    color: "#888",
    fontSize: 14,
  },
});
