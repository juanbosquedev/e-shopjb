import { Container } from "../component/Container";
import FormWrap from "../component/products/FromWrap";
import RegisterForm from "./RegisterForm";
import { getCurrentUser } from "@/actions/GetCurrentUser";

const Register = async () => {
  const currentUser = await getCurrentUser();

  return (
    <Container>
      <FormWrap>
        <RegisterForm currentUser={currentUser} />
      </FormWrap>
    </Container>
  );
};

export default Register;
