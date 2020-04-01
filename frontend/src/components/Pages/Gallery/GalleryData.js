import {
  All,
  CLEANLINESS,
  PLANTATION,
  AWARENESS,
  HAPPINESS
} from './constants';
import image1 from '../../../assests/gallery/image1.jpeg';
import image2 from '../../../assests/gallery/image2.jpeg';
import image3 from '../../../assests/gallery/image3.jpeg';
import image4 from '../../../assests/gallery/image4.jpeg';
import image5 from '../../../assests/gallery/image5.jpeg';

export const GalleryData = [
  {
    id: 1,
    mainHeading: 'Cleanliness Drive',
    subHeading: 'Go Clean',
    className: 'two-third animate-box backgroundImgUrl1',
    path: '/gallery/cleanDrive'
  },
  {
    id: 2,
    mainHeading: 'Plantaion Drive',
    subHeading: 'Go Green',
    className: 'one-third animate-box backgroundImgUrl2',
    path: '/gallery/greenDrive'
  },
  {
    id: 3,
    mainHeading: 'Awareness Drive',
    subHeading: 'Spread Awareness',
    className: 'one-third animate-box backgroundImgUrl3',
    path: '/gallery/awarenessDrive'
  },
  {
    id: 4,
    mainHeading: 'We Bring Happiness',
    subHeading: 'Spread Love',
    className: 'two-third animate-box backgroundImgUrl4',
    path: '/gallery/happinessDrive'
  }
];

export const allImages = [
  {
    id: 1,
    image: image1,
    alt: 'image1',
    category: CLEANLINESS
  },
  {
    id: 2,
    image: image2,
    alt: 'image2',
    category: PLANTATION
  },
  {
    id: 3,
    image: image3,
    alt: 'image4',
    category: AWARENESS
  },
  {
    id: 4,
    image: image4,
    alt: 'image4',
    category: HAPPINESS
  },
  {
    id: 5,
    image: image5,
    alt: 'image5',
    category: CLEANLINESS
  }
];

export const GalleryTabs = [
  {
    id: All,
    Name: All
  },
  {
    id: CLEANLINESS,
    Name: CLEANLINESS
  },
  {
    id: PLANTATION,
    Name: PLANTATION
  },
  {
    id: AWARENESS,
    Name: AWARENESS
  },
  {
    id: HAPPINESS,
    Name: HAPPINESS
  }
];
