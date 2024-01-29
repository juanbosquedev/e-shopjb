import { getCurrentUser } from "@/actions/GetCurrentUser";
import { Container } from "@/app/component/Container";
import NullData from "@/app/component/NullData";
import FormWrap from "@/app/component/products/FromWrap";
import AddProductForm from "./AddProductForm";

const AddProducts = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser || currentUser.role !== "ADMIN") {
    return <NullData title="Ooops Acces denied" />;
  }

  return (
    <div className="p-8">
      <Container>
        <FormWrap>
          <AddProductForm />
        </FormWrap>
      </Container>
    </div>
  );
};

export default AddProducts;
