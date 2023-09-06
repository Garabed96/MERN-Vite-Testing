import {
   Flex,
   Box,
   Heading,
   Link,
   Spacer,
   ButtonGroup,
   Button,
   Text as ChakraText, // Renaming Text to ChakraText
} from '@chakra-ui/react'
// import { QuestionIcon, ChevronDownIcon } from "@chakra-ui/icons";

const Navbar = () => (
   <Flex
      minWidth="max-content"
      alignItems="center"
      gap="2"
      py="2"
   >
      <Box px="4">
         <Heading>
            <ChakraText>
               AirDeveloppa Dashboard
            </ChakraText>
            <Link href="/"></Link>
         </Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap="4" px="4">
         <Box
            w="50%"
            rounded="md"
            variant="outline"
         >
            <Link href="/faq">
               <Button
                  w="full"
                  rounded="sm"
                  variant="outline"
                  _hover={{ bg: 'blue.900' }}
                  // rightIcon={<QuestionIcon />}
               >
                  FAQ
               </Button>
            </Link>
         </Box>
         <Box
            w="50%"
            rounded="md"
            variant="outline"
         >
            <Link href="/login">
               <Button
                  w="full"
                  rounded="sm"
                  variant="outline"
                  _hover={{ bg: 'blue.900' }}
                  // rightIcon={<QuestionIcon />}
               >
                  Login
               </Button>
            </Link>
         </Box>
      </ButtonGroup>
   </Flex>
)

export default Navbar
