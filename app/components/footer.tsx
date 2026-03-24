export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card py-8">
      <div className="mx-auto max-w-5xl px-6 text-center space-y-2">
        <p className="font-heading font-semibold text-foreground">Consultoria Perfeita</p>
        <p className="text-sm text-muted-foreground">
          Formação completa para nutricionistas viverem de consultoria de alimentos.
        </p>
        <p className="text-xs text-muted-foreground pt-2">
          © {new Date().getFullYear()} Consultoria Perfeita. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
