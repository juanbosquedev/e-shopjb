import { Container } from "../component/Container";
import FormWrap from "../component/products/FromWrap";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <Container>
      <FormWrap>
        <LoginForm/>
      </FormWrap>
    </Container>
  );
};

export default Login;
