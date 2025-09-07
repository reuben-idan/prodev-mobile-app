import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { styles } from '@/styles/_mainstyle';
import { BACKGROUNDIMAGE, HEROLOGO } from '@/constants';

export default function Index() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={BACKGROUNDIMAGE}
        resizeMode="cover"
        style={styles.backgroundImageContainer}
      >
        <View style={styles.logoContainer}>
          <Image source={HEROLOGO} style={{ width: 180, height: 180 }} />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Welcome to ProDev</Text>
          <View style={styles.titleSubTextContainer}>
            <Text style={styles.titleSubText}>Your personal development journey starts here</Text>
          </View>
        </View>

        <View style={styles.buttonGroup}>
          <Link href="/join" asChild>
            <TouchableOpacity style={styles.buttonPrimary}>
              <Text style={styles.buttonPrimaryText}>Join Now</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/signin" asChild>
            <TouchableOpacity style={styles.buttonSecondary}>
              <Text style={styles.buttonSecondaryText}>Sign In</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ImageBackground>
    </View>
  );
}
