import React from 'react'
import Image from 'next/image'
import { Badge } from './ui/badge'
import { Calendar, Smartphone, Users, Clock } from 'lucide-react'


export default function Services() {
  return (
    <section id="servicios" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-rose-100 text-rose-800">Servicios</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Perfecto para Cualquier Tipo de Negocio
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Desde salones de belleza hasta consultorios médicos, AgendaPro se adapta a las necesidades específicas
                  de tu industria.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-rose-100 p-2 rounded-lg">
                    <Calendar className="h-6 w-6 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Salones de Belleza</h3>
                    <p className="text-gray-500">
                      Gestiona servicios múltiples, estilistas y productos. Galería de trabajos y sistema de
                      fidelización integrado.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-rose-100 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Consultorios Médicos</h3>
                    <p className="text-gray-500">
                      Historiales médicos seguros, recetas digitales y integración con sistemas de salud existentes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-rose-100 p-2 rounded-lg">
                    <Clock className="h-6 w-6 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Centros de Fitness</h3>
                    <p className="text-gray-500">
                      Reserva de clases grupales, entrenadores personales y seguimiento de membresías y pagos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-rose-100 p-2 rounded-lg">
                    <Smartphone className="h-6 w-6 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Servicios Profesionales</h3>
                    <p className="text-gray-500">
                      Abogados, contadores, consultores. Gestión de casos, facturación y seguimiento de proyectos.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  alt="Servicios AgendaPro"
                  className="aspect-square overflow-hidden rounded-xl object-cover shadow-lg"
                  height="500"
                  src="/services.webp"
                  width="500"
                />
              </div>
            </div>
          </div>
        </section>
  )
}
