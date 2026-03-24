"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

function Section({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="font-heading text-xl font-semibold">{title}</h2>
        {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
      </div>
      {children}
    </div>
  )
}

function Field({ label, children, hint }: { label: string; children: React.ReactNode; hint?: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label>{label}</Label>
      {children}
      {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
    </div>
  )
}

export default function FormPage() {
  return (
    <div className="p-8 max-w-2xl space-y-10">
      <div>
        <h1 className="font-heading text-3xl font-bold">Form Elements</h1>
        <p className="text-muted-foreground mt-2">Input controls for building accessible, consistent forms.</p>
      </div>

      <Section title="Input" description="Single-line text input for short values.">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Nome completo">
            <Input placeholder="Ex: Maria da Silva" />
          </Field>
          <Field label="E-mail">
            <Input type="email" placeholder="maria@exemplo.com" />
          </Field>
          <Field label="WhatsApp" hint="Incluindo DDD, ex: 11999999999">
            <Input type="tel" placeholder="(11) 99999-9999" />
          </Field>
          <Field label="Com valor preenchido">
            <Input defaultValue="Consultoria de Alimentos" />
          </Field>
        </div>
      </Section>

      <Section title="Input States" description="Default, disabled, and validation error states.">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Padrão">
            <Input placeholder="Digite aqui..." />
          </Field>
          <Field label="Desabilitado">
            <Input placeholder="Não editável" disabled />
          </Field>
          <Field label="Inválido" hint="Campo obrigatório">
            <Input aria-invalid placeholder="Preencha este campo" />
          </Field>
          <Field label="Somente leitura">
            <Input value="Valor fixo" readOnly className="cursor-default" />
          </Field>
        </div>
      </Section>

      <Section title="Textarea" description="Multi-line input for longer content.">
        <div className="grid gap-4">
          <Field label="Descreva sua experiência" hint="Até 500 caracteres">
            <Textarea placeholder="Conte um pouco sobre sua trajetória na área de alimentos..." rows={4} />
          </Field>
          <Field label="Mensagem (desabilitada)">
            <Textarea placeholder="Mensagem..." disabled rows={3} />
          </Field>
        </div>
      </Section>

      <Section title="Select" description="Choose from a predefined list of options.">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Área de atuação">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione uma área" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="clinica">Clínica</SelectItem>
                <SelectItem value="uan">UAN / Institucional</SelectItem>
                <SelectItem value="industria">Indústria</SelectItem>
                <SelectItem value="consultoria">Consultoria</SelectItem>
                <SelectItem value="estetica">Estética</SelectItem>
              </SelectContent>
            </Select>
          </Field>
          <Field label="Turno de preferência">
            <Select defaultValue="manha">
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="manha">Manhã</SelectItem>
                <SelectItem value="tarde">Tarde</SelectItem>
                <SelectItem value="noite">Noite</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </div>
      </Section>

      <Section title="Checkbox" description="Binary on/off for individual options.">
        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-2 cursor-pointer select-none text-sm">
            <Checkbox defaultChecked />
            Aceito os termos de uso e política de privacidade
          </label>
          <label className="flex items-center gap-2 cursor-pointer select-none text-sm">
            <Checkbox />
            Quero receber novidades e materiais gratuitos por e-mail
          </label>
          <label className="flex items-center gap-2 cursor-pointer select-none text-sm opacity-50">
            <Checkbox disabled />
            Opção desabilitada
          </label>
        </div>
      </Section>

      <Section title="Switch" description="Toggle for boolean settings and preferences.">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between rounded-lg border px-4 py-3">
            <div>
              <p className="text-sm font-medium">Notificações por e-mail</p>
              <p className="text-xs text-muted-foreground">Receba lembretes de aulas ao vivo</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between rounded-lg border px-4 py-3">
            <div>
              <p className="text-sm font-medium">Notificações por WhatsApp</p>
              <p className="text-xs text-muted-foreground">Alertas de suporte e novidades</p>
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between rounded-lg border px-4 py-3 opacity-50">
            <div>
              <p className="text-sm font-medium">Modo desabilitado</p>
              <p className="text-xs text-muted-foreground">Esta opção não está disponível</p>
            </div>
            <Switch disabled />
          </div>
        </div>
      </Section>

      <Section title="Complete Form Example" description="A realistic form combining multiple elements.">
        <div className="rounded-xl border bg-card p-6 space-y-5">
          <div>
            <h3 className="font-heading text-lg font-semibold">Quero me inscrever</h3>
            <p className="text-sm text-muted-foreground mt-0.5">Preencha seus dados para garantir sua vaga</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Nome">
              <Input placeholder="Seu nome completo" />
            </Field>
            <Field label="E-mail">
              <Input type="email" placeholder="seu@email.com" />
            </Field>
            <Field label="WhatsApp">
              <Input type="tel" placeholder="(11) 99999-9999" />
            </Field>
            <Field label="Área de formação">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nutricionista">Nutricionista</SelectItem>
                  <SelectItem value="tecnologia">Tecnologia em Alimentos</SelectItem>
                  <SelectItem value="engenharia">Engenharia de Alimentos</SelectItem>
                  <SelectItem value="outro">Outro</SelectItem>
                </SelectContent>
              </Select>
            </Field>
          </div>
          <Field label="Como nos encontrou?" hint="Opcional">
            <Textarea placeholder="Instagram, indicação de amiga, Google..." rows={2} />
          </Field>
          <label className="flex items-center gap-2 cursor-pointer select-none text-sm">
            <Checkbox />
            Concordo com os termos de uso
          </label>
        </div>
      </Section>
    </div>
  )
}
