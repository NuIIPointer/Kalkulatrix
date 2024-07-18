import { Stack, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';

const DashboardCard = ({ icon, title, subTitle, value, valueChanged, changedUpDown = 'up' }) => {
  const Icon = icon;
  const theme = useTheme();
  const changedUp = changedUpDown === 'up';
  const ArrowIcon = changedUp ? ArrowUpward : ArrowDownward;
  const outerBoxStyle = {
    backgroundColor: theme.palette.common.white,
    borderRadius: theme.shape.borderRadiusBox,
    boxShadow: theme.customShadows.z1,
    padding: theme.spacing(2)
  };
  const iconBoxSx = {
    backgroundColor: theme.palette.primary[900],
    color: theme.palette.primary.dark,
    borderRadius: theme.spacing(1.75),
    height: { xs: theme.spacing(4), md: theme.spacing(5.5) },
    width: { xs: theme.spacing(4), md: theme.spacing(5.5) },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing(2)
  };
  const changePillSx = {
    color: changedUp ? theme.palette.success.dark : theme.palette.error.dark,
    backgroundColor: changedUp ? theme.palette.success[100] : theme.palette.error[100],
    borderRadius: '10000px',
    padding: `${theme.spacing(0.15)} ${theme.spacing(1.5)}`,
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(0.5)
  };
  const valueTextSx = {
    fontWeight: 600,
    fontSize: '2.5rem',
    marginRight: { xs: theme.spacing(1), sm: theme.spacing(3) }
  };

  return (
    <Box sx={outerBoxStyle}>
      <Stack flexDirection="row" alignItems="center" justifyContent="flex-start">
        <Box sx={iconBoxSx}>
          <Icon sx={{ fontSize: { xs: 18, md: 22, lg: 26 } }} />
        </Box>
        <Typography sx={{ fontWeight: 'bold', fontSize: { xs: 16, md: 18 } }}>{title}</Typography>
      </Stack>
      <Stack sx={{ marginLeft: theme.spacing(1) }}>
        <Stack flexDirection="row" alignItems="center">
          <Typography sx={valueTextSx}>{value}</Typography>
          {valueChanged && (
            <Box sx={changePillSx}>
              <ArrowIcon sx={{ fontSize: 14, marginLeft: theme.spacing(-0.25) }} />
              {valueChanged}
            </Box>
          )}
        </Stack>
        {subTitle && <Typography sx={{ fontSize: { xs: 14, md: 15 }, opacity: 0.5 }}>{subTitle}</Typography>}
      </Stack>
    </Box>
  );
};

export default DashboardCard;
