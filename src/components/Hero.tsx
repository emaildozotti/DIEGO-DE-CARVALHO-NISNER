import { motion } from 'motion/react'

export default function Hero() {
  return (
    <>
      {/* Header — apenas desktop */}
      <header className="hidden md:block sticky top-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-white/5">
        <div className="container-ultra flex items-center justify-between py-4">
          <span className="font-display text-off-white text-lg tracking-wide">
            Diego de Carvalho Nisner
          </span>
          <a
            href="https://wa.me/5511994483439?text=Olá%2C%20Diego.%20Vi%20sua%20página%20e%20gostaria%20de%20agendar%20uma%20conversa%20inicial."
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary text-sm tracking-widest uppercase hover:text-off-white transition-colors"
          >
            Agendar conversa
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen bg-dark relative overflow-hidden flex items-center"
      >
        {/* Aurora */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-32 -left-32 w-96 h-96 rounded-full"
            style={{
              background: 'radial-gradient(circle, #1A274459 0%, transparent 70%)',
              filter: 'blur(80px)',
              animation: 'aurora-1 12s ease-in-out infinite',
            }}
          />
          <div
            className="absolute -top-20 -right-20 w-80 h-80 rounded-full"
            style={{
              background: 'radial-gradient(circle, #3D5A8045 0%, transparent 70%)',
              filter: 'blur(70px)',
              animation: 'aurora-2 15s ease-in-out infinite',
            }}
          />
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 rounded-full"
            style={{
              background: 'radial-gradient(circle, #98C1D928 0%, transparent 70%)',
              filter: 'blur(90px)',
              animation: 'aurora-3 18s ease-in-out infinite',
            }}
          />
        </div>

        {/* Conteúdo Split Layout — Opção A */}
        <div className="container-ultra w-full relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 min-h-screen md:py-24">

            {/* Texto — mobile: primeira dobra inteira */}
            <div className="flex-1 text-center md:text-left order-1 md:order-1">
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0, ease: [0.16, 1, 0.3, 1] }}
                className="eyebrow-ultra text-secondary mb-6 tracking-[0.3em]"
              >
                Dependência Emocional
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-normal text-off-white text-4xl md:text-6xl lg:text-7xl leading-tight mb-6"
              >
                Você não está numa relação difícil.{' '}
                <span className="text-secondary italic">
                  Você se perdeu dentro dela.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="font-sans font-light text-off-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-lg"
              >
                Um espaço para reconstruir o eixo que o amor não pode substituir.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <button
                  onClick={() => document.getElementById('dores')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-shimmer bg-primary text-off-white rounded-sm font-sans font-medium tracking-wide hover:bg-primary-dark transition-colors"
                >
                  Entender como funciona
                </button>
              </motion.div>

              {/* Scroll indicator — apenas desktop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 1 }}
                className="hidden md:flex items-center gap-2 mt-12 text-secondary/50"
              >
                <div className="w-6 h-px bg-secondary/30" />
                <span className="text-xs tracking-widest uppercase font-light">Role para explorar</span>
              </motion.div>
            </div>

            {/* Foto Hero — desktop: split direita. Mobile: oculta (aparece em bloco proprio abaixo) */}
            <div className="hidden md:block flex-shrink-0 order-2 md:order-2 relative">
              <div className="relative w-64 h-80 md:w-80 md:h-[480px]">
                {/* Moldura rotacionada — Photo Treatment A */}
                <div
                  className="absolute inset-0 bg-bg-light rounded-sm"
                  style={{ transform: 'rotate(-2deg)' }}
                />
                <img
                  src="/foto-diego.jpg"
                  alt="Diego de Carvalho Nisner, psicólogo especialista em conflitos relacionais"
                  className="relative z-20 w-full h-full object-cover object-top rounded-sm"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Foto mobile — aparece apos a primeira dobra ao rolar */}
        <div className="md:hidden w-full flex justify-center pb-16 relative z-10">
          <div className="relative w-72 h-96">
            <div
              className="absolute inset-0 bg-bg-light rounded-sm"
              style={{ transform: 'rotate(-2deg)' }}
            />
            <img
              src="/foto-diego.jpg"
              alt="Diego de Carvalho Nisner, psicólogo"
              className="relative z-20 w-full h-full object-cover object-top rounded-sm"
            />
          </div>
        </div>
      </section>
    </>
  )
}
