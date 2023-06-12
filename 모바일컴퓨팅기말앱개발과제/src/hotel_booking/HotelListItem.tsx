import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Image, Animated, ListRenderItemInfo, useWindowDimensions } from 'react-native';
import { RatingBar } from '@aashu-dubey/react-native-rating-bar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { HotelListType } from './model/hotel_list_data';

interface Props {
  data: ListRenderItemInfo<HotelListType>;
}

const HotelListItem: React.FC<Props> = ({ data }) => {
  const { item, index } = data;

  const { width } = useWindowDimensions();

  const translateY = useRef<Animated.Value>(new Animated.Value(50)).current;
  const opacity = useRef<Animated.Value>(new Animated.Value(0)).current;

  const imageSize = width - 48;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: 400,
        delay: index * (400 / 3),
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 400,
        delay: index * (400 / 3),
        useNativeDriver: true,
      }),
    ]).start();
  });

  return (
    <Animated.View style={[styles.container, { opacity, transform: [{ translateY }] }]}>
      <View style={styles.imageContainer}>
        <Image
          style={{ height: imageSize * 2, width: imageSize }}
          source={item.imagePath}
          resizeMode="stretch"
        />
        <Icon
          style={{ position: 'absolute', right: 0, padding: 24 }}
          name="favorite-border"
          size={24}
          color="red"
        />
      </View>
      <View style={{ padding: 8, paddingHorizontal: 16 }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text style={styles.title}>{item.titleTxt}</Text>
          <Text style={styles.perNightPrice}>${item.perNight}</Text>
        </View>
      </View>
    </Animated.View>
  );
};

const textStyle = {
  color: 'rgba(128, 128, 128, 0.6)',
  fontFamily: 'WorkSans-Regular',
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    marginVertical: 12,
    marginHorizontal: 24,
    borderRadius: 16,
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },
  imageContainer: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: 'hidden',
  },
  title: {
    flex: 1,
    color: 'white',
    fontSize: 22,
    fontFamily: 'WorkSans-SemiBold',
  },
  subText: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 4,
    marginTop: 4,
  },
  perNightPrice: {
    color: 'black',
    fontSize: 22,
    fontFamily: 'WorkSans-SemiBold',
  },
  perNightText: { ...textStyle, color: 'black', marginTop: 4 },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 4,
    alignItems: 'center',
  },
  review: {
    ...textStyle,
    marginLeft: 8,
  },
});

export default HotelListItem;
