"use client";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav style={{ display: "flex", gap: "20px", padding: "10px", background: "#f4f4f4" }}>
        <Link href="/components/Button">Button</Link>
        <Link href="/components/Card">Card</Link>
        <Link href="/components/Modal">Modal</Link>
      </nav>
    </>
  );
}