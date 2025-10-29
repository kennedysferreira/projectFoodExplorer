import { useEffect } from "react";
import { Container } from "./style";
import { useAuth } from "../../hooks/auth";
import { useParams, useNavigate } from "react-router-dom";
import Lottie from "react-lottie";

// Simple success animation data
const successAnimation = {
  v: "5.5.7",
  fr: 60,
  ip: 0,
  op: 60,
  w: 200,
  h: 200,
  nm: "Success",
  ddd: 0,
  assets: [],
  layers: [{
    ddd: 0,
    ind: 1,
    ty: 4,
    nm: "Check",
    sr: 1,
    ks: {
      o: { a: 0, k: 100 },
      r: { a: 0, k: 0 },
      p: { a: 0, k: [100, 100, 0] },
      a: { a: 0, k: [0, 0, 0] },
      s: { a: 0, k: [100, 100, 100] }
    },
    ao: 0,
    shapes: [],
    ip: 0,
    op: 60,
    st: 0,
    bm: 0
  }]
};

export function ConfirmPayment() {
  const { updatePayment } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: successAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  useEffect(() => {
    updatePayment(id);

    // Redirect to order history after 3 seconds
    const timer = setTimeout(() => {
      navigate("/order-history");
    }, 3000);

    return () => clearTimeout(timer);
  }, [id, updatePayment, navigate]);

  return (
    <Container>
      <div>
        <Lottie options={defaultOptions} height={200} width={200} />
        <p>Pagamento realizado!</p>
        <p className="redirect-message">Redirecionando para histórico de pedidos...</p>
      </div>
    </Container>
  );
}
