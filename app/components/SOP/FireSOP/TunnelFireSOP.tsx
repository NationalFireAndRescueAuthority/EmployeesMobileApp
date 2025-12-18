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

const TunnelFireSOP = ({ closeModal }: { closeModal: () => void }) => {
    const styles = getStyles();

    const sections: Section[] = [
        {
            title: "דגשים לגיבוש תמונת מצב",
            items: [
                { text: "רכב/רכבת", icon: "train-car" },
                { text: "כיוון עשן", icon: "weather-windy" },
                { text: "בטיחות", icon: "shield-check-outline" },
                { text: "כניסה למנהרה", icon: "arrow-right-bold-box-outline" },
                { text: "תאום-ארגוני", icon: "account-group-outline" },
            ]
        },
        {
            title: "עיקרי הערכת מצב",
            items: [
                "סוג וכמות הקרונות/רכבים",
                "הערכת כמות הנוסעים/לכודים",
                "מקום האירוע במנהרה",
                "הערכת כמות הנפגעים",
                "זמינות מתח גבוה",
                "שימוש במנהרה נקייה",
                "צבירת כוחות וממצעים",
                "כיוון פינוי עשן ואוכלוסייה",
            ]
        },
        {
            title: "נושאים עיקריים לקבלת החלטות",
            items: [
                "החלטה על מנהרה עבודה ובחירת טקטיקה",
                "קביעת פורטל עבודה (מנהרה מגשרת)",
                "ארגון זירת אירוע ואמצעים",
                "מודל שליטה בשטח",
                "תוכנית פינוי נוסעים מהמנהרה",
            ]
        },
        {
            title: "בטיחות ונושאים נוספים",
            items: [
                "קיום אל- לחץ במנהרה נקייה",
                "עבודה עם ציוד ייעודי",
                "תיאום הכניסה למנהרה נקייה (עצירת תנועת הרכבות)",
                "עבודה בצוותים של 3 לוחמים",
                "קו חיים",
                "הגדרת צוות ארמדגון",
                "ניהול מעקב בכניסה לוחמים וצריכת אוויר",
            ]
        }
    ];

    return (
        <LinearGradient
            colors={['#4c5c68', '#192537']}
            style={styles.container}
        >
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <MaterialCommunityIcons name="close" size={30} color="#fff" />
            </TouchableOpacity>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.header}>
                    <MaterialCommunityIcons name="train" size={50} color="#fff" />
                    <Text style={styles.mainTitle}>שריפה במנהרות</Text>
                </View>

                {sections.map((section, index) => (
                    <View key={index} style={styles.card}>
                        <Text style={styles.cardTitle}>{section.title}</Text>
                        {section.items.map((item, itemIndex) => (
                            typeof item === 'string' ? (
                                <Text key={itemIndex} style={styles.itemText}>• {item}</Text>
                            ) : (
                                <View key={itemIndex} style={styles.iconItem}>
                                    <MaterialCommunityIcons name={item.icon} size={24} color="#4c5c68" />
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

export default TunnelFireSOP;
