import React from 'react'
import { useHistory } from 'react-router-dom'
import NaeApiAuth from '../../service/NaeApiAuth'
import { Button } from 'react-bootstrap'

export default function NaeAuthLogoutBtn() {
  const history = useHistory()

  const doLogout = () => {
    NaeApiAuth.doLogout().then(() => {
      history.push('/login')
    })
  }

  return (
    <Button variant='outline-danger' onClick={doLogout}>
      Logout
    </Button>
  )
}
