import { Container } from "./style";
import { Input } from "../Input";
import { Button } from "../Button";
import { useState, useEffect } from "react";
import { useAddresses } from "../../hooks/useAddresses";

export function AddressForm({ addressToEdit, onClose, onSuccess }) {
  const { createAddress, updateAddress, loading } = useAddresses();

  const [formData, setFormData] = useState({
    label: "",
    zip_code: "",
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
  });

  useEffect(() => {
    if (addressToEdit) {
      setFormData({
        label: addressToEdit.label || "",
        zip_code: addressToEdit.zip_code || "",
        street: addressToEdit.street || "",
        number: addressToEdit.number || "",
        complement: addressToEdit.complement || "",
        neighborhood: addressToEdit.neighborhood || "",
        city: addressToEdit.city || "",
        state: addressToEdit.state || "",
      });
    }
  }, [addressToEdit]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (addressToEdit) {
        await updateAddress(addressToEdit.id, formData);
      } else {
        await createAddress(formData);
      }

      if (onSuccess) {
        onSuccess();
      }

      // Limpar formulário
      setFormData({
        label: "",
        zip_code: "",
        street: "",
        number: "",
        complement: "",
        neighborhood: "",
        city: "",
        state: "",
      });

      if (onClose) {
        onClose();
      }
    } catch (error) {
      console.error("Erro ao salvar endereço:", error);
    }
  }

  return (
    <Container>
      <h2>{addressToEdit ? "Editar Endereço" : "Novo Endereço"}</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Identificação (Ex: Casa, Trabalho)</label>
          <Input
            name="label"
            placeholder="Casa"
            value={formData.label}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group small">
            <label>CEP</label>
            <Input
              name="zip_code"
              placeholder="00000-000"
              value={formData.zip_code}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Rua</label>
            <Input
              name="street"
              placeholder="Nome da rua"
              value={formData.street}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group small">
            <label>Número</label>
            <Input
              name="number"
              placeholder="123"
              value={formData.number}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Complemento</label>
            <Input
              name="complement"
              placeholder="Apto, Bloco, etc"
              value={formData.complement}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Bairro</label>
          <Input
            name="neighborhood"
            placeholder="Nome do bairro"
            value={formData.neighborhood}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Cidade</label>
            <Input
              name="city"
              placeholder="Nome da cidade"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group small">
            <label>Estado</label>
            <Input
              name="state"
              placeholder="SP"
              value={formData.state}
              onChange={handleChange}
              maxLength={2}
              required
            />
          </div>
        </div>

        <div className="form-actions">
          {onClose && (
            <Button
              type="button"
              title="Cancelar"
              onClick={onClose}
              className="btn-cancel"
            />
          )}
          <Button
            type="submit"
            title={addressToEdit ? "Atualizar" : "Salvar"}
            disabled={loading}
          />
        </div>
      </form>
    </Container>
  );
}
