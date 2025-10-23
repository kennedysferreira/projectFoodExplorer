import { api } from "../../service/api";
import { Tag } from "../../components/Tag";
import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/useCart";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { USER_ROLE } from "../../utils/roles";
import { Count } from "../../components/Count";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { FloatingCart } from "../../components/FloatingCart";
import { Button } from "../../components/Button";
import { RiArrowLeftSLine } from "react-icons/ri";
import { ButtonText } from "../../components/ButtonText";
import {
  Container,
  PlateImage,
  Tags,
  ConfirmOrder,
  BackButton,
  Main,
  InfoText,
} from "./style";

export function PlateView() {
  const { user } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const [plate, setPlate] = useState({});
  const { addItem, updateQuantity, removeItem, getItemQuantity } = useCart();

  const imageURL = `${api.defaults.baseURL}/files/`;

  const verifyAdminRole = user.role === USER_ROLE.ADMIN;

  // Obter quantidade atual do carrinho
  const currentQuantity = getItemQuantity(plate.id);

  // Manipular mudança de quantidade (mesma lógica do Card)
  const handleCountChange = (newValue) => {
    if (newValue === 0) {
      removeItem(plate.id);
    } else {
      updateQuantity(plate.id, newValue);
    }
  };

  // Adicionar primeiro item (mesma lógica do Card)
  const handleAddFirstItem = () => {
    addItem(plate, 1);
  };

  // Admin: editar prato
  function handleEditPlate() {
    navigate(`/editplate/${id}`);
  }

  useEffect(() => {
    async function searchPlate() {
      const { data } = await api.get(`/plates/${id}`);
      setPlate(data);
      return;
    }
    searchPlate();
  }, []);

  return (
    <Container>
      <Header />

      <Main>
        <BackButton>
          <ButtonText
            title={"Voltar"}
            icon={RiArrowLeftSLine}
            onClick={() => navigate(-1)}
          />
        </BackButton>

        <div>
          <PlateImage src={`${imageURL}/${String(plate.image)}`} alt="" />
        </div>

        <div>
          <InfoText>
            <h3>{plate.name}</h3>
            <p>{plate.description}</p>
          </InfoText>

          <Tags>
            {plate.ingredients &&
              plate.ingredients.map((ingredient) => (
                <Tag key={String(ingredient.id)} title={ingredient.name} />
              ))}
          </Tags>

          <ConfirmOrder>
            {verifyAdminRole ? (
              <Button title="Editar prato" onClick={handleEditPlate} />
            ) : (
              <>
                {currentQuantity === 0 ? (
                  <button className="add-button" onClick={handleAddFirstItem}>
                    <span>+</span>
                  </button>
                ) : (
                  <Count onCountChange={handleCountChange} initialValue={currentQuantity} />
                )}
              </>
            )}
          </ConfirmOrder>
        </div>
      </Main>
      <FloatingCart />
      <Footer />
    </Container>
  );
}
