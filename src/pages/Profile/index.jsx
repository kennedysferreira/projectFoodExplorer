import { useAuth } from "../../hooks/auth";
import { useState, useEffect } from "react";
import { Form } from "../../components/Forms";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Container, ProfileContent, FormContainer } from "./style";


import { toast } from "react-toastify";



export function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [isEnable, setIsEnable] = useState(false);
  const [profileInfo, setProfileInfo] = useState("");
  const { updateAccount, user } = useAuth();

  const navigate = useNavigate();

  const resultUpdate = JSON.parse(
    localStorage.getItem("@foodexplorer:profile")
  );

  

  async function handleUpdateProfile() {
    if (
      (newPassword && newPassword.length < 6) ||
      (oldPassword && oldPassword.length < 6)
    ) {
      toast.dark("Senha inválida");
      return;
    }
    await updateAccount({ name, email, newPassword, oldPassword });
    setProfileInfo(JSON.parse(localStorage.getItem("@foodexplorer:profile")));

    setEmail("");
    setNewPassword("");
    setName("");
    setOldPassword("");
  }

  useEffect(() => {
    if (name || email || newPassword || oldPassword) {
      setIsEnable(true);
      return;
    }
    setIsEnable(false);
  }, [name, email, newPassword, oldPassword]);

  useEffect(() => {
    if (resultUpdate) {
      return setProfileInfo(resultUpdate);
    }
    setProfileInfo(user);
  }, []);

  return (
    <Container>
      <Header />
      <main>
        <ProfileContent>
         
          <div className="user-info">
            <p>{profileInfo.name}</p>
            <p>{profileInfo.email}</p>
          </div>
        </ProfileContent>
        <FormContainer $isEnable={isEnable}>
          <Form
            label={"Atualizar Nome"}
            value={name}
            placeholder="Adicione um nome válido"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <Form
            label={"Atualizar Email"}
            value={email}
            placeholder="Adicione um e-mail válido"
            type="e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form
            label={"Senha Antiga"}
            value={oldPassword}
            placeholder="Confirme sua senha"
            type="password"
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <Form
            label={"Nova Senha"}
            value={newPassword}
            placeholder="No mínimo 6 caracteres"
            type="password"
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <div className="button-container">
            <Button title={"Voltar"} onClick={() => navigate(-1)} />
            <Button
              title={"Falar com suporte"}
              onClick={() =>
                (window.location.href = "mailto:nevesrafael.dev@gmail.com")
              }
            />
            <Button
              className="update-button"
              title={"Atualizar"}
              onClick={handleUpdateProfile}
            />
          </div>
        </FormContainer>
      </main>
      <Footer />
    </Container>
  );
}
