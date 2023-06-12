import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ImageBackground,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MyPressable from '../components/MyPressable';
import { AppImages } from '../assets';

const CourseInfoScreen: React.FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="black" barStyle="dark-content" />
      <ImageBackground
        style={{ flex: 1 }}
        source={AppImages.webInterFace}
      >
        <View style={[styles.footerContainer, { paddingBottom: insets.bottom + 16 }]}>
          <View style={{ width: 16 }} />
          <View style={styles.joinCourse}>
            <MyPressable>
              <Text style={styles.joinCourseText}>Add Cart</Text>
            </MyPressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    paddingHorizontal: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // semi-transparent background
  },
  joinCourse: {
    flex: 1,
    borderRadius: 16,
    backgroundColor: 'black',
    elevation: 4,
    shadowColor: 'gray',
    shadowOffset: { width: 1.1, height: 1.1 },
    shadowOpacity: 0.5,
    shadowRadius: 10.0,
  },
  joinCourseText: {
    padding: 18,
    paddingVertical: 12,
    fontSize: 18,
    fontFamily: 'WorkSans-SemiBold',
    alignSelf: 'center',
    color: 'white',
  },
});

export default CourseInfoScreen;
