"use client"

import { Bell, Search, Settings, User, Calendar, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export function AdminHeader() {
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Efecto para manejar el scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all ${isScrolled ? 'shadow-sm' : ''}`}>
      <div className="container flex h-16 items-center justify-between">
        {/* Logo and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
        
          
          <div className="flex items-center space-x-2">
            <Calendar className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">AgendaPro</span>
          </div>

            <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 ml-8">
          <a href="#" className="text-sm font-medium text-primary">
            Dashboard
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Usuarios
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Eventos
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Reportes
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Configuración
          </a>
        </nav>

        {/* Search and Actions */}
        <div className="flex items-center space-x-4">
          {/* Mobile Search Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsSearchVisible(!isSearchVisible)}
          >
            <Search className="h-4 w-4" />
          </Button>

          {/* Desktop Search */}
          <div className="hidden md:block relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Buscar..." className="w-64 pl-8" />
          </div>

          {/* Mobile Search Input - appears when search button is clicked */}
          {isSearchVisible && (
            <div className="absolute top-16 left-0 right-0 px-4 py-2 bg-background md:hidden">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Buscar..." className="w-full pl-8" />
              </div>
            </div>
          )}

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-4 w-4" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs">3</Badge>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>AD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">Admin</p>
                    <p className="text-xs leading-none text-muted-foreground">admin@agendapro.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Perfil</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Configuración</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={async () => {
                  const result = await fetch('/api/signout', {
                    method: 'POST',
                  });

                  const data = await result.json();
                  if(data.success) {
                    router.push('/');
                  }
                }}>
                  Cerrar sesión
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile User Menu Button */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full md:hidden">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Admin</p>
                  <p className="text-xs leading-none text-muted-foreground">admin@agendapro.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Perfil</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Configuración</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={async () => {
                const result = await fetch('/api/signout', {
                  method: 'POST',
                });

                const data = await result.json();
                if(data.success) {
                  router.push('/');
                }
              }}>
                Cerrar sesión
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="px-4 py-2 space-y-2">
            <a href="#" className="block py-2 text-sm font-medium text-primary">
              Dashboard
            </a>
            <a href="#" className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground">
              Usuarios
            </a>
            <a href="#" className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground">
              Eventos
            </a>
            <a href="#" className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground">
              Reportes
            </a>
            <a href="#" className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground">
              Configuración
            </a>
          </div>
          <div className="px-4 py-2 border-t">
            <Button variant="ghost" className="w-full justify-start relative">
              <Bell className="h-4 w-4 mr-2" />
              <span>Notificaciones</span>
              <Badge className="ml-2 h-5 w-5 rounded-full p-0 text-xs">3</Badge>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}