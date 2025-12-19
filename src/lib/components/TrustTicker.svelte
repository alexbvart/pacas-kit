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
  <div class="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
  <div class="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

  <div class="flex w-max animate-marquee">
    {#each Array(2) as _}
      <div class="flex items-center justify-around gap-2 px-4 min-w-full">
        {#each certificates as cert}
          <div class="shrink-0 group">
            <img 
              src={cert.img} 
              alt={cert.name} 
              class="h-14 md:h-20 w-auto object-contain grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-400 ease-in-out transform group-hover:scale-110"
            />
          </div>
        {/each}
            
      </div>
    {/each}
  </div>
</section>

<style>
  .animate-marquee {
    /* Ajusta el tiempo (40s) según prefieras la velocidad */
    animation: marquee 20s linear infinite;
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