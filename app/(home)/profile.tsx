import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View className="flex-1 bg-white p-4">
      <View className="items-center mb-6">
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
          className="w-32 h-32 rounded-full mb-4"
        />
        <Text className="text-2xl font-bold">John Doe</Text>
        <Text className="text-gray-500">Realtor</Text>
      </View>
      
      <View className="space-y-4">
        <View className="p-4 bg-gray-50 rounded-lg">
          <Text className="font-semibold">Contact Information</Text>
          <Text>Email: john.doe@example.com</Text>
          <Text>Phone: (555) 123-4567</Text>
        </View>
        
        <View className="p-4 bg-gray-50 rounded-lg">
          <Text className="font-semibold">About</Text>
          <Text>Specializing in residential properties in the downtown area with over 5 years of experience.</Text>
        </View>
      </View>
    </View>
  );
}
