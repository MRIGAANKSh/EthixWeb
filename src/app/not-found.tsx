import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-xl px-5 py-24 text-center">
        <h1 className="text-5xl font-extrabold">Page not found</h1>
        <p className="mt-4 text-ink-soft">That page does not exist or has moved.</p>
        <Link href="/" className="btn btn-primary mt-8">Back to home</Link>
      </main>
      <Footer />
    </>
  );
}
