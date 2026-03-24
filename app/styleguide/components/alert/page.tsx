import { Alert, AlertAction, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { AlertCircle, AlertTriangle, CheckCircle, Info, X } from "lucide-react"

function Section({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="font-heading text-xl font-semibold">{title}</h2>
        {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
      </div>
      <div className="flex flex-col gap-3">
        {children}
      </div>
    </div>
  )
}

export default function AlertPage() {
  return (
    <div className="p-8 max-w-3xl space-y-10">
      <div>
        <h1 className="font-heading text-3xl font-bold">Alert</h1>
        <p className="text-muted-foreground mt-2">Contextual messages to inform users about states, errors, or actions.</p>
      </div>

      <Section title="Base Variants" description="Two built-in variants — default (neutral) and destructive.">
        <Alert>
          <AlertTitle>Informação</AlertTitle>
          <AlertDescription>Este é um alerta padrão para comunicar uma informação neutral ao usuário.</AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <AlertTitle>Erro</AlertTitle>
          <AlertDescription>Algo deu errado ao processar sua solicitação. Tente novamente.</AlertDescription>
        </Alert>
      </Section>

      <Section title="With Icons" description="Pair with Lucide icons for semantic meaning.">
        <Alert>
          <Info />
          <AlertTitle>Dica</AlertTitle>
          <AlertDescription>Você pode usar suporte via WhatsApp em horário comercial para tirar dúvidas durante a formação.</AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <AlertCircle />
          <AlertTitle>Erro de validação</AlertTitle>
          <AlertDescription>Verifique os campos obrigatórios antes de continuar.</AlertDescription>
        </Alert>
      </Section>

      <Section title="Semantic Variants" description="Extend the base component with semantic background colors.">
        <Alert className="bg-success/10 border-success/20 text-success-foreground">
          <CheckCircle className="text-success" />
          <AlertTitle className="text-success">Sucesso!</AlertTitle>
          <AlertDescription className="text-success/80">Seu contrato foi fechado com sucesso. Bem-vinda à formação!</AlertDescription>
        </Alert>
        <Alert className="bg-warning/10 border-warning/20 text-warning-foreground">
          <AlertTriangle className="text-warning" />
          <AlertTitle className="text-warning">Atenção</AlertTitle>
          <AlertDescription className="text-warning/80">Sua inscrição expira em 24 horas. Confirme seu pagamento para garantir a vaga.</AlertDescription>
        </Alert>
        <Alert className="bg-info/10 border-info/20 text-info-foreground">
          <Info className="text-info" />
          <AlertTitle className="text-info">Novidade</AlertTitle>
          <AlertDescription className="text-info/80">Nova turma disponível com aulas ao vivo às terças-feiras.</AlertDescription>
        </Alert>
      </Section>

      <Section title="With Action" description="Include a dismissible or action button inside the alert.">
        <Alert>
          <Info />
          <AlertTitle>Bem-vinda à plataforma!</AlertTitle>
          <AlertDescription>Complete seu perfil para ter acesso a todos os recursos da formação.</AlertDescription>
          <AlertAction>
            <Button size="icon-sm" variant="ghost" aria-label="Fechar">
              <X />
            </Button>
          </AlertAction>
        </Alert>
        <Alert variant="destructive">
          <AlertCircle />
          <AlertTitle>Pagamento pendente</AlertTitle>
          <AlertDescription>Regularize sua situação para continuar acessando os conteúdos.</AlertDescription>
          <AlertAction>
            <Button size="sm" variant="destructive">Pagar agora</Button>
          </AlertAction>
        </Alert>
      </Section>

      <Section title="Without Title" description="Description-only for short, inline messages.">
        <Alert>
          <CheckCircle className="text-primary" />
          <AlertDescription>Seus dados foram salvos automaticamente.</AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <AlertCircle />
          <AlertDescription>E-mail ou senha inválidos. Tente novamente.</AlertDescription>
        </Alert>
      </Section>
    </div>
  )
}
