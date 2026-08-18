import { useState } from "react";
import { CalendarCheck, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const models = [
  "Berlina eléctrica",
  "SUV híbrido",
  "Compacto gasolina",
  "Furgoneta / comercial",
  "Vehículo de ocasión",
];

const slots = ["09:00", "10:30", "12:00", "16:00", "17:30", "19:00"];

function today() {
  return new Date().toISOString().slice(0, 10);
}

export function TestDriveBooking() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [model, setModel] = useState("");
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");

  const ready = name && phone && model && date && slot;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!ready) {
      toast.error("Completa todos los campos para reservar tu prueba.");
      return;
    }
    toast.success("Cita solicitada", {
      description: `${model} · ${date} a las ${slot}. Nuestro agente de IA te confirmará por WhatsApp en menos de 60 segundos.`,
    });
    setName("");
    setPhone("");
    setModel("");
    setDate("");
    setSlot("");
  }

  return (
    <section id="cita" className="border-y border-border bg-card/40 py-24">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Agendación de citas
          </p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Reserva tu <span className="text-heat">prueba de vehículo</span> en 30 segundos
          </h2>
          <p className="mt-6 text-muted-foreground">
            Así funciona la agenda que instalamos en tu concesionario: el cliente elige modelo, día y
            hora, y el agente de IA confirma, recuerda y reprograma la cita de forma automática,
            sincronizada con el calendario de tu equipo comercial.
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            {[
              "Disponibilidad real por sede, comercial y vehículo de demostración",
              "Confirmación y recordatorios por WhatsApp y SMS",
              "Reprogramación automática y aviso de no-shows",
              "Cita volcada directamente en tu CRM y DMS",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 border-b border-border pb-4">
                <CalendarCheck className="mt-0.5 size-5 shrink-0 text-accent" strokeWidth={1.75} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="h-fit rounded-lg border border-border bg-background p-8"
        >
          <h3 className="font-display text-xl font-semibold">Solicitar prueba de conducción</h3>
          <div className="mt-6 grid gap-5">
            <div className="grid gap-2">
              <Label htmlFor="td-name">Nombre y apellidos</Label>
              <Input
                id="td-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ana García"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="td-phone">Teléfono</Label>
              <Input
                id="td-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="600 000 000"
              />
            </div>
            <div className="grid gap-2">
              <Label>Vehículo de interés</Label>
              <Select value={model} onValueChange={setModel}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un modelo" />
                </SelectTrigger>
                <SelectContent>
                  {models.map((m) => (
                    <SelectItem key={m} value={m}>
                      {m}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="td-date">Día</Label>
                <Input
                  id="td-date"
                  type="date"
                  min={today()}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label>Hora</Label>
                <Select value={slot} onValueChange={setSlot}>
                  <SelectTrigger>
                    <SelectValue placeholder="Hora" />
                  </SelectTrigger>
                  <SelectContent>
                    {slots.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button type="submit" size="lg" className="bg-heat font-display text-primary-foreground">
              Confirmar cita <ArrowUpRight className="ml-1 size-4" />
            </Button>
            <p className="text-xs text-muted-foreground">
              Recibirás la confirmación por WhatsApp en menos de 60 segundos.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
