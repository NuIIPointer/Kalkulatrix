import PropTypes from 'prop-types';
import { useRef, useState, useContext } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase, ClickAwayListener, Grid, IconButton, Popper, Stack, Typography } from '@mui/material';

// project import
import Transitions from 'components/@extended/Transitions';
import ProfileTab from './ProfileTab';

// assets
import { SettingsOutlined, Logout } from '@mui/icons-material';
import { UserContext } from 'context/user';
import LayoutBox from 'components/LayoutBox/index';
import InitialsCircle from 'components/InitialsCircle/index';

// tab panel wrapper
function TabPanel({ children, value, index, ...other }) {
  return (
    <div role="tabpanel" hidden={value !== index} id={`profile-tabpanel-${index}`} aria-labelledby={`profile-tab-${index}`} {...other}>
      {value === index && children}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

// ==============================|| HEADER CONTENT - PROFILE ||============================== //

const Profile = () => {
  const theme = useTheme();
  const { user, logoutUser } = useContext(UserContext);

  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleLogout = async () => {
    setOpen(false);
    logoutUser();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 'auto' }}>
      <ButtonBase
        sx={{
          padding: 0,
          borderRadius: '50%',
          boxShadow: theme.customShadows.z3,
          transition: '.25s',
          '&:hover': { bgcolor: 'secondary.lighter', transform: 'scale(1.1)' }
        }}
        aria-label="open profile"
        ref={anchorRef}
        aria-controls={open ? 'profile-grow' : undefined}
        aria-haspopup="true"
        onClick={user.uid && handleToggle}
        href={!user.uid ? '/login' : undefined}
      >
        {/* <SettingsOutlined sx={{ color: open ? iconColorOpen : iconColorClosed }} /> */}
        <InitialsCircle
          name={user?.displayName || ''}
          sx={{
            backgroundColor: theme.palette.primary[500],
            height: theme.spacing(6),
            width: theme.spacing(6)
          }}
          fontSx={{ color: theme.palette.common.white }}
        />
      </ButtonBase>
      <Popper
        placement="bottom-end"
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        sx={{ zIndex: 1 }}
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 9]
              }
            }
          ]
        }}
      >
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={handleClose}>
            <Transitions type="fade" in={open} {...TransitionProps}>
              {open && (
                <Box
                  sx={{
                    width: 290,
                    minWidth: 290,
                    maxWidth: 290
                  }}
                >
                  <LayoutBox
                    sx={{ px: 3, py: 2, backgroundColor: theme.palette.common.white }}
                    elevation={0}
                    border={false}
                    content={false}
                  >
                    <Stack sx={{ pl: 2, pt: 2, pb: 3, mb: 2, borderBottom: `1px solid ${theme.palette.grey[500]}` }}>
                      <Typography variant="body2" sx={{ fontSize: '1.2rem' }}>
                        {user?.displayName}
                      </Typography>
                      <Typography variant="body1" color="textSecondary" sx={{ fontSize: '0.9rem', mt: -0.5 }}>
                        {user?.company}
                      </Typography>
                    </Stack>
                    {open && <ProfileTab handleLogout={handleLogout} />}
                  </LayoutBox>
                </Box>
              )}
            </Transitions>
          </ClickAwayListener>
        )}
      </Popper>
    </Box>
  );
};

export default Profile;
