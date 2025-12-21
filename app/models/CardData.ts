import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ColorValue } from 'react-native';


export interface CardData {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  colors: readonly [ColorValue, ColorValue, ...ColorValue[]];
  borderColor: string;
  subCards?: CardData[];
  action?: () => void;
  url? : string;
  component?: React.ComponentType<any>;
}