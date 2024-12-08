import PropTypes from 'prop-types';

// material-ui
import { List, ListItem } from '@mui/material';
// import { useTheme } from '@mui/material/styles';

// project import
import NavItem from './NavItem';
import LayoutBox from 'components/LayoutBox/index';

// ==============================|| NAVIGATION - LIST GROUP ||============================== //

const NavGroup = ({ item }) => {
  // const theme = useTheme();
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
              padding: 0
            }}
          >
            <LayoutBox sx={{ padding: 2, pb: 0, mb: 2 }} as="ul">
              {subItems}
            </LayoutBox>
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
