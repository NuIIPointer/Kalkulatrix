import { Grid, Box } from '@mui/material/index';
import { useTheme } from '@mui/material/styles';

const AnimatedSection = ({ isActive, firstContent, imageContent, reverse }) => {
    const theme = useTheme();

  return (
    <div>
      <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 1.5 }} sx={{ height: '100%' }}>
        <Grid item xs={12} md={6} sx={{ order: reverse ? '2' : undefined, alignItems: 'center', display: 'flex' }}>
          <Box>{firstContent}</Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <div
            style={{
              overflow: 'hidden',
              borderRadius: theme.spacing(theme.shape.borderRadiusBox),
              display: 'inline-flex'
            }}
          >
            {imageContent}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AnimatedSection;
