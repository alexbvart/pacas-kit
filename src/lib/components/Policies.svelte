<script lang="ts">
    import { slide } from 'svelte/transition';
    let open: number | null = null;
    const faqs = [
        {
            q: "PROCESO DE RESERVA Y CONFIRMACIÓN", 
            a: "El sistema registra solicitudes, pero la disponibilidad se confirma en un plazo máximo de 48 horas vía email o WhatsApp. Para garantizar el servicio, se requiere un depósito mínimo del 70% del importe total. El saldo restante debe liquidarse 10 días antes del inicio de la experiencia." 
        },
        { 
            q: "CANCELACIONES, REEMBOLSOS Y NO-SHOW", 
            a: "Si el usuario cancela con menos de 3 días de anticipación, se aplica una penalidad del 100%. Las cancelaciones con más de 20 días de antelación tienen una penalidad del 15% por gastos administrativos. No hay reembolsos por servicios no utilizados (noches de hotel, tours, comidas) o por la llegada tarde del pasajero." 
        },
        { 
            q: "RESPONSABILIDAD Y FUERZA MAYOR", 
            a: "La agencia no se responsabiliza por eventos fuera de su control como desastres naturales, condiciones climáticas adversas o disturbios sociales. Nos reservamos el derecho de modificar itinerarios para garantizar la seguridad del pasajero según la Ley 29408. El equipaje viaja bajo responsabilidad absoluta de su dueño." 
        },
        { 
            q: "PROTECCIÓN DE DATOS Y EXCLUSIVIDAD DE PAGOS", 
            a: "Tus datos personales se tratan bajo la Ley 29733 para la ejecución del servicio contratado. Solo se reconocen pagos realizados a las cuentas oficiales del titular de la agencia: ALFONSO BRIONES VENTURA. No nos hacemos responsables por depósitos a cuentas de terceros no autorizados." 
        },
        { 
            q: "CÓDIGO ESNA Y CONDUCTA", 
            a: "En cumplimiento del Código ESNA, prohibimos y denunciamos cualquier forma de explotación sexual de menores. Asimismo, el incumplimiento de las normas de seguridad del guía o daños al patrimonio natural de Cañoncillo faculta a la empresa a expulsar al infractor sin derecho a reembolso." 
        },
    ];
</script>


<section class="py-20 bg-slate-50">
    <div class="max-w-3xl mx-auto px-6">
        <h2 class="text-3xl font-black text-center mb-12 uppercase italic tracking-tighter">Preguntas y Políticas</h2>
        <div class="space-y-4">
            {#each faqs as faq, i}
                <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                    <button on:click={() => open = open === i ? null : i} class="w-full p-6 text-left font-bold flex justify-between items-center hover:text-orange-600 transition-colors uppercase text-sm italic">
                        {faq.q}
                        <i class="fas {open === i ? 'fa-minus' : 'fa-plus'} text-xs opacity-30"></i>
                    </button>
                    {#if open === i}
                        <div transition:slide class="px-6 pb-6 text-slate-600 text-sm leading-relaxed italic border-t border-slate-50 pt-4">
                            {faq.a}
                        </div>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</section>