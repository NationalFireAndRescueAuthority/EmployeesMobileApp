import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

interface ProfileItemProps {
  icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  label: string;
  value: string;
}

export const ProfileItem = ({
  icon,
  label,
  value,
}: ProfileItemProps) => (
  <View style={styles.itemContainer}>
    <MaterialCommunityIcons name={icon} size={28} color="#ff6600" />
    <View style={styles.itemTextContainer}>
      <Text style={styles.itemLabel}>{label}</Text>
      <Text style={styles.itemValue}>{value}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemTextContainer: {
    marginLeft: 15,
  },
  itemLabel: {
    fontSize: 16,
    color: "#ccc",
  },
  itemValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
