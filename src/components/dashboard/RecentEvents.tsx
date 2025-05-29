import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin } from "lucide-react"

export function RecentEvents() {
  const events = [
    {
      title: "Reunión de Equipo",
      organizer: "María García",
      date: "2024-01-15",
      time: "10:00 AM",
      location: "Sala de Conferencias A",
      attendees: 8,
      status: "Confirmado",
    },
    {
      title: "Presentación de Proyecto",
      organizer: "Carlos López",
      date: "2024-01-16",
      time: "2:00 PM",
      location: "Auditorio Principal",
      attendees: 25,
      status: "Pendiente",
    },
    {
      title: "Workshop de Diseño",
      organizer: "Ana Martínez",
      date: "2024-01-17",
      time: "9:00 AM",
      location: "Laboratorio de Creatividad",
      attendees: 12,
      status: "Confirmado",
    },
    {
      title: "Sesión de Feedback",
      organizer: "Luis Rodríguez",
      date: "2024-01-18",
      time: "4:00 PM",
      location: "Sala Virtual",
      attendees: 6,
      status: "Cancelado",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Eventos Recientes</CardTitle>
        <CardDescription>Últimos eventos creados en la plataforma</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {events.map((event, index) => (
            <div key={index} className="border rounded-lg p-4 space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">{event.title}</h4>
                <Badge
                  variant={
                    event.status === "Confirmado"
                      ? "default"
                      : event.status === "Pendiente"
                        ? "secondary"
                        : "destructive"
                  }
                >
                  {event.status}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">Organizado por {event.organizer}</p>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
              </div>
              <p className="text-sm">
                <span className="font-medium">{event.attendees}</span> asistentes
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
