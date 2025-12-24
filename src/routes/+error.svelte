<script>
    import TopBar from '$lib/components/TopBar.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import { base } from '$app/paths';
</script>

<svelte:head>
    <title>Ruta Desviada | Pacasmayo Místico</title>
</svelte:head>

<TopBar />

<main class="min-h-screen bg-slate-50 flex items-center justify-center py-20 px-6 text-center">
    <div class="max-w-2xl mx-auto space-y-10">
        
        <div class="relative w-48 h-48 mx-auto -mb-8">
            <div class="absolute inset-0 bg-orange-100 rounded-full animate-ping-slow"></div>
            <div class="absolute inset-0 bg-orange-200 rounded-full animate-pulse-slow delay-300"></div>
            <i class="fas fa-map-marker-alt text-7xl text-orange-600 absolute inset-0 flex items-center justify-center transform -rotate-12"></i>
            <i class="fas fa-question text-5xl text-slate-800 absolute -top-4 right-0 transform rotate-45"></i>
            <i class="fas fa-exclamation text-5xl text-slate-800 absolute -bottom-4 left-0 transform -rotate-45"></i>
        </div>

        <h1 class="text-7xl font-bold text-slate-900 tracking-tighter leading-none relative">
            404
            <span class="absolute top-0  -mr-16 text-2xl font-light text-slate-400 italic font-serif">¡Ups!</span>
        </h1>

        <p class="text-3xl font-light text-slate-700 leading-snug tracking-tight max-w-lg mx-auto">
            Parece que te has desviado de la <span class="font-serif italic text-orange-600">Ruta Mística</span>...
            ¡Pero no te preocupes, hay más aventuras esperando!
        </p>

        <p class="text-[15px] text-slate-500 max-w-lg mx-auto leading-relaxed">
            El camino que buscabas ya no existe o cambió de lugar.
            Permítenos guiarte de vuelta a las experiencias inolvidables que Pacasmayo tiene para ti.
        </p>

        <div class="mb-6 flex items-start gap-3 bg-emerald-50 p-4 rounded-lg border border-emerald-100">
    <i class="fas fa-shield-heart text-emerald-600 mt-1"></i>
    <div class="text-left">
        <p class="text-xs font-bold text-emerald-900 uppercase tracking-tight">Garantía de Devolución Total</p>
        <p class="text-[10px] text-emerald-700">Si el clima no permite la salida o cancelas con 24h de anticipación, te devolvemos el 100% de tu dinero sin preguntas.</p>
    </div>
</div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="{base}/" class="px-8 py-4 bg-orange-600 text-white text-base font-bold uppercase tracking-widest rounded-sm shadow-lg hover:bg-orange-700 transition-colors transform hover:-translate-y-1">
                <i class="fas fa-arrow-left mr-3"></i> Volver al Inicio
            </a>
            <a href="{base}/#pago" class="px-8 py-4 bg-slate-200 text-slate-900 text-base font-bold uppercase tracking-widest rounded-sm shadow-md hover:bg-slate-300 transition-colors transform hover:-translate-y-1">
                <i class="fas fa-ticket-alt mr-3"></i> Reserva tu Aventura Ahora
            </a>
        </div>

        <div class="pt-10 border-t border-slate-100 mt-16 max-w-xl mx-auto text-sm text-slate-400 space-y-3">
            <p>¿Necesitas ayuda inmediata? Contáctanos:</p>
            <div class="flex justify-center gap-6">
                <a href="tel:+519XXXXXXXX" class="hover:text-slate-600 transition-colors flex items-center gap-2">
                    <i class="fas fa-phone-alt"></i> +51 9XX XXX XXX
                </a>
                <a href="mailto:reservas@pacasmayomistico.com" class="hover:text-slate-600 transition-colors flex items-center gap-2">
                    <i class="fas fa-envelope"></i> Email
                </a>
            </div>
        </div>

    </div>
</main>

<Footer />

<style>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap');
    .font-serif { font-family: 'Playfair Display', serif; }

    @keyframes ping-slow {
        0% { transform: scale(0.8); opacity: 0.7; }
        50% { transform: scale(1.1); opacity: 0.3; }
        100% { transform: scale(0.8); opacity: 0.7; }
    }
    .animate-ping-slow {
        animation: ping-slow 4s infinite cubic-bezier(0.4, 0, 0.6, 1);
    }

    @keyframes pulse-slow {
        0% { transform: scale(0.9); opacity: 0.8; }
        50% { transform: scale(1.05); opacity: 0.5; }
        100% { transform: scale(0.9); opacity: 0.8; }
    }
    .animate-pulse-slow {
        animation: pulse-slow 3.5s infinite cubic-bezier(0.4, 0, 0.6, 1);
    }
</style>