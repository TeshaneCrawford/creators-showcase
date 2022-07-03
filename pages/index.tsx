import type { NextPage } from 'next'
// import styles from '../scss/Home.module.scss'
import { Card, Grid, Text } from '@nextui-org/react';


const Home: NextPage = () => {
  return (
    <Grid.Container gap={2}>
      <Grid xs={4}>
        <Card>
          <Card.Body>
            <Text>Default card. (shadow)</Text>
          </Card.Body>
        </Card>
      </Grid>
      <Grid xs={4}>
        <Card variant="flat">
          <Card.Body>
            <Text>Flat card.</Text>
          </Card.Body>
        </Card>
      </Grid>
      <Grid xs={4}>
        <Card variant="bordered">
          <Card.Body>
            <Text>Bordered card.</Text>
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  );
}

export default Home
