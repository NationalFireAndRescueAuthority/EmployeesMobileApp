
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../../../../providers/ThemeProvider';

const ElevatorRescue = ({ closeModal }: { closeModal: () => void }) => {
    const { isRTL } = useTheme();
    const styles = getStyles(isRTL);

    const situationHighlights = [
        { icon: 'map-marker-outline', short: 'מ', full: 'מיקום' },
        { icon: 'elevator', short: 'ס', full: 'סוג מעלית' },
        { icon: 'office-building-outline', short: 'ק', full: 'קומה' },
        { icon: 'account-hard-hat', short: 'ט', full: 'טכנאי' },
        { icon: 'account-group-outline', short: 'נ', full: 'נפגעים' },
    ];

    return (
        <LinearGradient
            colors={['#3a7bd5', '#3a6073']}
            style={styles.container}
        >
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <MaterialCommunityIcons name="close" size={30} color="#fff" />
            </TouchableOpacity>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.header}>
                    <MaterialCommunityIcons name="elevator-passenger" size={50} color="#fff" />
                    <Text style={styles.mainTitle}>חילוץ ממעלית</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>דגשים לגיבוש תמונת מצב</Text>
                    <View style={styles.grid}>
                        {situationHighlights.map((item, index) => (
                            <View key={index} style={styles.gridItem}>
                                <MaterialCommunityIcons name={item.icon as any} size={30} color="#fff" />
                                <Text style={styles.gridShortText}>{item.short}</Text>
                                <Text style={styles.gridFullText}>{item.full}</Text>
                            </View>
                        ))}
                    </View>
                     <Text style={styles.smallText}>(כבל/MRL, בוכנה)</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>עיקרי הערכת מצב</Text>
                    <View style={styles.listItem}>
                        <MaterialCommunityIcons name="clipboard-text-play-outline" size={24} color="#3a7bd5" />
                        <Text style={styles.listItemText}>הפעלת תוכנית וכניסה לעבודה (לכודים, סוג המעלית, קומה)</Text>
                    </View>
                    <View style={styles.listItem}>
                        <MaterialCommunityIcons name="radio-tower" size={24} color="#3a7bd5" />
                        <Text style={styles.listItemText}>דיווח לאחור (אש, עשן, קומה, מבנה, לכודים וסביבה)</Text>
                    </View>
                    <View style={styles.listItem}>
                        <MaterialCommunityIcons name="sitemap" size={24} color="#3a7bd5" />
                        <Text style={styles.listItemText}>בחירת דפ"ן חלוקת כוחות ומשימות</Text>
                    </View>
                </View>
                
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>נושאים עיקריים לקבלת החלטות</Text>
                    <View style={styles.listItem}>
                        <MaterialCommunityIcons name="magnify" size={24} color="#3a7bd5" />
                        <Text style={styles.listItemText}>זיהוי וניתוח מקור הפעולה (קומה, סוג מעלית ומצב הלכודים)</Text>
                    </View>
                    <View style={styles.listItem}>
                        <MaterialCommunityIcons name="file-chart-outline" size={24} color="#3a7bd5" />
                        <Text style={styles.listItemText}>יצירת תמנ"צ להכלת תוכנית הפעולה (טכנאי מעליות/עבודת הצוות)</Text>
                    </View>
                    <View style={styles.listItem}>
                        <MaterialCommunityIcons name="set-square" size={24} color="#3a7bd5" />
                        <Text style={styles.listItemText}>ארגון מרחב הפעולה</Text>
                    </View>
                    <View style={styles.listItem}>
                        <MaterialCommunityIcons name="gamepad-variant-outline" size={24} color="#3a7bd5" />
                        <Text style={styles.listItemText}>יכולת שליטה וטקטיקת הפעולה</Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>בטיחות ונושאים נוספים</Text>
                    <View style={styles.listItem}>
                        <MaterialCommunityIcons name="shield-check-outline" size={24} color="#3a7bd5" />
                        <Text style={styles.listItemText}>מיגון</Text>
                    </View>
                     <View style={styles.listItem}>
                        <MaterialCommunityIcons name="flash-outline" size={24} color="#3a7bd5" />
                        <Text style={styles.listItemText}>מקורות אנרגיה פעילים</Text>
                    </View>
                     <View style={styles.listItem}>
                        <MaterialCommunityIcons name="sync" size={24} color="#3a7bd5" />
                        <Text style={styles.listItemText}>עבודה בתיאום ושליטה בכוח</Text>
                    </View>
                </View>

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
        paddingTop: 60,
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
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 20,
        padding: 20,
        marginBottom: 20,
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1c313a',
        marginBottom: 15,
        textAlign: isRTL ? 'right' : 'left',
        writingDirection: isRTL ? 'rtl' : 'ltr',
    },
    grid: {
        flexDirection: isRTL ? 'row-reverse' : 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    gridItem: {
        width: '30%',
        alignItems: 'center',
        marginBottom: 15,
        backgroundColor: '#3a6073',
        padding: 10,
        borderRadius: 10
    },
    gridShortText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    gridFullText: {
        fontSize: 14,
        color: '#fff',
        textAlign: 'center'
    },
    smallText: {
      fontSize: 12,
      color: '#1c313a',
      textAlign: isRTL ? 'right' : 'left',
      writingDirection: isRTL ? 'rtl' : 'ltr',
      marginTop: -10,
      marginBottom: 10
    },
    listItem: {
        flexDirection: isRTL ? 'row-reverse' : 'row',
        alignItems: 'center',
        backgroundColor: '#f0f4f7',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
    },
    listItemText: {
        fontSize: 16,
        color: '#1c313a',
        flex: 1,
        textAlign: isRTL ? 'right' : 'left',
        writingDirection: isRTL ? 'rtl' : 'ltr',
        marginLeft: isRTL ? 0 : 15,
        marginRight: isRTL ? 15 : 0,
    },
});

export default ElevatorRescue;
