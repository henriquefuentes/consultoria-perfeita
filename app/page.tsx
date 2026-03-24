import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Award,
  BookOpen,
  Calendar,
  Check,
  FileText,
  Gift,
  MessageCircle,
  Shield,
  Star,
  TrendingUp,
  Trophy,
  Users,
  X,
} from "lucide-react"
import { FaqAccordion } from "./components/faq-accordion"
import { Footer } from "./components/footer"
import { Header } from "./components/header"

/* ------------------------------------------------------------------ */
/*  Shared helpers                                                       */
/* ------------------------------------------------------------------ */

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5">
      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
      <span>{children}</span>
    </li>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-heading text-3xl font-bold leading-tight md:text-4xl">{children}</h2>
  )
}

function CtaButton({ label = "QUERO FATURAR 10K COM CONSULTORIA" }: { label?: string }) {
  return (
    <Button
      size="lg"
      className="rounded-full px-8 py-6 text-base font-bold uppercase tracking-wide shadow-lg"
      render={<a href="#investimento" />}
    >
      👉 {label}
    </Button>
  )
}

/* ------------------------------------------------------------------ */
/*  Section 01 — Promessa (Hero)                                        */
/* ------------------------------------------------------------------ */

function SectionPromessa() {
  return (
    <section className="bg-foreground text-background pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-6 text-center space-y-6">
        <Badge className="bg-primary/20 text-primary border-primary/30">
          Método VDC — validado há 23 anos
        </Badge>
        <h1 className="font-heading text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          Nutricionista, você não estudou anos para continuar insegura, depender de renda instável e
          ganhar menos do que merece.
        </h1>
        <p className="text-xl text-background/70 font-heading italic">
          A luz no fim do túnel existe.
        </p>
        <p className="text-2xl font-bold text-background">
          Fature acima de R$10.000 por mês com consultoria de alimentos — mesmo começando do zero.
        </p>
        <p className="text-lg text-background/80">Neste vídeo, eu vou te mostrar como:</p>
        <ul className="text-left inline-flex flex-col gap-3 text-background/90">
          <CheckItem>Estruturar sua consultoria com posicionamento profissional</CheckItem>
          <CheckItem>Conquistar seus primeiros contratos com segurança</CheckItem>
          <CheckItem>Usar o conhecimento que você já tem para fechar contratos reais</CheckItem>
          <CheckItem>Construir estabilidade financeira e reconhecimento no mercado</CheckItem>
        </ul>
        <p className="text-sm text-background/50">
          Com um método validado há 23 anos e aplicado por mais de 100 alunas.
        </p>
        <div className="pt-2">
          <CtaButton />
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Section 02 — Identificação                                          */
/* ------------------------------------------------------------------ */

function SectionIdentificacao() {
  return (
    <section className="bg-card py-20">
      <div className="mx-auto max-w-2xl px-6 space-y-6 text-center">
        <SectionTitle>Se você sente que estudou tanto…</SectionTitle>
        <div className="space-y-4 text-lg text-muted-foreground text-left">
          <p>e ainda assim não vive da profissão como imaginou…</p>
          <p>Você acorda e sente que poderia estar mais longe.</p>
          <p>Trabalha, trabalha… e o dinheiro não acompanha.</p>
          <p>Recebe, mas sabe que poderia ganhar mais.</p>
          <p>E em algum momento, em silêncio, se pergunta:</p>
          <p className="font-heading text-xl font-semibold text-foreground">
            "Será que eu escolhi a profissão certa?"
          </p>
        </div>
        <Separator />
        <p className="text-lg">Mas deixa eu te dizer uma coisa com clareza:</p>
        <div className="space-y-3 text-xl font-semibold font-heading">
          <p className="text-primary">Não é falta de capacidade.</p>
          <p>O problema não é você.</p>
          <p className="text-2xl font-bold">O que faltava era direção.</p>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Section 03 — A Virada                                               */
/* ------------------------------------------------------------------ */

function SectionVirada() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-2xl px-6 space-y-8 text-center">
        <SectionTitle>O que está te impedindo não é falta de esforço.</SectionTitle>
        <div className="space-y-3 text-lg text-muted-foreground text-left">
          <p>Você trabalha. Você se dedica. Você faz o que precisa ser feito.</p>
          <p>Mas o dinheiro não acompanha.</p>
          <p>E não é porque o mercado não tem espaço.</p>
          <p>O setor de alimentos cresce todos os anos.</p>
          <p>O que falta não é oportunidade.</p>
          <p className="text-foreground font-semibold text-xl">
            O que faltava era um caminho seguro.
          </p>
        </div>
        <div className="rounded-2xl bg-primary/10 border border-primary/20 p-8 text-left space-y-5">
          <p className="font-heading text-xl font-bold text-center">
            Foi por isso que eu criei a{" "}
            <span className="text-primary">Formação Consultoria Perfeita.</span>
          </p>
          <p className="text-muted-foreground text-center">
            Uma formação completa que ensina você a viver de consultoria de alimentos através do{" "}
            <strong>Método VDC — Viver de Consultoria.</strong>
          </p>
          <p className="font-medium text-center">Um passo a passo validado há 23 anos para você:</p>
          <ul className="space-y-2">
            <CheckItem>Estruturar sua consultoria do zero</CheckItem>
            <CheckItem>Se posicionar como profissional</CheckItem>
            <CheckItem>Prospectar empresas com segurança</CheckItem>
            <CheckItem>Fechar contratos recorrentes</CheckItem>
            <CheckItem>Faturar acima de R$10 mil por mês</CheckItem>
          </ul>
          <p className="text-center font-semibold text-muted-foreground">
            Mesmo começando do zero.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Section 04 — O que é Consultoria                                    */
/* ------------------------------------------------------------------ */

const clientTypes = [
  "Padarias",
  "Restaurantes",
  "Mercados",
  "Lanchonetes",
  "Pequenos produtores",
]

function SectionOQueEConsultoria() {
  return (
    <section className="bg-card py-20">
      <div className="mx-auto max-w-2xl px-6 space-y-8">
        <div className="text-center">
          <SectionTitle>Mas afinal… o que é consultoria de alimentos?</SectionTitle>
        </div>
        <p className="text-lg text-muted-foreground text-center">
          É ajudar empresas que manipulam alimentos a organizarem seus processos, implantarem boas
          práticas e manterem a documentação sanitária exigida.
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          {clientTypes.map((c) => (
            <Badge key={c} variant="secondary" className="text-sm px-3 py-1">
              {c}
            </Badge>
          ))}
        </div>
        <div className="rounded-2xl border bg-background p-6 space-y-3 text-center">
          <p className="text-muted-foreground">Essas empresas precisam de organização.</p>
          <p className="text-muted-foreground">E muitas não sabem por onde começar.</p>
          <p className="font-heading text-xl font-bold">É aí que entra a consultoria.</p>
          <p className="text-muted-foreground">
            Você não precisa ter anos de experiência.
            <br />
            Você precisa saber estruturar o serviço.
          </p>
          <p className="font-semibold text-primary">E é isso que quase ninguém ensina.</p>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Section 05 — Mercado                                                */
/* ------------------------------------------------------------------ */

const marketItems = [
  { icon: TrendingUp, label: "Novos restaurantes" },
  { icon: Star, label: "Novas padarias" },
  { icon: Users, label: "Novos deliverys" },
  { icon: Award, label: "Pequenos produtores" },
  { icon: Gift, label: "Marcas artesanais" },
]

function SectionMercado() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-2xl px-6 space-y-8 text-center">
        <SectionTitle>O mercado de alimentos não para de crescer.</SectionTitle>
        <p className="text-lg text-muted-foreground">Todos os dias abrem:</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {marketItems.map(({ icon: Icon, label }) => (
            <Card key={label} className="text-center">
              <CardContent className="flex flex-col items-center gap-2 py-5">
                <div className="rounded-xl bg-primary/10 p-3">
                  <Icon className="size-5 text-primary" />
                </div>
                <span className="text-sm font-medium">{label}</span>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="space-y-3 text-muted-foreground">
          <p>E todas essas empresas precisam:</p>
          <ul className="inline-flex flex-col gap-2 text-left">
            <CheckItem>Organizar processos</CheckItem>
            <CheckItem>Implantar boas práticas</CheckItem>
            <CheckItem>Ter documentação sanitária</CheckItem>
            <CheckItem>Se preparar para fiscalizações</CheckItem>
          </ul>
        </div>
        <div className="rounded-2xl bg-primary/10 border border-primary/20 p-6 space-y-2">
          <p className="text-muted-foreground">A pergunta não é se existe mercado.</p>
          <p className="font-heading text-2xl font-bold text-primary">
            A pergunta é: quem vai ocupar esse espaço?
          </p>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Section 06 — Mesmo do Zero                                          */
/* ------------------------------------------------------------------ */

function SectionMesmoDoZero() {
  return (
    <section className="bg-card py-20">
      <div className="mx-auto max-w-2xl px-6 space-y-8">
        <div className="text-center">
          <SectionTitle>"Mas eu nunca fiz consultoria…"</SectionTitle>
          <p className="mt-3 text-lg text-muted-foreground">Essa é a frase que eu mais escuto.</p>
        </div>
        <div className="rounded-2xl border bg-background p-6 space-y-3 text-center">
          <p className="font-heading text-xl font-semibold">
            E deixa eu te dizer uma coisa com clareza:
          </p>
          <p className="text-muted-foreground">
            Você não precisa ter experiência em consultoria para começar.
          </p>
          <p className="font-bold text-primary text-xl">Você precisa de um caminho.</p>
        </div>
        <div className="space-y-3">
          <p className="font-medium text-center">
            A maioria das profissionais que entram na Formação:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <X className="size-4 text-destructive shrink-0" />
              Nunca fechou um contrato
            </li>
            <li className="flex items-center gap-2">
              <X className="size-4 text-destructive shrink-0" />
              Nunca ofereceu consultoria
            </li>
            <li className="flex items-center gap-2">
              <X className="size-4 text-destructive shrink-0" />
              Nunca se posicionou como consultora
            </li>
          </ul>
        </div>
        <div className="space-y-2 text-center">
          <p className="font-medium">Elas começam do zero.</p>
          <ul className="inline-flex flex-col gap-2 text-left">
            <CheckItem>Com orientação.</CheckItem>
            <CheckItem>Com estrutura.</CheckItem>
            <CheckItem>Com modelos prontos.</CheckItem>
            <CheckItem>Com acompanhamento.</CheckItem>
          </ul>
          <p className="pt-2 font-heading text-xl font-bold">
            E é assim que deixam de ser "iniciante" e passam a se tornar profissionais estruturadas.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Section 07 — Provas                                                 */
/* ------------------------------------------------------------------ */

const achievements = [
  { icon: Trophy, label: "Primeiros contratos fechados" },
  { icon: Star, label: "Placas de 5K conquistadas" },
  { icon: TrendingUp, label: "Faturamento de 10K alcançado" },
  { icon: Award, label: "Consultorias organizadas com segurança" },
]

function SectionProvas() {
  return (
    <section className="bg-foreground text-background py-20">
      <div className="mx-auto max-w-2xl px-6 space-y-8 text-center">
        <Badge className="bg-primary/20 text-primary border-primary/30">Resultados reais</Badge>
        <SectionTitle>Não é teoria.</SectionTitle>
        <p className="text-xl text-background/80">
          São profissionais reais, começando do zero, fechando contratos.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {achievements.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="rounded-2xl border border-background/10 bg-background/5 p-5 flex flex-col items-center gap-3"
            >
              <div className="rounded-xl bg-primary/20 p-3">
                <Icon className="size-6 text-primary" />
              </div>
              <p className="text-sm font-medium text-background/90">{label}</p>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-background/10 p-6 space-y-2">
          <p className="text-background/60">Elas não tinham experiência em consultoria.</p>
          <p className="font-heading text-2xl font-bold">Elas tinham direção.</p>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Section 08 — O que Recebe                                           */
/* ------------------------------------------------------------------ */

const deliverables = [
  {
    icon: BookOpen,
    label: "Curso completo com aulas gravadas",
    desc: "Para aprender no seu ritmo, com clareza e organização.",
  },
  {
    icon: Calendar,
    label: "Encontros ao vivo semanais",
    desc: "Para tirar dúvidas, ajustar estratégia e não caminhar sozinha.",
  },
  {
    icon: FileText,
    label: "Modelos prontos de documentos",
    desc: "Para estruturar sua consultoria com segurança desde o início.",
  },
  {
    icon: MessageCircle,
    label: "Suporte no WhatsApp em horário comercial",
    desc: "Para você ter orientação sempre que precisar.",
  },
  {
    icon: Users,
    label: "Comunidade exclusiva no WhatsApp",
    desc: "Para trocar experiências e crescer junto com outras profissionais.",
  },
  {
    icon: Award,
    label: "Certificado de extensão (70 horas)",
    desc: "Emitido por instituição parceira.",
  },
  {
    icon: Shield,
    label: "1 ano de acesso completo",
    desc: "Para aplicar, revisar e evoluir no seu tempo.",
  },
]

const bonuses = [
  {
    question: '"Mas eu não sei quais documentos usar…"',
    gift: "NutriPack",
    desc: "Um combo com mais de 80 documentos essenciais que toda consultora de alimentos precisa ter para atuar com segurança e profissionalismo. São editáveis: Manual de Boas Práticas, POPs, Planilhas, Relatórios e outros.",
  },
  {
    question: '"Eu não sei como vender meu primeiro serviço…"',
    gift: "Pasta Sanitária Perfeita",
    desc: "Um treinamento prático para estruturar e vender seu primeiro serviço — de forma mais simples e estratégica.",
  },
  {
    question: '"Tenho medo de não saber o que falar na hora de vender…"',
    gift: "Código da Consultora Segura",
    desc: "Scripts prontos para apresentação presencial e online, para fortalecer sua postura, comunicação e segurança.",
  },
  {
    question: '"E se eu travar no primeiro contrato?"',
    gift: "Kit Primeira Consultoria",
    desc: "Um passo a passo do que fazer quando fechar seu primeiro contrato, com estrutura prática para conduzir seu primeiro atendimento.",
  },
]

function SectionOQueRecebe() {
  return (
    <section className="bg-background py-20" id="o-que-recebe">
      <div className="mx-auto max-w-3xl px-6 space-y-12">
        <div className="text-center">
          <SectionTitle>Dentro da Formação Consultoria Perfeita, você recebe:</SectionTitle>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {deliverables.map(({ icon: Icon, label, desc }) => (
            <Card key={label}>
              <CardContent className="flex gap-4 py-5">
                <div className="rounded-xl bg-primary/10 p-2.5 h-fit">
                  <Icon className="size-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">{label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-4">
          <h3 className="font-heading text-2xl font-bold text-center">
            Além disso, você ainda recebe bônus estratégicos:
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {bonuses.map(({ question, gift, desc }) => (
              <div key={gift} className="rounded-2xl border bg-card p-5 space-y-3">
                <p className="text-sm text-muted-foreground italic">{question}</p>
                <div className="flex items-center gap-2">
                  <Gift className="size-4 text-primary shrink-0" />
                  <p className="font-heading font-bold text-primary">{gift}</p>
                </div>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Section 09 — Para Quem É                                            */
/* ------------------------------------------------------------------ */

function SectionParaQuemE() {
  return (
    <section className="bg-card py-20">
      <div className="mx-auto max-w-2xl px-6 space-y-8">
        <div className="text-center">
          <SectionTitle>A Formação Consultoria Perfeita é para você que:</SectionTitle>
        </div>
        <ul className="space-y-3 text-lg">
          <CheckItem>
            Quer começar na consultoria de alimentos, mas não sabe por onde começar
          </CheckItem>
          <CheckItem>Está cansada de ganhar pouco e quer aumentar sua renda</CheckItem>
          <CheckItem>Quer sair da dependência de renda instável</CheckItem>
          <CheckItem>Deseja fechar contratos com segurança e previsibilidade</CheckItem>
          <CheckItem>Quer mais liberdade de tempo e autonomia na sua rotina</CheckItem>
          <CheckItem>
            É estudante, recém-formada, clínica, de UAN, desempregada ou quer migrar de área
          </CheckItem>
          <CheckItem>Quer empreender e construir seu próprio negócio</CheckItem>
        </ul>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Section 10 — Investimento + Garantia                                */
/* ------------------------------------------------------------------ */

function SectionInvestimento() {
  return (
    <section className="bg-background py-20" id="investimento">
      <div className="mx-auto max-w-xl px-6 space-y-10 text-center">
        <div className="space-y-3">
          <SectionTitle>Tudo isso poderia facilmente ser uma pós-graduação.</SectionTitle>
          <p className="text-muted-foreground text-lg">
            Mas a Formação Consultoria Perfeita foi criada para ser prática, aplicável e acessível.
          </p>
        </div>

        <div className="rounded-2xl border-2 border-primary bg-primary/5 p-8 space-y-4">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            Hoje você pode entrar por
          </p>
          <div className="space-y-2">
            <p className="font-heading text-4xl font-bold text-primary">12x de R$129,90</p>
            <p className="text-muted-foreground">ou</p>
            <p className="font-heading text-2xl font-semibold">R$1.290,00 à vista</p>
          </div>
          <p className="text-sm text-muted-foreground">
            Um investimento menor do que muitos cursos técnicos que não ensinam você a fechar
            contratos.
            <br />
            E que pode ser recuperado com o seu primeiro ou segundo contrato.
          </p>
          <CtaButton />
        </div>

        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 space-y-4">
          <Shield className="size-10 text-primary mx-auto" />
          <h3 className="font-heading text-2xl font-bold">Garantia</h3>
          <p className="text-lg font-semibold">Você tem 7 dias de garantia incondicional.</p>
          <p className="text-muted-foreground">
            Entrou. Assistiu. Não sentiu que é para você?
            <br />
            Basta solicitar dentro do prazo e você recebe 100% do seu dinheiro de volta.
          </p>
          <ul className="inline-flex flex-col gap-2 text-left text-sm">
            <CheckItem>Sem burocracia.</CheckItem>
            <CheckItem>Sem justificativa.</CheckItem>
            <CheckItem>Sem risco.</CheckItem>
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Section 11 — CTA Final                                              */
/* ------------------------------------------------------------------ */

function SectionCtaFinal() {
  return (
    <section className="bg-primary py-20">
      <div className="mx-auto max-w-2xl px-6 text-center space-y-6">
        <h2 className="font-heading text-4xl font-bold text-primary-foreground leading-tight">
          A luz no fim do túnel existe.
        </h2>
        <p className="text-xl text-primary-foreground/80">Agora a decisão é sua.</p>
        <Button
          size="lg"
          className="rounded-full bg-background text-foreground hover:bg-background/90 px-8 py-6 text-base font-bold uppercase tracking-wide shadow-lg"
          render={<a href="#investimento" />}
        >
          👉 QUERO FATURAR 10K COM CONSULTORIA
        </Button>
        <p className="text-sm text-primary-foreground/60">✔ Sem enrolação</p>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Section 12 — FAQ                                                    */
/* ------------------------------------------------------------------ */

function SectionFaq() {
  return (
    <section className="bg-card py-20">
      <div className="mx-auto max-w-2xl px-6 space-y-8">
        <div className="text-center">
          <SectionTitle>Perguntas Frequentes</SectionTitle>
        </div>
        <FaqAccordion />
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <SectionPromessa />
        <SectionIdentificacao />
        <SectionVirada />
        <SectionOQueEConsultoria />
        <SectionMercado />
        <SectionMesmoDoZero />
        <SectionProvas />
        <SectionOQueRecebe />
        <SectionParaQuemE />
        <SectionInvestimento />
        <SectionCtaFinal />
        <SectionFaq />
      </main>
      <Footer />
    </>
  )
}
