export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-muted-foreground text-sm">
        <p>
          © {new Date().getFullYear()} Henrique Martins. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
