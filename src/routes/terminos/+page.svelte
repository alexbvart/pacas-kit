<script lang="ts">
    import { base } from '$app/paths';
    import Footer from '$lib/components/Footer.svelte';
    import TopBar from '$lib/components/TopBar.svelte';
  import { slide } from 'svelte/transition';
  let open: number | null = 0; // El primero abierto por defecto

  const sections = [
    {
      title: "1. RESERVAS Y CONFIRMACIÓN DE SERVICIOS",
      content: [
        "El sistema despliega información de servicios, pero la disponibilidad final se confirma en un plazo máximo de 48 horas vía email o WhatsApp.",
        "Para garantizar la reserva, se requiere el pago anticipado del 50% del total. El saldo restante deberá liquidarse antes de iniciar la experiencia.",
        "Es responsabilidad del cliente brindar correctamente su e-mail y teléfonos de contacto para recibir la confirmación.",
        "Toda reserva confirmada recibirá una notificación que sirve como garantía del servicio solicitado."
      ]
    },
    {
      title: "2. CANCELACIONES Y PENALIDADES",
      content: [
        "Cancelaciones con más de 20 días de anticipación: Sujetas a una penalidad del 15% por gastos administrativos y operativos.",
        "Cancelaciones con menos de 3 días (72 horas) de anticipación: Aplica una penalidad del 100%, sin derecho a reembolso.",
        "No-Show: Si el pasajero no se presenta en la fecha y hora pactada, no habrá reembolso alguno.",
        "La empresa se reserva el derecho de cancelar o cambiar paquetes si las circunstancias de seguridad o logística así lo ameritan."
      ]
    },
    {
      title: "3. REEMBOLSOS",
      content: [
        "No se aplican reembolsos por servicios no utilizados voluntariamente por el cliente (noches de hotel, tours o comidas).",
        "El proceso de reembolso, cuando aplique, se realizará a través del mismo método utilizado para el pago original.",
        "Los tiempos de procesamiento de reembolsos dependen de terceros (bancos y pasarelas de pago) y pueden tardar entre 15 a 20 días hábiles."
      ]
    },
    {
      title: "4. RESPONSABILIDAD Y MODIFICACIONES",
      content: [
        "Itinerarios y rutas: Por razones operativas o climáticas, puede ser necesario cambiar el orden de las actividades para garantizar la seguridad.",
        "Fuerza Mayor: No nos hacemos responsables por retrasos o cancelaciones derivados de huelgas, paros, desastres naturales o condiciones climáticas adversas.",
        "Equipaje: La seguridad del equipaje y objetos personales es responsabilidad exclusiva del pasajero durante todo el recorrido."
      ]
    },
    {
      title: "5. PROTECCIÓN DE DATOS (LEY 29733)",
      content: [
        "Los datos personales (DNI, Pasaporte, Teléfono) son recolectados con consentimiento del titular para ejecutar el servicio contratado.",
        "Amaneceres.com garantiza que el tratamiento de datos es lícito y no se utilizan para medios fraudulentos o ilícitos.",
        "La empresa adopta medidas técnicas y legales para asegurar la seguridad y confidencialidad de la información proporcionada.",
        "El titular puede solicitar la rectificación o eliminación de sus datos en cualquier momento si ya no hay una relación contractual vigente."
      ]
    },
    {
      title: "6. CÓDIGO DE CONDUCTA Y SEGURIDAD",
      content: [
        "Prohibición de explotación sexual: Denunciamos y prohibimos cualquier forma de explotación sexual de menores (Código ESNA).",
        "Protección del Patrimonio: Dañar el Bosque de Cañoncillo o ignorar las normas del guía es causa de expulsión inmediata sin reembolso.",
        "Solo se reconocen pagos realizados a las cuentas oficiales del titular: ALFONSO BRIONES VENTURA."
      ]
    }
  ];
</script>

<TopBar />

<div class="min-h-screen bg-slate-50 font-sans selection:bg-orange-100">
  <nav class="py-6 px-8 max-w-5xl mx-auto text-[10px] uppercase tracking-widest text-slate-400 font-bold">
    <a href="{base}/" class="hover:text-orange-600 transition-colors">Inicio</a> 
    <span class="mx-2">/</span> 
    <span class="text-slate-900 font-black">Términos y Condiciones</span>
  </nav>

  <section class="py-12 md:py-24 px-6">
    <div class="max-w-4xl mx-auto">
      <header class="mb-20">
        <h1 class="text-5xl md:text-7xl font-black text-slate-900 leading-none uppercase italic tracking-tighter mb-8">
          Legal & <br> 
          <span class="text-orange-500 not-italic font-serif">Compromiso</span>
        </h1>
        <div class="h-1 w-20 bg-orange-500 mb-8"></div>
        <p class="text-slate-500 text-sm md:text-base max-w-2xl leading-relaxed italic">
          Al reservar con <span class="text-slate-900 font-bold">Pacasmayo Místico</span>, usted acepta las políticas de operación, seguridad y privacidad establecidas para proteger su experiencia y nuestra integridad.
        </p>
      </header>

      <div class="space-y-4">
        {#each sections as section, i}
          <div class="bg-white border-b border-slate-200 transition-all duration-500 {open === i ? 'shadow-2xl z-10 relative -mx-4 px-4 py-4 rounded-xl' : 'px-4'}">
            <button 
              on:click={() => open = open === i ? null : i}
              class="w-full py-6 flex justify-between items-center text-left group"
            >
              <span class="text-xs md:text-sm font-black uppercase tracking-widest {open === i ? 'text-orange-600' : 'text-slate-900'}">
                {section.title}
              </span>
              <i class="fas {open === i ? 'fa-minus' : 'fa-plus'} text-[10px] text-slate-300 group-hover:text-orange-500 transition-colors"></i>
            </button>

            {#if open === i}
              <div transition:slide={{ duration: 300 }} class="pb-8">
                <div class="space-y-4 border-t border-slate-50 pt-6">
                  {#each section.content as bullet}
                    <div class="flex gap-4">
                      <div class="w-1 h-1 rounded-full bg-orange-500 mt-2 shrink-0"></div>
                      <p class="text-sm text-slate-600 leading-relaxed font-light italic">
                        {bullet}
                      </p>
                    </div>
                  {/each}
                </div>
              </div>
            {/if}
          </div>
        {/each}
      </div>

      <footer class="mt-24 pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between gap-8 items-start">
        <div class="max-w-xs">
          <p class="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">Titular de Agencia</p>
          <p class="text-sm font-bold text-slate-900 uppercase">Alfonso Briones Ventura</p>
          <p class="text-[10px] text-slate-500 mt-1">Operador Turístico - Pacasmayo, Perú</p>
        </div>
        <div class="text-left md:text-right">
          <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Jurisdicción</p>
          <p class="text-[10px] text-slate-500 mt-2 italic max-w-xs md:ml-auto leading-relaxed">
            Cualquier discrepancia será resuelta bajo las leyes peruanas en la jurisdicción de los tribunales de La Libertad.
          </p>
        </div>
      </footer>
      
    </div>
</section>
</div>
<Footer />

<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap');
  .font-serif { font-family: 'Playfair Display', serif; }
</style>