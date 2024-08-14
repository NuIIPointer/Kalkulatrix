import { Stack, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';
import TeaserCard from 'components/TeaserCard/index';

const DashboardCard = ({ icon, title, subTitle, value, valueChanged, changedUpDown = 'up', sx }) => {
  const Icon = icon;
  const theme = useTheme();
  const changedUp = changedUpDown === 'up';
  const ArrowIcon = changedUp ? ArrowUpward : ArrowDownward;
  const iconBoxSx = {
    backgroundColor: theme.palette.primary[900],
    color: theme.palette.primary.dark,
    borderRadius: { xs: theme.spacing(0.5), sm: theme.spacing(1.75) },
    height: { xs: theme.spacing(4), md: theme.spacing(5.5) },
    width: { xs: theme.spacing(4), md: theme.spacing(5.5) },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
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
    marginRight: { xs: theme.spacing(1), sm: theme.spacing(3) },
    lineHeight: '1.1em',
    my: { xs: 1, lg: 2 },
    fontSize: {
      xs: '1.5rem',
      sm: '2rem',
      md: '2.3rem'
    }
  };

  return (
    <TeaserCard sx={sx}>
      <Stack
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'flex-start', md: 'center' }}
        justifyContent="flex-start"
        gap={{ xs: 0.5, sm: 1, md: 1.5, lg: 2 }}
      >
        <Box sx={iconBoxSx}>
          <Icon sx={{ fontSize: { xs: 16, sm: 18, md: 22, lg: 26 } }} />
        </Box>
        <Typography component="h3" sx={{ fontWeight: 'bold', fontSize: { xs: 16, md: 18 }, marginTop: { sm: theme.spacing(0.5) }, lineHeight: '1.1em' }}>
          {title}
        </Typography>
      </Stack>
      <Stack sx={{ marginLeft: { sm: theme.spacing(1) } }}>
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
    </TeaserCard>
  );
};

export default DashboardCard;
