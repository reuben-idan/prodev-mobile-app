import { View, Text, FlatList } from 'react-native';
import { PropertyListingCard } from '@/components/common/PropertyListingCard';
import { properties } from '@/constants/data';

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-white">
      <View className="p-4">
        <Text className="text-2xl font-bold">Featured Properties</Text>
      </View>
      
      <FlatList
        data={properties}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PropertyListingCard property={item} />}
        contentContainerStyle={{ padding: 16, paddingTop: 8 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
