<script>
  const certificates = [
    { name: "Mincetur", img: "https://img1.wsimg.com/isteam/ip/52243972-a564-4158-ac40-3b2264e2ff4a/agencia%20de%20viajes%20y%20turismo%20registrada.jpg" },
    { name: "Código ESNA", img: "https://dikatravelperu.travel/wp-content/uploads/2023/08/protegeme.png" },
    { name: "Marca Perú", img: "https://dikatravelperu.travel/wp-content/uploads/2023/01/Logo-Peru.webp" },
    { name: "Mincetur", img: "https://img1.wsimg.com/isteam/ip/52243972-a564-4158-ac40-3b2264e2ff4a/agencia%20de%20viajes%20y%20turismo%20registrada.jpg" },
    { name: "Código ESNA", img: "https://dikatravelperu.travel/wp-content/uploads/2023/08/protegeme.png" },
    { name: "Marca Perú", img: "https://dikatravelperu.travel/wp-content/uploads/2023/01/Logo-Peru.webp" }
  ];
</script>

<section class="bg-white py-12 overflow-hidden border-y border-slate-100 relative">

    <div class="max-w-7xl mx-auto px-6 mb-12 text-center">
      <span class="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] mb-3 block">Garantía y Respaldo</span>
      <h3 class="text-sm font-bold text-slate-800 uppercase tracking-widest">Operador Turístico con Registro Nacional</h3>
  </div>
  
  <div class="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
  <div class="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

  <div class="flex w-max animate-marquee">
    {#each Array(2) as _}
      <div class="flex items-center justify-around gap-0 px-1 min-w-full">
        <!-- <div class="flex items-center gap-16 md:gap-32 px-8"> -->
        {#each certificates as cert}
          <div class="shrink-0 group relative">
            <span class="flex w-max no-wrap absolute -top-8 left-1/2 -translate-x-1/2 text-[9px] font-black text-orange-600 opacity-0 group-hover:opacity-100 transition-all uppercase tracking-widest">
              {cert.name}
            </span>
            <img 
              src={cert.img} 
              alt={cert.name} 
              class="h-10 md:h-14 w-auto object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            />
          </div>
        {/each}
            
      </div>
    {/each}
  </div>

  <div class="max-w-4xl mx-auto px-6 mt-16 text-center">
      <p class="text-[9px] text-slate-400 font-medium uppercase tracking-[0.2em] leading-relaxed">
          Cumplimos con los estándares de <span class="text-slate-600"></span> <span class="text-slate-600">protección al menor</span> y <span class="text-slate-600">formalización tributaria</span> exigidos por el estado peruano.
      </p>
  </div>

</section>

<style>
  .animate-marquee {
    /* Ajusta el tiempo (40s) según prefieras la velocidad */
    animation: marquee 16s linear infinite;
  }

  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      /* Se mueve exactamente la mitad (un bloque completo) */
      transform: translateX(-50%);
    }
  }

  /* Pausa interactiva */
  .animate-marquee:hover {
    animation-play-state: paused;
  }

  /* Evita que el navegador intente ajustar el tamaño de los bloques */
  .w-max {
    width: max-content;
  }
</style>