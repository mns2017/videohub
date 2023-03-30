import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ig1 from "../assets/home1.jpg";
import ig2 from "../assets/home2.jpg";
import ig3 from "../assets/home3.jpg";
import ig4 from "../assets/home4.jpg";
import ig5 from "../assets/home5.png";

// const headingOptions ={
//   pos:"absolute",
//   left:"50%",
//   top:"50%",
//   transform:"translate(-50%,-50%)",
//   textTransform:"uppercase,"
//   p: "4",
//   size:'4xl',
// }






const Home = () => {
  return <Box>

    <MyCarousel />
    <Container maxW={"container.xl"}  minH={'100vh'} p='16'>
      <Heading textTransform={"uppercase"} py='2' w={"fit-content"} borderBottom={'2px solid'} margin={"auto"}>Services</Heading>
      
      
      <Stack h='full'
      p='4'
      alignItems={"center"}
      direction={["column",'row']}>

        <Image src={ig5} h={["40","400"]} filter={'hue-rotate(-130deg)'}/>
        <Text letterSpacing={'widest'} lineHeight={"190%"}  p={["4","16"]}  textAlign={'center'} >
          Since the days of the Amiga, when graphics were blocky and pixelated, gaming has advanced significantly. Today’s photorealistic images immerse us in totally lifelike surroundings. Ray tracing, a method used in movies to provide real-time effects like glow and reflections, will be available on the PS5. It entails lighting effects that are highly realistic and increase your sense of immersion.
        We will eventually play the game from inside. With the help of special glasses, cameras, and a moving platform, we will be able to move as though we were in a virtual environment. In barely 40 years, table tennis was transformed from using two white bars and a square ball to a virtual reality simulation. Thank you.
        </Text>

      </Stack>


    </Container>

  </Box>;
};


const MyCarousel = () => (
  <Carousel
  autoPlay
  infiniteLoop
  interval={1000}
  showStatus={false}
  showThumbs={false}
  showArrows={false}
  >
    <Box w='full'  h={['50vh','100vh']}>
      <Image src={ig1} />
      <Heading bgColor={'blackAlpha.400'} color={'white'}  pos={"absolute"}  left={"50%"} top={"50%"} transform={'translate(-50%,-50%)'}  textTransform={"uppercase"} p={"4"} size={['1xl',"2xl"]} >
        Watch The Future
      </Heading>
    </Box>
    <Box w='full' h={['50vh','100vh']}>
      <Image src={ig2} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} pos={"absolute"}  left={"50%"} top={"50%"} transform={'translate(-50%,-50%)'}  textTransform={"uppercase"} p={"4"} size={['1xl',"2xl"]}>
        Future is Gaming
      </Heading>
    </Box>
    <Box w={'full'}  h={['50vh','100vh']}>
      <Image src={ig3} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} pos={"absolute"}  left={"50%"} top={"50%"} transform={'translate(-50%,-50%)'}  textTransform={"uppercase"} p={"4"} size={['1xl',"2xl"]}>
        Gaming on Console
      </Heading>
    </Box>
    <Box w='full'  h={['50vh','100vh']}>
      <Image src={ig4} height='60%' />
      <Heading bgColor={'blackAlpha.600'} color={'white'} pos={"absolute"}  left={"50%"} top={"50%"} transform={'translate(-50%,-50%)'}  textTransform={"uppercase"} p={"4"} size={['1xl',"2xl"]}>
        Night Life is Cool
      </Heading>
    </Box>

  </Carousel>
)




export default Home;