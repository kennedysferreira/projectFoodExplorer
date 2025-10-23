import { Count } from "../Count";
import { Button } from "../Button";
import { Container } from "./style";
import { FaRegEdit } from "react-icons/fa";
import { USER_ROLE } from "../../utils/roles";
import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/useCart";

import { useNavigate } from "react-router-dom";
import { useEffect, useState, memo } from "react";

import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { FaRegHeart, FaHeart } from "react-icons/fa";

export const Card = memo(function Card({
  onCountChange,
  plateImage,
  view,
  plate,
  verifyFavorite,
  isFavorite,
  ...rest
}) {
  const { user, createFavorite } = useAuth();
  const navigate = useNavigate();
  const { addItem, updateQuantity, removeItem, getItemQuantity } = useCart();

  const verifyAdminRole = user.role === USER_ROLE.ADMIN;
  const plateValue = plate.value.replace(".", ",");

  // Obter quantidade atual do carrinho
  const currentQuantity = getItemQuantity(plate.id);

  // Manipular mudança de quantidade
  const handleCountChange = (newValue) => {
    if (newValue === 0) {
      removeItem(plate.id);
    } else {
      updateQuantity(plate.id, newValue);
    }
  };

  // Adicionar primeiro item
  const handleAddFirstItem = () => {
    addItem(plate, 1);
  };

  async function handleFavoritePlate(plate_id) {
    await createFavorite(plate_id);
    await verifyFavorite();
    await verifyStatusFavorite();
  }

  const verifyStatusFavorite = () => {
    return isFavorite.some((object) => object.plate_id === plate.id);
  };

  const verifyPlateValue = () => {
    const verifyCents = plateValue.includes(",");

    if (verifyCents === false) {
      return `${plateValue},00`;
    } else {
      return plateValue;
    }
  };

  useEffect(() => {
    verifyStatusFavorite();
  }, []);

  return (
    <Container {...rest}>
      {verifyAdminRole ? (
        <FaRegEdit
          size={30}
          className="edit-icon"
          onClick={() => navigate(`/editplate/${plate.id}`)}
        />
      ) : (
        <>
          {verifyStatusFavorite() ? (
            <FaHeart
              className="favorite-icon"
              onClick={() => handleFavoritePlate(plate.id)}
            />
          ) : (
            <FaRegHeart
              className="favorite-icon"
              onClick={() => handleFavoritePlate(plate.id)}
            />
          )}
        </>
      )}

      <div className="image-wrapper" onClick={view}>
        <img
          src={plateImage && plateImage}
          alt={plate.name}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="plate-info">
        <p className="plate-name" onClick={view}>
          {plate.name}
        </p>
        <p className="plate-description">{plate.description}</p>

        <div className="plate-footer">
          <p className="value">R$ {verifyPlateValue()}</p>

          {verifyAdminRole ? null : (
            <div className="plate-actions">
              {currentQuantity === 0 ? (
                <button className="add-button" onClick={handleAddFirstItem}>
                  <span>+</span>
                </button>
              ) : (
                <Count onCountChange={handleCountChange} initialValue={currentQuantity} />
              )}
            </div>
          )}
        </div>
      </div>
    </Container>
  );
})