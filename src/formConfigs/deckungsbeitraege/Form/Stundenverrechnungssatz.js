import { useFormikContext } from 'formik';
import { Grid, Box, Typography, Stack, useTheme } from '@mui/material';
import FormSection from 'components/formComponents/FormSection/index';
import formFloat from 'utils/formUtils/formFloat';
import StatCard from 'components/StatCard/index';
import LayoutBox from 'components/LayoutBox/index';
import formattedNumber from 'utils/formUtils/formattedNumber';

const DGemeinkostenPlangewinn = () => {
  const { values } = useFormikContext();
  const theme = useTheme();

  const chartValues = [
    { value: values.std_verrechnungssaetze_G10, title: 'Personalkosten pro Stunde', color: theme.palette.primary[200] },
    { value: values.std_verrechnungssaetze_G11, title: 'Betriebskosten pro Stunde', color: theme.palette.secondary[400] },
    // { value: values.std_verrechnungssaetze_G12, title: 'Selbstkosten pro Stunde', color: theme.palette.primary[800] },
    { value: values.std_verrechnungssaetze_G13, title: 'Plangewinnsatz pro Stunde', color: theme.palette.primary[600] }
  ];

  return (
    <>
      {/* <FormSection
        collapsable={false}
        backgroundColor={theme.palette.primary.main}
        title={
          <>
            <Stack flexDirection="row" justifyContent="space-between" width="100%" maxWidth="700px">
              <Typography variant="h2" component="span" style={{ color: 'white' }}>
                Stundenverrechnungssatz (ohne USt.):
              </Typography>
              <Typography variant="h2" component="span" style={{ color: 'white' }}>
                {formFloat(values.std_verrechnungssaetze_G14 || 0, 2)
                  .toString()
                  .replace('.', ',')}
                €
              </Typography>
            </Stack>
            <Typography variant="body1" component="span" style={{ color: 'white' }}>
              Stundenverrechnungssatz (mit USt.):{' '}
              {formFloat((values.std_verrechnungssaetze_G14 || 0) * 1.19, 2)
                .toString()
                .replace('.', ',')}
              €
            </Typography>
          </>
        }
      /> */}
      <FormSection collapsable={false} title="Stundensatz">
        <Grid container spacing={2} sx={{ mt: 0 }}>
          <Grid item xs={12} sm={6}>
            <LayoutBox
              sx={{
                padding: theme.shape.paddingBoxSmall,
                boxShadow: '0',
                height: '100%'
              }}
            >
              <Typography
                component="p"
                textAlign="center"
                mt={{ xs: 1, sm: 2, xl: 3 }}
                mb={-1}
                fontSize={{ xs: '2rem', xl: '3rem' }}
                fontWeight="700"
              >
                {formFloat(values.std_verrechnungssaetze_G14 || 0, 2)
                  .toString()
                  .replace('.', ',')}
                €
              </Typography>
              <Typography component="p" textAlign="center" mb={{ xs: 2, sm: 3, lg: 4, xl: 5 }} fontSize={{ xs: '1rem', xl: '1.1rem' }}>
                {formFloat((values.std_verrechnungssaetze_G14 || 0) * 1.19, 2)
                  .toString()
                  .replace('.', ',')}
                € (inkl. USt.)
              </Typography>
              <Stack direction="row" justifyContent="space-between" gap={1} mb={1}>
                {chartValues.map((item, index) => (
                  <Box
                    key={item.title}
                    sx={{
                      flexBasis: item.value || 1,
                      minWidth: 'min-content',
                      flexGrow: item.value || 1,
                      display: 'flex',
                      justifyContent: 'flex-start',
                      position: 'relative' // Add position relative to parent
                    }}
                  >
                    <Box
                      sx={{
                        ml: 0.25,
                        borderRadius: '4px',
                        px: 1,
                        py: 0,
                        border: `1px solid ${theme.palette.grey[300]}`,
                        backgroundColor: item.color,
                        color: theme.palette.getContrastText(item.color),
                        fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                        position: 'relative', // Add position relative to child
                        ':after': {
                          content: '""',
                          display: 'block',
                          width: 0,
                          height: 0,
                          borderLeft: '7px solid transparent',
                          borderRight: '7px solid transparent',
                          borderTop: `7px solid ${item.color}`, // Change to borderTop
                          position: 'absolute',
                          bottom: '-5px',
                          left: index === 0 ? '0%' : index === chartValues.length - 1 ? '100%' : '50%', // Align to the bottom left
                          transform: index === 0 ? '' : index === chartValues.length - 1 ? 'translateX(-100%)' : 'translateX(-50%)' // Remove translateX
                        }
                      }}
                    >
                      {formFloat(item.value || 0, 2)
                        .toString()
                        .replace('.', ',')}
                      €
                    </Box>
                  </Box>
                ))}
              </Stack>
              <Stack direction="row" justifyContent="space-between" gap={1}>
                {chartValues.map((item) => (
                  <Box
                    key={item.title}
                    sx={{
                      flexBasis: item.value || 1,
                      flexGrow: item.value || 1,
                      height: theme.spacing(1),
                      backgroundColor: item.color,
                      borderRadius: '500px'
                    }}
                  />
                ))}
              </Stack>

              <Stack direction="row" justifyContent="space-between" gap={1} mt={{ xs: 2, sm: 3, xl: 4 }} flexWrap="wrap" px={1}>
                {chartValues.map((item) => (
                  <Stack
                    key={item.title}
                    direction="row"
                    justifyContent="flex-start"
                    sx={{
                      ':before': {
                        content: '""',
                        backgroundColor: item.color,
                        height: theme.spacing(1.5),
                        width: theme.spacing(1.5),
                        borderRadius: '500px',
                        flexShrink: 0,
                        mt: '5px',
                        mr: theme.spacing(1)
                      }
                    }}
                  >
                    <Typography variant="body">{item.title}</Typography>
                  </Stack>
                ))}
              </Stack>
            </LayoutBox>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2} sx={{ height: 'calc(100% + 16px)' }}>
              <Grid item xs={12} sm={6} sx={{ flexGrow: 1 }}>
                <StatCard
                  title={'Personalkosten pro Stunde'}
                  value={`${formattedNumber((values.std_verrechnungssaetze_G10 || 0) * 1.19, { decimals: 2 })
                    .toString()
                    .replace('.', ',')}€`}
                />
              </Grid>
              <Grid item xs={12} sm={6} sx={{ flexGrow: 1 }}>
                <StatCard
                  title={'Betriebskostensatz pro Stunde'}
                  value={`${formattedNumber((values.std_verrechnungssaetze_G11 || 0) * 1.19, { decimals: 2 })
                    .toString()
                    .replace('.', ',')}€`}
                />
              </Grid>
              <Grid item xs={12} sm={6} sx={{ flexGrow: 1 }}>
                <StatCard
                  title={'Selbstkosten pro Stunde'}
                  value={`${formattedNumber((values.std_verrechnungssaetze_G12 || 0) * 1.19, { decimals: 2 })
                    .toString()
                    .replace('.', ',')}€`}
                />
              </Grid>
              <Grid item xs={12} sm={6} sx={{ flexGrow: 1 }}>
                <StatCard
                  title={'Plangewinnsatz pro Stunde'}
                  value={`${formattedNumber((values.std_verrechnungssaetze_G13 || 0) * 1.19, { decimals: 2 })
                    .toString()
                    .replace('.', ',')}€`}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* <ReadOnlyBox title="Alle Angaben im Durchschnitt, in EUR">
          <Grid
            container
            columnSpacing={{ xs: 2, sm: 4, lg: 6 }}
            rowSpacing={{ xs: 1, lg: 1.5 }}
            sx={{ mt: { xs: 1 } }}
            alignItems="flex-end"
          >
            <Grid item xs={12} sm={6}>
              <FastField name="std_verrechnungssaetze_G8">
                {({ field, meta }) => (
                  <CustomTextField
                    {...field}
                    value={formFloat(field.value, 2)}
                    label="Brutto-Stundenentgelt (inkl. Zulagen)"
                    error={meta?.touched && Boolean(meta.error)}
                    helperText={meta?.touched && meta.error}
                    sx={{ mb: 2 }}
                    InputProps={{
                      readOnly: true
                    }}
                    type="number"
                  />
                )}
              </FastField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FastField name="std_verrechnungssaetze_G9">
                {({ field, meta }) => (
                  <CustomTextField
                    {...field}
                    value={formFloat(field.value, 2)}
                    label={`Personalnebenkosten (${formFloat(values.annahmen_I46, 1)}%)`}
                    error={meta?.touched && Boolean(meta.error)}
                    helperText={meta?.touched && meta.error}
                    sx={{ mb: 2 }}
                    InputProps={{
                      readOnly: true
                    }}
                    type="number"
                  />
                )}
              </FastField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FastField name="std_verrechnungssaetze_G10">
                {({ field, meta }) => (
                  <CustomTextField
                    {...field}
                    value={formFloat(field.value, 2)}
                    label="Personalkosten pro Stunde"
                    error={meta?.touched && Boolean(meta.error)}
                    helperText={meta?.touched && meta.error}
                    sx={{ mb: 2 }}
                    InputProps={{
                      readOnly: true
                    }}
                    type="number"
                  />
                )}
              </FastField>
            </Grid>
            <Grid item xs={12}>
              &nbsp;
            </Grid>
            <Grid item xs={12} sm={6}>
              <FastField name="std_verrechnungssaetze_G11">
                {({ field, meta }) => (
                  <CustomTextField
                    {...field}
                    value={formFloat(field.value, 2)}
                    label="Betriebskostensatz pro Stunde"
                    error={meta?.touched && Boolean(meta.error)}
                    helperText={meta?.touched && meta.error}
                    sx={{ mb: 2 }}
                    InputProps={{
                      readOnly: true
                    }}
                    type="number"
                  />
                )}
              </FastField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FastField name="std_verrechnungssaetze_G12">
                {({ field, meta }) => (
                  <CustomTextField
                    {...field}
                    value={formFloat(field.value, 2)}
                    label="Selbstkosten pro Stunde"
                    error={meta?.touched && Boolean(meta.error)}
                    helperText={meta?.touched && meta.error}
                    sx={{ mb: 2 }}
                    InputProps={{
                      readOnly: true
                    }}
                    type="number"
                  />
                )}
              </FastField>
            </Grid>
            <Grid item xs={12}>
              &nbsp;
            </Grid>
            <Grid item xs={12} sm={6}>
              <FastField name="std_verrechnungssaetze_G13">
                {({ field, meta }) => (
                  <CustomTextField
                    {...field}
                    value={formFloat(field.value, 2)}
                    label="Plangewinnsatz pro Stunde"
                    error={meta?.touched && Boolean(meta.error)}
                    helperText={meta?.touched && meta.error}
                    sx={{ mb: 2 }}
                    InputProps={{
                      readOnly: true
                    }}
                    type="number"
                  />
                )}
              </FastField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FastField name="std_verrechnungssaetze_G15">
                {({ field, meta }) => (
                  <CustomTextField
                    {...field}
                    value={formFloat(field.value, 0)}
                    label="Durchschnittlicher Zuschlag Personalkosten (in %)"
                    error={meta?.touched && Boolean(meta.error)}
                    helperText={meta?.touched && meta.error}
                    sx={{ mb: 2 }}
                    InputProps={{
                      readOnly: true
                    }}
                    type="number"
                  />
                )}
              </FastField>
            </Grid>
          </Grid>
        </ReadOnlyBox> */}
      </FormSection>
    </>
  );
};

export default DGemeinkostenPlangewinn;
