import { useState } from "react";
import { Container } from "./style";
import { Button } from "../Button";
import { useLoyalty } from "../../hooks/useLoyalty";
import { FaGift } from "react-icons/fa";

export function LoyaltyPointsDisplay({ onPointsUsed, showUseOption = true }) {
  const { balance, calculateDiscount, canUsePoints, usePoints, loading } = useLoyalty();
  const [pointsToUse, setPointsToUse] = useState(0);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  async function handleUsePoints() {
    if (pointsToUse < 100) {
      return;
    }

    try {
      await usePoints(pointsToUse);
      if (onPointsUsed) {
        onPointsUsed(pointsToUse);
      }
      setPointsToUse(0);
    } catch (error) {
      // Erro já tratado no hook
    }
  }

  function handleUseAllPoints() {
    setPointsToUse(balance);
  }

  const discountValue = (pointsToUse / 100).toFixed(2);

  return (
    <Container>
      <div className="points-balance">
        <div className="balance-info">
          <strong>{balance} pontos</strong>
          <p>Disponíveis para uso</p>
          {balance >= 100 && (
            <span className="value">
              = R$ {calculateDiscount()}
            </span>
          )}
        </div>

        {balance < 100 && (
          <p className="info-text">
            <FaGift size={16} />
            Acumule 100 pontos para trocar por R$ 1,00 de desconto
          </p>
        )}
      </div>

      {showUseOption && canUsePoints() && (
        <div className="use-points-section">
          <div className="input-group">
            <input
              type="number"
              min="100"
              max={balance}
              step="100"
              value={pointsToUse || ""}
              onChange={(e) => setPointsToUse(Number(e.target.value))}
              placeholder="Quantidade de pontos"
            />
            <button
              className="btn-max"
              onClick={handleUseAllPoints}
              type="button"
            >
              Usar Todos
            </button>
          </div>

          {pointsToUse >= 100 && (
            <div className="discount-preview">
              <p>
                {pointsToUse} pontos = <strong>R$ {discountValue}</strong> de desconto
              </p>
            </div>
          )}

          <Button
            title={`Aplicar ${pointsToUse} pontos`}
            onClick={handleUsePoints}
            disabled={loading || pointsToUse < 100}
          />
        </div>
      )}
    </Container>
  );
}
