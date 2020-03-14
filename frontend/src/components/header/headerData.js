import {
  faFacebook,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

export const NavBarData = [
  { id: 1, navBar: 'Home', path: '/' },
  { id: 2, navBar: 'About Us', path: '/aboutus' },
  { id: 3, navBar: 'Gallery', path: '/gallery' },
  // { id: 4, navBar: 'Donation', path: '/donation' },
  { id: 5, navBar: 'Team', path: '/teamInformation' },
  // { id: 6, navBar: 'Achievement', path: '/achievement' },
  { id: 7, navBar: 'Contact Us', path: '/contactus' },
  { id: 8, navBar: 'Media', path: '/Media' }
];

export const TopHeaderLink = [
  { id: 1, TopHeaderLink: '/Faq', TopHeaderLinkName: 'FAQ' },
  { id: 2, TopHeaderLink: '#', TopHeaderLinkName: 'Forum' },
  { id: 3, TopHeaderLink: '/contactus', TopHeaderLinkName: 'Contact' }
];

export const SocialMedia = [
  { id: 1, link: '', IclassName: faFacebook },
  { id: 2, link: '', IclassName: faTwitter },
  { id: 3, link: '', IclassName: faInstagram }
];
