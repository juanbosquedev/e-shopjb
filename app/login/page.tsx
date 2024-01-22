import { getCurrentUser } from "@/actions/GetCurrentUser";
import { Container } from "../component/Container";
import FormWrap from "../component/products/FromWrap";
import LoginForm from "./LoginForm";

const Login = async () => {
  const currentUser = await getCurrentUser();
  return (
    <Container>
      <FormWrap>
        <LoginForm currentUser={currentUser}/>
      </FormWrap>
    </Container>
  );
};

export default Login;
