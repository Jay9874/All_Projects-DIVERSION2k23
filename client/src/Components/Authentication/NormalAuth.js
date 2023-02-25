import Navbar from '../Dashboard/Navbar/Navbar'
import * as Styles from './AuthStyles'

export default function NormalAuth () {
  return (
    <div className='auth-container'>
      <Navbar />
      <div className='auth-form-container'>
        <div className='signin-flex-item'>
          <Styles.Container>
            <Styles.SignInContainer>
              <Styles.Form>
                <Styles.Title>Log In</Styles.Title>
                <Styles.Input type='email' placeholder='Email' />
                <Styles.Input type='password' placeholder='Password' />
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
                  <Styles.Paragraph>
                    Login as an Admin or Student
                  </Styles.Paragraph>
                </Styles.RightOverlayPanel>
              </Styles.Overlay>
            </Styles.OverlayContainer>
          </Styles.Container>
        </div>
      </div>
    </div>
  )
}
