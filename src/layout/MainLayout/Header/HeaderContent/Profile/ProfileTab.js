import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

// assets
import { LogoutOutlined, UserOutlined, WalletOutlined } from '@ant-design/icons';

// ==============================|| HEADER PROFILE - PROFILE TAB ||============================== //

const ProfileTab = ({ handleLogout }) => {
  const theme = useTheme();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const textColor = theme.palette.common.black;
  const textColorHover = textColor;
  const bgColor = theme.palette.common.white;
  const bgColorHover = theme.palette.primary[900];

  const listItemButtonStyle = {
    bgcolor: bgColor,
    color: textColor,
    padding: theme.shape.paddingButton,
    marginBottom: theme.spacing(1),
    borderRadius: theme.shape.borderRadius * 0.5,
    transition: '.25s',
    '&.Mui-selected': {
      bgcolor: bgColor,
      color: textColor,
      '&:hover': {
        bgcolor: bgColorHover,
        color: textColorHover,
        '&:after': {
          backgroundColor: theme.palette.primary[800],
          width: '6px',
          opacity: '1'
        }
      }
    },
    '&:hover': {
      bgcolor: bgColorHover,
      color: textColorHover
    }
  };

  return (
    <List component="nav" sx={{ p: 0, '& .MuiListItemIcon-root': { minWidth: 32, color: theme.palette.grey[500] } }}>
      <ListItemButton sx={listItemButtonStyle} selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 1)}>
        <ListItemIcon>
          <UserOutlined />
        </ListItemIcon>
        <ListItemText primary="Profil" />
      </ListItemButton>
      <ListItemButton sx={listItemButtonStyle} selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 4)}>
        <ListItemIcon>
          <WalletOutlined />
        </ListItemIcon>
        <ListItemText primary="Abonnement" />
      </ListItemButton>
      <ListItemButton sx={listItemButtonStyle} selected={selectedIndex === 2} onClick={handleLogout}>
        <ListItemIcon>
          <LogoutOutlined />
        </ListItemIcon>
        <ListItemText primary="Abmelden" />
      </ListItemButton>
    </List>
  );
};

ProfileTab.propTypes = {
  handleLogout: PropTypes.func
};

export default ProfileTab;
