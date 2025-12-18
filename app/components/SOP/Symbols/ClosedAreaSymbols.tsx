import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../../../../providers/ThemeProvider';

const ClosedAreaSymbols = ({ closeModal }: { closeModal: () => void }) => {
    const { isRTL } = useTheme();
    const styles = getStyles(isRTL);

    const symbols: string[] = [
        "סריקה ראשונית - \"אין לכודים\"",
        "סריקה שניונית - \"אין לכודים\"",
        "אפשרי לכוד",
        "סכנה מבנית",
        "נקודת יציאה בטוחה",
    ];

    return (
        <LinearGradient
            colors={['#6a11cb', '#2575fc']}
            style={styles.container}
        >
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <MaterialCommunityIcons name="close" size={30} color="#fff" />
            </TouchableOpacity>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.header}>
                    <MaterialCommunityIcons name="city-variant" size={50} color="#fff" />
                    <Text style={styles.mainTitle}>סימנים מוסכמים בשטח סגור</Text>
                </View>

                <View style={styles.card}>
                    {symbols.map((description, index) => (
                        <View key={index} style={styles.symbolContainer}>
                            <Text style={styles.symbolDescription}>{description}</Text>
                        </View>
                    ))}
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
    symbolContainer: {
        flexDirection: isRTL ? 'row-reverse' : 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    symbolDescription: {
        fontSize: 16,
        color: '#34495e',
        textAlign: isRTL ? 'right' : 'left',
        writingDirection: isRTL ? 'rtl' : 'ltr',
        flex: 1,
        marginRight: isRTL ? 15 : 0,
        marginLeft: isRTL ? 0 : 15,
    },
});

export default ClosedAreaSymbols;
