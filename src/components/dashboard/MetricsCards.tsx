import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Calendar, TrendingUp, DollarSign } from "lucide-react"

export function MetricsCards() {
  const metrics = [
    {
      title: "Usuarios Activos",
      value: "2,847",
      description: "+12% desde el mes pasado",
      icon: Users,
      trend: "up",
    },
    {
      title: "Eventos Creados",
      value: "18,392",
      description: "+8% desde el mes pasado",
      icon: Calendar,
      trend: "up",
    },
    {
      title: "Tasa de Conversión",
      value: "24.8%",
      description: "+2.1% desde el mes pasado",
      icon: TrendingUp,
      trend: "up",
    },
    {
      title: "Ingresos Mensuales",
      value: "$45,231",
      description: "+15% desde el mes pasado",
      icon: DollarSign,
      trend: "up",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
            <metric.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <p className="text-xs text-muted-foreground">{metric.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
