import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FadeIn } from '../App'

const testimonials = [
  {
    nome: 'Renata M.',
    resultado: 'Reconhecimento de si em 4 meses',
    texto: 'Fui à terapia de casal duas vezes antes. Sempre sentia que tratávamos a briga, não o porquê dela. Com Diego foi diferente desde a primeira sessão. Ele foi direto ao que estava por baixo de tudo. Em quatro meses, eu me reconhecia de volta.',
    destaque: 'Ele foi direto ao que estava por baixo de tudo.',
  },
  {
    nome: 'Thiago A.',
    resultado: 'Saiu da culpabilização para a responsabilidade',
    texto: 'Eu tinha certeza que o problema era meu parceiro. O Diego não me deixou parar aí. Me fez ver o que eu estava trazendo para o relacionamento sem perceber. Não foi fácil, mas foi o trabalho mais honesto que já fiz.',
    destaque: 'O trabalho mais honesto que já fiz.',
  },
  {
    nome: 'Fernanda L.',
    resultado: 'Tomou a decisão que não conseguia tomar',
    texto: 'Fiquei 11 anos num relacionamento que me fazia sentir que não existia sem ele. Depois do processo com o Diego, tomei a decisão que nunca consegui tomar sozinha. Não foi ele que me disse o que fazer. Foi o processo que me devolveu a capacidade de decidir.',
    destaque: 'O processo me devolveu a capacidade de decidir.',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  return (
    <section id="depoimentos" className="section-padding-lg bg-dark relative overflow-hidden">
      {/* Aurora de fundo */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, #3D5A8030 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="container-ultra relative z-10">

        <FadeIn>
          <h2 className="font-display font-normal text-off-white text-3xl md:text-4xl leading-tight mb-16 text-center">
            Pessoas que fizeram o <span className="text-secondary italic">caminho de volta</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="relative max-w-2xl mx-auto">
            {/* Aspa decorativa */}
            <span
              className="absolute -top-8 -left-4 font-display text-[120px] leading-none text-primary/15 select-none pointer-events-none"
              aria-hidden="true"
            >
              "
            </span>

            {/* Carrossel crossfade */}
            <div className="relative min-h-[240px] md:min-h-[200px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="font-sans font-light text-off-white/80 text-base md:text-lg leading-relaxed mb-6">
                    {testimonials[current].texto}
                  </p>
                  <p className="font-sub font-semibold text-secondary text-sm md:text-base">
                    {testimonials[current].destaque}
                  </p>
                  <p className="font-sans text-off-white/50 text-sm mt-4">
                    — {testimonials[current].nome}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controles prev/next */}
            <div className="flex items-center justify-center gap-6 mt-10">
              <button
                onClick={prev}
                aria-label="Depoimento anterior"
                className="w-10 h-10 rounded-sm border border-secondary/30 text-secondary/60 hover:border-secondary hover:text-secondary transition-colors flex items-center justify-center"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Depoimento ${i + 1}`}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${i === current ? 'bg-secondary' : 'bg-secondary/30'}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                aria-label="Próximo depoimento"
                className="w-10 h-10 rounded-sm border border-secondary/30 text-secondary/60 hover:border-secondary hover:text-secondary transition-colors flex items-center justify-center"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  )
}
