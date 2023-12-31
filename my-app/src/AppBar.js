import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import DiscordButton from './DisordButton';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      {new Date().getFullYear() + ' '}
      {'Hardened Games LLC. '}
      {'All Rights Reserved.'}
    </Typography>
  );
}

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: [
      '10 users included',
      '2 GB of storage',
      'Help center access',
      'Email support',
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];

const footers = [
  {
    title: '',
    description: [''],
  },
    {
    title: '',
    description: [''],
  },
  {
    title: 'Our Company',
    description: ['About Us', 'Meet the Team', 'Our Projects','Contact us'],
  },
    {
    title: 'Our Socials',
    description: ['Twitter', 'YouTube', 'Reddit','Discord'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
    {
    title: '',
    description: [''],
  },
    {
    title: '',
    description: [''],
  },
];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function Pricing() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ 
          borderBottom: (theme) => 
              `1px solid ${theme.palette.divider}`,

          backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[900], 
        }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h4" color="inherit" align="left" noWrap sx={{ flexGrow: 1 }}>
            Hardened Games
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              About Us
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Our Games
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Support
            </Link>
          </nav>
          {/*
          <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>
          */}
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 5, pb: 1 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="Orange"
          gutterBottom
        >
          Under Construction!
        </Typography>
        <Typography variant="h7" align="center" color="text.primary" component="p">
          The Hardened Games website is currently under construction!
        </Typography>
      </Container>
      <Container
        align="center"
      >
        <Typography variant= "h7" align="center" color="text.primary" component="p" sx={{pt: 5, pb: 1 }}>
          We welcome you to join the Obscure Depths community discord by clicking below!
        </Typography>
        <DiscordButton />
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {/*tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
                    ))*/}
        </Grid>
      </Container>
      {/* Footer */}
      <Container
        maxWidth="xxl"
        component="footer"
        sx={{
          py: 3,
            px: 2,
            mt: 'auto',
            borderTop: (theme) => 
              `1px solid ${theme.palette.divider}`,
            
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[900],
        }}
      >
        {/* 
        <Grid container spacing={0} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={1} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle2" color="text.secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        */}
        <Copyright sx={{ mt: 0 }} />
      </Container>
    </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}