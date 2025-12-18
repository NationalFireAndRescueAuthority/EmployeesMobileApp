import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../../../providers/ThemeProvider';

const WaterRescue = ({ closeModal }: { closeModal: () => void }) => {
    const { isRTL } = useTheme();
    const styles = getStyles(isRTL);

    const sections = [
        {
            title: "דגשים לגיבוש תמונת מצב",
            icon: "account-search-outline",
            items: [
                "תשאול: דליית פרטים, צמצום או הרחבת הכוח לצוותים מקצועיים.",
                "משה/ערן: תרחיש מסלול מונגש וכניסה לשטח האירוע, סוג מתארי (נחל).",
                "מחלצים: תקשורת עם הלכודים, מיקום מספר ומצב.",
                "איתור: הצלת חיים."
            ]
        },
        {
            title: "עיקרי הערכת מצב",
            icon: "file-chart-outline",
            items: [
                "מפקד האירוע/מפקד י.ד.מ",
                "כוח מצומצם או מורחב (האם להעמיד צוותים מקצועיים נוספים).",
                "טכניקת חילוץ: (שיטת חילוץ, חבלים/סירות הצלה).",
                "הסכמות/מים ומדפים: בחינת סיכוני משנה (חשמל, פסולת רעילה, סחף). החלטה על דרכי פעולה.",
                `תיחום הזירה (מ"י).`
            ]
        },
        {
            title: "נושאים עיקריים לקבלת החלטות",
            icon: "gavel",
            items: [
                "הנהגות המים",
                "מצבו של המחולץ/לכוד",
                "סיכונים אופייניים למחלץ ולמחולץ",
                "דרכי גישה וזמן הגעה למחולץ/לכוד",
                "ארגון הזירה/היערכות"
            ]
        },
        {
            title: "בטיחות ונושאים נוספים",
            icon: "shield-check-outline",
            items: [
                "נאמן בטיחות/בדיקת עמיתים",
                "הרחקת כל גורם שאינו חלק מתהליך החילוץ",
                "יש לאתר סכנות או בעיות צפויות לפני ובמהלך החילוץ.",
                "לוודא תנאי עבודה בטוחה."
            ]
        }
    ];

    return (
        <LinearGradient
            colors={['#2c3e50', '#3498db']}
            style={styles.container}
        >
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <MaterialCommunityIcons name="close" size={30} color="#fff" />
            </TouchableOpacity>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.header}>
                    <MaterialCommunityIcons name="lifebuoy" size={50} color="#fff" />
                    <Text style={styles.mainTitle}>חילוץ ממים</Text>
                    <Text style={styles.mainSubtitle}>חילוץ ממים זורמים והצפות</Text>
                </View>

                {sections.map((section, index) => (
                    <View key={index} style={styles.card}>
                        <View style={styles.cardHeader}>
                            <MaterialCommunityIcons name={section.icon as any} size={26} color="#3498db" />
                            <Text style={styles.cardTitle}>{section.title}</Text>
                        </View>
                        {section.items.map((item, itemIndex) => (
                             <View key={itemIndex} style={styles.listItem}>
                                <MaterialCommunityIcons name="chevron-left" size={20} color="#3498db" style={styles.bulletIcon} />
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
    mainSubtitle: {
        fontSize: 20,
        color: '#ecf0f1',
        marginTop: 5,
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
        color: '#2c3e50',
        textAlign: isRTL ? 'right' : 'left',
        writingDirection: isRTL ? 'rtl' : 'ltr',
        marginLeft: isRTL ? 0 : 10,
        marginRight: isRTL ? 10 : 0,
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

export default WaterRescue;
