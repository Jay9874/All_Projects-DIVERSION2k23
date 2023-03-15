import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Styles from './AuthStyles'
import axios from 'axios'

export default function NormalAuth ({ handleUser }) {
  const [userType, setUserType] = useState('student')
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const [token, setToken] = useState('')

  function handleChange (e) {
    const { name, value } = e.target
    setUser(prevUser => {
      return {
        ...prevUser,
        [name]: value
      }
    })
  }

  const submitForm = async () => {
    setError('')
    const newUser = {
      email: user.email,
      password: user.password,
      userType: userType
    }
    fetch('http://localhost:8080/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        handleUser(data)
        localStorage.setItem('token', data.token)
        const { userType } = data
        if (userType === 'admin') {
          navigate('/admin')
        } else if (userType === 'student') {
          navigate('/dashboard')
        } else {
          setError('Seems like Credentials mismatched..')
        }
      })
      .catch(err => {
        console.log(err.message)
        setError('Seems like Credentials mismatched..')
      })
  }

  useEffect(() => {
    if (token) {
      axios
        .get('http://localhost:8080/api/isUserAuth', {
          headers: {
            'x-access-token': localStorage.getItem('token')
          }
        })
        .then(res => {
          const { userType } = res.data
          if (userType === 'admin') {
            navigate('/admin')
          } else if (userType === 'student') {
            navigate('/dashboard')
          } else {
            setError('Seems like Credentials mismatched..')
          }
        })
        .catch(err => {
          console.log(err.message)
          setError('Seems like Credentials mismatched..')
        })
    }
  }, [])

  return (
    <Styles.OuterDiv>
      <Styles.Container>
        <Styles.SignInContainer>
          <Styles.Form
            onSubmit={e => {
              e.preventDefault()
              submitForm()
            }}
          >
            <Styles.Title>Log In</Styles.Title>
            <Styles.Input
              type='email'
              value={user.email}
              name='email'
              onChange={handleChange}
              placeholder='Email'
            />
            <Styles.Input
              type='password'
              value={user.password}
              name='password'
              onChange={handleChange}
              placeholder='Password'
            />
            <Styles.OptionText>Signin as:</Styles.OptionText>
            <Styles.CheckBoxContainer>
              <Styles.OptionsText>Student</Styles.OptionsText>
              <Styles.Input
                type='checkbox'
                checked={userType === 'student'}
                onChange={e => {
                  setUserType('student')
                }}
              />
              <Styles.OptionsText>Admin</Styles.OptionsText>
              <Styles.Input
                type='checkbox'
                checked={userType === 'admin'}
                onChange={e => setUserType('admin')}
              />
            </Styles.CheckBoxContainer>
            <Styles.Button>Sign In</Styles.Button>
            {error && <Styles.Error>{error}</Styles.Error>}
          </Styles.Form>
        </Styles.SignInContainer>

        <Styles.OverlayContainer>
          <Styles.Overlay>
            <Styles.RightOverlayPanel>
              <Styles.Title>Welcome Back!</Styles.Title>
              <Styles.Paragraph>Login as an Admin or Student</Styles.Paragraph>
            </Styles.RightOverlayPanel>
          </Styles.Overlay>
        </Styles.OverlayContainer>
      </Styles.Container>
    </Styles.OuterDiv>
  )
}
