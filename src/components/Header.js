import React from 'react'
import Button from './styles/Button.styled'
import Container from './styles/Container.styled'
import StyledHeader from './styles/Header.styled'
import Logo from './styles/Logo.styled'
import Nav from './styles/Nav.styled'
import logo_image from './images/logo.svg'
import header_image from './images/illustration-mockups.svg'
import Flex from './styles/Flex.styled'
import Image from './styles/Image.styled'

const Header = () => {
  return (
    <Container>
      <StyledHeader>
        <Nav>
          <Logo src={logo_image} />
          <Button>Try It Free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>

            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>

            <Button bg='#ff0099' color='#fff'>
              Get Started For Free
            </Button>
          </div>
          <Image src={header_image} />
        </Flex>
      </StyledHeader>
    </Container>
  )
}

export default Header
