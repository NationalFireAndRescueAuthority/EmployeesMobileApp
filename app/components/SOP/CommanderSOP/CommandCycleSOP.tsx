import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../../../../providers/ThemeProvider';

const CommandCycleSOP = ({ closeModal }: { closeModal: () => void }) => {
    const { isRTL } = useTheme();
    const styles = getStyles(isRTL);

    const sections = [
        {
            title: `מעגל הפו"ש`,
            content: `מעגל הפו"ש הינו תהליך מעגלי של ייצור תוצרי חשיבה והחלטה, אשר כל אחד מהם מתפתח מקודמו ומהווה את המקור או הבסיס לזה המתפתח אחריו.`
        },
        {
            title: "הפעילות המהדורתית הרציפה של הפיקוד והשליטה",
            placeholder: true
        },
        {
            title: "דגשים לגיבוש תמונת מצב",
            items: [
                { number: 1, text: "המטרה" },
                { number: 2, text: "המשימה" },
                { number: 3, text: "אילוצי הביצוע" },
                { number: 4, text: "הזירה" },
                { number: 5, text: "נתוני הכוחות" },
                { number: 6, text: "זמן ומרחב" },
                { number: 7, text: "גורמים אחרים" },
            ]
        }
    ];

    return (
        <LinearGradient
            colors={['#004e92', '#000428']}
            style={styles.container}
        >
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <MaterialCommunityIcons name="close" size={30} color="#fff" />
            </TouchableOpacity>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.header}>
                    <MaterialCommunityIcons name="chart-donut" size={50} color="#fff" />
                    <Text style={styles.mainTitle}>מעגל הפו"ש</Text>
                </View>

                {sections.map((section, index) => (
                    <View key={index} style={styles.card}>
                        <Text style={styles.cardTitle}>{section.title}</Text>
                        {section.content && <Text style={styles.cardContent}>{section.content}</Text>}
                        {section.placeholder && (
                            <View style={styles.cyclePlaceholder}>
                                <View style={styles.cycleStep}>
                                    <View style={styles.cycleCircle}><Text style={styles.cycleNumber}>1</Text></View>
                                    <Text style={styles.cycleText}>הערכת מצב</Text>
                                </View>
                                <MaterialCommunityIcons name="arrow-down" size={30} color="#004e92" style={styles.arrow} />
                                <View style={styles.cycleStep}>
                                    <View style={styles.cycleCircle}><Text style={styles.cycleNumber}>2</Text></View>
                                    <Text style={styles.cycleText}>קבלת החלטות</Text>
                                </View>
                                <MaterialCommunityIcons name="arrow-down" size={30} color="#004e92" style={styles.arrow} />
                                <View style={styles.cycleStep}>
                                    <View style={styles.cycleCircle}><Text style={styles.cycleNumber}>3</Text></View>
                                    <Text style={styles.cycleText}>תכנון ופקודות</Text>
                                </View>
                                <MaterialCommunityIcons name="arrow-down" size={30} color="#004e92" style={styles.arrow} />
                                <View style={styles.cycleStep}>
                                    <View style={styles.cycleCircle}><Text style={styles.cycleNumber}>4</Text></View>
                                    <Text style={styles.cycleText}>ביצוע ובקרה</Text>
                                </View>
                                 <MaterialCommunityIcons name="sync" size={30} color="#004e92" style={styles.arrow} />
                            </View>
                        )}
                        {section.items && (
                            <View style={styles.listContainer}>
                                {section.items.map((item) => (
                                    <View key={item.number} style={styles.listItem}>
                                        <Text style={styles.itemNumber}>{item.number}.</Text>
                                        <Text style={styles.listItemText}>{item.text}</Text>
                                    </View>
                                ))}
                            </View>
                        )}
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
    cardContent: {
        fontSize: 16,
        color: '#34495e',
        textAlign: isRTL ? 'right' : 'left',
        writingDirection: isRTL ? 'rtl' : 'ltr',
    },
    cyclePlaceholder: {
        alignItems: 'center',
        marginVertical: 20,
    },
    cycleStep: {
        flexDirection: isRTL ? 'row-reverse' : 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    cycleCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#004e92',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cycleNumber: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    cycleText: {
        fontSize: 18,
        color: '#34495e',
        fontWeight: '600',
        marginHorizontal: 15,
        writingDirection: 'rtl',
    },
    arrow: {
        marginVertical: 5,
    },
    listContainer: {
        flexDirection: isRTL ? 'row-reverse' : 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    listItem: {
        flexDirection: isRTL ? 'row-reverse' : 'row',
        width: '48%',
        marginBottom: 10,
    },
    itemNumber: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#004e92',
    },
    listItemText: {
        fontSize: 16,
        color: '#34495e',
        textAlign: isRTL ? 'right' : 'left',
        writingDirection: isRTL ? 'rtl' : 'ltr',
        marginLeft: isRTL ? 0 : 5,
        marginRight: isRTL ? 5 : 0,
    },
});

export default CommandCycleSOP;
