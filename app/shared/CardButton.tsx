
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ColorValue, Text, TouchableOpacity, View } from 'react-native';
import { getHomepageStyles } from '../(tabs)/homepage';
import { useTheme } from '../../providers/ThemeProvider';

interface CardButtonProps {
  title: string;
  subtitle: string;
  icon: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  colors: readonly [ColorValue, ColorValue, ...ColorValue[]];
  borderColor: string;
  onPress: () => void;
  isFullWidth: boolean;
}


export const CardButton = ({ title, subtitle, icon, colors, borderColor, onPress, isFullWidth }: CardButtonProps) => {
  const { isRTL } = useTheme();
  const styles = getHomepageStyles(isRTL);

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
