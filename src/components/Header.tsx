"use client"
import Link from "next/link"
import { Calendar, Menu, X } from "lucide-react"
import { Button } from "./ui/button"
import { useState } from "react"

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <>
      <header className="px-4 lg:px-6 h-16 flex justify-center items-center border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <Link className="flex items-center justify-center" href="#">
          <Calendar className="h-8 w-8 text-emerald-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900">AgendaPro</span>
        </Link>
        
        {/* Menú de navegación para desktop */}
        <nav className="mr-auto hidden md:flex gap-6">
          <Link className="text-sm font-medium hover:text-emerald-600 transition-colors" href="#caracteristicas">
            Características
          </Link>
          <Link className="text-sm font-medium hover:text-emerald-600 transition-colors" href="#servicios">
            Servicios
          </Link>
          <Link className="text-sm font-medium hover:text-emerald-600 transition-colors" href="#planes">
            Planes
          </Link>
          <Link className="text-sm font-medium hover:text-emerald-600 transition-colors" href="#opiniones">
            Opiniones
          </Link>
          <Link className="text-sm font-medium hover:text-emerald-600 transition-colors" href="#contacto">
            Contacto
          </Link>
        </nav>
        
        {/* Botones de acción */}
        <div className="ml-1 flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Iniciar Sesión
          </Button>
          <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 hidden sm:inline-flex">
            Prueba Gratis
          </Button>
          
          {/* Botón del menú móvil */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </header>
      
      {/* Menú móvil */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <nav className="flex flex-col p-4 space-y-4">
            <Link 
              className="py-2 px-4 text-base font-medium hover:text-emerald-600 transition-colors" 
              href="#caracteristicas"
              onClick={toggleMobileMenu}
            >
              Características
            </Link>
            <Link 
              className="py-2 px-4 text-base font-medium hover:text-emerald-600 transition-colors" 
              href="#servicios"
              onClick={toggleMobileMenu}
            >
              Servicios
            </Link>
            <Link 
              className="py-2 px-4 text-base font-medium hover:text-emerald-600 transition-colors" 
              href="#planes"
              onClick={toggleMobileMenu}
            >
              Planes
            </Link>
            <Link 
              className="py-2 px-4 text-base font-medium hover:text-emerald-600 transition-colors" 
              href="#opiniones"
              onClick={toggleMobileMenu}
            >
              Opiniones
            </Link>
            <Link 
              className="py-2 px-4 text-base font-medium hover:text-emerald-600 transition-colors" 
              href="#contacto"
              onClick={toggleMobileMenu}
            >
              Contacto
            </Link>
            
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="outline" className="w-full">
                Iniciar Sesión
              </Button>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                Prueba Gratis
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}