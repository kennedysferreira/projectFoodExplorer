import { Container } from "./style";
import { Button } from "../Button";
import { FaRegEdit, FaTrash, FaCheck } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

export function AddressCard({
  address,
  onEdit,
  onDelete,
  onSetDefault,
  showActions = true,
  ...rest
}) {
  return (
    <Container isDefault={address.is_default} {...rest}>
      <div className="address-header">
        <MdLocationOn size={24} className="location-icon" />
        {address.is_default && (
          <span className="default-badge">
            <FaCheck size={12} /> Padrão
          </span>
        )}
      </div>

      <div className="address-content">
        <h3>{address.label || "Endereço"}</h3>
        <p className="street">{address.street}, {address.number}</p>
        {address.complement && (
          <p className="complement">{address.complement}</p>
        )}
        <p className="neighborhood">{address.neighborhood}</p>
        <p className="city">
          {address.city} - {address.state}, {address.zip_code}
        </p>
      </div>

      {showActions && (
        <div className="address-actions">
          {!address.is_default && (
            <Button
              title="Definir como padrão"
              onClick={() => onSetDefault(address.id)}
              className="btn-default"
            />
          )}
          <div className="action-icons">
            <FaRegEdit
              size={20}
              className="edit-icon"
              onClick={() => onEdit(address)}
            />
            <FaTrash
              size={18}
              className="delete-icon"
              onClick={() => onDelete(address.id)}
            />
          </div>
        </div>
      )}
    </Container>
  );
}
