export function Hero() {
  return (
    <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/assets/images/backgrounds/banner.jpg)" }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-primary/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">Tendas e Ombrelones</h1>
        <p className="text-xl md:text-3xl font-medium text-balance">
          Aluguel, Reforma e Manutenção em todo Sul de Minas
        </p>
      </div>
    </section>
  )
}
