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

const OpenAreaFireSOP = ({ closeModal }: { closeModal: () => void }) => {
    const styles = getStyles();

    const sections: Section[] = [
        {
            title: "דגשים לגיבוש תמונת מצב",
            items: [
                { text: "כיוון התפשטות", icon: "arrow-expand-all" },
                { text: "עוצמת וכיוון הרוח", icon: "weather-windy" },
                { text: "טופוגרפיה", icon: "terrain" },
                { text: "צמחייה", icon: "pine-tree" },
                { text: "סיכון למבנים או תשתיות", icon: "home-alert" },
                { text: "דרכי גישה", icon: "road-variant" },
                { text: "מקורות מים", icon: "water-pump" },
            ]
        },
        {
            title: "עיקרי הערכת מצב",
            items: [
                "הערכת קצב התפשטות",
                "זיהוי נקודות תורפה בקו האש",
                "הערכת צורך בחיפוי אווירי",
                "הערכת צורך בציוד מכני הנדסי (צמ\"ה)",
                "תכנון קווי הגנה",
            ]
        },
        {
            title: "נושאים עיקריים לקבלת החלטות",
            items: [
                "בחירת טקטיקת כיבוי (ישירה/עקיפה)",
                "הצבת כוחות וחלוקת גזרות",
                "הפעלת סיוע אווירי וצמ\"ה",
                "פינוי אוכלוסייה במידת הצורך",
            ]
        },
        {
            title: "בטיחות ונושאים נוספים",
            items: [
                "הקפדה על \"שחור משחור\"",
                "עבודה עם כיוון הרוח",
                "נתיבי מילוט ונקודות בטוחות",
                "מינוי קצין בטיחות",
                "התרעננות ושתייה מרובה",
            ]
        }
    ];

    return (
        <LinearGradient
            colors={['#2E7D32', '#4CAF50']}
            style={styles.container}
        >
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <MaterialCommunityIcons name="close" size={30} color="#fff" />
            </TouchableOpacity>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.header}>
                    <MaterialCommunityIcons name="pine-tree-fire" size={50} color="#fff" />
                    <Text style={styles.mainTitle}>שריפה בשטח פתוח</Text>
                </View>

                {sections.map((section, index) => (
                    <View key={index} style={styles.card}>
                        <Text style={styles.cardTitle}>{section.title}</Text>
                        {section.items.map((item, itemIndex) => (
                            typeof item === 'string' ? (
                                <Text key={itemIndex} style={styles.itemText}>• {item}</Text>
                            ) : (
                                <View key={itemIndex} style={styles.iconItem}>
                                    <MaterialCommunityIcons name={item.icon} size={24} color="#2E7D32" />
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

export default OpenAreaFireSOP;
