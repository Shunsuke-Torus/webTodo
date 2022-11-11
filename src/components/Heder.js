import React from 'react'
import { Box,Flex,Stack,Heading} from '@chakra-ui/react'
const Heder = () => {
  return (
    <Box px="10" py="5" bg="blue.400" color='black' >
      <Flex>
        <Stack>
        <Heading>
          Let's ToDo
        </Heading>
        </Stack>
      </Flex>
    </Box>
  )
}

export default Heder