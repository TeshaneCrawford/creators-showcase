import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { AiOutlineLogout } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { IoMdAdd } from 'react-icons/io'
import { Card, Grid, Text } from '@nextui-org/react';
const Navbar = () => {
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
  )
}

export default Navbar