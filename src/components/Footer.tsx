import { FadeIn } from '../App'

export default function Footer() {
  const whatsappMsg = encodeURIComponent(
    'Olá, Diego. Vi sua página e gostaria de agendar uma conversa inicial. Preenchi o formulário e quero entender melhor como funciona o processo.'
  )

  return (
    <footer id="contato" className="section-padding-lg bg-dark relative overflow-hidden">
      {/* Aurora de fundo */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-48 rounded-full"
          style={{
            background: 'radial-gradient(circle, #3D5A8035 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="container-ultra text-center relative z-10">

        <FadeIn>
          <h2 className="font-display font-normal text-off-white text-3xl md:text-5xl leading-tight mb-6 max-w-2xl mx-auto">
            Você se perdeu dentro dessa relação.{' '}
            <span className="text-secondary italic">O que fazemos juntos é encontrar o caminho de volta para você.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="font-sans font-light text-off-white/65 text-base md:text-lg leading-relaxed mb-12 max-w-lg mx-auto">
            Se o que leu aqui fez sentido, talvez seja a hora. Não estou pedindo decisão agora. Estou convidando para uma conversa.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <a
            href={`https://wa.me/5511994483439?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer bg-primary text-off-white rounded-sm font-sans font-medium tracking-wide hover:bg-primary-dark transition-colors"
          >
            Quero minha conversa inicial
          </a>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="mt-24 pt-12 border-t border-white/10">
            <p className="font-display font-normal italic text-off-white/60 text-2xl">
              Diego de Carvalho Nisner
            </p>
            <p className="font-sans font-light text-off-white/30 text-xs mt-2 tracking-wide">
              Psicólogo Clínico | Especialista em Conflitos Relacionais e Dependência Emocional
            </p>
          </div>
        </FadeIn>

      </div>
    </footer>
  )
}
