import React, { useRef } from 'react';
import {
  StyleSheet,
  Image,
  Animated,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppImages } from './assets';

const { width, height } = Dimensions.get('window');

const DEMOS = [
  {
    name: 'PIU  Mall App',
    background: AppImages.introduction_animation,
    screenName: 'onBoarding',
    description: '메타버스 반려견 패션 쇼핑몰에 오신걸 환영합니다 이 곳에서 진행중인 반려견의 패션쇼를 확인하고 손쉽게 접속하세요 반려견 콜렉션 확인은 위 쪽으로 드레그 해주세요'
  },
  {
    name: 'New collection',
    background: AppImages.hotel_booking,
    screenName: 'Hotel',
    description: '다양한 반려견 패션 콜렉션을 확인하세요 패션쇼에 등장하는 다양한 의상과 악세사리 컬랙션이 존재합니다. 23시즌의 트랜드를 구경해보세요'
  },
  {
    name: 'PIU STORE',
    background: AppImages.design_course,
    screenName: 'DesignCourse',
    description: '패션쇼와 콜랙션에 등장했던 다양한 의상과 악세사리를 나의 반려견 케릭터에 코디해보세요! 그리고 나의 반려견 코디를 구매하세요!'
  },
];
const HomeScene: React.FC = () => {
  const navigation = useNavigation();
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        decelerationRate={0}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        style={styles.scrollView}
      >
        {DEMOS.map((demo, index) => (
          <View key={index} style={styles.itemContainer}>
            <TouchableOpacity
              onPress={() => {
                if (demo.screenName) {
                  navigation.navigate(demo.screenName);
                }
              }}
            >
              <Animated.Image
                source={demo.background}
                style={[
                  styles.image,
                  {
                    transform: [
                      {
                        scale: scrollX.interpolate({
                          inputRange: [
                            (index - 1) * width,
                            index * width,
                            (index + 1) * width,
                          ],
                          outputRange: [0.8, 1, 0.8],
                          extrapolate: 'clamp',
                        }),
                      },
                    ],
                  },
                ]}
                resizeMode="cover"
              />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{demo.name}</Text>
                <Text style={styles.description}>{demo.description}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    marginTop: height / 40, // Changed from height / 3 to height / 4
  },
  itemContainer: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width * 0.9,
    height: width * 0.9,
    borderRadius: 16,
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  description: {
    marginTop: 10,
    fontSize: 23,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HomeScene;