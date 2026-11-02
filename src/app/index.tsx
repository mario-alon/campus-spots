import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/icon.png")} style={styles.logo} />
      <Text style={styles.title}>Campus Spots</Text>
      <Text style={styles.subtitle}>Explore Kraków!!</Text>
      <View style={styles.card}>
        <Text style={styles.cardName}>Mario Alonso</Text>
        <Text style={styles.cardInfo}>From Navalcarnero, Spain - Studying Mathematics & Computer Science</Text>
        <Text style={styles.cardDescription}>
          My favourite place is Plaza de Segovia, where everyone gathers to have a drink at the terraces.
        </Text>
      </View>
      <View style={styles.boxContainer}>
        <View style={[styles.box, styles.box1]} />
        <View style={[styles.box, styles.box2]} />
        <View style={[styles.box, styles.box3]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f6f6f4",
  },
  logo: {
    width: 96,
    height: 96,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
  },
  subtitle: {
    marginTop: 4,
    fontSize: 16,
    color: "#666",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    marginTop: 24,
    width: "85%",
    alignItems: "center",
  },
  cardName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2c3e50",
    marginBottom: 6,
  },
  cardInfo: {
    fontSize: 14,
    color: "#475569",
    textAlign: "center",
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 13,
    color: "#64748b",
    textAlign: "center",
  },
  boxContainer: {
    flexDirection: "row",
    gap: 8,
    marginTop: 24,
    width: "85%",
  },
  box: {
    width: 60,
    height: 60,
  },
  box1: {
    backgroundColor: "#e74c3c",
  },
  box2: {
    flex: 1,
    backgroundColor: "#f1c40f",
  },
  box3: {
    backgroundColor: "#e74c3c",
  },
});