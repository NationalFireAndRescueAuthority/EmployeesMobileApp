import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import { formsPageSections } from '../data/forms-page-sections';
import { CardData } from '../models/CardData';
import { CardButton } from '../shared/CardButton';



//   id: string;
//   title: string;
//   subtitle: string;
//   icon: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
//   colors: readonly [ColorValue, ColorValue, ...ColorValue[]];
//   borderColor: string;
//   subCards?: CardData[];
//   action?: () => void;
//   url?: string;
// };

// const CardButton = ({ title, subtitle, icon, colors, borderColor, onPress, isFullWidth }: { 
//   title: string; 
//   subtitle: string; 
//   icon: React.ComponentProps<typeof MaterialCommunityIcons>['name']; 
//   colors: readonly [ColorValue, ColorValue, ...ColorValue[]]; 
//   borderColor: string;
//   onPress: () => void; 
//   isFullWidth: boolean;
// }) => (
//   <TouchableOpacity onPress={onPress} style={isFullWidth ? styles.cardTouchableFullWidth : styles.cardTouchable}>
//     <View style={[styles.card, { borderColor }]}>
//       <LinearGradient
//         colors={colors}
//         style={styles.gradient}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 1, y: 0 }}
//       >
//         <MaterialCommunityIcons name={icon} size={24} color="white" style={styles.icon} />
//         <View style={styles.textContainer}>
//           <Text style={styles.cardTitle}>{title}</Text>
//           {subtitle ? <Text style={styles.cardSubtitle}>{subtitle}</Text> : null}
//         </View>
//       </LinearGradient>
//     </View>
//   </TouchableOpacity>
// );

const LONG_TITLE_THRESHOLD = 21;



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
        {formsPageSections.map((section, index) => (
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
