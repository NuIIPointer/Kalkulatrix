import PropTypes from 'prop-types';
import { forwardRef, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { ListItemButton, ListItemIcon, ListItem } from '@mui/material';

// ==============================|| NAVIGATION - LIST ITEM ||============================== //

const NavItem = ({ item, level }) => {
  const theme = useTheme();
  const { pathname } = useLocation();
  // const { drawerOpen } = useSelector((state) => state.menu);
  const drawerOpen = true;
  const isActive = useMemo(() => {
    return pathname === item.url || (item.matchingUrlRegexp && pathname.match(item.matchingUrlRegexp));
  }, [pathname, item.url, item.matchingUrlRegexp]);

  let itemTarget = '_self';
  if (item.target) {
    itemTarget = '_blank';
  }

  let listItemProps = { component: forwardRef((props, ref) => <Link ref={ref} {...props} to={item.url} target={itemTarget} />) };
  if (item?.external) {
    listItemProps = { component: 'a', href: item.url, target: itemTarget };
  }

  const Icon = item.icon;
  const itemIcon = item.icon ? <Icon style={{ fontSize: drawerOpen ? '1rem' : '1.25rem' }} /> : false;

  const textColor = isActive ? theme.palette.common.white : theme.palette.common.black;
  const textColorHover = isActive ? theme.palette.common.white : theme.palette.common.black;
  const iconColor = isActive ? theme.palette.common.white : theme.palette.primary.main;
  const bgColor = isActive ? theme.palette.primary[500] : 'transparent';
  const bgColorHover = isActive ? theme.palette.primary[400] : theme.palette.grey[300];
  const isSubItem = level === 2;

  return (
    <ListItem sx={{ padding: 0 }} className={isActive ? 'isActive' : undefined}>
      <ListItemButton
        {...listItemProps}
        disabled={item.disabled}
        selected={isActive}
        sx={{
          bgcolor: bgColor,
          color: textColor,
          padding: isSubItem ? 1 : theme.shape.paddingButton,
          marginTop: item.isSubItem ? 0 : theme.spacing(-1),
          marginBottom: theme.spacing(1),
          borderRadius: theme.shape.borderRadius / 7,
          transition: '.25s',
          fontSize: isSubItem ? '1rem' : '1.2rem',
          lineHeight: '1.3',
          '&:after': {
            content: '""',
            height: '50%',
            width: '0px',
            opacity: '0',
            position: 'absolute',
            top: '50%',
            right: '0',
            transform: 'translateY(-50%)',
            backgroundColor: theme.palette.secondary.main,
            borderTopLeftRadius: '3px',
            borderBottomLeftRadius: '3px',
            transition: '.25s'
          },
          '&.Mui-selected': {
            bgcolor: bgColor,
            color: textColor,
            '&:after': {
              width: '4px',
              opacity: '1'
            },
            '&:hover': {
              bgcolor: bgColorHover,
              color: textColorHover,
              '&:after': {
                backgroundColor: theme.palette.secondary.main,
                width: '6px',
                opacity: '1'
              }
            }
          },
          '&:hover': {
            bgcolor: bgColorHover,
            color: textColorHover,
            '&:after': {
              width: '3px',
              opacity: '0.5'
            }
          },
          ...(isSubItem ? { color: 'red' } : {})
        }}
      >
        {itemIcon && (
          <ListItemIcon
            sx={{
              color: iconColor,
              marginRight: 1
            }}
          >
            {itemIcon}
          </ListItemIcon>
        )}
        {item.title}
      </ListItemButton>
    </ListItem>
  );
};

NavItem.propTypes = {
  item: PropTypes.object,
  level: PropTypes.number
};

export default NavItem;
