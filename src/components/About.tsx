import { FadeIn } from '../App'

export default function About() {
  return (
    <section id="sobre" className="section-padding bg-bg-warm">
      <div className="container-ultra">

        <FadeIn>
          <h2 className="font-display font-normal text-off-white text-3xl md:text-4xl leading-tight mb-16">
            O olhar do chão que formou a <span className="text-secondary italic">escuta clínica</span>
          </h2>
        </FadeIn>

        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">

          {/* Texto — mobile: primeiro */}
          <div className="flex-1 order-2 md:order-1">
            <FadeIn delay={0.1}>
              <p className="font-sans font-light text-off-white/85 text-base md:text-lg leading-relaxed mb-6">
                Antes do consultório, trabalhei 5 anos como Agente Comunitário de Saúde.
                Entrei em casas que a maioria dos psicólogos nunca vai conhecer.
                Vi de perto o que acontece quando pessoas não têm onde se ancorar, dentro e fora das relações.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="font-sans font-light text-off-white/85 text-base md:text-lg leading-relaxed mb-6">
                Foi esse trabalho de chão que me direcionou à psicologia clínica.
                Não pela teoria, mas porque entendi que a dor relacional que eu via nas casas tinha raiz numa questão de identidade, não de amor.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <blockquote className="editorial-line border-secondary my-8">
                <p className="font-sub font-normal italic text-secondary text-lg md:text-xl leading-relaxed">
                  Hoje trabalho para devolver quem você é, para que o relacionamento seja uma escolha, não uma necessidade de sobrevivência.
                </p>
              </blockquote>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="font-sans font-light text-off-white/85 text-base md:text-lg leading-relaxed mb-8">
                Minha abordagem une a escuta que aprendi no campo com a profundidade da Psicologia Analítica de Jung.
                O objetivo é sempre o mesmo: devolver quem você é.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="flex flex-wrap gap-3">
                {['Psicólogo Clínico', 'Especialista em Conflitos Relacionais', '5 anos como ACS'].map((cred) => (
                  <span
                    key={cred}
                    className="text-xs font-sans font-medium text-secondary border border-secondary/30 px-3 py-1.5 rounded-sm tracking-wide"
                  >
                    {cred}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <p className="font-sub font-semibold text-secondary text-base mt-10">
                Por isso estruturei o processo da forma como você vai ver agora.
              </p>
            </FadeIn>
          </div>

          {/* Foto — mobile: segundo */}
          <div className="flex-shrink-0 order-1 md:order-2 relative self-start">
            <div className="relative w-64 h-80 md:w-72 md:h-96 translate-y-0 md:translate-y-8">
              {/* Moldura Photo Treatment A */}
              <div
                className="absolute inset-0 bg-bg-light/20 rounded-sm"
                style={{ transform: 'rotate(-2deg)' }}
              />
              {/* FOTO ABOUT — substituir pela URL real */}
              <img
                src="{ABOUT_IMAGE_URL}"
                alt="Diego de Carvalho Nisner, psicólogo"
                className="relative z-10 w-full h-full object-cover object-top rounded-sm"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                }}
              />
              {/* Placeholder */}
              <div className="absolute inset-0 z-10 bg-primary/20 rounded-sm flex flex-col items-center justify-center gap-3">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="12" r="6" stroke="#98C1D9" strokeWidth="1.5" />
                    <path d="M4 28c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#98C1D9" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-secondary/60 text-xs text-center px-4 font-light">Foto de Diego</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
