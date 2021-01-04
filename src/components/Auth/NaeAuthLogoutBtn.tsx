import React from 'react'
import {useHistory} from 'react-router-dom'
import NaeApiAuth from '../../service/NaeApiAuth'
import {Button} from 'react-bootstrap'

const texts = {
  en: {
    logout: 'Logout'
  },
  lt: {
    logout: 'Atsijungti'
  }
}

interface Props {
  lang?: string
}

export default function NaeAuthLogoutBtn(props: Props) {
  const {lang = 'en'} = props
  const history = useHistory()

  const doLogout = () => {
    NaeApiAuth.doLogout().then(() => {
      history.push('/login')
    })
  }

  return (
    <Button variant='outline-danger' onClick={doLogout}>
      {texts[lang].logout}
    </Button>
  )
}
