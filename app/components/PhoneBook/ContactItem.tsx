import { convertToMobilePhone } from "@/app/utils/convert-to-mobile-phone";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export interface ContactItemProps {
    phone: string,
    role: string
    name: string
}

export const ContactItem = ( { phone, role , name} : ContactItemProps) => {
  const openWhatsApp = (phone: string) => {
    const phoneNumber = convertToMobilePhone(phone);
    Linking.openURL(`https://wa.me/${phoneNumber}`);
  };

  return (
    <View style={styles.itemContainer}>
      <MaterialCommunityIcons
        name="account-circle-outline"
        size={40}
        color="white"
      />
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemName}>
          {name} - {role}
        </Text>
        <Text style={styles.itemPhone}>{phone}</Text>
      </View>
      <TouchableOpacity
        onPress={() => Linking.openURL(`tel:${phone}`)}
        style={{ marginRight: 15 }}
      >
        <MaterialCommunityIcons
          name="phone-outline"
          size={24}
          color="#ff6600"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => openWhatsApp(phone)}>
        <MaterialCommunityIcons name="whatsapp" size={24} color="#25D366" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemTextContainer: {
    flex: 1,
    marginLeft: 15,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  itemPhone: {
    fontSize: 16,
    color: "#ccc",
    marginTop: 5,
  },
});
