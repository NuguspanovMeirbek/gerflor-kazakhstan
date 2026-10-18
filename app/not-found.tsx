import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-site max-w-xl py-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gerflor-accent">
          404
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-gerflor-navy">
          Страница не найдена
        </h1>
        <p className="mt-3 text-slate-600">
          Проверьте адрес или вернитесь на главную Gerflor Kazakhstan.
        </p>
        <Link href="/" className="btn-primary mt-8 inline-flex">
          На главную
        </Link>
      </div>
    </section>
  );
}
