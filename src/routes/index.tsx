import { createFileRoute } from "@tanstack/react-router";
import {
  PhoneCall,
  CalendarClock,
  MessagesSquare,
  Gauge,
  Bot,
  Workflow,
  ArrowUpRight,
  Check,
} from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kinetic GT | Automatización con IA para concesionarios" },
      {
        name: "description",
        content:
          "Agencia de automatización con IA para concesionarios: agentes que llaman, cualifican leads y llenan la agenda del taller 24/7.",
      },
      { property: "og:title", content: "Kinetic GT | Automatización con IA para concesionarios" },
      {
        property: "og:description",
        content:
          "Agentes de IA que atienden cada lead en menos de 60 segundos y convierten llamadas perdidas en citas de venta y taller.",
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: PhoneCall,
    title: "Agente de voz 24/7",
    text: "Contesta cada llamada perdida, resuelve dudas de stock y agenda pruebas de conducción sin que suene un teléfono en el salón.",
  },
  {
    icon: MessagesSquare,
    title: "Cualificación de leads",
    text: "WhatsApp, web y portales unificados. La IA responde en segundos, filtra curiosos y pasa al comercial solo lo caliente.",
  },
  {
    icon: CalendarClock,
    title: "Agenda de taller llena",
    text: "Recordatorios, reprogramaciones y campañas de mantenimiento automáticas conectadas a tu DMS.",
  },
  {
    icon: Bot,
    title: "Seguimiento posventa",
    text: "Reactivación de base de datos, encuestas de satisfacción y reseñas en Google en piloto automático.",
  },
  {
    icon: Workflow,
    title: "Integración con tu DMS",
    text: "Conectamos con tu CRM y DMS actual. Sin migraciones, sin cambiar procesos que ya funcionan.",
  },
  {
    icon: Gauge,
    title: "Panel de rendimiento",
    text: "Coste por cita, tasa de contacto y conversión real por fuente. Datos, no intuiciones.",
  },
];

const metrics = [
  { value: "<60s", label: "Tiempo de respuesta al lead" },
  { value: "+38%", label: "Citas de prueba de conducción" },
  { value: "24/7", label: "Cobertura sin turnos" },
  { value: "3x", label: "Recuperación de llamadas perdidas" },
];

const steps = [
  {
    n: "01",
    title: "Diagnóstico",
    text: "Auditamos llamadas, tiempos de respuesta y fugas de leads durante una semana.",
  },
  {
    n: "02",
    title: "Construcción",
    text: "Montamos los agentes con la voz, el tono y el inventario de tu concesionario.",
  },
  {
    n: "03",
    title: "Puesta en marcha",
    text: "Integración con DMS y CRM, formación del equipo comercial y arranque en 21 días.",
  },
  {
    n: "04",
    title: "Optimización",
    text: "Revisión mensual de métricas y ajuste continuo de guiones y flujos.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="font-display text-lg font-bold tracking-tight">
            KINETIC<span className="text-heat"> GT</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#servicios" className="transition-colors hover:text-foreground">
              Servicios
            </a>
            <a href="#proceso" className="transition-colors hover:text-foreground">
              Proceso
            </a>
            <a href="#resultados" className="transition-colors hover:text-foreground">
              Resultados
            </a>
            <a href="#faq" className="transition-colors hover:text-foreground">
              FAQ
            </a>
          </nav>
          <Button asChild size="sm" className="bg-heat font-display text-primary-foreground">
            <a href="#contacto">Auditoría gratis</a>
          </Button>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden pt-16">
          <img
            src={heroCar}
            alt="Coche deportivo en un showroom con iluminación ámbar y lima"
            width={1600}
            height={1008}
            className="absolute inset-0 h-full w-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-[image:var(--gradient-fade)]" />
          <div className="surface-grid absolute inset-0 opacity-60" />
          <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Agencia de IA para automoción
            </div>
            <h1 className="mt-8 max-w-3xl text-5xl font-bold leading-[0.95] md:text-7xl">
              Tu concesionario no pierde clientes.
              <span className="text-heat"> Pierde tiempo de respuesta.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Kinetic GT instala agentes de IA que atienden cada llamada, cada formulario y cada
              WhatsApp en menos de 60 segundos, y los convierten en citas de venta y taller.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-heat font-display text-primary-foreground">
                <a href="#contacto">
                  Reservar auditoría de 30 min <ArrowUpRight className="ml-1 size-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#servicios">Ver qué automatizamos</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Métricas */}
        <section id="resultados" className="border-y border-border bg-card/40">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-6 md:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label} className="py-10 pr-6">
                <div className="font-display text-4xl font-bold text-heat">{m.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Servicios</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-bold md:text-5xl">
            Seis motores de automatización, un solo objetivo: más entregas.
          </h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="group bg-background p-8 transition-colors hover:bg-card"
              >
                <s.icon className="size-6 text-primary" strokeWidth={1.5} />
                <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Proceso */}
        <section id="proceso" className="border-y border-border bg-card/40 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Proceso</p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">De la auditoría al piloto en 21 días</h2>
            <div className="mt-14 grid gap-10 md:grid-cols-4">
              {steps.map((s) => (
                <div key={s.n} className="border-t border-border pt-6">
                  <span className="font-display text-sm text-primary">{s.n}</span>
                  <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Para quién */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold md:text-5xl">
                Trabajamos solo con <span className="text-heat">automoción</span>
              </h2>
              <p className="mt-6 text-muted-foreground">
                Conocemos los ciclos de venta, las campañas de marca, la estacionalidad del taller y
                la realidad de un equipo comercial que no puede estar al teléfono todo el día.
              </p>
            </div>
            <ul className="space-y-4">
              {[
                "Concesionarios oficiales y multimarca",
                "Grupos con varias sedes y un solo call center",
                "Compraventa de vehículo de ocasión",
                "Talleres y posventa con agenda infrautilizada",
                "Renting y suscripción de vehículos",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 border-b border-border pb-4">
                  <Check className="mt-0.5 size-5 shrink-0 text-accent" strokeWidth={2} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t border-border bg-card/40 py-24">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-4xl font-bold md:text-5xl">Preguntas frecuentes</h2>
            <Accordion type="single" collapsible className="mt-10">
              <AccordionItem value="1">
                <AccordionTrigger>¿Sustituye la IA a mi equipo comercial?</AccordionTrigger>
                <AccordionContent>
                  No. Elimina el trabajo repetitivo: filtrar, agendar y hacer seguimiento. Tu equipo
                  dedica el tiempo a cerrar operaciones con clientes ya cualificados.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="2">
                <AccordionTrigger>¿Se integra con mi DMS y CRM actual?</AccordionTrigger>
                <AccordionContent>
                  Sí. Trabajamos con las principales plataformas del sector y, cuando no hay API,
                  construimos la conexión a medida.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="3">
                <AccordionTrigger>¿Cuánto tarda la implantación?</AccordionTrigger>
                <AccordionContent>
                  El primer agente está operativo en 21 días desde la auditoría, con acompañamiento y
                  formación para el equipo.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="4">
                <AccordionTrigger>¿Y si el cliente prefiere hablar con una persona?</AccordionTrigger>
                <AccordionContent>
                  El agente detecta la intención y transfiere la llamada al comercial disponible, con
                  el contexto de la conversación ya resumido.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section id="contacto" className="relative overflow-hidden py-28">
          <div className="surface-grid absolute inset-0 opacity-70" />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-4xl font-bold md:text-6xl">
              Descubre cuántas ventas <span className="text-heat">se te escapan</span> cada mes
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              Auditoría gratuita de 30 minutos: analizamos tu flujo de leads y te entregamos un plan
              de automatización concreto, lo trabajes con nosotros o no.
            </p>
            <Button
              asChild
              size="lg"
              className="glow mt-10 bg-heat font-display text-primary-foreground"
            >
              <a href="mailto:hola@kineticgt.com?subject=Auditoría%20Kinetic%20GT">
                Solicitar auditoría <ArrowUpRight className="ml-1 size-4" />
              </a>
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
          <span className="font-display text-foreground">
            KINETIC<span className="text-heat"> GT</span>
          </span>
          <span>Automatización con IA para concesionarios · España</span>
          <a href="mailto:hola@kineticgt.com" className="hover:text-foreground">
            hola@kineticgt.com
          </a>
        </div>
      </footer>
    </div>
  );
}
