import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Box } from '@mui/material';

function Home() {
  const featuredDestinations = [
    {
      title: 'Paris, France',
      image: 'https://source.unsplash.com/random/800x600/?paris',
      description: 'The City of Light awaits with its iconic landmarks and rich culture.'
    },
    {
      title: 'Tokyo, Japan',
      image: 'https://source.unsplash.com/random/800x600/?tokyo',
      description: 'Experience the perfect blend of traditional and modern Japan.'
    },
    {
      title: 'New York, USA',
      image: 'https://source.unsplash.com/random/800x600/?newyork',
      description: 'The city that never sleeps offers endless possibilities.'
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          textAlign: 'center'
        }}
      >
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            Discover Your Next Adventure
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Explore the world's most beautiful destinations
          </Typography>
          <Button variant="contained" color="secondary" size="large" sx={{ mt: 2 }}>
            Start Exploring
          </Button>
        </Container>
      </Box>

      {/* Featured Destinations */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom textAlign="center">
          Featured Destinations
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {featuredDestinations.map((destination, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={destination.image}
                  alt={destination.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h3">
                    {destination.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {destination.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Home; 