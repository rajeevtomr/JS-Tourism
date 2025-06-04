import { Container, Typography, Grid, Card, CardContent, Avatar, Box } from '@mui/material';

function About() {
  const teamMembers = [
    {
      name: 'Rajiv Kumar',
      role: 'CEO & Founder',
      image: 'https://source.unsplash.com/random/150x150/?portrait,man',
      bio: 'Passionate about travel and creating unforgettable experiences.'
    },
    {
      name: 'Shivani Singh',
      role: 'Travel Expert',
      image: 'https://source.unsplash.com/random/150x150/?portrait,woman',
      bio: 'Over 10 years of experience in the travel industry.'
    },
    {
      name: 'Shubham Singh',
      role: 'Customer Relations',
      image: 'https://source.unsplash.com/random/150x150/?portrait,asian',
      bio: 'Dedicated to ensuring the best customer experience.'
    }
  ];

  return (
    <Container sx={{ py: 8 }}>
      {/* Company Overview */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h3" component="h1" gutterBottom textAlign="center">
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to Tourism, your trusted partner in creating unforgettable travel experiences. 
          Founded in 2025, we've been dedicated to helping travelers explore the world's most 
          beautiful destinations while providing exceptional service and support.
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to make travel accessible, enjoyable, and memorable for everyone. 
          We believe that travel has the power to transform lives and create lasting connections 
          between people and cultures.
        </Typography>
      </Box>

      {/* Team Section */}
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom textAlign="center">
          Our Team
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {teamMembers.map((member, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar
                  src={member.image}
                  alt={member.name}
                  sx={{ width: 150, height: 150, mt: 3, mb: 2 }}
                />
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography gutterBottom variant="h5" component="h3">
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    {member.role}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.bio}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default About; 