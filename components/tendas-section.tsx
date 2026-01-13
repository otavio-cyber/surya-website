import { Home } from "lucide-react"

export function TendasSection() {
  return (
    <section className="py-16 md:py-24 bg-muted" id="tendas">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground text-sm font-semibold rounded-md mb-4">
            Aluguel
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">SURYA TENDAS</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Aluguel de tendas piramidais para eventos em Lavras, Nepomuceno, Perdões, Palmital, Santana da Vargem, Boa
            Esperança e Região. Solução rápida e prática para sua cobertura temporária com design modular que
            proporciona tranquilidade e conforto ao seu evento.
          </p>
        </div>

        {/* Service Highlight */}
        <div className="max-w-2xl mx-auto bg-white rounded-lg p-8 shadow-sm border border-border text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4">
            <Home className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-primary mb-2">Levamos, Montamos e Retiramos</h3>
          <p className="text-lg text-muted-foreground">
            <strong className="text-foreground">Comodidade e Segurança</strong> para o seu evento
          </p>
        </div>
      </div>
    </section>
  )
}
