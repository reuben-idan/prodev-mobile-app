import { View, Text, FlatList } from 'react-native';
import { PropertyListingCard } from '@/components/common/PropertyListingCard';
import { properties } from '@/constants/data';

export default function SavedScreen() {
  // Filter saved properties (in a real app, this would come from state/context)
  const savedProperties = properties.filter(property => property.isSaved);

  return (
    <View className="flex-1 bg-white">
      <View className="p-4">
        <Text className="text-2xl font-bold">Saved Properties</Text>
      </View>
      
      {savedProperties.length > 0 ? (
        <FlatList
          data={savedProperties}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <PropertyListingCard property={item} />}
          contentContainerStyle={{ padding: 16, paddingTop: 8 }}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View className="flex-1 items-center justify-center p-8">
          <Text className="text-lg text-gray-500 text-center">
            You haven't saved any properties yet. Browse properties and save your favorites!
          </Text>
        </View>
      )}
    </View>
  );
}
