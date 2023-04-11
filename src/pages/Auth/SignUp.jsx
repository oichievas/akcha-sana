import React from 'react'
import { Box, Button, Container, Heading, Input, Stack, Text } from '@chakra-ui/react'

export default function SignUp() {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" height={'80vh'}>
      <Container textAlign={'center'} >
        <Heading as='h3' size='2xl' py={'4'}>
          Регистрация
        </Heading>
        <Text fontSize='lg' mb={10}>
          Для входа на сайт вам необходимо зарегистрироваться
        </Text>
        <Stack spacing={5} mb={20}>
          <Input variant='outline' placeholder='Почта' />
          <Input variant='outline' placeholder='Пароль' />
        </Stack>
        <Button colorScheme='teal' variant='outline' w="100%">
          ПРОДОЛЖИТЬ
        </Button>

      </Container>
    </Box>
  )
}
