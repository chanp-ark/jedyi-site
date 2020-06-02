import React from 'react'
import styled from '@emotion/styled'
import Title from '../components/title'

const JedImage = styled('div')`
  background-image: url('/images/jed-profile-about.jpg');
  background-position: top 10% center;
  background-size: cover;
  height: 50vh;
  width: 40vh;
`

const Biography = styled('div')`
  height: 51vh;
  width: 40vh;
  diplay: flex;
  overflow: scroll;
`

const AboutContainer = styled('div')`
  display: flex;
  margin: 1rem;
  justify-content: space-between;
`

const AboutMe = () => {
  return (
    <>
      <Title>Jed Yi</Title>
      <AboutContainer>
        {/* image of jed */}
        <JedImage />
        {/* Biography, for now, hard coding it in. later, create schema for user to be able to update it himself */}
        <Biography>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Tristique et egestas quis ipsum suspendisse. Malesuada
            proin libero nunc consequat interdum. Volutpat est velit egestas dui. Viverra nam libero
            justo laoreet sit amet cursus. Fringilla ut morbi tincidunt augue interdum velit euismod
            in pellentesque. Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Enim
            facilisis gravida neque convallis a cras semper auctor. Dolor purus non enim praesent
            elementum. Lectus quam id leo in vitae turpis massa sed elementum. Consequat ac felis
            donec et odio pellentesque diam. Nunc mattis enim ut tellus. Ipsum dolor sit amet
            consectetur adipiscing. Feugiat nisl pretium fusce id velit. Venenatis urna cursus eget
            nunc scelerisque viverra mauris in aliquam. A diam sollicitudin tempor id eu nisl nunc mi.
            Elementum nibh tellus molestie nunc non blandit. Tristique sollicitudin nibh sit amet
            commodo nulla facilisi. Diam quam nulla porttitor massa id neque aliquam.
          </div>
          <div>
            Eget lorem dolor sed viverra ipsum nunc aliquet. Magna ac placerat vestibulum lectus.
            Tellus in metus vulputate eu scelerisque felis imperdiet proin. Eget mi proin sed libero
            enim sed faucibus turpis in. Nunc lobortis mattis aliquam faucibus purus in. Quis enim
            lobortis scelerisque fermentum dui faucibus. Vel quam elementum pulvinar etiam. Feugiat
            nisl pretium fusce id velit. Aliquam sem et tortor consequat. Mollis nunc sed id semper
            risus in hendrerit. Ultrices neque ornare aenean euismod elementum nisi. Aliquam malesuada
            bibendum arcu vitae. Gravida dictum fusce ut placerat orci. Fermentum leo vel orci porta
            non. Condimentum mattis pellentesque id nibh tortor id aliquet. Nulla pellentesque
            dignissim enim sit amet. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse.
          </div>
        </Biography>
      </AboutContainer>
    </>
  )
}

export default AboutMe
