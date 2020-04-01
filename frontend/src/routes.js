import Home from './components/Pages/Home/Home';
import AboutUs from './components/Pages/AboutUs/AboutUs';
import Gallery from './components/Pages/Gallery/Gallery';
import Donation from './components/Pages/Donation/Donation';
import Team from './components/Pages/Team/Team';
import Achievement from './components/Pages/Achievement/Achievement';
import ContactUs from './components/Pages/ContactUs/ContactUs';
import Missing from '../src/components/Pages/Missing/Missing';
import Faq from './components/Pages/Faq/Faq';
import Media from './components/Pages/Media/Media';
import JoinVrikshit from './components/Pages/JoinVrikshit/joinVrikshit';

export const AppRoutes = [
  { id: 1, path: '/', exact: true, component: Home },
  { id: 2, path: '/aboutus', exact: true, component: AboutUs },
  { id: 3, path: '/gallery', exact: true, component: Gallery },
  { id: 4, path: '/donation', exact: true, component: Donation },
  { id: 5, path: '/teamInformation', exact: true, component: Team },
  { id: 6, path: '/achievement', exact: true, component: Achievement },
  { id: 7, path: '/contactus', exact: true, component: ContactUs },
  { id: 13, path: '/faq', exact: true, component: Faq },
  { id: 14, path: '/Media', exact: true, component: Media },
  { id: 15, path: '/JoinVrikshit', exact: true, component: JoinVrikshit },
  { id: 8, exact: false, component: Missing }
];
