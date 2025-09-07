import { Text, TextInput, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { styles } from "@/styles/_join";
import { GOOGLELOGO, FACEBOOKLOGO } from "@/constants";
import { useRouter } from "expo-router";

export default function Join() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1, justifyContent: "space-between" }}>
          {/* Main content */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          >
            {/* Top navigation */}
            <View style={styles.iconsection}>
              <Ionicons name="arrow-back" size={25} onPress={() => router.back()} />
              <Image source={require("@/assets/images/logo-green.png")} />
            </View>

            {/* Title */}
            <View style={styles.titleTextGroup}>
              <Text style={styles.titleText}>Create your</Text>
              <Text style={styles.titleText}>Account</Text>
              <Text style={styles.subText}>
                Enter your details below to sign up.
              </Text>
            </View>

            {/* Form */}
            <View style={styles.formGroup}>
              <View>
                <Text style={styles.formLabel}>Full Name</Text>
                <TextInput style={styles.formControl} />
              </View>
              <View>
                <Text style={styles.formLabel}>Email</Text>
                <TextInput keyboardType="email-address" style={styles.formControl} />
              </View>
              <View>
                <Text style={styles.formLabel}>Password</Text>
                <View style={styles.formPasswordControl}>
                  <TextInput secureTextEntry style={styles.passwordControl} />
                  <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
                </View>
              </View>
            </View>

            {/* Primary button */}
            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.buttonText}>Join now</Text>
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.dividerGroup}>
              <View style={styles.divider}></View>
              <Text style={styles.dividerText}>OR</Text>
              <View style={styles.divider}></View>
            </View>

            {/* Social Buttons */}
            <View style={styles.secondaryButtonGroup}>
              <TouchableOpacity style={styles.secondaryButton}>
                <Image source={GOOGLELOGO} />
                <Text style={styles.secondaryButtonText}>Continue with Google</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.secondaryButton}>
                <Image source={FACEBOOKLOGO} />
                <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

          {/* Footer pinned at bottom */}
          <View style={styles.signupgroup}>
            <Text style={styles.signupTitleText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => router.push("/signin")}>
              <Text style={styles.signupSubTitleText}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
