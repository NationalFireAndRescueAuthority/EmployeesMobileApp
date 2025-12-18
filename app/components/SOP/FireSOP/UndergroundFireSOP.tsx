import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../../../../providers/ThemeProvider';

type IconItem = {
    text: string;
    icon: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
};

type Section = {
    title: string;
    items: (string | IconItem)[];
};

const UndergroundFireSOP = ({ closeModal }: { closeModal: () => void }) => {
    const styles = getStyles();

    const sections: Section[] = [
        {
            title: "דגשים לגיבוש תמונת מצב",
            items: [
                { text: "סוג התווך (חניון, מרתף, וכו')", icon: "bridge" },
                { text: "מיקום מדוייק של השריפה", icon: "map-marker-radius" },
                { text: "דרכי גישה", icon: "road-variant" },
                { text: "לכודים", icon: "account-search" },
                { text: "בטיחות", icon: "shield-check" },
            ]
        },
        {
            title: "עיקרי הערכת מצב",
            items: [
                "מאפייני המקום (גודל, קומות)",
                "מערכות שליטה בעשן (אם קיימות)",
                "כיוון התפשטות האש והעשן",
                "צורך בכוחות וציוד מיוחד",
            ]
        },
        {
            title: "נושאים עיקריים לקבלת החלטות",
            items: [
                "שיטת אוורור (טבעי/מכני)",
                "טקטיקת התקפה (מים/קצף)",
                "סדר עדיפות לסריקה וחילוץ",
                "נקודות ריכוז כוחות ואמצעים",
            ]
        },
        {
            title: "בטיחות ונושאים נוספים",
            items: [
                "עבודה בצוותים של 3 לוחמים לפחות",
                "שימוש בקווי חיים",
                "ניטור רציף של אטמוספירה (גלאי גזים)",
                "הערכות לחילוץ לוחם אש שנפגע (צוות ארמדגון)",
            ]
        }
    ];

    return (
        <LinearGradient
            colors={['#6E6E6E', '#424242']}
            style={styles.container}
        >
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <MaterialCommunityIcons name="close" size={30} color="#fff" />
            </TouchableOpacity>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.header}>
                    <MaterialCommunityIcons name="subway-variant" size={50} color="#fff" />
                    <Text style={styles.mainTitle}>שריפה בתווך תת-קרקעי</Text>
                </View>

                {sections.map((section, index) => (
                    <View key={index} style={styles.card}>
                        <Text style={styles.cardTitle}>{section.title}</Text>
                        {section.items.map((item, itemIndex) => (
                            typeof item === 'string' ? (
                                <Text key={itemIndex} style={styles.itemText}>• {item}</Text>
                            ) : (
                                <View key={itemIndex} style={styles.iconItem}>
                                    <MaterialCommunityIcons name={item.icon} size={24} color="#6E6E6E" />
                                    <Text style={styles.iconItemText}>{item.text}</Text>
                                </View>
                            )
                        ))}
                    </View>
                ))}
            </ScrollView>
        </LinearGradient>
    );
};

const getStyles = () => StyleSheet.create({
    container: {
        flex: 1,
    },
    closeButton: {
        position: 'absolute',
        top: 40,
        right: 20,
        zIndex: 10,
    },
    scrollViewContent: {
        paddingTop: 80,
        paddingBottom: 40,
        paddingHorizontal: 15,
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    mainTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 10,
        textAlign: 'center',
        writingDirection: 'rtl',
    },
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderRadius: 20,
        padding: 20,
        marginBottom: 20,
    },
    cardTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'right',
        marginBottom: 10,
        writingDirection: 'rtl',
    },
    itemText: {
        fontSize: 16,
        color: '#34495e',
        textAlign: 'right',
        writingDirection: 'rtl',
        marginBottom: 5,
    },
    iconItem: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        marginBottom: 10,
    },
    iconItemText: {
        fontSize: 16,
        color: '#34495e',
        textAlign: 'right',
        writingDirection: 'rtl',
        marginRight: 10,
    },
});

export default UndergroundFireSOP;
