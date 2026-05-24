"use client";

import Link from "next/link";
import { useEffect } from "react";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

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
          Something went wrong
        </p>
        <h1 style={{ margin: 0, fontSize: "clamp(2.5rem, 6vw, 4rem)", lineHeight: 1.1, color: "#020617" }}>
          Unexpected error
        </h1>
        <p style={{ margin: "1rem 0 0", fontSize: "1.125rem", lineHeight: 1.7, color: "#475569" }}>
          Please try again. The error page is kept in the light theme for now.
        </p>
        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1.75rem" }}>
          <button
            type="button"
            onClick={reset}
            style={{
              padding: "0.9rem 1.4rem",
              borderRadius: "12px",
              border: "none",
              background: "#6366f1",
              color: "#ffffff",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              padding: "0.9rem 1.4rem",
              borderRadius: "12px",
              border: "1px solid #cbd5e1",
              background: "#ffffff",
              color: "#0f172a",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Go home
          </Link>
        </div>
      </div>
    </main>
  );
}