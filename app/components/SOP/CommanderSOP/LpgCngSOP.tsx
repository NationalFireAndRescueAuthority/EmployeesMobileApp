import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../../../providers/ThemeProvider';

const LpgCngSOP = ({ closeModal }: { closeModal: () => void }) => {
    const { isRTL } = useTheme();
    const styles = getStyles(isRTL);

    const situationHighlights = [
        { short: 'מ', full: 'מפעל, מוס"ח/אחר, מכלים, מקור הדליפה, מקום האירוע, מהות/שם האירוע, מרחק/כמותי' },
    ];

    const sections = [
        {
            title: "החלטות חשובות - מפקד אירוע",
            icon: "lightbulb-on-outline",
            items: [
                "משאבים: כוחות נוספים: מהתחנה/ חבירים",
                `כוחות חבירים: חברה/ מפעל/ חח"י/ מנהל הגז`,
                "דרך פעולה",
                `פינוי/הסתגרות - המלצה למ"י`,
            ]
        },
        {
            title: "בטיחות",
            icon: "shield-check-outline",
            items: [
                "הימנע מניצוץ",
                "שימוש בגלאים",
                `הרחקת אזרחים, לרבות בע"ח`,
                "סכנה נשימתית",
            `"מיגון אישי - עפ"י התמ"ר והתו"ל`,
            ]
        }
    ];

    return (
        <LinearGradient
            colors={['#cb2d3e', '#ef473a']}
            style={styles.container}
        >
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <MaterialCommunityIcons name="close" size={30} color="#fff" />
            </TouchableOpacity>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.header}>
                    <MaterialCommunityIcons name="gas-cylinder" size={50} color="#fff" />
                    <Text style={styles.mainTitle}>גפ"מ/גט"ד</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>דגשים לגיבוש תמונת מצב (4 מ"מים)</Text>
                    <View style={styles.grid}>
                        {situationHighlights.map((item, index) => (
                            <View key={index} style={styles.gridItemFull}>
                                <Text style={styles.gridShortText}>{item.short}</Text>
                                <Text style={styles.gridFullText}>{item.full}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                {sections.map((section, index) => (
                    <View key={index} style={styles.card}>
                        <View style={styles.cardHeader}>
                            <MaterialCommunityIcons name={section.icon as any} size={26} color="#cb2d3e" />
                            <Text style={styles.cardTitle}>{section.title}</Text>
                        </View>
                        {section.items.map((item, itemIndex) => (
                            <View key={itemIndex} style={styles.listItem}>
                                <MaterialCommunityIcons name="chevron-left" size={20} color="#cb2d3e" style={styles.bulletIcon} />
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
        justifyContent: 'center',
        marginBottom: 10,
    },
    gridItemFull: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
    },
    gridShortText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#cb2d3e',
    },
    gridFullText: {
        fontSize: 14,
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

export default LpgCngSOP;
