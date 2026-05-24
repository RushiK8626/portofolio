import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "2rem",
        background: "#f8fafc",
        color: "#0f172a",
      }}
    >
      <div style={{ maxWidth: "36rem", textAlign: "center" }}>
        <p style={{ marginBottom: "0.75rem", fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "#475569" }}>
          404
        </p>
        <h1 style={{ margin: 0, fontSize: "clamp(2.5rem, 6vw, 4rem)", lineHeight: 1.1, color: "#020617" }}>
          Page not found
        </h1>
        <p style={{ margin: "1rem 0 0", fontSize: "1.125rem", lineHeight: 1.7, color: "#475569" }}>
          The page you&apos;re looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            marginTop: "1.75rem",
            padding: "0.9rem 1.4rem",
            borderRadius: "12px",
            background: "#6366f1",
            color: "#ffffff",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Go home
        </Link>
      </div>
    </main>
  );
}