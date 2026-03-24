"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Preciso ter experiência em consultoria para entrar?",
    answer:
      "Não. A formação foi criada para quem está começando do zero e precisa de direção, estrutura e segurança para atuar.",
  },
  {
    question: "Funciona para recém-formada(o)?",
    answer:
      "Sim. Você aprende como estruturar sua consultoria e começar mesmo sem ter fechado contratos antes.",
  },
  {
    question: "Já trabalho em clínica ou UAN. Posso fazer mesmo assim?",
    answer:
      "Sim. A formação é ideal para quem quer ampliar a renda, migrar de área ou estruturar melhor sua atuação com consultoria.",
  },
  {
    question: "Em quanto tempo consigo fechar meu primeiro contrato?",
    answer:
      "Isso depende da sua aplicação e dedicação. O método entrega o caminho, os modelos e a estratégia para você começar o quanto antes.",
  },
  {
    question: "Vou ter suporte se tiver dúvidas?",
    answer:
      "Sim. Você terá suporte via WhatsApp em horário comercial, além dos encontros ao vivo semanais.",
  },
  {
    question: "Por quanto tempo terei acesso?",
    answer: "Você terá 1 ano de acesso completo à formação.",
  },
  {
    question: "O certificado é reconhecido?",
    answer:
      "Você recebe certificado de extensão — com carga horária de 70 horas emitido por instituição parceira. Faculdade Anhanguera.",
  },
  {
    question: "E se eu entrar e perceber que não é para mim?",
    answer:
      "Você tem 7 dias de garantia incondicional. Pode solicitar reembolso dentro do prazo, sem burocracia.",
  },
]

export function FaqAccordion() {
  return (
    <Accordion>
      {faqs.map((faq, i) => (
        <AccordionItem key={i} value={String(i)}>
          <AccordionTrigger className="text-base font-medium">{faq.question}</AccordionTrigger>
          <AccordionContent>
            <p className="text-muted-foreground">{faq.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
