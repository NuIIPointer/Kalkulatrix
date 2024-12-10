import PropTypes from 'prop-types';

// material-ui
import { List, ListItem, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// project import
import NavItem from './NavItem';

// ==============================|| NAVIGATION - LIST GROUP ||============================== //

const NavGroup = ({ item }) => {
  const theme = useTheme();
  const navItems = item.children?.map((menuItem) => {
    const subItems = menuItem.children?.map((subItem) => {
      return <NavItem key={subItem.id} item={subItem} level={2} />;
    });

    return (
      <>
        <NavItem key={menuItem.id} item={menuItem} level={1} />
        {subItems && (
          <ListItem
            sx={{
              padding: 0,
              display: 'none',
              '&:has(.isActive)': {
                display: 'block'
              }
            }}
          >
            <Box
              sx={{
                pl: 4.5,
                pt: 3,
                mb: 2,
                mt: -2,
                boxShadow: 'none',
                borderTop: 'none',
                borderTopRightRadius: '0',
                borderTopLeftRadius: '0',
                borderBottomRightRadius: theme.shape.borderRadius,
                borderBottomLeftRadius: theme.shape.borderRadius
              }}
              as="ul"
            >
              {subItems}
            </Box>
          </ListItem>
        )}
      </>
    );
  });

  return <List sx={{ mb: 2, py: 0, zIndex: 0 }}>{navItems}</List>;
};

NavGroup.propTypes = {
  item: PropTypes.object
};

export default NavGroup;
