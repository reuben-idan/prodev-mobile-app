import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";

export default function Profile() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileInfo}>
          <Image source={require("@/assets/images/user-image.png")} />
          <View>
            <Text style={styles.name}>Cole Baidoo</Text>
            <Text style={styles.username}>@cole_cs</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Feather name="edit" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Main Options */}
      <View style={styles.section}>
        <ProfileItem
          icon="person-outline"
          title="My Account"
          subtitle="Make Changes to your account"
        />
        <ProfileItem
          icon="person-outline"
          title="Saved Beneficiary"
          subtitle="Manage your saved accounts"
        />
        <ProfileItem
          icon="lock-outline"
          title="Face ID / Touch ID"
          subtitle="Make Changes to your account"
        />
        <ProfileItem
          icon="shield"
          title="Two-Factor Authentication"
          subtitle="Further secure your account for safety"
        />
        <ProfileItem
          icon="exit-to-app"
          title="Log out"
          subtitle="Further secure your account for safety"
        />
      </View>

      {/* More Section */}
      <Text style={styles.sectionTitle}>More</Text>
      <View style={styles.section}>
        <ProfileItem
          icon="person-outline"
          title="My Account"
          subtitle="Make Changes to your account"
        />
        <ProfileItem
          icon="person-outline"
          title="Saved Beneficiary"
          subtitle="Manage your saved accounts"
        />
      </View>
    </ScrollView>
  );
}

// 🔹 Reusable item
const ProfileItem = ({ icon, title, subtitle }: any) => (
  <TouchableOpacity style={styles.item}>
    <MaterialIcons name={icon} size={34} color="#6C63FF" />
    <View style={{ flex: 1, marginLeft: 12 }}>
      <Text style={styles.itemTitle}>{title}</Text>
      <Text style={styles.itemSubtitle}>{subtitle}</Text>
    </View>
    <Feather name="chevron-right" size={34} color="black" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#34967C",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  name: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 14,
  },
  username: {
    color: "white",
    fontSize: 14,
    opacity: 0.9,
    paddingLeft: 14,
  },
  section: {
    backgroundColor: "white",
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  sectionTitle: {
    fontSize: 14,
    color: "#666",
    fontWeight: "bold",
    marginLeft: 16,
    marginTop: 10,
    marginBottom: 4,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  itemSubtitle: {
    fontSize: 13,
    color: "#888",
  },
});

