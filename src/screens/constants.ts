import {TurboModuleRegistry} from 'react-native/types';

export let interests = [
  {
    id: 1,
    name: 'Gaming',
    selected: true,
    image: require('../assets/img/gaming.png'),
  },
  {
    id: 2,
    name: 'Dancing',
    image: require('../assets/img/dancing.png'),
  },
  {
    id: 3,
    name: 'Language',
    selected: true,
    image: require('../assets/img/language.png'),
  },
  {
    id: 4,
    name: 'Music',
    image: require('../assets/img/music.png'),
  },
  {
    id: 5,
    name: 'Movie',
    selected: true,
    image: require('../assets/img/movie.png'),
  },
  {
    id: 7,
    name: 'Photography',
    image: require('../assets/img/photography.png'),
  },
  {
    id: 8,
    name: 'Architecture',
    image: require('../assets/img/architecture.png'),
  },
  {
    id: 9,
    name: 'Fashion',
    image: require('../assets/img/fashion.png'),
  },
  {
    id: 10,
    name: 'Book',
    image: require('../assets/img/couple.png'),
  },
  {
    id: 11,
    name: 'Writing',

    image: require('../assets/img/couple.png'),
  },
  {
    id: 12,
    name: 'Nature',
    image: require('../assets/img/couple.png'),
  },
  {
    id: 13,
    name: 'Painiting',
    image: require('../assets/img/couple.png'),
  },
  {
    id: 14,
    name: 'Football',
    image: require('../assets/img/couple.png'),
  },
  {
    id: 15,
    name: 'People',
    image: require('../assets/img/couple.png'),
  },
  {
    id: 16,
    name: 'Animals',
    image: require('../assets/img/couple.png'),
  },
  {
    id: 17,
    name: 'Gym & Fitness',
    image: require('../assets/img/couple.png'),
  },
];

export let myInterests = [
  {
    id: 1,
    name: 'Gaming',
    selected: true,
    image: require('../assets/img/gaming.png'),
  },
  {
    id: 2,
    name: 'Dancing',
    image: require('../assets/img/dancing.png'),
  },
  {
    id: 3,
    name: 'Language',
    selected: true,
    image: require('../assets/img/language.png'),
  },
  {
    id: 4,
    name: 'Music',
    image: require('../assets/img/music.png'),
  },
  {
    id: 5,
    name: 'Movie',
    selected: true,
    image: require('../assets/img/movie.png'),
  },
];

const subDay = (date: Date, days: number) => {
  const result = new Date(date);
  result.setDate(result.getDate() - days);
  return result;
};
export let stories = [
  {
    id: 1,
    name: 'John',
    timeAgo: subDay(new Date(), 10),
    story: 'Cute Days with her! no we can not do this',
    image: require('../assets/img/profile1.jpg'),
  },
  {
    id: 2,
    name: 'Bob',
    timeAgo: subDay(new Date(), 100),
    story: 'Cute Days with her! no we can not do this',
    image: require('../assets/img/profile2.jpg'),
  },
  {
    id: 3,
    name: 'Cat',
    timeAgo: subDay(new Date(), 30),
    story: 'Cute Days with her! no we can not do this',
    image: require('../assets/img/profile1.jpg'),
  },
  {
    id: 4,
    name: 'Dog',
    timeAgo: subDay(new Date(), 785),
    story: 'Cute Days with her! no we can not do this',
    image: require('../assets/img/profile2.jpg'),
  },
  {
    id: 5,
    name: 'Roger',
    timeAgo: subDay(new Date(), 365),
    story: 'Cute Days with her! no we can not do this',
    image: require('../assets/img/profile2.jpg'),
  },
];
