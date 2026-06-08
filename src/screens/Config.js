import { View, Text, StyleSheet, ScrollView, Switch } from "react-native";
import { useState } from "react";

export default function Config() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Configurações</Text>
      </View>
      <View style={styles.configCard}>
        <View style={styles.option}>
          <Text style={styles.label}>Notificações</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
          />
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
    padding: 20,
    backgroundColor: "#ECF1FF",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  configCard: {
    padding: 15,
    margin: 10,
    backgroundColor: "#ECF1FF",
    borderRadius: 8,
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
