
import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from "expo-router";
import { Text, View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          paddingTop: 20,
          backgroundColor: '#000',
          borderBottomColor: '#222'
        },
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        }
      }}
    >
      <Tabs.Screen
        name="homepage"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              alignItems: 'center',
              justifyContent: 'center',

              width: '100%'
            }}>
              <FontAwesome name="home" size={22} color={focused ? '#ff6600' : 'gray'} />
              <Text style={{ color: focused ? '#ff6600' : 'gray', fontSize: 9, marginTop: 2 }}>
                ראשי
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              alignItems: 'center',
              justifyContent: 'center',

              width: '100%'
            }}>
              <FontAwesome name="user" size={22} color={focused ? '#ff6600' : 'gray'} />
              <Text style={{ color: focused ? '#ff6600' : 'gray', fontSize: 9, marginTop: 2 }}>
                פרופיל
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="phonebook"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}>
              <FontAwesome name="phone" size={22} color={focused ? '#ff6600' : 'gray'} />
              <Text style={{ color: focused ? '#ff6600' : 'gray', fontSize: 9, marginTop: 2 }}>
                ספר טלפונים
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="forms"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              alignItems: 'center',
              justifyContent: 'center',

              width: '100%'
            }}>
              <FontAwesome name="wpforms" size={22} color={focused ? '#ff6600' : 'gray'} />
              <Text style={{ color: focused ? '#ff6600' : 'gray', fontSize: 9, marginTop: 2 }}>
                טפסים
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
