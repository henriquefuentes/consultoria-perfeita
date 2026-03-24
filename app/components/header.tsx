import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="font-heading text-lg font-bold text-foreground">
          Consultoria Perfeita
        </Link>
        <Button size="sm" render={<a href="#investimento" />}>
          Quero entrar
        </Button>
      </div>
    </header>
  )
}
