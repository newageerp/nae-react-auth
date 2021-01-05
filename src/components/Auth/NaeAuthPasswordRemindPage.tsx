import React, {useState} from 'react'
import {Button, Card, Col, Container, Form, Row} from 'react-bootstrap'
import {useHistory} from "react-router-dom";
import NaeApiAuth from "../../service/NaeApiAuth";

const texts = {
  en: {
    form: 'Password remind form',
    email: 'E-mail',
    alreadyMember: 'Already have an account?',
    login: 'Login',
    remind: 'Remind'
  },
  lt: {
    form: 'Slaptažodžio priminimas',
    email: 'El. paštas',
    alreadyMember: 'Jau turite paskyrą?',
    login: 'Prisijungti',
    remind: 'Priminti'
  }
}

interface Props {
  lang?: string
}

export default function NaeAuthPasswordRemindPage(props: Props) {
  const {lang = 'en'} = props

  const history = useHistory()

  const [email, setEmail] = useState('')

  const goToLogin = () => {
    history.push('/login')
  }

  const doRemind = () => {
    NaeApiAuth.doRemind(email)
      .then((res) => {
        if (res.isError) {
          alert(res.error.description)
          return
        }
        goToLogin();
      })
      .catch((e) => alert(e.message))
  }

  return (
    <div className='full-height v-center'>
      <Container className='mt-n20vh'>
        <Row>
          <Col sm={3}/>
          <Col>
            <Card>
              <Card.Header>{texts[lang].form}</Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group>
                    <Form.Label>{texts[lang].email}:</Form.Label>

                    <Form.Control
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                </Form>
              </Card.Body>
              <Card.Footer>
                <Row>
                  <Col className='v-center'>
                    <p>
                      {texts[lang].alreadyMember}{' '}
                      <a
                        href='/login'
                        onClick={(e) => {
                          e.preventDefault()
                          goToLogin()
                        }}
                      >
                        {texts[lang].login}
                      </a>
                    </p>
                  </Col>
                  <Col className='text-right'>
                    <Button
                      type='button'
                      variant='primary'
                      onClick={() => doRemind()}
                    >
                      {texts[lang].remind}
                    </Button>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Col>
          <Col sm={3}/>
        </Row>
      </Container>
    </div>
  )
}
