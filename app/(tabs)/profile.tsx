import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const user = {
  govId: '123456789',
  fullName: 'ישראל ישראלי',
  district: 'מחוז דן',
  station: 'תחנת תל אביב',
  role: 'לוחם אש',
  seniority: '5 שנים',
  qualifications: [
    { id: '1', name: 'מפקד צוות', icon: 'star-circle' },
    { id: '2', name: 'נהג רכב כיבוי', icon: 'steering' },
    { id: '3', name: 'חומרים מסוכנים', icon: 'biohazard' },
    { id: '4', name: 'חילוץ מגובה', icon: 'image-filter-hdr' },
  ],
};

const ProfileItem = ({ icon, label, value }: { icon: React.ComponentProps<typeof MaterialCommunityIcons>['name'], label: string, value: string }) => (
  <View style={styles.itemContainer}>
    <MaterialCommunityIcons name={icon} size={28} color="#ff6600" />
    <View style={styles.itemTextContainer}>
      <Text style={styles.itemLabel}>{label}</Text>
      <Text style={styles.itemValue}>{value}</Text>
    </View>
  </View>
);

const QualificationItem = ({ icon, name }: { icon: React.ComponentProps<typeof MaterialCommunityIcons>['name'], name: string }) => (
  <View style={styles.qualificationItem}>
    <MaterialCommunityIcons name={icon} size={28} color="#ff6600" />
    <Text style={styles.qualificationName}>{name}</Text>
  </View>
);

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/profile-background.jpg')}
        style={StyleSheet.absoluteFillObject}
        contentFit="cover"
      />
      <SafeAreaView style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
          <View style={styles.header}>
            <MaterialCommunityIcons name="account-circle-outline" size={100} color="white" />
            <Text style={styles.fullName}>{user.fullName}</Text>
            <Text style={styles.role}>{user.role}</Text>
          </View>

          <View style={styles.infoCard}>
            <ProfileItem icon="card-account-details-outline" label="תעודת זהות" value={user.govId} />
            <ProfileItem icon="map-marker-outline" label="מחוז" value={user.district} />
            <ProfileItem icon="fire-station" label="תחנה" value={user.station} />
            <ProfileItem icon="briefcase-outline" label="ותק" value={user.seniority} />
          </View>
          
          <Text style={styles.qualificationsSectionTitle}>הכשרות</Text>

          <View style={styles.qualificationsCard}>
            {user.qualifications.map((item) => (
              <QualificationItem key={item.id} icon={item.icon as React.ComponentProps<typeof MaterialCommunityIcons>['name']} name={item.name} />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: 'rgba(0,0,0,0.6)',
    marginHorizontal: 20,
    borderRadius: 15,
  },
  fullName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white',
  },
  role: {
    fontSize: 20,
    color: '#ccc',
    marginTop: 5,
  },
  infoCard: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 15,
    padding: 20,
    gap: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemTextContainer: {
    marginLeft: 15,
  },
  itemLabel: {
    fontSize: 16,
    color: '#ccc',
  },
  itemValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  qualificationsSectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 15,
    color: 'white',
    paddingHorizontal: 25,
    textAlign: 'left'
  },
  qualificationsCard: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    marginHorizontal: 20,
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  qualificationItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%',
    marginBottom: 15,
    paddingVertical: 10,
  },
  qualificationName: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
});