import { CardData } from "@/app/models/CardData";
import { ModalContent } from "@/app/models/ModalContent";
import { CardButton } from "@/app/shared/CardButton";
import { useTheme } from "@/ThemeProvider";
import React from "react";

import { StyleSheet, View } from "react-native";

const LONG_TITLE_THRESHOLD = 21;

interface RenderCardGridProps {
  cards: CardData[];
  setModalContent: (content: ModalContent | null) => void;
  cardStack: CardData[];
  setCardStack: (stack: CardData[]) => void;
}

export const RenderCardGrid = ({
  cards,
  setModalContent,
  cardStack,
  setCardStack,
}: RenderCardGridProps) => {
  const { isRTL } = useTheme();

  const sortedCards = cards.sort((a, b) => {
    const aIsLong = a.title.length > LONG_TITLE_THRESHOLD;
    const bIsLong = b.title.length > LONG_TITLE_THRESHOLD;
    if (aIsLong && !bIsLong) return -1;
    if (!aIsLong && bIsLong) return 1;
    return 0;
  });

  const handleCardPress = (card: CardData) => {
    if (card.component) {
      const componentWithProps = React.createElement(card.component, {
        closeModal: () => setModalContent(null),
      });
      setModalContent({ title: card.title, component: componentWithProps });
    } else if (card.subCards && card.subCards.length > 0) {
      setCardStack([...cardStack, card]);
    } else if (card.action) {
      card.action();
    }
  };

  return (
    <View style={styles(isRTL).grid}>
      {sortedCards.map((card) => {
        const isFullWidth =
          card.title.length > LONG_TITLE_THRESHOLD || cards.length === 1;
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

const styles = (isRTL: boolean) =>
  StyleSheet.create({
    grid: {
      flexDirection: isRTL ? "row-reverse" : "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
    },
  });
