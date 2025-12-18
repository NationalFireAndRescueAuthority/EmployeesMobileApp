import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../../../providers/ThemeProvider';

const Vessel = ({ closeModal }: { closeModal: () => void }) => {
    const { isRTL } = useTheme();
    const styles = getStyles(isRTL);

    return (
        <LinearGradient
            colors={['#4c5c68', '#192f6a']}
            style={styles.container}
        >
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <MaterialCommunityIcons name="close" size={30} color="#fff" />
            </TouchableOpacity>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.header}>
                    <Text style={styles.title}>שריפה בכלי שיט</Text>
                    <Text style={styles.subtitle}>SOP for Fire in a Vessel</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>דגשים לגיבוש תמונת מצב</Text>
                    <View style={styles.row}>
                        <View style={styles.item}>
                            <FontAwesome name="ship" size={24} color="#ff6600" />
                            <Text style={styles.itemText}>סוג אוניה</Text>
                        </View>
                        <View style={styles.item}>
                            <FontAwesome name="cubes" size={24} color="#ff6600" />
                            <Text style={styles.itemText}>מטען האש</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.item}>
                            <FontAwesome name="users" size={24} color="#ff6600" />
                            <Text style={styles.itemText}>נוסעים/חומרים</Text>
                        </View>
                        <View style={styles.item}>
                            <FontAwesome name="fire" size={24} color="#ff6600" />
                            <Text style={styles.itemText}>מוקד האש</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.item}>
                            <FontAwesome name="arrows-v" size={24} color="#ff6600" />
                            <Text style={styles.itemText}>עליון/תחתון</Text>
                        </View>
                        <View style={styles.item}>
                            <FontAwesome name="road" size={24} color="#ff6600" />
                            <Text style={styles.itemText}>נתיב התפשטות</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>עיקרי הערכת מצב</Text>
                    <View style={styles.listItem}>
                        <FontAwesome name="info-circle" size={20} color="#ff6600" />
                        <Text style={styles.listItemText}>סוג אוניה/ סירה</Text>
                    </View>
                    <View style={styles.listItem}>
                        <FontAwesome name="users" size={20} color="#ff6600" />
                        <Text style={styles.listItemText}>מיומנות צוות האוניה</Text>
                    </View>
                    <View style={styles.listItem}>
                        <FontAwesome name="cogs" size={20} color="#ff6600" />
                        <Text style={styles.listItemText}>מערכות כיבוי ויעילותן</Text>
                    </View>
                    <View style={styles.listItem}>
                        <FontAwesome name="map-marker" size={20} color="#ff6600" />
                        <Text style={styles.listItemText}>מיקום האש בכלי השייט</Text>
                    </View>
                    <View style={styles.listItem}>
                        <FontAwesome name="warning" size={20} color="#ff6600" />
                        <Text style={styles.listItemText}>סכנת התפשטות לכלי שייט נוספים</Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>נושאים עיקריים לקבלת החלטות</Text>
                    <View style={styles.listItem}>
                        <FontAwesome name="user-secret" size={20} color="#ff6600" />
                        <Text style={styles.listItemText}>לכודים</Text>
                    </View>
                    <View style={styles.listItem}>
                        <FontAwesome name="sitemap" size={20} color="#ff6600" />
                        <Text style={styles.listItemText}>ארגון זירה ואמצעים</Text>
                    </View>
                    <View style={styles.listItem}>
                        <FontAwesome name="shield" size={20} color="#ff6600" />
                        <Text style={styles.listItemText}>טקטיקות כיבוי</Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>בטיחות ונושאים נוספים</Text>
                    <View style={styles.listItem}>
                        <FontAwesome name="plus-circle" size={20} color="#ff6600" />
                        <Text style={styles.listItemText}>מינוי ק. בטיחות</Text>
                    </View>
                    <View style={styles.listItem}>
                        <FontAwesome name="list-alt" size={20} color="#ff6600" />
                        <Text style={styles.listItemText}>רישום מעקב צוותי כיבוי ובקרה</Text>
                    </View>
                    <View style={styles.listItem}>
                        <FontAwesome name="users" size={20} color="#ff6600" />
                        <Text style={styles.listItemText}>צוות התערבות/ ארמגדון</Text>
                    </View>
                    <View style={styles.listItem}>
                        <FontAwesome name="life-ring" size={20} color="#ff6600" />
                        <Text style={styles.listItemText}>התמצאות (קו חיים/ מצלמה טרמית)</Text>
                    </View>
                    <View style={styles.listItem}>
                        <FontAwesome name="wrench" size={20} color="#ff6600" />
                        <Text style={styles.listItemText}>עבודה מתחת מנופים</Text>
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
        zIndex: 1,
    },
    scrollViewContent: {
        paddingTop: 80, 
    },
    header: {
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        writingDirection: isRTL ? 'rtl' : 'ltr',
    },
    subtitle: {
        fontSize: 18,
        color: '#ccc',
        textAlign: 'center',
    },
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 15,
        padding: 20,
        marginHorizontal: 15,
        marginBottom: 15,
    },
    cardTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 15,
        textAlign: isRTL ? 'right' : 'left',
        writingDirection: isRTL ? 'rtl' : 'ltr',
    },
    row: {
        flexDirection: isRTL ? 'row-reverse' : 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    item: {
        alignItems: 'center',
        width: '45%',
    },
    itemText: {
        color: '#fff',
        marginTop: 5,
        textAlign: 'center',
        writingDirection:isRTL ? 'rtl' : 'ltr',
    },
    listItem: {
        flexDirection: isRTL ? 'row-reverse' : 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    listItemText: {
        color: '#fff',
        fontSize: 16,
        marginRight: isRTL ? 10 : 0,
        marginLeft: isRTL ? 0 : 10,
        textAlign: isRTL ? 'right' : 'left',
        writingDirection: isRTL ? 'rtl' : 'ltr',
    },
});

export default Vessel;
