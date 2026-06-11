import { Suspense } from "react";
import LoginForm from "../_components/LoginForm";

export default function AdminLoginPage() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24 }}>
      <section style={{ width: "100%", maxWidth: 420 }}>
        <h1 style={{ fontSize: 30, marginBottom: 8 }}>Dongfeng CMS</h1>
        <Suspense fallback={null}>
          <LoginForm />
        </Suspense>
      </section>
    </main>
  );
}
