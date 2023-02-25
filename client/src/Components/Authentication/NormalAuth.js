import { useState } from 'react'
import * as Styles from './AuthStyles'
import axios from 'axios'


export default function NormalAuth () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userType, setUserType] = useState("student");
  const [error, setError] = useState("");

  const submitForm = async () => {
    setError("");
    if(email && password && userType){
      await axios.post('http://localhost:8080/api/login', { email, password, userType })
      .then(res => {
        console.log(res.data);
        setPassword('');
        setEmail('');
      })
      .catch(err => {
        console.log(err.message);
        setError("Try again!")
      })
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
              <Styles.Input type='checkbox'
                checked={userType === "student"}
                onChange={() => setUserType("student")}
              />
              <Styles.OptionsText>Admin</Styles.OptionsText>
              <Styles.Input type='checkbox'
                checked={userType === "admin"}
                onChange={() => setUserType("admin")}
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
