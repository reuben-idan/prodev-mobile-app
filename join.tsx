import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import { styles } from '@/styles/_joinstyle';
import { HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO } from '@/constants';

export default function Join() {
  return (
    <View style={styles.container}>
      <View style={styles.iconsection}>
        <Link href="/">
          <Text style={{ fontSize: 18 }}>←</Text>
        </Link>
        <Image source={HEROLOGOGREEN} style={{ width: 100, height: 40 }} />
      </View>

      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Join Now</Text>
        <Text style={styles.subText}>Create an account to get started with ProDev</Text>
      </View>

      <View style={styles.formGroup}>
        <View>
          <Text style={styles.formLabel}>Full Name</Text>
          <TextInput 
            style={styles.formControl} 
            placeholder="Enter your full name"
            autoCapitalize="words"
          />
        </View>

        <View>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput 
            style={styles.formControl} 
            placeholder="Enter your email" 
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View>
          <Text style={styles.formLabel}>Password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput 
              style={styles.passwordControl} 
              placeholder="Create a password" 
              secureTextEntry
            />
          </View>
        </View>

        <View>
          <Text style={styles.formLabel}>Confirm Password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput 
              style={styles.passwordControl} 
              placeholder="Confirm your password" 
              secureTextEntry
            />
          </View>
        </View>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>

        <View style={styles.dividerGroup}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>or sign up with</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.secondaryButtonGroup}>
          <TouchableOpacity style={[styles.secondaryButton, { borderColor: '#E9E9E9' }]}>
            <Image source={GOOGLELOGO} style={{ width: 24, height: 24 }} />
            <Text style={styles.secondaryButtonText}>Continue with Google</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.secondaryButton, { borderColor: '#E9E9E9' }]}>
            <Image source={FACEBOOKLOGO} style={{ width: 24, height: 24 }} />
            <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Already have an account? </Text>
        <Link href="/signin">
          <Text style={styles.signupSubTitleText}>Sign In</Text>
        </Link>
      </View>
    </View>
  );
}
