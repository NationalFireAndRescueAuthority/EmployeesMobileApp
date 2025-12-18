
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { ColorValue, Linking, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../providers/ThemeProvider';
import CommandCycleSOP from '../components/SOP/CommanderSOP/CommandCycleSOP';
import HazmatSOP from '../components/SOP/CommanderSOP/HazmatSOP';
import LpgCngSOP from '../components/SOP/CommanderSOP/LpgCngSOP';
import StandardizedSymbolsSOP from '../components/SOP/CommanderSOP/StandardizedSymbolsSOP';
import AircraftActivationSOP from '../components/SOP/FireSOP/AircraftActivationSOP';
import BuildingFireSOP from '../components/SOP/FireSOP/BuildingFireSOP';
import ElevatorRescue from '../components/SOP/FireSOP/ElevatorRescue';
import OpenAreaFireSOP from '../components/SOP/FireSOP/OpenAreaFireSOP';
import TunnelFireSOP from '../components/SOP/FireSOP/TunnelFireSOP';
import UndergroundFireSOP from '../components/SOP/FireSOP/UndergroundFireSOP';
import VehicleFireSOP from '../components/SOP/FireSOP/VehicleFireSOP';
import Vessel from '../components/SOP/FireSOP/Vessel';
import DestructionRescueSOP from '../components/SOP/RescueSOP/DestructionRescueSOP';
import HighAngleRescueSOP from '../components/SOP/RescueSOP/HighAngleRescueSOP';
import TrafficAccidentRescueSOP from '../components/SOP/RescueSOP/TrafficAccidentRescueSOP';
import TrainRescue from '../components/SOP/RescueSOP/TrainRescue';
import WaterRescue from '../components/SOP/RescueSOP/WaterRescue';
import ClosedAreaSymbols from '../components/SOP/Symbols/ClosedAreaSymbols';
import OpenAreaSymbols from '../components/SOP/Symbols/OpenAreaSymbols';


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
  component?: React.ComponentType<any>;
};

const CardButton = ({ title, subtitle, icon, colors, borderColor, onPress, isFullWidth }: { 
  title: string; 
  subtitle: string; 
  icon: React.ComponentProps<typeof MaterialCommunityIcons>['name']; 
  colors: readonly [ColorValue, ColorValue, ...ColorValue[]]; 
  borderColor: string;
  onPress: () => void; 
  isFullWidth: boolean;
}) => {
  const { isRTL } = useTheme();
  const styles = getStyles(isRTL);

  return (
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
};

const LONG_TITLE_THRESHOLD = 21;

const sections: { title: string, cards: CardData[] }[] = [
  {
    title: "מידע על כבאות",
    cards: [
      {
        id: uuidv4(),
        title: "מי אנחנו",
        subtitle: "הכר את כבאות והצלה לישראל",
        icon: "shield-account",
        colors: ['#0F2027', '#203A43', '#2C5364'],
        borderColor: "#F2994A",
        action: () => console.log("Navigating to 'מי אנחנו'")
      },
    ]
  },
  {
    title: "עזרים מבצעיים",
    cards: [
      {
        id: uuidv4(),
        title: `פק"ל מפקד`,
        subtitle: "",
        icon: "clipboard-text-outline",
        colors: ['#93291E', '#ED213A'],
        borderColor: "#F2994A",
        subCards: [
          { id: uuidv4(), title: "דבר הנציב", subtitle: "", icon: "account-tie", colors: ['#93291E', '#ED213A'], borderColor: "#F2994A", action: () => console.log("דבר הנציב pressed") },
          { 
            id: "20",
            title: "פק\"ל שריפה", 
            subtitle: "", 
            icon: "fire-truck", 
            colors: ['#93291E', '#ED213A'], 
            borderColor: "#F2994A", 
            subCards: [
              { id: uuidv4(), title: "הפעלת מטוסים", subtitle: "", icon: "airplane", colors: ['#93291E', '#ED213A'], borderColor: "#F2994A", component: AircraftActivationSOP },
              { id: uuidv4(), title: "שריפה בכלי שיט", subtitle: "", icon: "sail-boat", colors: ['#93291E', '#ED213A'], borderColor: "#F2994A", component: Vessel },
              { id: uuidv4(), title: "שריפה במנהרות", subtitle: "", icon: "road-variant", colors: ['#93291E', '#ED213A'], borderColor: "#F2994A", component: TunnelFireSOP },
              { id: uuidv4(), title: "שריפה בכלי תחבורה", subtitle: "", icon: "car-side", colors: ['#93291E', '#ED213A'], borderColor: "#F2994A", component: VehicleFireSOP },
              { id: uuidv4(), title: "שריפה בתווך תת קרקעי", subtitle: "", icon: "subway-variant", colors: ['#93291E', '#ED213A'], borderColor: "#F2994A", component: UndergroundFireSOP },
              { id: uuidv4(), title: "שריפה במבנה", subtitle: "", icon: "home-city", colors: ['#93291E', '#ED213A'], borderColor: "#F2994A", component: BuildingFireSOP },
              { id: uuidv4(), title: "שריפה בשטחים פתוחים", subtitle: "", icon: "pine-tree", colors: ['#93291E', '#ED213A'], borderColor: "#F2994A", component: OpenAreaFireSOP },
            ]
          },
          { 
            id: uuidv4(), 
            title: "פק\"ל חילוץ", 
            subtitle: "", 
            icon: "clipboard-text-outline", 
            colors: ['#93291E', '#ED213A'], 
            borderColor: "#F2994A", 
            subCards: [
                { id: uuidv4(), title: "חילוץ מהרס", subtitle: "", icon: "home-remove", colors: ['#93291E', '#ED213A'], borderColor: "#F2994A", component: DestructionRescueSOP },
                { id: uuidv4(), title: "חילוץ מגובה", subtitle: "", icon: "angle-acute", colors: ['#93291E', '#ED213A'], borderColor: "#F2994A", component: HighAngleRescueSOP },
                { id: uuidv4(), title: "חילוץ מתאונת דרכים", subtitle: "", icon: "car-crash", colors: ['#93291E', '#ED213A'], borderColor: "#F2994A", component: TrafficAccidentRescueSOP },
                { id: uuidv4(), title: "חילוץ ממעלית", subtitle: "", icon: "elevator-passenger", colors: ['#93291E', '#ED213A'], borderColor: "#F2994A", component: ElevatorRescue },
                { id: uuidv4(), title: "חילוץ ממים", subtitle: "", icon: "lifebuoy", colors: ['#93291E', '#ED213A'], borderColor: "#F2994A", component: WaterRescue },
                { id: uuidv4(), title: "חילוץ מרכבת", subtitle: "", icon: "train", colors: ['#93291E', '#ED213A'], borderColor: "#F2994A", component: TrainRescue },
            ]
        },
          { id: uuidv4(), title: "חומ\"ס", subtitle: "", icon: "chemical-weapon", colors: ['#93291E', '#ED213A'], borderColor: "#F2994A", component: HazmatSOP },
          { id: uuidv4(), title: "גפ\"מ\\גט\"ד", subtitle: "", icon: "gas-cylinder", colors: ['#93291E', '#ED213A'], borderColor: "#F2994A", component: LpgCngSOP },
          { id: uuidv4(), title: "מעגל הפו\"ש", subtitle: "", icon: "chart-donut", colors: ['#93291E', '#ED213A'], borderColor: "#F2994A", component: CommandCycleSOP },
          {
            id: uuidv4(),
            title: "סימנים מוסכמים", 
            subtitle: "", 
            icon: "sign-language", 
            colors: ['#93291E', '#ED213A'], 
            borderColor: "#F2994A", 
            subCards: [
              { id: uuidv4(), title: "סימנים מוסכמים בשטח פתוח", subtitle: "", icon: "barley", colors: ['#93291E', '#ED213A'], borderColor: "#F2994A", component: OpenAreaSymbols },
              { id: uuidv4(), title: "סימנים מוסכמים בשטח סגור", subtitle: "", icon: "city-variant", colors: ['#93291E', '#ED213A'], borderColor: "#F2994A", component: ClosedAreaSymbols },
            ]
          },
        ]
      },
      {
        id: "2",
        title: "רכב חשמלי/היברידי",
        subtitle: "",
        icon: "car-electric-outline",
        colors: ['#93291E', '#ED213A'],
        borderColor: "#F2994A",
        subCards: [
          { id: uuidv4(), title: "איתור רכב במשרד התחבורה", subtitle: "", icon: "car-info", colors: ['#93291E', '#ED213A'], borderColor: "#F2994A", action: () => console.log("איתור רכב במשרד התחבורה pressed") },
          { id: uuidv4(), title: "קריטריונים לעבודה הגנתית", subtitle: "", icon: "shield-car", colors: ['#93291E', '#ED213A'], borderColor: "#F2994A", action: () => console.log("קריטריונים לעבודה הגנתית pressed") },
          { id: uuidv4(), title: "סדר פעולות באירוע (טקטיקה התקפית)", subtitle: "", icon: "fire-truck", colors: ['#93291E', '#ED213A'], borderColor: "#F2994A", action: () => console.log("סדר פעולות באירוע (טקטיקה התקפית) pressed") },
          { id: uuidv4(), title: "הנחיות בטיחות ופעולות מקדימות", subtitle: "", icon: "alert-octagon-outline", colors: ['#93291E', '#ED213A'], borderColor: "#F2994A", action: () => console.log("הנחיות בטיחות ופעולות מקדימות pressed") },
          { id: uuidv4(), title: "עיקרי הסכנות והאתגרים", subtitle: "", icon: "hazard-lights", colors: ['#93291E', '#ED213A'], borderColor: "#F2994A", action: () => console.log("עיקרי הסכנות והאתגרים pressed") },
        ]
      },
      {
        id: uuidv4(),
        title: `הוראות קשר`,
        subtitle: "",
        icon: "clipboard-text-outline",
        colors: ['#93291E', '#ED213A'],
        borderColor: "#F2994A",
        action: () => console.log("Navigating to 'הוראות קשר'")
      },
      {
        id: uuidv4(),
        title: `חומ"ס`,
        subtitle: "",
        icon: "chemical-weapon",
        colors: ['#93291E', '#ED213A'],
        borderColor: "#F2994A",
        action: () => console.log("Navigating to 'חומ\'ס'")
      },
      {
        id: uuidv4(),
        title: `גורדי שחקים`,
        subtitle: "",
        icon: "office-building-outline",
        colors: ['#93291E', '#ED213A'],
        borderColor: "#F2994A",
        action: () => console.log("Navigating to 'גורדי שחקים'")
      }
    ]
  },
  {
    title: "יישומים נוספים",
    cards: [
      {
        id: uuidv4(),
        title: "הזמנת ביגוד",
        subtitle: "",
        icon: "tshirt-crew-outline",
        colors: ['#333333', '#1a1a1a'],
        borderColor: "#F2994A",
        action: () => console.log("Navigating to 'הזמנת ביגוד'")
      },
      {
        id: uuidv4(),
       title: "FireUp",
        subtitle: "",
        icon: "apps",
        colors: ['#333333', '#1a1a1a'],
        borderColor: "#F2994A",
        action: () => console.log("Navigating to 'FireUp'")
      },
      {
        id: uuidv4(),
        title: "LMS",
        subtitle: "",
        icon: "web",
        colors: ['#333333', '#1a1a1a'],
        borderColor: "#F2994A",
        action: () => console.log("Navigating to 'LMS'")
      },
      {
        id: "5",
        title: "שירותי כביסה מקצועית",
        subtitle: "",
        icon: "room-service-outline",
        colors: ['#333333', '#1a1a1a'],
        borderColor: "#F2994A",
        action: () => Linking.openURL('https://unisoft.unidress.co.il/priportal/')
      },
      {
        id: uuidv4(),
        title: "רווחה, נפגעים ושכול",
        subtitle: "",
        icon: "account-injury-outline",
        colors: ['#333333', '#1a1a1a'],
        borderColor: "#F2994A",
        action: () => console.log("Navigating to 'רווחה, נפגעים ושכול'")
      }
    ]
  }
];

export default function Homepage() {
  const { isRTL } = useTheme();
  const styles = getStyles(isRTL);
  const [cardStack, setCardStack] = useState<CardData[]>([]);
  const [modalContent, setModalContent] = useState<{ title: string; component: React.ReactNode } | null>(null);

  const handleCardPress = (card: CardData) => {
    if (card.component) {
      const componentWithProps = React.createElement(card.component, {
        closeModal: () => setModalContent(null) 
      });
      setModalContent({ title: card.title, component: componentWithProps });
    } else if (card.subCards && card.subCards.length > 0) {
      setCardStack([...cardStack, card]);
    } else if (card.action) {
      card.action();
    }
  };

  const closeModal = () => {
    setCardStack([]);
  };

  const handleBackPress = () => {
    if (cardStack.length > 0) {
      setCardStack(cardStack.slice(0, -1));
    } 
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
          const isFullWidth = card.title.length > LONG_TITLE_THRESHOLD || cards.length === 1;
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

  const currentCard = cardStack.length > 0 ? cardStack[cardStack.length - 1] : null;

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
        visible={cardStack.length > 0}
        onRequestClose={handleBackPress}
      >
        <TouchableWithoutFeedback onPress={() => setCardStack([])}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.modalView}>
                <View style={styles.modalHeader}>
                    <Text style={styles.modalTitle}>{currentCard?.title}</Text>
                </View>
                <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
                    <MaterialCommunityIcons name="arrow-left" size={30} color="#333" />
                </TouchableOpacity>
                <ScrollView>
                  {currentCard?.subCards && renderCardGrid(currentCard.subCards)}
                </ScrollView>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalContent !== null}
        onRequestClose={() => setModalContent(null)}
      >
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                {modalContent?.component}
            </ScrollView>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

const getStyles = (isRTL: boolean) => StyleSheet.create({
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
    textAlign: isRTL ? 'right' : 'left',
    writingDirection: isRTL ? 'rtl' : 'ltr',
  },
  grid: {
    flexDirection: isRTL ? 'row-reverse' : 'row',
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
    writingDirection: isRTL ? 'rtl' : 'ltr',
  },
  cardSubtitle: {
    color: '#ccc',
    fontSize: 12,
    textAlign: 'center',
    writingDirection: isRTL ? 'rtl' : 'ltr',
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
    paddingTop: 50, 
    paddingBottom: 20,
    paddingHorizontal: 20,
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
    height: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
    position: 'relative',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    left: -10,
    top: -35,
    padding: 10,
    zIndex: 1,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    writingDirection: isRTL ? 'rtl' : 'ltr',
    paddingHorizontal: 40,
  },
});
