import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Users, Settings, TrendingUp } from "lucide-react"

export function ActivityFeed() {
  const activities = [
    {
      user: "María García",
      action: "creó un nuevo evento",
      target: "Reunión de Equipo",
      time: "Hace 5 minutos",
      icon: Calendar,
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      user: "Carlos López",
      action: "se unió a la plataforma",
      target: "",
      time: "Hace 15 minutos",
      icon: Users,
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      user: "Ana Martínez",
      action: "actualizó la configuración",
      target: "Notificaciones",
      time: "Hace 1 hora",
      icon: Settings,
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      user: "Sistema",
      action: "generó reporte mensual",
      target: "Métricas de Enero",
      time: "Hace 2 horas",
      icon: TrendingUp,
      avatar: "/placeholder.svg?height=32&width=32",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Actividad Reciente</CardTitle>
        <CardDescription>Últimas acciones realizadas en la plataforma</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full">
                  <activity.icon className="h-4 w-4 text-primary" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm">
                  <span className="font-medium">{activity.user}</span> {activity.action}
                  {activity.target && (
                    <>
                      {" "}
                      <span className="font-medium">{activity.target}</span>
                    </>
                  )}
                </p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
