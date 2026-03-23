import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FadeIn } from '../App'

const faqs = [
  {
    pergunta: 'Já tentei terapia antes e não funcionou.',
    resposta: 'Entendo. A maioria dos processos trata o conflito, não a raiz. O que faço é diferente: trabalho a função psíquica do vínculo, o que a relação está escondendo ou tentando resolver. Se antes parecia que você resolvia a briga mas o padrão voltava, é porque o trabalho não chegou ao nível certo.',
  },
  {
    pergunta: 'Funciona online?',
    resposta: 'Funciona. Atendo exclusivamente online, e minha experiência mostra que o processo funciona bem no formato digital. O que importa é a qualidade da escuta, não o espaço físico. Você só precisa de um lugar com privacidade e conexão estável.',
  },
  {
    pergunta: 'Qual é o investimento?',
    resposta: 'Sei que é uma decisão financeira real. Sei também que continuar se perdendo dentro de uma relação que não te sustenta tem um custo emocional que não aparece em nenhuma fatura. O valor é discutido na nossa conversa inicial, depois de entender sua situação. Não trabalho com pacote fixo porque cada processo tem uma profundidade diferente.',
  },
  {
    pergunta: 'Quanto tempo leva?',
    resposta: 'Processos reais levam tempo. A maioria das pessoas começa a notar mudanças entre 8 e 16 semanas. O trabalho completo, dependendo da profundidade, leva entre 6 e 18 meses. Não dou prazos garantidos porque respeito o tempo de cada processo.',
  },
  {
    pergunta: 'E se eu descobrir que preciso terminar?',
    resposta: 'Esse medo é o que para a maioria das pessoas de começar. Mas terapia não decide por você. O processo te dá clareza para decidir com consciência, não com medo. Às vezes o resultado é um vínculo mais sólido. Às vezes é a coragem de sair com integridade. O que muda é a qualidade da decisão.',
  },
  {
    pergunta: 'E se o problema for a outra pessoa?',
    resposta: 'O trabalho começa com você. Quando uma pessoa muda internamente, o sistema relacional inteiro se reconfigura. Você não precisa esperar o outro querer para começar. E às vezes essa é a decisão mais poderosa que existe.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="section-padding bg-bg-light">
      <div className="container-ultra max-w-2xl">

        <FadeIn>
          <h2 className="font-display font-normal text-heading text-3xl md:text-4xl leading-tight mb-16">
            Perguntas frequentes
          </h2>
        </FadeIn>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <div className="border-b border-text-main/10">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                  aria-expanded={open === i}
                >
                  <span className="font-sub font-normal text-text-main text-base md:text-lg leading-snug pr-8 group-hover:text-primary transition-colors">
                    {faq.pergunta}
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className={`flex-shrink-0 text-primary transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                  >
                    <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans font-light text-text-main/75 text-base leading-relaxed pb-6">
                        {faq.resposta}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}
