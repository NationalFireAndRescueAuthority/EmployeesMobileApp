import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../../../../providers/ThemeProvider';

const TrainRescue = ({ closeModal }: { closeModal: () => void }) => {
    const { isRTL } = useTheme();
    const styles = getStyles(isRTL);

    const situationHighlights = [
        { short: 'מ', full: 'מה מוביל' },
        { short: 'ג', full: 'גישה' },
        { short: 'א', full: 'איפה' },
        { short: 'ל', full: 'לכודים' },
    ];

    const sections = [
        {
            title: "עיקרי הערכת מצב",
            icon: "file-chart-outline",
            items: [
                "סוג וכמות הקרונות",
                "ציר/י גישה",
                "הערכת כמות הנוסעים",
                "צבירת כוחות ואמצעים",
                "מיקום האירוע",
                "שטח היערכות",
                `האם מוביל מטען/ חומ"ס`,
                "הערכת כמות לכודים",
                "ניתוק מקור אנרגיה",
            ]
        },
        {
            title: "נושאים עיקריים לקבלת החלטות",
            icon: "gavel",
            items: [
                `האם הסד"כ מספיק לטיפול`,
                "קביעת מאמץ עיקרי ומשני",
                "זמן ומרחב כתלות במיקום",
                "מינוי מפקדים לגזרות עבודה",
                "הגדרת שטח ההערכות"
            ]
        },
        {
            title: "בטיחות ונושאים נוספים",
            icon: "shield-check-outline",
            items: [
                `הפעלת ציוד צמ"ה ומנופים`,
                "עבודה עם ציוד ייעודי",
                "עצירת תנועת רכבות",
                `חלוקת מדר"סים`
            ]
        }
    ];

    return (
        <LinearGradient
            colors={['#6D6027', '#D3CBB8']}
            style={styles.container}
        >
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <MaterialCommunityIcons name="close" size={30} color="#fff" />
            </TouchableOpacity>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.header}>
                    <MaterialCommunityIcons name="train" size={50} color="#fff" />
                    <Text style={styles.mainTitle}>חילוץ מרכבת</Text>
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
                            <MaterialCommunityIcons name={section.icon as any} size={26} color="#6D6027" />
                            <Text style={styles.cardTitle}>{section.title}</Text>
                        </View>
                        <View style={styles.listContainer}>
                            {section.items.map((item, itemIndex) => (
                                <View key={itemIndex} style={styles.listItem}>
                                    <MaterialCommunityIcons name="chevron-left" size={20} color="#6D6027" style={styles.bulletIcon} />
                                    <Text style={styles.listItemText}>{item}</Text>
                                </View>
                            ))}
                        </View>
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
        width: '22%',
        alignItems: 'center',
        margin: 5,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
    },
    gridShortText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#6D6027',
    },
    gridFullText: {
        fontSize: 12,
        color: '#333',
        textAlign: 'center',
        marginTop: 5,
    },
    listContainer: {
        flexDirection: isRTL ? 'row-reverse' : 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    listItem: {
        flexDirection: isRTL ? 'row-reverse' : 'row',
        alignItems: 'flex-start',
        width: '48%',
        marginBottom: 10,
    },
    bulletIcon: {
        marginTop: 3,
    },
    listItemText: {
        fontSize: 14,
        color: '#333',
        flex: 1,
        textAlign: isRTL ? 'right' : 'left',
        writingDirection: isRTL ? 'rtl' : 'ltr',
        marginLeft: isRTL ? 0 : 5,
        marginRight: isRTL ? 5 : 0,
    },
});

export default TrainRescue;
