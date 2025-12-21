import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../providers/ThemeProvider";
import { RenderCardGrid } from "../components/Homepage/RenderCardGrid";
import { homePageSections } from "../data/home-page-sections";
import { CardData } from "../models/CardData";
import { ModalContent } from "../models/ModalContent";



export default function Homepage() {
  const { isRTL } = useTheme();

  const styles = getHomepageStyles(isRTL);
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);
  const [cardStack, setCardStack] = useState<CardData[]>([]);

  const handleBackPress = () => {
    if (!Boolean(cardStack.length > 0)) return;
    setCardStack(cardStack.slice(0, -1));
  };

  const currentCard =
    cardStack.length > 0 ? cardStack[cardStack.length - 1] : null;

  return (
    <SafeAreaView style={{ flex: 1, }}>
      <ScrollView style={styles.container}>
        {homePageSections.map((section, index) => (
          <View style={styles.section} key={index}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            {section.cards.length > 0 && (
              <RenderCardGrid
                cards={section.cards}
                setModalContent={setModalContent}
                cardStack={cardStack}
                setCardStack={setCardStack}
              />
            )}
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
                <TouchableOpacity
                  onPress={handleBackPress}
                  style={styles.backButton}
                >
                  <MaterialCommunityIcons
                    name="arrow-left"
                    size={30}
                    color="#333"
                  />
                </TouchableOpacity>
                <ScrollView>
                  {currentCard?.subCards && (
                    <RenderCardGrid
                      cards={currentCard.subCards}
                      setModalContent={setModalContent}
                      cardStack={cardStack}
                      setCardStack={setCardStack}
                    />
                  )}
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
          <ScrollView>{modalContent?.component}</ScrollView>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

export const getHomepageStyles = (isRTL: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    section: {
      marginBottom: 10,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10,
      color: "#333",
      textAlign: isRTL ? "right" : "left",
      writingDirection: isRTL ? "rtl" : "ltr",
    },
    grid: {
      flexDirection: isRTL ? "row-reverse" : "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
    },
    cardTouchable: {
      width: "48%",
      marginBottom: 15,
    },
    cardTouchableFullWidth: {
      width: "98%",
      marginBottom: 15,
    },
    card: {
      borderWidth: 1,
      borderRadius: 10,
      overflow: "hidden",
      elevation: 5,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      justifyContent: "center",
      flex: 1,
    },
    gradient: {
      alignItems: "center",
      padding: 15,
      flex: 1,
      justifyContent: "center",
    },
    icon: {
      marginBottom: 10,
    },
    textContainer: {
      alignItems: "center",
    },
    cardTitle: {
      color: "white",
      fontSize: 14,
      fontWeight: "bold",
      textAlign: "center",
      writingDirection: isRTL ? "rtl" : "ltr",
    },
    cardSubtitle: {
      color: "#ccc",
      fontSize: 12,
      textAlign: "center",
      writingDirection: isRTL ? "rtl" : "ltr",
    },
    modalOverlay: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      paddingTop: 50,
      paddingBottom: 20,
      paddingHorizontal: 20,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      width: "90%",
      height: "80%",
    },
    modalHeader: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      marginBottom: 20,
      position: "relative",
      justifyContent: "center",
    },
    backButton: {
      position: "absolute",
      left: -10,
      top: -35,
      padding: 10,
      zIndex: 1,
    },
    modalTitle: {
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
      writingDirection: isRTL ? "rtl" : "ltr",
      paddingHorizontal: 40,
    },
  });
