import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { AddressCard } from "../../components/AddressCard";
import { AddressForm } from "../../components/AddressForm";
import { ModalWrapper } from "../../components/ModalWrapper";
import { useAddresses } from "../../hooks/useAddresses";
import { Container, AddressesContent } from "./style";

export function Addresses() {
  const navigate = useNavigate();
  const { addresses, loading, setDefaultAddress, deleteAddress } = useAddresses();

  const [showModal, setShowModal] = useState(false);
  const [addressToEdit, setAddressToEdit] = useState(null);

  function handleNewAddress() {
    setAddressToEdit(null);
    setShowModal(true);
  }

  function handleEditAddress(address) {
    setAddressToEdit(address);
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
    setAddressToEdit(null);
  }

  async function handleSetDefault(id) {
    try {
      await setDefaultAddress(id);
    } catch (error) {
      console.error("Erro ao definir endereço padrão:", error);
    }
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

  return (
    <Container>
      <Header />
      <main>
        <AddressesContent>
          <div className="header-section">
            <h1>Meus Endereços</h1>
            <Button
              title="Novo Endereço"
              onClick={handleNewAddress}
            />
          </div>

          {loading && <p className="loading">Carregando endereços...</p>}

          {!loading && addresses.length === 0 && (
            <div className="empty-state">
              <p>Você ainda não tem endereços cadastrados.</p>
              <Button
                title="Cadastrar primeiro endereço"
                onClick={handleNewAddress}
              />
            </div>
          )}

          <div className="addresses-grid">
            {addresses.map((address) => (
              <AddressCard
                key={address.id}
                address={address}
                onEdit={handleEditAddress}
                onDelete={handleDeleteAddress}
                onSetDefault={handleSetDefault}
              />
            ))}
          </div>

          <div className="back-button">
            <Button title="Voltar" onClick={() => navigate(-1)} />
          </div>
        </AddressesContent>
      </main>
      <Footer />

      {showModal && (
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
