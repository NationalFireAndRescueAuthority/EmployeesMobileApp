import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type IconItem = {
    text: string;
    icon: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
};

type Section = {
    title: string;
    items: (string | IconItem)[];
};

const AircraftActivationSOP = ({ closeModal }: { closeModal: () => void }) => {
    const styles = getStyles();

    const sections: Section[] = [
        {
            title: "הפעלת מטוסים - שלב א'",
            items: [
                "דיווח ראשוני מתחנה למשל\"ט מחוזי על אירוע שרפה.",
                "דיווח על פוטנציאל להתפשטות מהירה, סיכון חיי אדם או רכוש.",
                "הכרזת \"אש חמה\" על ידי מפקד האירוע."
            ]
        },
        {
            title: "הפעלת מטוסים - שלב ב'",
            items: [
                "מפקד האירוע מעביר למשל\"ט נ.צ מדויק, תיאור זירה, דרכי הגעה וגורם המאשר הטלת חומרים.",
                "משל\"ט מחוזי מעביר דיווח למשל\"ט ארצי (נציבות).",
                "משל\"ט ארצי מעביר בקשה לחברת \"אלביט\" להזנקת המטוסים."
            ]
        },
        {
            title: "בטיחות ועבודה עם מטוסים",
            items: [
                { text: "שמירת מרחק בטחון ממקום ההטלה", icon: "walk" },
                { text: "הימנעות ממגע ישיר עם החומר המעכב", icon: "hand-left-outline" },
                { text: "תקשורת רציפה עם הטייסים", icon: "radio-tower" },
                { text: "סימון ברור של אזור ההטלה", icon: "target" },
                { text: "פינוי כל אדם שאינו חיוני מהאזור", icon: "account-arrow-right-outline" },
            ]
        }
    ];

    return (
        <LinearGradient
            colors={['#4A90E2', '#50C9C3']}
            style={styles.container}
        >
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <MaterialCommunityIcons name="close" size={30} color="#fff" />
            </TouchableOpacity>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.header}>
                    <MaterialCommunityIcons name="airplane" size={50} color="#fff" />
                    <Text style={styles.mainTitle}>הפעלת מטוסים</Text>
                </View>

                {sections.map((section, index) => (
                    <View key={index} style={styles.card}>
                        <Text style={styles.cardTitle}>{section.title}</Text>
                        {section.items.map((item, itemIndex) => (
                            typeof item === 'string' ? (
                                <Text key={itemIndex} style={styles.itemText}>• {item}</Text>
                            ) : (
                                <View key={itemIndex} style={styles.iconItem}>
                                    <MaterialCommunityIcons name={item.icon} size={24} color="#4A90E2" />
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

export default AircraftActivationSOP;
