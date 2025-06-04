import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Box } from '@mui/material';

function Destinations() {
  const destinations = [
    {
      title: 'Bali, Indonesia',
      image: 'https://source.unsplash.com/random/800x600/?bali',
      description: 'Tropical paradise with beautiful beaches and rich culture.',
      price: '$899'
    },
    {
      title: 'Santorini, Greece',
      image: 'https://source.unsplash.com/random/800x600/?santorini',
      description: 'Stunning white-washed buildings and Mediterranean charm.',
      price: '$1299'
    },
    {
      title: 'Barcelona, Spain',
      image: 'https://source.unsplash.com/random/800x600/?barcelona',
      description: 'Vibrant city with amazing architecture and delicious cuisine.',
      price: '$799'
    },
    {
      title: 'Kyoto, Japan',
      image: 'https://source.unsplash.com/random/800x600/?kyoto',
      description: 'Ancient temples and traditional Japanese culture.',
      price: '$1099'
    },
    {
      title: 'Cairo, Egypt',
      image: 'https://source.unsplash.com/random/800x600/?cairo',
      description: 'Explore the mysteries of ancient Egypt.',
      price: '$999'
    },
    {
      title: 'Sydney, Australia',
      image: 'https://source.unsplash.com/random/800x600/?sydney',
      description: 'Beautiful harbor city with iconic landmarks.',
      price: '$1499'
    }
  ];

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom textAlign="center">
        Popular Destinations
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
        Discover amazing places around the world
      </Typography>
      <Grid container spacing={4}>
        {destinations.map((destination, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={destination.image}
                alt={destination.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h3">
                  {destination.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {destination.description}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6" color="primary">
                    {destination.price}
                  </Typography>
                  <Button variant="contained" color="primary">
                    Book Now
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Destinations; 