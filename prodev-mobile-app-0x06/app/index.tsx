import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { BACKGROUNDIMAGE, HEROLOGO } from "@/constants";
import { styles as mainStyles } from "@/styles/_mainstyle";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={mainStyles.container}>
        <ImageBackground
          source={BACKGROUNDIMAGE}
          style={StyleSheet.absoluteFillObject} // cover the whole screen
          resizeMode="cover"
        />

        <View style={mainStyles.logoContainer}>
          <Image source={HEROLOGO} />
        </View>

        <View style={mainStyles.titleContainer}>
          <Text style={mainStyles.titleText}>Find your favorite place here</Text>
          <View style={mainStyles.titleSubTextContainer}>
            <Text style={mainStyles.titleSubText}>The best prices for over 2</Text>
            <Text style={mainStyles.titleSubText}>million properties worldwide</Text>
          </View>
        </View>

        <View style={{ position: "absolute", bottom: 40, width: "100%" }}>
          <View style={mainStyles.buttonGroup}>
            <TouchableOpacity
              style={mainStyles.buttonPrimary}
              onPress={() => router.push("/join")}
            >
              <Text style={mainStyles.buttonPrimaryText}>Join</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={mainStyles.buttonSecondary}
              onPress={() => router.push("/signin")}
            >
              <Text style={mainStyles.buttonSecondaryText}>Sign In</Text>
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: "center", paddingVertical: 20 }}>
            <TouchableOpacity onPress={() => router.push("./(home)")}>
              <Text style={{ color: "white" }}>Continue to home →</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
