<script lang="ts">
    import { slide } from 'svelte/transition';
    let open: number | null = null;
    const faqs = [
        { q: "POLÍTICAS DE RESERVA", a: "Nuestro sistema no despliega disponibilidad inmediata. En un tiempo no mayor a 48 horas, un asesor confirmará el estado de su reserva vía WhatsApp o Correo." },
        { q: "REEMBOLSOS Y CANCELACIONES", a: "Nos reservamos el derecho de cancelar o cambiar paquetes si las circunstancias lo ameritan. Las cancelaciones se evalúan según el tiempo de anticipación." },
        { q: "TRATAMIENTO DE DATOS (LEY 29733)", a: "Tus datos (DNI/Teléfono) son usados exclusivamente para la reserva y seguros. Cumplimos estrictamente la Ley de Protección de Datos Personales." },
        { q: "CÓDIGO ESNA Y SANCIONES", a: "Prohibimos la explotación sexual de menores. Dañar el patrimonio natural del Bosque de Cañoncillo es causa de expulsión inmediata sin reembolso." }
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