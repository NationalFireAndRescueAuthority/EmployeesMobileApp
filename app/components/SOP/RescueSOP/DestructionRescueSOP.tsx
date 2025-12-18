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

const DestructionRescueSOP = ({ closeModal }: { closeModal: () => void }) => {
    const { isRTL } = useTheme();
    const styles = getStyles(isRTL);

    const sections: Section[] = [
        {
            title: "דגשים לגיבוש תמונת מצב",
            items: [
                { text: "סוג המבנה וגודלו", icon: "office-building-outline" },
                { text: "מספר קומות", icon: "format-list-numbered" },
                { text: "כמות דיירים", icon: "account-group-outline" },
                { text: "מיקום חומ\"ס", icon: "flask-outline" },
                { text: "דרכי גישה", icon: "road-variant" },
                { text: "סכנות נוספות", icon: "alert-outline" },
            ]
        },
        {
            title: "עיקרי הערכת מצב",
            items: [
                "מהירות הערכה",
                "איסוף מידע ראשוני",
                "הערכת יציבות המבנה",
                "איתור מוקדי סיכון",
                "היקף הרס",
                "אמדן לכודים"
            ]
        },
        {
            title: "נושאים עיקריים לקבלת החלטות",
            items: [
                "הכרזה על מוקד סכנה",
                "ארגון הזירה",
                "מודל שליטה",
                "שיטת חילוץ",
                "הזעקת כוחות וציוד ייעודי",
                "הקמת נקודות ריכוז ציוד וחפ\"ק"
            ]
        },
        {
            title: "בטיחות ונושאים נוספים",
            items: [
                "ניתוק תשתיות",
                "ניטור אוויר",
                "ייצוב המבנה",
                "עבודה בקבוצות קטנות",
                "קצין בטיחות",
                "ציוד מיגון אישי מלא"
            ]
        }
    ];

    return (
        <LinearGradient
            colors={['#757F9A', '#D7DDE8']}
            style={styles.container}
        >
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <MaterialCommunityIcons name="close" size={30} color="#fff" />
            </TouchableOpacity>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.header}>
                    <MaterialCommunityIcons name="home-remove" size={50} color="#fff" />
                    <Text style={styles.mainTitle}>חילוץ מהרס</Text>
                </View>

                {sections.map((section, index) => (
                    <View key={index} style={styles.card}>
                        <Text style={styles.cardTitle}>{section.title}</Text>
                        {section.items.map((item, itemIndex) => (
                            typeof item === 'string' ? (
                                <Text key={itemIndex} style={styles.itemText}>• {item}</Text>
                            ) : (
                                <View key={itemIndex} style={styles.iconItem}>
                                    <MaterialCommunityIcons name={item.icon} size={24} color="#757F9A" />
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

const getStyles = (isRTL: boolean) => StyleSheet.create({
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
        writingDirection: isRTL ? 'rtl' : 'ltr',
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
        textAlign: isRTL ? 'right' : 'left',
        marginBottom: 10,
        writingDirection: isRTL ? 'rtl' : 'ltr',
    },
    itemText: {
        fontSize: 16,
        color: '#34495e',
        textAlign: isRTL ? 'right' : 'left',
        writingDirection: isRTL ? 'rtl' : 'ltr',
        marginBottom: 5,
    },
    iconItem: {
        flexDirection: isRTL ? 'row-reverse' : 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    iconItemText: {
        fontSize: 16,
        color: '#34495e',
        textAlign: isRTL ? 'right' : 'left',
        writingDirection: isRTL ? 'rtl' : 'ltr',
        marginRight: isRTL ? 10 : 0,
        marginLeft: isRTL ? 0 : 10,
    },
});

export default DestructionRescueSOP;
