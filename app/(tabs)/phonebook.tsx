
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useMemo, useState } from 'react';
import { FlatList, Linking, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RNPickerSelect from 'react-native-picker-select';

const contacts = [
  { id: '1', name: 'אבי כהן', phone: '050-1234567', role: 'כבאי', district: 'צפון', station: 'חיפה' },
  { id: '2', name: 'יוסי לוי', phone: '052-8765432', role: 'מפקד', district: 'צפון', station: 'טבריה' },
  { id: '3', name: 'משה שוורץ', phone: '054-1122334', role: 'נהג', district: 'מרכז', station: 'תל אביב' },
  { id: '4', name: 'דוד המלך', phone: '053-5566778', role: 'כבאי', district: 'מרכז', station: 'פתח תקווה' },
  { id: '5', name: 'שלמה המלך', phone: '058-9900112', role: 'כבאי', district: 'דרום', station: 'באר שבע' },
  { id: '6', name: 'יצחק רבין', phone: '050-2345678', role: 'כבאי', district: 'דרום', station: 'אילת' },
  { id: '7', name: 'בנימין נתניהו', phone: '052-8765433', role: 'קצין', district: 'צפון', station: 'חיפה' },
  { id: '8', name: 'אהוד ברק', phone: '054-1122335', role: 'נהג', district: 'מרכז', station: 'תל אביב' },
  { id: '9', name: 'אריאל שרון', phone: '053-5566779', role: 'כבאי', district: 'דרום', station: 'באר שבע' },
  { id: '10', name: 'שמעון פרס', phone: '058-9900113', role: 'כבאי', district: 'צפון', station: 'טבריה' },
];

const districts = [...new Set(contacts.map(contact => contact.district))];
const stations = [...new Set(contacts.map(contact => contact.station))];

const ContactItem = ({ name, phone, role }: { name: string, phone: string, role: string }) => {
  const openWhatsApp = () => {
    let formattedPhone = phone.replace(/-/g, '');
    if (formattedPhone.startsWith('0')) {
      formattedPhone = `972${formattedPhone.substring(1)}`;
    }
    Linking.openURL(`https://wa.me/${formattedPhone}`);
  }

  return (
    <View style={styles.itemContainer}>
      <MaterialCommunityIcons name="account-circle-outline" size={40} color="white" />
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemName}>{name} - {role}</Text>
        <Text style={styles.itemPhone}>{phone}</Text>
      </View>
      <TouchableOpacity onPress={() => Linking.openURL(`tel:${phone}`)} style={{marginRight: 15}}>
        <MaterialCommunityIcons name="phone-outline" size={24} color="#ff6600" />
      </TouchableOpacity>
      <TouchableOpacity onPress={openWhatsApp}>
        <MaterialCommunityIcons name="whatsapp" size={24} color="#25D366" />
      </TouchableOpacity>
    </View>
  );
};

export default function Phonebook() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedStation, setSelectedStation] = useState(null);

  const filteredContacts = useMemo(() =>
    contacts.filter(contact =>
      (contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.role.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (!selectedDistrict || contact.district === selectedDistrict) &&
      (!selectedStation || contact.station === selectedStation)
    ), [searchQuery, selectedDistrict, selectedStation]);

  return (
    <View style={styles.container}>
        {/* <Image
            source={require('../../assets/images/fire-background.jpg')}
            style={StyleSheet.absoluteFillObject}
            resizeMode="cover"
        /> */}
        <SafeAreaView style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
        <View style={styles.searchContainer}>
            <MaterialCommunityIcons name="magnify" size={24} color="#ccc" style={styles.searchIcon} />
            <TextInput
            style={styles.searchInput}
            placeholder="חיפוש איש קשר..."
            placeholderTextColor="#ccc"
            value={searchQuery}
            onChangeText={setSearchQuery}
            />
        </View>
        <View style={styles.pickerContainer}>
          <View style={{flex: 1, marginRight: 5}}>
            <RNPickerSelect
              onValueChange={(value) => setSelectedDistrict(value)}
              items={districts.map(district => ({ label: district, value: district }))}
              style={pickerSelectStyles}
              placeholder={{ label: "בחר מחוז", value: null, color: '#ccc' }}
              useNativeAndroidPickerStyle={false}
            />
          </View>
          <View style={{flex: 1, marginLeft: 5}}>
            <RNPickerSelect
              onValueChange={(value) => setSelectedStation(value)}
              items={stations.map(station => ({ label: station, value: station }))}
              style={pickerSelectStyles}
              placeholder={{ label: "בחר תחנה", value: null, color: '#ccc' }}
              useNativeAndroidPickerStyle={false}
            />
          </View>
        </View>
        <FlatList
            data={filteredContacts}
            renderItem={({ item }) => <ContactItem name={item.name} phone={item.phone} role={item.role} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
        />
        </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(145, 145, 145, 0.77)'
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(145, 145, 145, 0.62)',
    paddingHorizontal: 15,
    margin: 15,
    borderRadius: 10,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 15,
    marginBottom: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 15,
    color: 'white',
  },
  listContainer: {
    paddingHorizontal: 15,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
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
    fontWeight: 'bold',
    color: 'white',
  },
  itemPhone: {
    fontSize: 16,
    color: '#ccc',
    marginTop: 5,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    color: 'white',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    color: 'white',
    paddingRight: 30,
  },
  placeholder: {
    color: '#ccc',
  },
  iconContainer: {
    top: 20,
    right: 15,
  },
});
