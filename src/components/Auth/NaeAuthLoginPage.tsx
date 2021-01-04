import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import NaeApiAuth from '../../service/NaeApiAuth'

const texts = {
  en: {
    form: 'Login form',
    username: 'Username',
    password: 'Password',
    login: 'Login',
    newMember: 'New member?',
    signup: 'Sign up'
  },
  lt: {
    form: 'Prisijungimas',
    username: 'Vartotojas',
    password: 'Slaptažodis',
    login: 'Prisijungti',
    newMember: 'Naujas vartotojas?',
    signup: 'Registruotis'
  }
}

interface Props {
  lang?: string
}

export default function NaeAuthLoginPage(props: Props) {
  const { lang = 'en' } = props
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
              <Card.Header>{texts[lang].form}</Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group>
                    <Form.Label>{texts[lang].username}:</Form.Label>

                    <Form.Control
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>{texts[lang].password}:</Form.Label>

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
                      {texts[lang].newMember}{' '}
                      <a
                        href='/register'
                        onClick={(e) => {
                          e.preventDefault()
                          goToSignUp()
                        }}
                      >
                        {texts[lang].signup}
                      </a>
                    </p>
                  </Col>
                  <Col className='text-right'>
                    <Button
                      type='button'
                      variant='primary'
                      onClick={() => doLogin()}
                    >
                      {texts[lang].login}
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
