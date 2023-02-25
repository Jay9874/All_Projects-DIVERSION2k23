import { useState } from 'react'
import * as Styles from './AuthStyles'

export default function NormalAuth () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitForm = async () => {
    try {
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <Styles.OuterDiv>
      <Styles.Container>
        <Styles.SignInContainer>
          <Styles.Form
            onSubmit={e => {
              e.preventDefault();
              submitForm();
            }}
          >
            <Styles.Title>Log In</Styles.Title>
            <Styles.Input
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='Email'
            />
            <Styles.Input
              type='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder='Password'
            />
            <Styles.OptionText>Signin as:</Styles.OptionText>
            <Styles.CheckBoxContainer>
              <Styles.OptionsText>Student</Styles.OptionsText>
              <Styles.Input type='checkbox' />
              <Styles.OptionsText>Admin</Styles.OptionsText>
              <Styles.Input type='checkbox' />
            </Styles.CheckBoxContainer>
            <Styles.Button>Sign In</Styles.Button>
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
