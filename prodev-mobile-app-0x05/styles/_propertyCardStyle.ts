import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 400,
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 20,
    backgroundColor: "#f9f9f9",
    elevation: 4, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    padding: 16,
    justifyContent: "space-between",
  },
  favoriteGroup: {
    alignItems: "flex-end",
  },
  favoriteOverlay: {
    backgroundColor: "rgba(0,0,0,0.4)",
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  rateGroup: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 6,
    marginBottom: 8,
  },
  rateText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
  },
  priceGroup: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#e6e6e6",
  },
  priceText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#34967C",
  },
  cardTextGroup: {
    flex: 1,
    marginRight: 12,
  },
  cardLargeText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 4,
  },
  cardSmallText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#f1f1f1",
  },
  cardGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  group: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
  },
});

export { styles };
