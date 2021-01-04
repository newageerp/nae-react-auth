import React, {Fragment} from 'react'
import {NaeAuthLoginPage, NaeAuthLogoutBtn, NaeAuthRegisterPage} from "nae-react-auth";
import 'nae-react-core-styles/dist/index.css';

const App = () => {
  return <Fragment>

    <NaeAuthLogoutBtn lang={"lt"}/>

    <NaeAuthLoginPage lang={"lt"}/>
    <NaeAuthRegisterPage lang={"lt"}/>

  </Fragment>
}

export default App
