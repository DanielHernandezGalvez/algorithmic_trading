import React from 'react'
import Link from 'next/link'
import { Calendar } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50">
            <div className="container grid gap-8 md:grid-cols-4">
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-6 w-6 text-rose-600" />
                        <span className="text-xl font-bold">AgendaPro</span>
                    </div>
                    <p className="text-sm text-gray-500">
                        La plataforma líder en gestión de citas y agenda digital para profesionales.
                    </p>
                </div>
                <div className="space-y-4">
                    <h4 className="font-semibold">Producto</h4>
                    <div className="space-y-2 text-sm">
                        <Link href="#" className="block text-gray-500 hover:text-rose-600">
                            Características
                        </Link>
                        <Link href="#" className="block text-gray-500 hover:text-rose-600">
                            Precios
                        </Link>
                        <Link href="#" className="block text-gray-500 hover:text-rose-600">
                            Integraciones
                        </Link>
                        <Link href="#" className="block text-gray-500 hover:text-rose-600">
                            API
                        </Link>
                    </div>
                </div>
                <div className="space-y-4">
                    <h4 className="font-semibold">Soporte</h4>
                    <div className="space-y-2 text-sm">
                        <Link href="#" className="block text-gray-500 hover:text-rose-600">
                            Centro de Ayuda
                        </Link>
                        <Link href="#" className="block text-gray-500 hover:text-rose-600">
                            Documentación
                        </Link>
                        <Link href="#" className="block text-gray-500 hover:text-rose-600">
                            Contacto
                        </Link>
                        <Link href="#" className="block text-gray-500 hover:text-rose-600">
                            Estado del Sistema
                        </Link>
                    </div>
                </div>
                <div className="space-y-4">
                    <h4 className="font-semibold">Empresa</h4>
                    <div className="space-y-2 text-sm">
                        <Link href="#" className="block text-gray-500 hover:text-rose-600">
                            Sobre Nosotros
                        </Link>
                        <Link href="#" className="block text-gray-500 hover:text-rose-600">
                            Blog
                        </Link>
                        <Link href="#" className="block text-gray-500 hover:text-rose-600">
                            Carreras
                        </Link>
                        <Link href="#" className="block text-gray-500 hover:text-rose-600">
                            Prensa
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container flex flex-col sm:flex-row justify-between items-center pt-8 border-t">
                <p className="text-xs text-gray-500">© 2024 AgendaPro. Todos los derechos reservados.</p>
                <div className="flex gap-4 text-xs">
                    <Link href="#" className="text-gray-500 hover:text-rose-600">
                        Términos de Servicio
                    </Link>
                    <Link href="#" className="text-gray-500 hover:text-rose-600">
                        Política de Privacidad
                    </Link>
                    <Link href="#" className="text-gray-500 hover:text-rose-600">
                        Cookies
                    </Link>
                </div>
            </div>
        </footer>
    )
}
