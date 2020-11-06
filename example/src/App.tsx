import React, {Fragment} from 'react'
import {NaeAuthLoginPage, NaeAuthLogoutBtn, NaeAuthRegisterPage} from "nae-react-auth";

const App = () => {
  return <Fragment>

    <NaeAuthLogoutBtn/>

    <NaeAuthLoginPage/>
    <NaeAuthRegisterPage/>

  </Fragment>
}

export default App
