import { View } from "react-native";
import PropertyListingCard from "../common/PropertyListingCard";
import { PropertListing, PropertyListingProps } from "@/interfaces";

const PropertyListing = ({ listings }: PropertListing) => {
  return (
    <View
      style={{
        flex: 1,
        rowGap: 10,
      }}
    >
      {listings?.map((listing: PropertyListingProps, key: number) => (
        <PropertyListingCard {...listing} key={key} />
      ))}
    </View>
  );
};

export default PropertyListing;
