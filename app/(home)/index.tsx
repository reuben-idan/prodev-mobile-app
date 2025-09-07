import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useState, useCallback } from 'react';
import { PropertyListingCard } from '@/components/common/PropertyListingCard';
import { properties as initialProperties, Property } from '@/constants/data';

export default function HomeScreen() {
  const [properties, setProperties] = useState<Property[]>(initialProperties);

  const handleSaveProperty = useCallback((propertyId: string) => {
    setProperties(prevProperties => 
      prevProperties.map(property => 
        property.id === propertyId 
          ? { ...property, isSaved: !property.isSaved } 
          : property
      )
    );
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Featured Properties</Text>
      </View>
      
      <FlatList
        data={properties}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PropertyListingCard 
            property={item} 
            onSave={handleSaveProperty}
          />
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  listContent: {
    padding: 16,
    paddingTop: 8,
  },
});
