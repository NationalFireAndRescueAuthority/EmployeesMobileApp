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

const TrafficAccidentRescueSOP = ({ closeModal }: { closeModal: () => void }) => {
    const { isRTL } = useTheme();
    const styles = getStyles(isRTL);

    const sections: Section[] = [
        {
            title: "דגשים לגיבוש תמונת מצב",
            items: [
                { text: "מספר כלי רכב מעורבים", icon: "car-multiple" },
                { text: "מספר פצועים וסוג פציעה", icon: "account-injury-outline" },
                { text: "סכנת התלקחות או חומ\"ס", icon: "fire-alert" },
                { text: "יציבות כלי הרכב", icon: "car-wrench" },
                { text: "דרכי גישה ופקקים", icon: "traffic-light" },
            ]
        },
        {
            title: "עיקרי הערכת מצב",
            items: [
                "מיקום הלכודים ברכב",
                "מנגנון הפגיעה",
                "צורך בכוחות רפואה ומשטרה",
                "אופי זירת התאונה (עירוני, בינעירוני)",
                "סיכונים סביבתיים (עמודי חשמל, עצים)",
            ]
        },
        {
            title: "נושאים עיקריים לקבלת החלטות",
            items: [
                "קביעת אזור בטוח (Hot Zone)",
                "ניתוק מקורות אנרגיה ברכבים",
                "טכניקת חילוץ (חיתוך, פישוק)",
                "סדר עדיפויות בחילוץ (עפ\"י מצב רפואי)",
                "הזעקת כוח אדם וציוד נוסף",
            ]
        },
        {
            title: "בטיחות ונושאים נוספים",
            items: [
                "לבישת ציוד מיגון אישי מלא",
                "אבטחת הזירה על ידי המשטרה",
                "זהירות מכריות אוויר שלא נפתחו",
                "תאורת הזירה בשעות החשכה",
                "בדיקת יציבות הרכב לפני תחילת עבודה",
            ]
        }
    ];

    return (
        <LinearGradient
            colors={['#F44336', '#D32F2F', '#B71C1C']}
            style={styles.container}
        >
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <MaterialCommunityIcons name="close" size={30} color="#fff" />
            </TouchableOpacity>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.header}>
                    <MaterialCommunityIcons name="car-crash" size={50} color="#fff" />
                    <Text style={styles.mainTitle}>חילוץ מתאונת דרכים</Text>
                </View>

                {sections.map((section, index) => (
                    <View key={index} style={styles.card}>
                        <Text style={styles.cardTitle}>{section.title}</Text>
                        {section.items.map((item, itemIndex) => (
                            typeof item === 'string' ? (
                                <Text key={itemIndex} style={styles.itemText}>• {item}</Text>
                            ) : (
                                <View key={itemIndex} style={styles.iconItem}>
                                    <MaterialCommunityIcons name={item.icon} size={24} color="#F44336" />
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

export default TrafficAccidentRescueSOP;
