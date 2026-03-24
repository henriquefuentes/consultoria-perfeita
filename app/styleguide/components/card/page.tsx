import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ArrowRight, Star, TrendingUp } from "lucide-react"

function Section({ title, description, children, grid = true }: { title: string; description?: string; children: React.ReactNode; grid?: boolean }) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="font-heading text-xl font-semibold">{title}</h2>
        {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
      </div>
      <div className={grid ? "grid gap-4 sm:grid-cols-2 lg:grid-cols-3" : "flex flex-col gap-4"}>
        {children}
      </div>
    </div>
  )
}

export default function CardPage() {
  return (
    <div className="p-8 max-w-5xl space-y-10">
      <div>
        <h1 className="font-heading text-3xl font-bold">Card</h1>
        <p className="text-muted-foreground mt-2">A flexible container for grouping related content and actions.</p>
      </div>

      <Section title="Basic Card" description="Minimal card with content only.">
        <Card>
          <CardContent>
            <p className="text-muted-foreground">A simple card with just a content block. Useful for displaying a single piece of information.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-3">
            <div className="rounded-xl bg-primary/10 p-3">
              <TrendingUp className="size-5 text-primary" />
            </div>
            <div>
              <p className="font-medium">Revenue</p>
              <p className="text-2xl font-bold font-heading">R$12.400</p>
            </div>
          </CardContent>
        </Card>
      </Section>

      <Section title="With Header & Footer" description="Card with full structure — header, content, and footer.">
        <Card>
          <CardHeader>
            <CardTitle>Consultoria Individual</CardTitle>
            <CardDescription>Atendimento personalizado para sua empresa</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">Diagnóstico completo e plano de ação sob medida para o seu negócio de alimentos.</p>
          </CardContent>
          <CardFooter>
            <Button size="sm" className="w-full">Ver detalhes</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Plano Premium</CardTitle>
            <CardDescription>Acompanhamento mensal contínuo</CardDescription>
            <CardAction>
              <Badge>Popular</Badge>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">Suporte completo com visitas mensais, treinamentos e documentação atualizada.</p>
          </CardContent>
          <CardFooter className="justify-between">
            <span className="text-sm text-muted-foreground">A partir de</span>
            <span className="font-heading font-bold text-lg">R$890/mês</span>
          </CardFooter>
        </Card>
      </Section>

      <Section title="Accent Border" description="Highlight a card with a primary-colored left border.">
        <Card className="border-l-4 border-l-primary">
          <CardHeader>
            <CardTitle>Destaque</CardTitle>
            <CardDescription>Este plano é mais popular</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">Use a borda de acento para dar destaque a um item dentro de um grupo de cards.</p>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-destructive">
          <CardHeader>
            <CardTitle>Atenção</CardTitle>
            <CardDescription>Ação necessária</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">Borda destrutiva para alertas que requerem atenção imediata do usuário.</p>
          </CardContent>
        </Card>
      </Section>

      <Section title="Small Size" description="Compact card variant for dense layouts.">
        <Card size="sm">
          <CardHeader>
            <CardTitle>Resultado</CardTitle>
            <CardDescription>Meta atingida</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Star className="size-4 text-primary fill-primary" />
              <span className="font-semibold">5K conquistados</span>
            </div>
          </CardContent>
        </Card>
        <Card size="sm">
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Contratos ativos</span>
              <span className="font-heading font-bold text-primary">7</span>
            </div>
          </CardContent>
        </Card>
      </Section>

      <Section title="With CTA" description="Card driving a primary action." grid={false}>
        <Card className="sm:flex-row items-center">
          <CardContent className="flex-1 py-6">
            <p className="font-heading text-lg font-semibold">Pronta para começar?</p>
            <p className="text-muted-foreground text-sm mt-1">Inicie sua jornada na consultoria de alimentos hoje mesmo.</p>
          </CardContent>
          <CardFooter className="sm:border-t-0 sm:border-l sm:rounded-b-none sm:rounded-r-xl">
            <Button>
              Começar agora <ArrowRight />
            </Button>
          </CardFooter>
        </Card>
      </Section>
    </div>
  )
}
