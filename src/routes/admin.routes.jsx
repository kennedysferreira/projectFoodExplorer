import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Lazy loading de páginas
const Home = lazy(() => import("../pages/Home").then(m => ({ default: m.Home })));
const About = lazy(() => import("../pages/About").then(m => ({ default: m.About })));
const Profile = lazy(() => import("../pages/Profile").then(m => ({ default: m.Profile })));
const NewPlate = lazy(() => import("../pages/NewPlate").then(m => ({ default: m.NewPlate })));
const EditPlate = lazy(() => import("../pages/EditPlate").then(m => ({ default: m.EditPlate })));
const PlateView = lazy(() => import("../pages/PlateView").then(m => ({ default: m.PlateView })));
const OrderHistory = lazy(() => import("../pages/OrderHistory").then(m => ({ default: m.OrderHistory })));
const AdminPayments = lazy(() => import("../pages/AdminPayments").then(m => ({ default: m.AdminPayments })));
const PaymentHistory = lazy(() => import("../pages/PaymentHistory").then(m => ({ default: m.PaymentHistory })));

export function AdminRoutes() {
  return (
    <Suspense fallback={<div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: '#000',
      color: '#fff'
    }}>Carregando...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plateview/:id" element={<PlateView />} />
        <Route path="/newplate" element={<NewPlate />} />
        <Route path="/editplate/:id" element={<EditPlate />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/admin-payments" element={<AdminPayments />} />
        <Route path="/payment-history" element={<PaymentHistory />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
}
