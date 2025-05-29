import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function RecentUsers() {
  const users = [
    {
      name: "María García",
      email: "maria@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
      status: "Activo",
      joinDate: "Hace 2 días",
    },
    {
      name: "Carlos López",
      email: "carlos@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
      status: "Activo",
      joinDate: "Hace 3 días",
    },
    {
      name: "Ana Martínez",
      email: "ana@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
      status: "Pendiente",
      joinDate: "Hace 5 días",
    },
    {
      name: "Luis Rodríguez",
      email: "luis@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
      status: "Activo",
      joinDate: "Hace 1 semana",
    },
    {
      name: "Elena Fernández",
      email: "elena@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
      status: "Inactivo",
      joinDate: "Hace 2 semanas",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Usuarios Recientes</CardTitle>
        <CardDescription>Últimos usuarios registrados en la plataforma</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {users.map((user, index) => (
            <div key={index} className="flex items-center space-x-4">
              <Avatar className="h-9 w-9">
                <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                <AvatarFallback>
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">{user.name}</p>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>
              <div className="flex flex-col items-end space-y-1">
                <Badge
                  variant={
                    user.status === "Activo" ? "default" : user.status === "Pendiente" ? "secondary" : "destructive"
                  }
                >
                  {user.status}
                </Badge>
                <p className="text-xs text-muted-foreground">{user.joinDate}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
