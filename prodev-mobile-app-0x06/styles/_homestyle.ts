import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffffff",
  },

  // --- Search Bar ---
  searchGroup: {
    paddingHorizontal: 10,
    paddingVertical: 40,
    backgroundColor: "#34967C",
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F1F1",
    marginTop: 50,
    marginBottom: -22,
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 8,
    shadowColor: "#000", // small shadow to make it float
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 14,
    color: "#555",
    paddingLeft: 13,
  },
  searchControl: {
    fontSize: 14,
    color: "#333",
    paddingVertical: 2,
  },
  searchButton: {
    backgroundColor: "#FFA800",
    padding: 8,
    borderRadius: 30,
    marginLeft: 8,
  },

  // --- Filters ---
  filtersWrapper: {
    height: 100,
    backgroundColor: "#FFFFFF",
    paddingVertical: 8,
    marginTop: 5, // small space below search
  },
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  filterContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
    width: 72,
  },
  filterIcon: {
    width: 40,
    height: 40,
    marginBottom: 4,
  },
  filterText: {
    fontSize: 12,
    color: "#333",
  },

  // --- Listings ---
  listingContainer: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  paginationContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  showMoreButton: {
    backgroundColor: "#091814ff",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 25,
  },
  showMoreButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export { styles };
