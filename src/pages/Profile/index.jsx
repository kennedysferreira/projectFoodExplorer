import { useAuth } from "../../hooks/auth";
import { useState, useEffect, useRef } from "react";
import { Form } from "../../components/Forms";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Tabs } from "../../components/Tabs";
import { Container, ProfileHeader, ProfileSection, InfoCard, InfoGrid, FormSection, AddressSection, LoyaltySection } from "./style";
import { useLoyalty } from "../../hooks/useLoyalty";
import { useAddresses } from "../../hooks/useAddresses";
import { AddressForm } from "../../components/AddressForm";
import { AddressCard } from "../../components/AddressCard";
import { ModalWrapper } from "../../components/ModalWrapper";
import { toast } from "react-toastify";
import { FaUser, FaLock, FaMapMarkerAlt, FaStar, FaHistory, FaCheckCircle, FaEnvelope, FaChevronRight, FaEdit } from "react-icons/fa";



export function Profile() {
  const [activeTab, setActiveTab] = useState("loyalty");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [isEnable, setIsEnable] = useState(false);
  const [profileInfo, setProfileInfo] = useState("");
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [addressToEdit, setAddressToEdit] = useState(null);
  const { updateAccount, user } = useAuth();
  const { balance, calculateDiscount } = useLoyalty();
  const { addresses, deleteAddress, setDefaultAddress } = useAddresses();
  const sectionRefs = useRef({});

  const navigate = useNavigate();

  const resultUpdate = JSON.parse(
    localStorage.getItem("@foodexplorer:profile")
  );

  const tabs = [
    { id: "loyalty", label: "Fidelidade", icon: <FaStar /> },
    { id: "profile", label: "Perfil", icon: <FaUser /> },
    { id: "security", label: "Segurança", icon: <FaLock /> },
    { id: "addresses", label: "Endereços", icon: <FaMapMarkerAlt /> },
  ];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    const element = sectionRefs.current[tabId];
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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

  function handleNewAddress() {
    setAddressToEdit(null);
    setShowAddressModal(true);
  }

  function handleEditAddress(address) {
    setAddressToEdit(address);
    setShowAddressModal(true);
  }

  function handleCloseModal() {
    setShowAddressModal(false);
    setAddressToEdit(null);
  }

  async function handleDeleteAddress(id) {
    if (window.confirm("Tem certeza que deseja excluir este endereço?")) {
      try {
        await deleteAddress(id);
      } catch (error) {
        console.error("Erro ao deletar endereço:", error);
      }
    }
  }

  async function handleSetDefault(id) {
    try {
      await setDefaultAddress(id);
    } catch (error) {
      console.error("Erro ao definir endereço padrão:", error);
    }
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.dataset.section);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-200px 0px -40% 0px"
      }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Container>
      <Header />

      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />

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

        {/* Seção Fidelidade */}
        <ProfileSection
          ref={(el) => (sectionRefs.current["loyalty"] = el)}
          data-section="loyalty"
        >
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
            </div>
          </LoyaltySection>
        </ProfileSection>

        {/* Seção Perfil */}
        <ProfileSection
          ref={(el) => (sectionRefs.current["profile"] = el)}
          data-section="profile"
        >
          <h3>Informações Pessoais</h3>
          <InfoGrid>
            <InfoCard>
              <div className="card-header">
                <FaUser />
              </div>
              <p className="card-value">{profileInfo.name || "Não informado"}</p>
              <button className="edit-btn" onClick={() => handleTabChange("security")}>
                <FaEdit /> Editar
              </button>
            </InfoCard>

            <InfoCard>
              <div className="card-header">
                <FaEnvelope />
              </div>
              <p className="card-value">{profileInfo.email || "Não informado"}</p>
              <button className="edit-btn" onClick={() => handleTabChange("security")}>
                <FaEdit /> Editar
              </button>
            </InfoCard>
          </InfoGrid>
        </ProfileSection>

        {/* Seção Segurança */}
        <ProfileSection
          ref={(el) => (sectionRefs.current["security"] = el)}
          data-section="security"
        >
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
        </ProfileSection>

        {/* Seção Endereços */}
        <ProfileSection
          ref={(el) => (sectionRefs.current["addresses"] = el)}
          data-section="addresses"
        >
          <h3>Meus Endereços</h3>

          <AddressSection>
            {addresses.length === 0 ? (
              <div className="empty-state-minimal">
                <FaMapMarkerAlt size={32} />
                <p>Nenhum endereço cadastrado</p>
              </div>
            ) : (
              <div className="info-banner">
                <FaCheckCircle size={16} />
                <span>{addresses.length} {addresses.length === 1 ? 'endereço cadastrado' : 'endereços cadastrados'}</span>
              </div>
            )}

            <div className="quick-add-buttons">
              <button className="add-address-btn" onClick={handleNewAddress}>
                <FaMapMarkerAlt size={16} />
                <span>Adicionar novo endereço</span>
              </button>
            </div>

            {addresses.length > 0 && (
              <div className="addresses-list">
                {addresses.map((address) => (
                  <div key={address.id} className="address-item">
                    <div className="address-main" onClick={() => handleEditAddress(address)}>
                      <div className="address-icon">
                        <FaMapMarkerAlt size={18} />
                      </div>
                      <div className="address-content">
                        <div className="address-name">
                          {address.label}
                        </div>
                        <p className="address-text">
                          {address.street}, {address.number}
                          {address.complement && ` - ${address.complement}`}
                        </p>
                        <p className="address-city">
                          {address.neighborhood}, {address.city} - {address.state}
                        </p>
                      </div>
                      <FaChevronRight className="chevron-icon" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </AddressSection>
        </ProfileSection>

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

      {showAddressModal && (
        <ModalWrapper onClose={handleCloseModal}>
          <AddressForm
            addressToEdit={addressToEdit}
            onClose={handleCloseModal}
            onSuccess={handleCloseModal}
          />
        </ModalWrapper>
      )}
    </Container>
  );
}
