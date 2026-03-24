import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CheckCircle, Star, TrendingUp, Zap } from "lucide-react"

function Section({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="font-heading text-xl font-semibold">{title}</h2>
        {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
      </div>
      <div className="flex flex-wrap items-center gap-3">
        {children}
      </div>
    </div>
  )
}

export default function BadgePage() {
  return (
    <div className="p-8 max-w-4xl space-y-10">
      <div>
        <h1 className="font-heading text-3xl font-bold">Badge</h1>
        <p className="text-muted-foreground mt-2">Compact labels for status, categories, and counts.</p>
      </div>

      <Section title="Variants" description="Six semantic variants for different contexts.">
        <Badge variant="default">Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="ghost">Ghost</Badge>
        <Badge variant="link">Link</Badge>
      </Section>

      <Section title="With Icons" description="Pair badges with small Lucide icons.">
        <Badge>
          <CheckCircle /> Verificado
        </Badge>
        <Badge variant="secondary">
          <TrendingUp /> Em alta
        </Badge>
        <Badge variant="outline">
          <Star /> Destaque
        </Badge>
        <Badge variant="destructive">
          <Zap /> Urgente
        </Badge>
      </Section>

      <Section title="Status Labels" description="Common status patterns for business workflows.">
        <Badge variant="default">Ativo</Badge>
        <Badge variant="secondary">Em andamento</Badge>
        <Badge variant="outline">Aguardando</Badge>
        <Badge variant="destructive">Cancelado</Badge>
        <Badge variant="ghost">Rascunho</Badge>
      </Section>

      <div className="space-y-4">
        <div>
          <h2 className="font-heading text-xl font-semibold">In Context</h2>
          <p className="text-sm text-muted-foreground mt-1">Badges used within cards to label content.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>Formação Completa</CardTitle>
                  <CardDescription>Curso + Acompanhamento</CardDescription>
                </div>
                <Badge>Popular</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">A trilha completa para quem quer viver de consultoria de alimentos.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>Kit Inicial</CardTitle>
                  <CardDescription>Documentos e modelos</CardDescription>
                </div>
                <Badge variant="secondary">Bônus</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Mais de 80 documentos essenciais para começar com segurança.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Certificado
                <Badge variant="outline">70h</Badge>
              </CardTitle>
              <CardDescription>Extensão universitária</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Certificado emitido por instituição parceira reconhecida pelo MEC.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Vagas
                <Badge variant="destructive">Últimas</Badge>
              </CardTitle>
              <CardDescription>Turma atual</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Inscrições abertas para a turma com início imediato.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
