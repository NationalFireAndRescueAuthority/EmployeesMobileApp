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

const BuildingFireSOP = ({ closeModal }: { closeModal: () => void }) => {
    const styles = getStyles();

    const sections: Section[] = [
        {
            title: "דגשים לגיבוש תמונת מצב",
            items: [
                { text: "דיירים", icon: "account-group" },
                { text: "מיגון", icon: "shield-check" },
                { text: "כיוון הרוח", icon: "weather-windy" },
                { text: "דרכי גישה", icon: "road-variant" },
                { text: "מקורות מים", icon: "water" },
                { text: "סוג המבנה", icon: "office-building" },
                { text: "מיקום מוקד הבעירה", icon: "fire" },
                { text: "קומות", icon: "format-list-numbered" },
                { text: "תשתיות", icon: "power-plug" },
            ]
        },
        {
            title: "עיקרי הערכת מצב",
            items: [
                "מה בוער?",
                "האם ישנם לכודים?",
                "מהי סכנת התפשטות האש?",
                "ציוד נדרש",
                "כוחות נדרשים",
                "האם נדרש סיוע? (משטרה, מד\"א, עירייה)",
            ]
        },
        {
            title: "נושאים עיקריים לקבלת החלטות",
            items: [
                "הצלת חיים",
                "כיבוי",
                "צמצום נזק",
                "קביעת נקודת ריכוז נפגעים",
                "סריקת קומות",
                "ניתוק תשתיות (חשמל, גז)",
            ]
        },
        {
            title: "בטיחות ונושאים נוספים",
            items: [
                "מיגון לוחמי האש",
                "עבודה בצוותים",
                "שימוש במצלמה תרמית",
                "שמירה על לחץ מים תקין",
                "דיווחים שוטפים למפקד",
            ]
        }
    ];

    return (
        <LinearGradient
            colors={['#B71C1C', '#D32F2F']}
            style={styles.container}
        >
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <MaterialCommunityIcons name="close" size={30} color="#fff" />
            </TouchableOpacity>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.header}>
                    <MaterialCommunityIcons name="home-city" size={50} color="#fff" />
                    <Text style={styles.mainTitle}>שריפה במבנה</Text>
                </View>

                {sections.map((section, index) => (
                    <View key={index} style={styles.card}>
                        <Text style={styles.cardTitle}>{section.title}</Text>
                        {section.items.map((item, itemIndex) => (
                            typeof item === 'string' ? (
                                <Text key={itemIndex} style={styles.itemText}>• {item}</Text>
                            ) : (
                                <View key={itemIndex} style={styles.iconItem}>
                                    <MaterialCommunityIcons name={item.icon} size={24} color="#B71C1C" />
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

export default BuildingFireSOP;
