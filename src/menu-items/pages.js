// assets
import { BackupTableOutlined } from '@mui/icons-material';

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'authentication',
  title: 'Stundensatzkalkulator',
  type: 'group',
  children: [
    {
      id: 'forms',
      title: 'Stundensatzkalkulator',
      type: 'item',
      url: '/office/form/overview',
      matchingUrlRegexp: /\/form\/[^/]{20,}\/[^/]*$/,
      icon: BackupTableOutlined,
      // children: [
      //   {
      //     id: 'annahmen',
      //     title: 'Allgemeine Unternehmensangaben',
      //     type: 'subitem',
      //     url: '/office/form/{form}/annahmen',
      //     matchingUrlRegexp: /\/form\/[^/]{20,}\/pk_produktiv$/
      //   },
      //   {
      //     id: 'pk_produktiv',
      //     title: 'Personalkosten produktive Abteilungen',
      //     type: 'subitem',
      //     url: '/office/form/{form}/pk_produktiv',
      //     matchingUrlRegexp: /\/form\/[^/]{20,}\/pk_produktiv$/
      //   }
      // ]
    },
    // {
    //   id: 'forms',
    //   title: 'PK-Produktiv',
    //   type: 'item',
    //   url: '/office/form/*/pk_produktiv',
    //   matchingUrlRegexp: /\/form\/[^/]{20,}\/[^/]*$/,
    //   isSubItem: true,
    //   icon: () => <></>
    // },
    {
      id: 'formsAdmin',
      title: 'Admin Dashboard',
      type: 'item',
      url: '/office/admin/dashboard',
      requiresAdmin: true,
      icon: BackupTableOutlined
    }
  ]
};

export default pages;
