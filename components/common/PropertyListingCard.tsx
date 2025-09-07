import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Property } from '@/interfaces';
import { HeartIcon } from 'react-native-heroicons/outline';
import { HeartIcon as HeartIconSolid } from 'react-native-heroicons/solid';

interface PropertyListingCardProps {
  property: Property;
  onSave?: (id: string) => void;
}

export function PropertyListingCard({ property, onSave }: PropertyListingCardProps) {
  return (
    <View className="bg-white rounded-xl shadow-sm overflow-hidden mb-4">
      <View className="relative">
        <Image 
          source={{ uri: property.images[0] }} 
          className="w-full h-48" 
          resizeMode="cover"
        />
        <TouchableOpacity 
          className="absolute top-2 right-2 p-2 bg-white rounded-full"
          onPress={() => onSave?.(property.id)}
        >
          {property.isSaved ? (
            <HeartIconSolid size={24} color="#EF4444" />
          ) : (
            <HeartIcon size={24} color="#6B7280" />
          )}
        </TouchableOpacity>
        <View className="absolute bottom-2 left-2 bg-blue-600 px-2 py-1 rounded">
          <Text className="text-white text-sm font-medium">${property.price.toLocaleString()}</Text>
        </View>
      </View>
      
      <View className="p-4">
        <Text className="text-lg font-bold mb-1">{property.title}</Text>
        <Text className="text-gray-500 text-sm mb-2">{property.address}</Text>
        
        <View className="flex-row justify-between mt-2">
          <View className="flex-row items-center">
            <Text className="text-gray-700">{property.bedrooms} bd</Text>
            <Text className="mx-2 text-gray-300">•</Text>
            <Text className="text-gray-700">{property.bathrooms} ba</Text>
            <Text className="mx-2 text-gray-300">•</Text>
            <Text className="text-gray-700">{property.area} sqft</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
