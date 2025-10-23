import { useAuth } from "../../hooks/auth";
import { useState, useEffect } from "react";
import { Form } from "../../components/Forms";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Tabs } from "../../components/Tabs";
import { Container, ProfileHeader, TabSection, InfoCard, InfoGrid, FormSection, AddressSection, LoyaltySection } from "./style";
import { useLoyalty } from "../../hooks/useLoyalty";
import { useAddresses } from "../../hooks/useAddresses";
import { toast } from "react-toastify";
import { FaUser, FaLock, FaMapMarkerAlt, FaStar, FaHistory, FaCheckCircle, FaEnvelope, FaEdit } from "react-icons/fa";



export function Profile() {
  const [activeTab, setActiveTab] = useState("profile");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [isEnable, setIsEnable] = useState(false);
  const [profileInfo, setProfileInfo] = useState("");
  const { updateAccount, user } = useAuth();
  const { balance, calculateDiscount } = useLoyalty();
  const { addresses } = useAddresses();

  const navigate = useNavigate();

  const resultUpdate = JSON.parse(
    localStorage.getItem("@foodexplorer:profile")
  );

  const tabs = [
    { id: "profile", label: "Perfil", icon: <FaUser /> },
    { id: "security", label: "Segurança", icon: <FaLock /> },
    { id: "addresses", label: "Endereços", icon: <FaMapMarkerAlt /> },
    { id: "loyalty", label: "Fidelidade", icon: <FaStar /> },
  ];

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
        <ProfileHeader>
          <div className="user-info">
            <div className="user-icon">
              <FaUser size={32} />
            </div>
            <div className="user-details">
              <h2>{profileInfo.name || "Usuário"}</h2>
              <p>{profileInfo.email || "email@exemplo.com"}</p>
            </div>
          </div>
        </ProfileHeader>

        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab}>
          {activeTab === "profile" && (
            <TabSection>
              <h3>Informações Pessoais</h3>
              <InfoGrid>
                <InfoCard>
                  <div className="card-header">
                    <FaUser />
                    <strong>Nome</strong>
                  </div>
                  <p className="card-value">{profileInfo.name || "Não informado"}</p>
                  <button className="edit-btn" onClick={() => setActiveTab("security")}>
                    <FaEdit /> Editar
                  </button>
                </InfoCard>

                <InfoCard>
                  <div className="card-header">
                    <FaEnvelope />
                    <strong>Email</strong>
                  </div>
                  <p className="card-value">{profileInfo.email || "Não informado"}</p>
                  <button className="edit-btn" onClick={() => setActiveTab("security")}>
                    <FaEdit /> Editar
                  </button>
                </InfoCard>
              </InfoGrid>

              <div className="quick-actions">
                <h4>Acesso Rápido</h4>
                <div className="actions-grid">
                  <button
                    className="action-card"
                    onClick={() => navigate("/order-history")}
                  >
                    <FaHistory size={24} />
                    <div className="action-content">
                      <strong>Histórico de Pedidos</strong>
                      <p>Ver meus pedidos anteriores</p>
                    </div>
                  </button>

                  <button
                    className="action-card"
                    onClick={() => setActiveTab("addresses")}
                  >
                    <FaMapMarkerAlt size={24} />
                    <div className="action-content">
                      <strong>Meus Endereços</strong>
                      <p>Gerenciar endereços de entrega</p>
                    </div>
                  </button>

                  <button
                    className="action-card"
                    onClick={() => setActiveTab("loyalty")}
                  >
                    <FaStar size={24} />
                    <div className="action-content">
                      <strong>Pontos de Fidelidade</strong>
                      <p>{balance} pontos acumulados</p>
                    </div>
                  </button>
                </div>
              </div>
            </TabSection>
          )}

          {activeTab === "security" && (
            <TabSection>
              <h3>Segurança e Privacidade</h3>
              <p className="section-description">
                Atualize suas informações pessoais e credenciais de acesso
              </p>

              <FormSection $isEnable={isEnable}>
                <div className="form-group">
                  <Form
                    label={"Nome Completo"}
                    value={name}
                    placeholder={profileInfo.name || "Digite seu nome"}
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <Form
                    label={"Email"}
                    value={email}
                    placeholder={profileInfo.email || "Digite seu e-mail"}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="divider">
                  <span>Alterar Senha</span>
                </div>

                <div className="form-group">
                  <Form
                    label={"Senha Atual"}
                    value={oldPassword}
                    placeholder="Digite sua senha atual"
                    type="password"
                    onChange={(e) => setOldPassword(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <Form
                    label={"Nova Senha"}
                    value={newPassword}
                    placeholder="Mínimo 6 caracteres"
                    type="password"
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>

                <div className="button-group">
                  <Button
                    className="secondary-button"
                    title={"Cancelar"}
                    onClick={() => {
                      setName("");
                      setEmail("");
                      setOldPassword("");
                      setNewPassword("");
                    }}
                  />
                  <Button
                    className="primary-button"
                    title={"Salvar Alterações"}
                    onClick={handleUpdateProfile}
                    disabled={!isEnable}
                  />
                </div>
              </FormSection>
            </TabSection>
          )}

          {activeTab === "addresses" && (
            <TabSection>
              <div className="section-header">
                <div>
                  <h3>Meus Endereços</h3>
                  <p className="section-description">
                    Gerencie seus endereços de entrega
                  </p>
                </div>
                <Button
                  title={"Gerenciar Endereços"}
                  onClick={() => navigate("/addresses")}
                />
              </div>

              <AddressSection>
                {addresses.length === 0 ? (
                  <div className="empty-state">
                    <FaMapMarkerAlt size={48} />
                    <h4>Nenhum endereço cadastrado</h4>
                    <p>Adicione seu primeiro endereço de entrega</p>
                    <Button
                      title={"Cadastrar Endereço"}
                      onClick={() => navigate("/addresses")}
                    />
                  </div>
                ) : (
                  <div className="addresses-grid">
                    {addresses.slice(0, 3).map((address) => (
                      <div
                        key={address.id}
                        className="address-card"
                        onClick={() => navigate("/addresses")}
                      >
                        <div className="address-header">
                          <div className="address-icon">
                            <FaMapMarkerAlt size={20} />
                          </div>
                          <div className="address-title">
                            <strong>{address.label}</strong>
                            {address.is_default && (
                              <span className="default-badge">
                                <FaCheckCircle size={12} /> Padrão
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="address-body">
                          <p className="address-street">
                            {address.street}, {address.number}
                            {address.complement && ` - ${address.complement}`}
                          </p>
                          <p className="address-city">
                            {address.neighborhood}, {address.city} - {address.state}
                          </p>
                          <p className="address-zip">CEP: {address.zip_code}</p>
                        </div>
                      </div>
                    ))}
                    {addresses.length > 3 && (
                      <div className="see-more-card" onClick={() => navigate("/addresses")}>
                        <FaMapMarkerAlt size={32} />
                        <p>+ {addresses.length - 3} endereço(s)</p>
                        <span>Ver todos</span>
                      </div>
                    )}
                  </div>
                )}
              </AddressSection>
            </TabSection>
          )}

          {activeTab === "loyalty" && (
            <TabSection>
              <h3>Programa de Fidelidade</h3>
              <p className="section-description">
                Acumule pontos e ganhe descontos em suas compras
              </p>

              <LoyaltySection>
                <div className="loyalty-card">
                  <div className="loyalty-header">
                    <FaStar size={32} />
                    <div>
                      <h4>Seus Pontos</h4>
                      <p className="points-value">{balance} pontos</p>
                    </div>
                  </div>

                  <div className="loyalty-value">
                    {balance >= 100 ? (
                      <>
                        <div className="discount-available">
                          <FaCheckCircle size={20} />
                          <span>Você pode usar seus pontos!</span>
                        </div>
                        <p className="discount-value">
                          Equivale a <strong>R$ {calculateDiscount()}</strong> em descontos
                        </p>
                      </>
                    ) : (
                      <>
                        <div className="progress-bar">
                          <div
                            className="progress-fill"
                            style={{ width: `${(balance / 100) * 100}%` }}
                          />
                        </div>
                        <p className="progress-text">
                          Faltam <strong>{100 - balance} pontos</strong> para desbloquear descontos
                        </p>
                      </>
                    )}
                  </div>
                </div>

                <div className="loyalty-info-grid">
                  <div className="info-card">
                    <h5>Como Funciona?</h5>
                    <ul>
                      <li>A cada R$ 1,00 gasto, você ganha 1 ponto</li>
                      <li>100 pontos = R$ 10,00 de desconto</li>
                      <li>Use seus pontos no checkout</li>
                    </ul>
                  </div>

                  <div className="info-card">
                    <h5>Acesso Rápido</h5>
                    <button
                      className="link-button"
                      onClick={() => navigate("/order-history")}
                    >
                      <FaHistory />
                      Ver Histórico de Pedidos
                    </button>
                  </div>
                </div>
              </LoyaltySection>
            </TabSection>
          )}
        </Tabs>

        <div className="support-section">
          <p>Precisa de ajuda?</p>
          <Button
            title={"Falar com Suporte"}
            onClick={() =>
              (window.location.href = "mailto:nevesrafael.dev@gmail.com")
            }
          />
        </div>
      </main>
      <Footer />
    </Container>
  );
}
