
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useMemo, useState } from 'react';
import { FlatList, StyleSheet, TextInput, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContactItem } from '../components/PhoneBook/ContactItem';
import { phoneBookContacts } from '../data/phonebook-contacts';



const districts = [...new Set(phoneBookContacts.map(contact => contact.district))];
const stations = [...new Set(phoneBookContacts.map(contact => contact.station))];



export default function PhoneBook() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedStation, setSelectedStation] = useState(null);

  const filteredContacts = useMemo(() =>
    phoneBookContacts.filter(contact =>
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
