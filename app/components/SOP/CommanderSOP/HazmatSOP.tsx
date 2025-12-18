import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../../../../providers/ThemeProvider';

const HazmatSOP = ({ closeModal }: { closeModal: () => void }) => {
    const { isRTL } = useTheme();
    const styles = getStyles(isRTL);

    const situationHighlights = [
        { short: 'ח', full: 'חומר, סוג, מצב צבירה' },
        { short: 'ט', full: 'סכנה, אנשים, אקולוגי' },
        { short: 'מ', full: 'מיקום, שינוע, חלל סגור' },
    ];

    const sections = [
        {
            title: "עיקרי הערכת מצב",
            icon: "file-chart-outline",
            items: [
                "הצלבת מידע על החומר המעורב (שיתוף אנשי המפעל)",
                "מטאורולוגיה והערכת סיכונים ראשונית",
                "הנחיות לאוכלוסיה: פינוי, הסתגרות",
                "ניתוח הזירה: מפעל/ שטח פתוח",
            ]
        },
        {
            title: "נושאים עיקריים לקבלת החלטות",
            icon: "gavel",
            items: [
                "רמת מיגון נדרשת",
            `"משימות ע"פ רמת הכשרה וציוד ע"פ תו"ל`,
            `אלטרנטיבה לחדירת כוחות`,
                "מגבלות קשר",
            ]
        },
        {
            title: "בטיחות ונושאים נוספים",
            icon: "shield-check-outline",
            items: [
                "איתור נפיצה- שימוש במכשירים מונעי פיצוץ",
                "ניהול אויר",
                "צוות גיבוי",
                "מינוי אחראי בטיחות",
                "ארגון זירת אירוע",
                "תכנון כניסה ויציאת הצוותים",
            ]
        }
    ];

    return (
        <LinearGradient
            colors={['#4a0e4e', '#8a2be2']}
            style={styles.container}
        >
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <MaterialCommunityIcons name="close" size={30} color="#fff" />
            </TouchableOpacity>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.header}>
                    <MaterialCommunityIcons name="chemical-weapon" size={50} color="#fff" />
                    <Text style={styles.mainTitle}>חומ"ס</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>דגשים לגיבוש תמונת מצב</Text>
                    <View style={styles.grid}>
                        {situationHighlights.map((item, index) => (
                            <View key={index} style={styles.gridItem}>
                                <Text style={styles.gridShortText}>{item.short}</Text>
                                <Text style={styles.gridFullText}>{item.full}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                {sections.map((section, index) => (
                    <View key={index} style={styles.card}>
                        <View style={styles.cardHeader}>
                            <MaterialCommunityIcons name={section.icon as any} size={26} color="#8a2be2" />
                            <Text style={styles.cardTitle}>{section.title}</Text>
                        </View>
                        {section.items.map((item, itemIndex) => (
                            <View key={itemIndex} style={styles.listItem}>
                                <MaterialCommunityIcons name="chevron-left" size={20} color="#8a2be2" style={styles.bulletIcon} />
                                <Text style={styles.listItemText}>{item}</Text>
                            </View>
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
    cardHeader: {
        flexDirection: isRTL ? 'row-reverse' : 'row',
        alignItems: 'center',
        marginBottom: 15,
        borderBottomWidth: 1,
        borderColor: '#eee',
        paddingBottom: 10,
    },
    cardTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        textAlign: isRTL ? 'right' : 'left',
        writingDirection: isRTL ? 'rtl' : 'ltr',
        marginLeft: isRTL ? 0 : 10,
        marginRight: isRTL ? 10 : 0,
    },
    grid: {
        flexDirection: isRTL ? 'row-reverse' : 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 10,
    },
    gridItem: {
        width: '30%',
        alignItems: 'center',
        margin: 5,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
    },
    gridShortText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#8a2be2',
    },
    gridFullText: {
        fontSize: 12,
        color: '#333',
        textAlign: 'center',
        marginTop: 5,
    },
    listItem: {
        flexDirection: isRTL ? 'row-reverse' : 'row',
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    bulletIcon: {
        marginTop: 3,
    },
    listItemText: {
        fontSize: 16,
        color: '#34495e',
        flex: 1,
        textAlign: isRTL ? 'right' : 'left',
        writingDirection: isRTL ? 'rtl' : 'ltr',
        marginLeft: isRTL ? 0 : 5,
        marginRight: isRTL ? 5 : 0,
    },
});

export default HazmatSOP;
