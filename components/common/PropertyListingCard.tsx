import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Property } from '@/interfaces';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface PropertyListingCardProps {
  property: Property;
  onSave?: (id: string) => void;
}

export function PropertyListingCard({ property, onSave }: PropertyListingCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: property.images[0] }} 
          style={styles.image}
          resizeMode="cover"
        />
        <TouchableOpacity 
          style={styles.saveButton}
          onPress={() => onSave?.(property.id)}
        >
          <MaterialCommunityIcons 
            name={property.isSaved ? 'heart' : 'heart-outline'} 
            size={24} 
            color={property.isSaved ? '#EF4444' : '#6B7280'} 
          />
        </TouchableOpacity>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>${property.price.toLocaleString()}</Text>
        </View>
      </View>
      
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{property.title}</Text>
        <Text style={styles.address}>{property.address}</Text>
        
        <View style={styles.featuresContainer}>
          <View style={styles.featuresRow}>
            <Text style={styles.featureText}>{property.bedrooms} bd</Text>
            <Text style={styles.divider}>•</Text>
            <Text style={styles.featureText}>{property.bathrooms} ba</Text>
            <Text style={styles.divider}>•</Text>
            <Text style={styles.featureText}>{property.area} sqft</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 192,
  },
  saveButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  priceContainer: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    backgroundColor: '#2563eb',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  priceText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  detailsContainer: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  address: {
    color: '#6b7280',
    fontSize: 14,
    marginBottom: 8,
  },
  featuresContainer: {
    marginTop: 8,
  },
  featuresRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featureText: {
    color: '#374151',
  },
  divider: {
    marginHorizontal: 8,
    color: '#d1d5db',
  },
});
