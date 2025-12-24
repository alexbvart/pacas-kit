<script>
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  // Lista de mensajes para generar confianza total
  const securityMessages = [
    { text: "CUMPLE CON EL CÓDIGO ESNA (PROTECCIÓN DE MENORES)", icon: "fa-shield-alt", color: "text-orange-500" },
    { text: "RUC: 10716023945 | AGENCIA LOCAL AUTORIZADA", icon: "fa-id-card", color: "text-blue-400" },
    { text: "PROTECCIÓN DE DATOS DNI | LEY 29733", icon: "fa-user-shield", color: "text-green-400" },
    { text: "GRUPOS REDUCIDOS | TURISMO SOSTENIBLE", icon: "fa-leaf", color: "text-emerald-400" },
    { text: "EMITIMOS BOLETA DE VENTA ELECTRÓNICA", icon: "fa-file-invoice-dollar", color: "text-orange-500" }
  ];

  let currentIndex = 0;

  onMount(() => {
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % securityMessages.length;
    }, 3500); // Cambia cada 3.5 segundos
    return () => clearInterval(interval);
  });
</script>

<nav class="bg-slate-900 text-white py-2 px-4 sticky top-0 z-[100] border-b border-orange-500/30 text-[9px] md:text-xs overflow-hidden">
  <div class="max-w-7xl mx-auto flex justify-between items-center h-6">
    
    <div class=" relative flex-1 h-full overflow-hidden">
      {#key currentIndex}
        <div 
          in:fly={{ y: 20, duration: 500 }} 
          out:fly={{ y: -20, duration: 500 }}
          class="absolute inset-0 flex items-center gap-2 font-bold italic"
        >
          <i class="fas {securityMessages[currentIndex].icon} {securityMessages[currentIndex].color}"></i>
          <span class="truncate uppercase tracking-tighter">
            {securityMessages[currentIndex].text}
          </span>
        </div>
      {/key}
    </div>

    

    <div class="flex items-center gap-3 ml-4">
        <span class="hidden xl:inline text-blue-400 uppercase tracking-tighter font-bold text-[10px]">Protección Ley 29733</span>
        <div class="h-6 w-[1px] bg-slate-700 hidden lg:block"></div>
        <img src="https://img1.wsimg.com/isteam/ip/52243972-a564-4158-ac40-3b2264e2ff4a/agencia%20de%20viajes%20y%20turismo%20registrada.jpg" 
             alt="RUC" 
             class="h-6 rounded brightness-125 contrast-125">
    </div>
  </div>
</nav>

<style>
  /* Asegura que el contenedor tenga altura fija para que el efecto fly funcione */
  .h-6 { height: 1.5rem; }
</style>