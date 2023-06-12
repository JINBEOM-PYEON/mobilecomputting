import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Platform,
  StatusBar,
  useWindowDimensions,
} from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import MyPressable from './components/MyPressable';
import { AppImages } from './assets';

const HelpScene: React.FC = () => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation<DrawerNavigationProp<{}>>();
  const { top } = useSafeAreaInsets();

  const imageSize = width - 32;
  const marginTop = Platform.OS === 'ios' ? top : StatusBar.currentHeight ?? 24;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        style={{ flex: 1 }}
        source={AppImages.helpImage}
        resizeMode="cover"
      >
        <View style={styles.buttonContainer}>
          <MyPressable style={styles.button} android_ripple={{ color: 'grey' }}>
            <Text style={styles.buttonText}>구   매</Text>
          </MyPressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 140,
    height: 40,
    padding: 8,
    backgroundColor: 'black',
    borderRadius: 4,
    elevation: 8,
    marginTop: 500,  
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    textAlign: 'center',
    padding: 4,
  },
});

export default HelpScene;
