import {Box, Button, Heading, HStack, Stack, VStack, Input, Text} from '@chakra-ui/react'
import {AiOutlineSend} from "react-icons/ai"

import React from 'react'



const Footer = () => {
  return <Box bgColor={"blackAlpha.900"} minH={'40'} p='16'  color={'white'}>

    <Stack direction={["column","row"]}>

        <VStack alignItems={"stretch"} w="full" px={"4"}>
            <Heading size='' textTransform={'uppercase'} textAlign={["center","left"]}>
                Subscribe To Get Updates
            </Heading>
            <HStack  borderBottom={'2px solid white'} py={'2'}>

                <Input placeholder='Enter Email Here....' border={'none'} borderRadius={'none'}  outline={'none'}  focusBorderColor={'none'}/>
                <Button 
                p={'0'}
                colorScheme={'purple'}
                variant={'ghost'}
                borderRadius={"0 20px 20px 0"}>
                    <AiOutlineSend  size={'20'} />
                </Button>
            </HStack>
        </VStack>



        <VStack w={"full"} borderLeft={['none', "1px solid white"]}  borderRight={['none', "1px solid white"]}>
            <Heading textTransform={'uppercase'} textAlign={'center'}>
                VIDEO HUB
            </Heading>
            <Text>@ALL RIGHTS RESERVED</Text>

        </VStack>





        <VStack w={'full'}>
            <Heading size={'md'} textTransform={"uppercase"}>
                Social Media
            </Heading>
            <Button variant={"link"}  colorScheme={"whiteAlpha"}><a  target={'blank'} href='https://www.youtube.com/@mnsfamily2600'>Youtube</a></Button>


            <Button variant={"link"}  colorScheme={"whiteAlpha"}><a  target={'blank'} href='https://instagram.com/zombie_developers?igshid=ZDdkNTZiNTM='>Instagram</a></Button>



            <Button variant={"link"}  colorScheme={"whiteAlpha"}><a  target={'blank'} href='https://github.com/mns2017'>GitHub</a></Button>
        </VStack>




    </Stack>

  </Box>
}

export default Footer