import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import NaeApiAuth from '../../service/NaeApiAuth'

export default function NaeAuthLoginPage() {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const goToSignUp = () => {
    history.push('/register')
  }

  const doLogin = () => {
    NaeApiAuth.doLogin(email, password)
      .then((res) => {
        if (res.isError) {
          alert(res.error.description)
          return
        }
        window.localStorage.setItem('token', res.token)
        history.push('/')
      })
      .catch((e) => alert(e.message))
  }

  return (
    <div className='full-height v-center'>
      <Container className='mt-n20vh'>
        <Row>
          <Col sm={3} />
          <Col>
            <Card>
              <Card.Header>Login form</Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group>
                    <Form.Label>Username:</Form.Label>

                    <Form.Control
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password:</Form.Label>

                    <Form.Control
                      type='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                </Form>
              </Card.Body>
              <Card.Footer>
                <Row>
                  <Col className='v-center'>
                    <p>
                      New member?{' '}
                      <a
                        href='/register'
                        onClick={(e) => {
                          e.preventDefault()
                          goToSignUp()
                        }}
                      >
                        Sign up
                      </a>
                    </p>
                  </Col>
                  <Col className='text-right'>
                    <Button
                      type='button'
                      variant='primary'
                      onClick={() => doLogin()}
                    >
                      Login
                    </Button>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Col>
          <Col sm={3} />
        </Row>
      </Container>
    </div>
  )
}
