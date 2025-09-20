export function Footer() {
  return (
    <footer className="border-border border-t py-8">
      <div className="text-muted-foreground mx-auto max-w-4xl px-4 text-center text-sm sm:px-6">
        <p>© {new Date().getFullYear()} Henrique Martins. All rights reserved.</p>
      </div>
    </footer>
  );
}
