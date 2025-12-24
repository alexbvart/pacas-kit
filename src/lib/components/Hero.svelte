<script>
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  
  let scale = 1;
  let timeLeft = "05:00"; // Tiempo ficticio de urgencia que se reinicia
  
  onMount(() => {
    // Efecto de respiración del botón WhatsApp
    const intervalScale = setInterval(() => {
      scale = scale === 1 ? 1.08 : 1;
    }, 2000);

    // Timer de urgencia para el 10% OFF
    let duration = 300; 
    const intervalTimer = setInterval(() => {
      let minutes = Math.floor(duration / 60);
      let seconds = duration % 60;
      timeLeft = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      if (--duration < 0) duration = 300;
    }, 1000);

    return () => {
      clearInterval(intervalScale);
      clearInterval(intervalTimer);
    };
  });
</script>

<section class="relative h-screen flex items-center justify-center overflow-hidden">
    <img
        src="https://i.pinimg.com/736x/36/96/ac/3696ac2224b888339a4f6bf76eed3a70.jpg"
        alt="Santuario de Cañoncillo Pacasmayo"
        class="absolute inset-0 w-full h-full object-cover brightness-[0.35] scale-110"
        style="animation: zoom 25s infinite alternate ease-in-out"
    />
    
    <div class="relative z-10 text-center px-6 max-w-5xl">
        <div class="mb-8 flex flex-col items-center gap-4">
            <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <span class="flex text-orange-400 text-[10px]">
                    <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                </span>
                <span class="text-[9px] text-white font-black uppercase tracking-[0.2em]">La experiencia #1 en Pacasmayo</span>
            </div>
            
            <!-- <div class="flex items-center gap-2 text-orange-400 text-[10px] font-bold uppercase tracking-widest animate-pulse">
                <i class="fas fa-users"></i>
                <span>Última reserva hace 3 horas desde Lima</span>
            </div> -->
        </div>

        <h1 class="text-5xl md:text-8xl font-black text-white leading-[0.95] uppercase italic tracking-tighter">
            Cañoncillo: <br />
            <span class="text-orange-500 underline decoration-white/10 not-italic">Oasis Oculto</span>
        </h1>
        
        <p class="text-base md:text-lg text-slate-200 mt-10 font-light max-w-3xl mx-auto mb-12 leading-relaxed">
            Descubre el <span class="text-white font-bold border-b border-orange-500">santuario</span>  de algarrobos milenarios en una expedición privada diseñada para reconectar.
        </p>

        <div class="flex flex-col items-center gap-8">
            <div class="flex flex-col md:flex-row justify-center items-center gap-6 w-full">
                <a
                    href="#pago"
                    class="group relative bg-orange-600 hover:bg-orange-700 text-white px-12 py-6 rounded-sm font-black text-xs uppercase tracking-[0.3em] shadow-[0_20px_50px_rgba(234,88,12,0.3)] transition-all flex flex-col items-center gap-1"
                >
                    <span class="flex items-center gap-3">
                        Reclamar 10% OFF 
                        <i class="fas fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
                    </span>
                    <!-- <span class="text-[9px] opacity-80 font-normal">Expira en {timeLeft}</span> -->
                </a>
                
                <a
                    href="#experiencias"
                    class="text-white border-b-2 border-white/20 hover:border-orange-500 py-2 font-bold text-[10px] uppercase tracking-[0.3em] transition-all"
                >
                    Ver Itinerario Místico
                </a>
            </div>

            <div class="inline-flex items-center gap-6 px-6 py-3 bg-black/20 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-widest text-white/80 border border-white/5">
                <span class="flex items-center gap-2">
                    <i class="fas fa-clock text-orange-500 animate-pulse"></i> Solo 4 cupos esta semana
                </span>
                <span class="h-4 w-[1px] bg-white/20"></span>
                <span class="flex items-center gap-2">
                    <i class="fas fa-shield-check text-green-500"></i> Guía Local
                </span>
            </div>
        </div>
    </div>

    <a 
      href="https://wa.me/51971602394" 
      target="_blank"
      class="fixed bottom-8 right-8 z-[110] bg-[#25D366] text-white p-5 rounded-full shadow-[0_20px_40px_rgba(37,211,102,0.4)] transition-transform duration-1000"
      style="transform: scale({scale})"
    >
        <i class="fab fa-whatsapp text-3xl"></i>
        <div class="absolute -top-12 -left-20 bg-white text-slate-900 text-[10px] font-bold px-4 py-2 rounded-full shadow-xl whitespace-nowrap animate-bounce">
            ¿Hay sitio para mañana? ⚡
            <div class="absolute -bottom-1 right-8 w-2 h-2 bg-white rotate-45"></div>
        </div>
    </a>

    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span class="text-[9px] text-white uppercase tracking-[0.4em]">Scroll</span>
        <div class="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
    </div>
</section>

<style>
    @keyframes zoom {
        from { transform: scale(1.1); }
        to { transform: scale(1.3); }
    }
</style>