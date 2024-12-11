// assets
import { Person, CalendarMonth, WalletOutlined, Email } from '@mui/icons-material';

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'manage',
  title: 'Management pages',
  type: 'group',
  children: [
    {
      id: 'billing',
      title: 'Abonnement',
      type: 'item',
      url: '/office/billing',
      icon: WalletOutlined
    },
    {
      id: 'beratungstermin',
      title: 'Beratungstermine',
      type: 'item',
      url: '/office/events',
      icon: CalendarMonth
    },
    {
      id: 'profil',
      title: 'Profil',
      type: 'item',
      url: '/office/profile',
      icon: Person
    }
  ]
};

export default pages;
