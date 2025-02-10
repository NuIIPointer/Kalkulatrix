// assets
import { Email, LiveHelp } from '@mui/icons-material';

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'kontakt',
  title: 'Contact pages',
  type: 'group',
  children: [
    {
      id: 'kontakt',
      title: 'Kontakt',
      target: '_blank',
      type: 'item',
      url: '/kontakt',
      icon: Email
    },
    {
      id: 'faq',
      title: 'FAQ',
      target: '_blank',
      type: 'item',
      url: '/faq',
      icon: LiveHelp
    }
  ]
};

export default pages;
