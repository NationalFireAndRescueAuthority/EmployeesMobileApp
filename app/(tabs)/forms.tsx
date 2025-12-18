import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { ColorValue, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

// Function to generate a simple GUID
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

type CardData = {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  colors: readonly [ColorValue, ColorValue, ...ColorValue[]];
  borderColor: string;
  subCards?: CardData[];
  action?: () => void;
  url?: string;
};

const CardButton = ({ title, subtitle, icon, colors, borderColor, onPress, isFullWidth }: { 
  title: string; 
  subtitle: string; 
  icon: React.ComponentProps<typeof MaterialCommunityIcons>['name']; 
  colors: readonly [ColorValue, ColorValue, ...ColorValue[]]; 
  borderColor: string;
  onPress: () => void; 
  isFullWidth: boolean;
}) => (
  <TouchableOpacity onPress={onPress} style={isFullWidth ? styles.cardTouchableFullWidth : styles.cardTouchable}>
    <View style={[styles.card, { borderColor }]}>
      <LinearGradient
        colors={colors}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <MaterialCommunityIcons name={icon} size={24} color="white" style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>{title}</Text>
          {subtitle ? <Text style={styles.cardSubtitle}>{subtitle}</Text> : null}
        </View>
      </LinearGradient>
    </View>
  </TouchableOpacity>
);

const LONG_TITLE_THRESHOLD = 21;

const sections: { title: string, cards: CardData[] }[] = [
  {
    title: "טפסים",
    cards: [
      {
        id: uuidv4(),
        title: "ביטחון",
        subtitle: "",
        icon: "shield-lock",
        colors: ['#0F2027', '#203A43', '#2C5364'],
        borderColor: "#F2994A",
        subCards: [
          { id: uuidv4(), title: "דיווח על אירוע חריג בתחום הביטחון", subtitle: "", icon: "alert-octagon-outline", colors: ['#0F2027', '#203A43', '#2C5364'], borderColor: "#F2994A", url: "https://www.google.com" },
          { id: uuidv4(), title: "טופס בקשה ליציאה פרטית לחול", subtitle: "", icon: "airplane", colors: ['#0F2027', '#203A43', '#2C5364'], borderColor: "#F2994A", action: () => console.log("טופס בקשה ליציאה פרטית לחול pressed") },
          { id: uuidv4(), title: "בדיקת רפ - צופי אש", subtitle: "", icon: "file-document-outline", colors: ['#0F2027', '#203A43', '#2C5364'], borderColor: "#F2994A", action: () => console.log("בדיקת רפ - צופי אש pressed") },
          { id: uuidv4(), title: "טפסים לסיווג ביטחוני", subtitle: "", icon: "lock-question", colors: ['#0F2027', '#203A43', '#2C5364'], borderColor: "#F2994A", action: () => console.log("טפסים לסיווג ביטחוני pressed") },
        ]
      },
      {
        id: uuidv4(),
        title: "הדרכה",
        subtitle: "",
        icon: "school",
        colors: ['#0F2027', '#203A43', '#2C5364'],
        borderColor: "#F2994A",
        subCards: [
          { id: uuidv4(), title: "הגשת מועמדות להדרכה בקורסים של בית הספר לכבאות", subtitle: "", icon: "file-document-outline", colors: ['#0F2027', '#203A43', '#2C5364'], borderColor: "#F2994A", action: () => console.log("הגשת מועמדות להדרכה בקורסים של בית הספר לכבאות pressed") },
        ]
      },
      {
        id: uuidv4(),
        title: "הכנסות",
        subtitle: "",
        icon: "cash-multiple",
        colors: ['#0F2027', '#203A43', '#2C5364'],
        borderColor: "#F2994A",
        subCards: [
          { id: uuidv4(), title: "טופס פנייה לתלונה על ספק 25.5.21", subtitle: "", icon: "file-document-outline", colors: ['#0F2027', '#203A43', '#2C5364'], borderColor: "#F2994A", action: () => console.log("טופס פנייה לתלונה על ספק 25.5.21 pressed") },
          { id: uuidv4(), title: "טופס תלונה על ספק", subtitle: "", icon: "file-document-outline", colors: ['#0F2027', '#203A43', '#2C5364'], borderColor: "#F2994A", action: () => console.log("טופס תלונה על ספק pressed") },
        ]
      },
      {
        id: uuidv4(),
        title: "ועדת מכרזים",
        subtitle: "",
        icon: "gavel",
        colors: ['#0F2027', '#203A43', '#2C5364'],
        borderColor: "#F2994A",
        subCards: [
          { id: uuidv4(), title: "ט.7.8.2.1 טופס חוות דעת מקצועית במסגרת כוונה להתקשר עם ספק יחיד או חוץ מעודכן", subtitle: "", icon: "file-document-outline", colors: ['#0F2027', '#203A43', '#2C5364'], borderColor: "#F2994A", action: () => console.log("ט.7.8.2.1 טופס חוות דעת מקצועית במסגרת כוונה להתקשר עם ספק יחיד או חוץ מעודכן pressed") },
        ]
      },
      {
        id: uuidv4(),
        title: "חקירות",
        subtitle: "",
        icon: "fire-truck",
        colors: ['#0F2027', '#203A43', '#2C5364'],
        borderColor: "#F2994A",
        subCards: [
          { id: uuidv4(), title: "טופס תפיסת מוצג ארצי", subtitle: "", icon: "file-document-outline", colors: ['#0F2027', '#203A43', '#2C5364'], borderColor: "#F2994A", action: () => console.log("טופס תפיסת מוצג ארצי pressed") },
          { id: uuidv4(), title: "אישור על חקירת דליקה", subtitle: "", icon: "file-document-outline", colors: ['#0F2027', '#203A43', '#2C5364'], borderColor: "#F2994A", action: () => console.log("אישור על חקירת דליקה pressed") },
          { id: uuidv4(), title: "טיוטא לחוות דעת טופס בסיסי ומתקדם", subtitle: "", icon: "file-document-outline", colors: ['#0F2027', '#203A43', '#2C5364'], borderColor: "#F2994A", action: () => console.log("טיוטא לחוות דעת טופס בסיסי ומתקדם pressed") },
          { id: uuidv4(), title: "עליון עדות ארצי", subtitle: "", icon: "file-document-outline", colors: ['#0F2027', '#203A43', '#2C5364'], borderColor: "#F2994A", action: () => console.log("עליון עדות ארצי pressed") },
          { id: uuidv4(), title: "טופס שראטוט תרשים ארצי", subtitle: "", icon: "file-document-outline", colors: ['#0F2027', '#203A43', '#2C5364'], borderColor: "#F2994A", action: () => console.log("טופס שראטוט תרשים ארצי pressed") },
          { id: uuidv4(), title: "מדבקות", subtitle: "", icon: "file-document-outline", colors: ['#0F2027', '#203A43', '#2C5364'], borderColor: "#F2994A", action: () => console.log("מדבקות pressed") },
          { id: uuidv4(), title: "תעודת עובד ציבור אחיד", subtitle: "", icon: "file-document-outline", colors: ['#0F2027', '#203A43', '#2C5364'], borderColor: "#F2994A", action: () => console.log("תעודת עובד ציבור אחיד pressed") },
        ]
      },
      {
        id: uuidv4(),
        title: "לוגיסטיקה",
        subtitle: "",
        icon: "truck-delivery",
        colors: ['#0F2027', '#203A43', '#2C5364'],
        borderColor: "#F2994A",
        subCards: [
          { id: uuidv4(), title: "טופס הצעות מחיר - סופי", subtitle: "", icon: "file-document-outline", colors: ['#0F2027', '#203A43', '#2C5364'], borderColor: "#F2994A", action: () => console.log("טופס הצעות מחיר - סופי pressed") },
        ]
      },
      {
        id: uuidv4(),
        title: "משאבי אנוש",
        subtitle: "",
        icon: "account-group",
        colors: ['#0F2027', '#203A43', '#2C5364'],
        borderColor: "#F2994A",
        subCards: [
          {
            id: uuidv4(),
            title: "כללי",
            subtitle: "",
            icon: "file-document-outline",
            colors: ['#0F2027', '#203A43', '#2C5364'],
            borderColor: "#F2994A",
            subCards: [
              { id: uuidv4(), title: "טופס 101", subtitle: "", icon: "file-document-outline", colors: ['#0F2027', '#203A43', '#2C5364'], borderColor: "#F2994A", action: () => console.log("טופס 101 pressed") },
            ]
          },
          {
            id: uuidv4(),
            title: "גבייה",
            subtitle: "",
            icon: "cash-multiple",
            colors: ['#0F2027', '#203A43', '#2C5364'],
            borderColor: "#F2994A",
            subCards: [
              { id: uuidv4(), title: "תמחור להקצאת כבאים בתשלום - נספח ב'", subtitle: "", icon: "file-document-outline", colors: ['#0F2027', '#203A43', '#2C5364'], borderColor: "#F2994A", action: () => console.log("תמחור להקצאת כבאים בתשלום - נספח ב' pressed") },
              { id: uuidv4(), title: "טופס הקצאת כבאים בתשלום - נספח א'", subtitle: "", icon: "file-document-outline", colors: ['#0F2027', '#203A43', '#2C5364'], borderColor: "#F2994A", action: () => console.log("טופס הקצאת כבאים בתשלום - נספח א' pressed") },
              { id: uuidv4(), title: "פרוטוקול ועדת הנחות", subtitle: "", icon: "file-document-outline", colors: ['#0F2027', '#203A43', '#2C5364'], borderColor: "#F2994A", action: () => console.log("פרוטוקול ועדת הנחות pressed") },
              { id: uuidv4(), title: "טבלה לריכוז חובות אבודים", subtitle: "", icon: "file-document-outline", colors: ['#0F2027', '#203A43', '#2C5364'], borderColor: "#F2994A", action: () => console.log("טבלה לריכוז חובות אבודים pressed") },
              { id: uuidv4(), title: "טופס פניה לועדת מחיקות", subtitle: "", icon: "file-document-outline", colors: ['#0F2027', '#203A43', '#2C5364'], borderColor: "#F2994A", action: () => console.log("טופס פניה לועדת מחיקות pressed") },
              { id: uuidv4(), title: "טופס הודעה למבקש שבקשתו לקבלת הנחה פטור התקבלה", subtitle: "", icon: "file-document-outline", colors: ['#0F2027', '#203A43', '#2C5364'], borderColor: "#F2994A", action: () => console.log("טופס הודעה למבקש שבקשתו לקבלת הנחה פטור התקבלה pressed") },
              { id: uuidv4(), title: "טופס בקשה לחייב לקבלת הנחה או פטור", subtitle: "", icon: "file-document-outline", colors: ['#0F2027', '#203A43', '#2C5364'], borderColor: "#F2994A", action: () => console.log("טופס בקשה לחייב לקבלת הנחה או פטור pressed") },
              { id: uuidv4(), title: "החלטה על הארכת מועד מתן החלטת וועדת הנחות", subtitle: "", icon: "file-document-outline", colors: ['#0F2027', '#203A43', '#2C5364'], borderColor: "#F2994A", action: () => console.log("החלטה על הארכת מועד מתן החלטת וועדת הנחות pressed") },
              { id: uuidv4(), title: "בקשה להשלמת מסמכים", subtitle: "", icon: "file-document-outline", colors: ['#0F2027', '#203A43', '#2C5364'], borderColor: "#F2994A", action: () => console.log("בקשה להשלמת מסמכים pressed") },
              { id: uuidv4(), title: "החלטת וועדת הנחות - אישור הבקשה", subtitle: "", icon: "file-document-outline", colors: ['#0F2027', '#203A43', '#2C5364'], borderColor: "#F2994A", action: () => console.log("החלטת וועדת הנחות - אישור הבקשה pressed") },
              { id: uuidv4(), title: "דחיית הבקשה על ידי הוועדה", subtitle: "", icon: "file-document-outline", colors: ['#0F2027', '#203A43', '#2C5364'], borderColor: "#F2994A", action: () => console.log("דחיית הבקשה על ידי הוועדה pressed") },
              { id: uuidv4(), title: "החלטת הוועדה בנוגע להארכת מועד הגשת בקשה להנחה או פטור", subtitle: "", icon: "file-document-outline", colors: ['#0F2027', '#203A43', '#2C5364'], borderColor: "#F2994A", action: () => console.log("החלטת הוועדה בנוגע להארכת מועד הגשת בקשה להנחה או פטור pressed") },
              { id: uuidv4(), title: "טופס להצגה בוועדת הנחות", subtitle: "", icon: "file-document-outline", colors: ['#0F2027', '#203A43', '#2C5364'], borderColor: "#F2994A", action: () => console.log("טופס להצגה בוועדת הנחות pressed") },
            ]
          },
          { id: uuidv4(), title: "לימודים אקדמיים", subtitle: "", icon: "school", colors: ['#0F2027', '#203A43', '#2C5364'], borderColor: "#F2994A", action: () => console.log("לימודים אקדמיים pressed") },
          { id: uuidv4(), title: "משאבי אנוש", subtitle: "", icon: "account-group", colors: ['#0F2027', '#203A43', '#2C5364'], borderColor: "#F2994A", action: () => console.log("משאבי אנוש pressed") },
          { id: uuidv4(), title: "פרישה וגמלאות", subtitle: "", icon: "human-greeting", colors: ['#0F2027', '#203A43', '#2C5364'], borderColor: "#F2994A", action: () => console.log("פרישה וגמלאות pressed") },
          { id: uuidv4(), title: "רווחה ופרט", subtitle: "", icon: "heart-outline", colors: ['#0F2027', '#203A43', '#2C5364'], borderColor: "#F2994A", action: () => console.log("רווחה ופרט pressed") },
          { id: uuidv4(), title: "רכש ולוגיסטיקה", subtitle: "", icon: "truck-delivery", colors: ['#0F2027', '#203A43', '#2C5364'], borderColor: "#F2994A", action: () => console.log("רכש ולוגיסטיקה pressed") },
        ]
      },
      {
        id: uuidv4(),
        title: "רפואה",
        subtitle: "",
        icon: "medical-bag",
        colors: ['#0F2027', '#203A43', '#2C5364'],
        borderColor: "#F2994A",
        action: () => console.log("Navigating to 'רפואה'")
      },
      {
        id: uuidv4(),
        title: "תקשוב",
        subtitle: "",
        icon: "desktop-classic",
        colors: ['#0F2027', '#203A43', '#2C5364'],
        borderColor: "#F2994A",
        action: () => console.log("Navigating to 'תקשוב'")
      }
    ]
  }
];

export default function Forms() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);
  const [cardHistory, setCardHistory] = useState<CardData[]>([]);
  const [webViewVisible, setWebViewVisible] = useState(false);
  const [webViewUrl, setWebViewUrl] = useState('');

  const handleCardPress = (card: CardData) => {
    if (card.subCards && card.subCards.length > 0) {
      if (selectedCard) {
        setCardHistory([...cardHistory, selectedCard]);
      }
      setSelectedCard(card);
      if (!modalVisible) {
        setModalVisible(true);
      }
    } else if (card.url) {
      setWebViewUrl(card.url);
      setWebViewVisible(true);
    } else if (card.action) {
      card.action();
    }
  };

  const handleBackPress = () => {
    if (cardHistory.length > 0) {
      const previousCard = cardHistory.pop();
      setSelectedCard(previousCard as CardData);
      setCardHistory([...cardHistory]);
    } else {
      setModalVisible(false);
      setSelectedCard(null);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedCard(null);
    setCardHistory([]);
  };

  const renderCardGrid = (cards: CardData[]) => {
    const sortedCards = cards.sort((a, b) => {
      const aIsLong = a.title.length > LONG_TITLE_THRESHOLD;
      const bIsLong = b.title.length > LONG_TITLE_THRESHOLD;
      if (aIsLong && !bIsLong) return -1;
      if (!aIsLong && bIsLong) return 1;
      return 0;
    });

    return (
      <View style={styles.grid}>
        {sortedCards.map((card) => {
          const isFullWidth = card.title.length > LONG_TITLE_THRESHOLD;
          return (
            <CardButton
              key={card.id}
              {...card}
              onPress={() => handleCardPress(card)}
              isFullWidth={isFullWidth}
            />
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        {sections.map((section, index) => (
          <View style={styles.section} key={index}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            {renderCardGrid(section.cards)}
          </View>
        ))}
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.modalView}>
                <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
                  <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.modalTitle}>{selectedCard?.title}</Text>
                <ScrollView>
                  {selectedCard?.subCards && renderCardGrid(selectedCard.subCards)}
                </ScrollView>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <Modal
        animationType="slide"
        transparent={false}
        visible={webViewVisible}
        onRequestClose={() => setWebViewVisible(false)}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <TouchableOpacity onPress={() => setWebViewVisible(false)} style={styles.closeButton}>
            <Ionicons name="close" size={24} color="black" />
          </TouchableOpacity>
          <WebView
            source={{ uri: webViewUrl }}
            style={{ flex: 1 }}
          />
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  cardTouchable: {
    width: '48%',
    marginBottom: 15,
  },
  cardTouchableFullWidth: {
    width: '98%',
    marginBottom: 15,
  },
  card: {
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    justifyContent: 'center',
    flex: 1,
  },
  gradient: {
    alignItems: 'center',
    padding: 15,
    flex: 1,
    justifyContent: 'center',
  },
  icon: {
    marginBottom: 10,
  },
  textContainer: {
    alignItems: 'center',
  },
  cardTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardSubtitle: {
    color: '#ccc',
    fontSize: 12,
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
});
