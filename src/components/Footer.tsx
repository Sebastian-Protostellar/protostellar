export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto w-full max-w-6xl px-6 pb-10 pt-8 sm:px-10">
      <div className="border-t border-line pt-8 text-xs leading-relaxed text-muted">
        <p>
          © {year} Protostellar &amp; Co. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
