class NaeApiAuthService {
  private baseUrl: string

  constructor() {
    this.baseUrl = '/app/auth'
    if (process.env.NODE_ENV === 'development') {
      this.baseUrl = 'http://localhost:8000/app/auth'
    }
  }

  plainRequestOptions = () => {
    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  }

  doLogin = (email: string, password: string) => {
    const requestOptions = {
      ...this.plainRequestOptions(),
      body: JSON.stringify({ email, password })
    }

    return fetch(this.baseUrl + '/login', requestOptions).then((res) =>
      res.json()
    )
  }

  doRegister = (email: string, password: string, passwordRepeat: string) => {
    const requestOptions = {
      ...this.plainRequestOptions(),
      body: JSON.stringify({ email, password, passwordRepeat })
    }

    return fetch(this.baseUrl + '/register', requestOptions).then((res) =>
      res.json()
    )
  }

  doLogout = () => {
    return new Promise((resolve) => {
      window.localStorage.setItem('token', '')
      resolve()
    })
  }
}

const NaeApiAuth = new NaeApiAuthService()
export default NaeApiAuth
