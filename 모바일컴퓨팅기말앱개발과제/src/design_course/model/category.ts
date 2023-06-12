import { AppImages } from '../../assets';

export interface CategoryType {
  id: number;
  imagePath: any;
  title: string;
  lessonCount: number;
  money: number;
  rating: number;
}

export const CATEGORY_LIST: CategoryType[] = [
  {
    id: 0,
    imagePath: AppImages.interFace1,
    title: 'Pinkie Shades',
    lessonCount: 24,
    money: 25,
    rating: 4.3,
  },
  {
    id: 1,
    imagePath: AppImages.interFace2,
    title: 'Dottie Scarf',
    lessonCount: 22,
    money: 18,
    rating: 4.6,
  },
  {
    id: 2,
    imagePath: AppImages.interFace1,
    title: 'Blue Moon Shades',
    lessonCount: 24,
    money: 25,
    rating: 4.3,
  },
  {
    id: 3,
    imagePath: AppImages.interFace2,
    title: 'Blue Silk Scarf',
    lessonCount: 22,
    money: 18,
    rating: 4.6,
  },
];

export const POPULAR_COURSE_LIST: CategoryType[] = [
  {
    id: 0,
    imagePath: AppImages.interFace3,
    title: 'PUPPER',
    lessonCount: 12,
    money: 25,
    rating: 4.8,
  },
  {
    id: 1,
    imagePath: AppImages.interFace4,
    title: 'PERESIO',
    lessonCount: 28,
    money: 208,
    rating: 4.9,
  },
  {
    id: 2,
    imagePath: AppImages.interFace5,
    title: 'FLORALIA',
    lessonCount: 12,
    money: 25,
    rating: 4.8,
  },
  {
    id: 3,
    imagePath: AppImages.interFace6,
    title: 'CANIYON',
    lessonCount: 28,
    money: 208,
    rating: 4.9,
  },
];
