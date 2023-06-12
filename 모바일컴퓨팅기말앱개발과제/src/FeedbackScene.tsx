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

const FeedbackScene: React.FC = () => {
  const navigation = useNavigation<DrawerNavigationProp<{}>>();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        style={styles.imageBackground}
        source={AppImages.feedbackImage}
        resizeMode="cover"
      >
        <View style={styles.buttonContainer}>
          <MyPressable style={styles.button} android_ripple={{ color: 'grey' }}>
            <Text style={styles.buttonText}>완  료</Text>
          </MyPressable>
        </View>
      </ImageBackground>

      <MyPressable
        style={styles.menuBtn}
        android_ripple={{ color: 'grey', radius: 20, borderless: true }}
        onPress={() => navigation.openDrawer()}
      >
      </MyPressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
  },
  button: {
    width: 120,
    height: 40,
    padding: 8,
    backgroundColor: 'black',
    borderRadius: 4,
    elevation: 8,
    marginTop : 400,
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    textAlign: 'center',
    padding: 4,
  },
  menuBtn: {
    position: 'absolute',
    padding: 8,
    left: 8,
  },
});

export default FeedbackScene;
