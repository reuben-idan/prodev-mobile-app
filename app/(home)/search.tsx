import { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { PropertyListingCard } from '@/components/common/PropertyListingCard';
import { properties } from '@/constants/data';

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredProperties = properties.filter(property =>
    property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    property.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View className="flex-1 bg-white">
      <View className="p-4">
        <Text className="text-2xl font-bold mb-4">Search Properties</Text>
        <TextInput
          className="border border-gray-300 rounded-lg p-3"
          placeholder="Search by property name or location..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      
      <FlatList
        data={filteredProperties}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PropertyListingCard property={item} />}
        contentContainerStyle={{ padding: 16, paddingTop: 0 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
