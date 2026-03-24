"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

/* ─── Helpers ─── */
function Swatch({ variable, label, className }: { variable: string; label: string; className: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className={`h-14 w-full rounded-lg border ${className}`} />
      <p className="text-xs font-medium">{label}</p>
      <p className="text-[10px] text-muted-foreground font-mono">{variable}</p>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-heading font-bold mb-6 pb-2 border-b">{title}</h2>
      {children}
    </section>
  )
}

/* ─── Primary Scale ─── */
const primaryScale = [
  { label: "50", cls: "bg-primary-50" },
  { label: "100", cls: "bg-primary-100" },
  { label: "200", cls: "bg-primary-200" },
  { label: "300", cls: "bg-primary-300" },
  { label: "400", cls: "bg-primary-400" },
  { label: "500", cls: "bg-primary-500" },
  { label: "600", cls: "bg-primary-600" },
  { label: "700", cls: "bg-primary-700" },
  { label: "800", cls: "bg-primary-800" },
  { label: "900", cls: "bg-primary-900" },
]

const neutralScale = [
  { label: "50", cls: "bg-neutral-50" },
  { label: "100", cls: "bg-neutral-100" },
  { label: "200", cls: "bg-neutral-200" },
  { label: "300", cls: "bg-neutral-300" },
  { label: "400", cls: "bg-neutral-400" },
  { label: "500", cls: "bg-neutral-500" },
  { label: "600", cls: "bg-neutral-600" },
  { label: "700", cls: "bg-neutral-700" },
  { label: "800", cls: "bg-neutral-800" },
  { label: "900", cls: "bg-neutral-900" },
]

export default function StyleguidePage() {
  const [darkMode, setDarkMode] = useState(false)
  const [radioValue, setRadioValue] = useState("option-1")

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-background text-foreground min-h-screen p-10">

        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-heading font-bold">Design Tokens</h1>
            <p className="text-muted-foreground mt-2 text-lg">
              Consultoria Perfeita — Nature-inspired design system
            </p>
          </div>
          <Button
            variant="outline"
            onClick={() => setDarkMode(!darkMode)}
            className="gap-2"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </Button>
        </div>

        {/* ── COLORS ── */}
        <Section title="Color Palette">
          <div className="grid grid-cols-2 gap-6 mb-8">
            <Swatch variable="--background" label="Background" className="bg-background" />
            <Swatch variable="--foreground" label="Foreground" className="bg-foreground" />
            <Swatch variable="--card" label="Card" className="bg-card" />
            <Swatch variable="--primary" label="Primary (Sage Green)" className="bg-primary" />
            <Swatch variable="--secondary" label="Secondary (Mint)" className="bg-secondary" />
            <Swatch variable="--accent" label="Accent" className="bg-accent" />
            <Swatch variable="--muted" label="Muted" className="bg-muted" />
            <Swatch variable="--border" label="Border" className="bg-border" />
          </div>

          <h3 className="text-base font-semibold mb-3 text-muted-foreground">Primary Scale — Sage Green</h3>
          <div className="grid grid-cols-10 gap-2 mb-8">
            {primaryScale.map(({ label, cls }) => (
              <div key={label} className="flex flex-col gap-1">
                <div className={`h-12 w-full rounded-md border ${cls}`} />
                <p className="text-[10px] text-center font-mono text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>

          <h3 className="text-base font-semibold mb-3 text-muted-foreground">Neutral Scale — Warm Parchment</h3>
          <div className="grid grid-cols-10 gap-2 mb-8">
            {neutralScale.map(({ label, cls }) => (
              <div key={label} className="flex flex-col gap-1">
                <div className={`h-12 w-full rounded-md border ${cls}`} />
                <p className="text-[10px] text-center font-mono text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>

          <h3 className="text-base font-semibold mb-3 text-muted-foreground">Semantic Colors</h3>
          <div className="grid grid-cols-4 gap-4">
            <Swatch variable="--success" label="Success" className="bg-success" />
            <Swatch variable="--warning" label="Warning" className="bg-warning" />
            <Swatch variable="--destructive" label="Destructive" className="bg-destructive" />
            <Swatch variable="--info" label="Info" className="bg-info" />
          </div>
        </Section>

        {/* ── CHART COLORS ── */}
        <Section title="Chart Colors">
          <div className="grid grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((n) => (
              <Swatch
                key={n}
                variable={`--chart-${n}`}
                label={`Chart ${n}`}
                className={`bg-chart-${n}`}
              />
            ))}
          </div>
        </Section>

        {/* ── TYPOGRAPHY ── */}
        <Section title="Typography">
          <div className="space-y-6">
            <div className="p-6 bg-card rounded-2xl border">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4 font-sans">
                Heading Font — Merriweather (Serif)
              </p>
              <h1 className="font-heading text-5xl font-bold leading-tight mb-2">Display Heading</h1>
              <h2 className="font-heading text-4xl font-bold leading-tight mb-2">Heading One</h2>
              <h3 className="font-heading text-3xl font-bold leading-snug mb-2">Heading Two</h3>
              <h4 className="font-heading text-2xl font-semibold leading-snug mb-2">Heading Three</h4>
              <h5 className="font-heading text-xl font-semibold leading-snug mb-2">Heading Four</h5>
              <h6 className="font-heading text-lg font-medium leading-normal">Heading Five</h6>
            </div>
            <div className="p-6 bg-card rounded-2xl border">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">
                Body Font — Plus Jakarta Sans
              </p>
              <p className="text-2xl font-light mb-2">Large body text — light and airy.</p>
              <p className="text-lg mb-2">Regular body text. Consultoria para uma vida mais equilibrada e produtiva.</p>
              <p className="text-base mb-2">Base size. The quick brown fox jumps over the lazy dog.</p>
              <p className="text-sm text-muted-foreground mb-2">Small / muted text — captions and helper messages.</p>
              <p className="text-xs text-muted-foreground font-mono">Mono — Code snippets and technical details.</p>
            </div>
          </div>
        </Section>

        {/* ── BORDER RADIUS ── */}
        <Section title="Border Radius">
          <div className="flex flex-wrap gap-6 items-end">
            {[
              { name: "sm", cls: "rounded-sm" },
              { name: "md", cls: "rounded-md" },
              { name: "lg (base)", cls: "rounded-lg" },
              { name: "xl", cls: "rounded-xl" },
              { name: "2xl", cls: "rounded-2xl" },
              { name: "3xl", cls: "rounded-3xl" },
              { name: "full (pill)", cls: "rounded-full" },
            ].map(({ name, cls }) => (
              <div key={name} className="flex flex-col items-center gap-2">
                <div className={`w-20 h-20 bg-primary/20 border-2 border-primary ${cls}`} />
                <span className="text-xs text-muted-foreground font-mono">{name}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* ── SHADOWS ── */}
        <Section title="Shadows">
          <div className="flex flex-wrap gap-8 items-center">
            {[
              { name: "none", cls: "shadow-none" },
              { name: "sm", cls: "shadow-sm" },
              { name: "md", cls: "shadow-md" },
              { name: "lg", cls: "shadow-lg" },
              { name: "xl", cls: "shadow-xl" },
              { name: "2xl", cls: "shadow-2xl" },
            ].map(({ name, cls }) => (
              <div key={name} className="flex flex-col items-center gap-3">
                <div className={`w-20 h-20 bg-card rounded-xl ${cls}`} />
                <span className="text-xs text-muted-foreground font-mono">{name}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* ── COMPONENTS ── */}
        <Section title="Components">

          {/* Buttons */}
          <h3 className="text-lg font-semibold mb-4">Buttons</h3>
          <div className="flex flex-wrap gap-3 mb-8">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
            <Button disabled>Disabled</Button>
          </div>

          {/* Badges */}
          <h3 className="text-lg font-semibold mb-4">Badges</h3>
          <div className="flex flex-wrap gap-3 mb-8">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>

          {/* Cards */}
          <h3 className="text-lg font-semibold mb-4">Cards</h3>
          <div className="grid grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Consultoria Individual</CardTitle>
                <CardDescription>Sessões personalizadas para o seu crescimento profissional.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Acompanhamento semanal com estratégias adaptadas ao seu perfil e objetivos de carreira.
                </p>
              </CardContent>
              <CardFooter className="gap-3">
                <Button>Começar agora</Button>
                <Button variant="outline">Saiba mais</Button>
              </CardFooter>
            </Card>

            <Card className="border-primary/30 bg-primary/5">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Plano Premium</CardTitle>
                  <Badge>Popular</Badge>
                </div>
                <CardDescription>Transformação completa em 90 dias.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Programa intensivo com sessões semanais, materiais exclusivos e suporte contínuo.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Garantir minha vaga</Button>
              </CardFooter>
            </Card>
          </div>

          {/* Alerts */}
          <h3 className="text-lg font-semibold mb-4">Alerts</h3>
          <div className="flex flex-col gap-4 mb-8">
            <Alert>
              <AlertTitle>Informação</AlertTitle>
              <AlertDescription>
                As vagas são limitadas. Garanta seu lugar antes que encerre.
              </AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertTitle>Atenção</AlertTitle>
              <AlertDescription>
                Esta oferta expira em 24 horas. Não perca esta oportunidade.
              </AlertDescription>
            </Alert>
          </div>

          {/* Radio Group */}
          <h3 className="text-lg font-semibold mb-4">Radio Group</h3>
          <RadioGroup value={radioValue} onValueChange={setRadioValue} className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <RadioGroupItem value="option-1" id="opt1" />
              <Label htmlFor="opt1">Plano Mensal — R$ 497/mês</Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="option-2" id="opt2" />
              <Label htmlFor="opt2">Plano Trimestral — R$ 1.197 (economia de 20%)</Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="option-3" id="opt3" />
              <Label htmlFor="opt3">Plano Anual — R$ 3.997 (economia de 35%)</Label>
            </div>
          </RadioGroup>
        </Section>

      </div>
    </div>
  )
}
