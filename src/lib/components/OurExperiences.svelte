<script>
  const experiences = [
    {
      title: "Ruta de Adrenalina",
      desc: "Domina las dunas más altas en cuatrimotos de última generación. Una dosis de libertad pura.",
      img: "https://i.pinimg.com/736x/56/84/ac/5684acac55521a4e4f1dbefa2eb05144.jpg",
      tag: "Más Popular",
      color: "bg-orange-600",
      price: "60"
    },
    {
      title: "Paz en la Laguna",
      desc: "Navega en kayak por el espejo de agua al amanecer. El santuario de aves en su máximo esplendor.",
      img: "https://i.pinimg.com/736x/17/9f/f8/179ff8eb9d49fb48538c0f36a15ea7e5.jpg",
      tag: "Reconexión",
      color: "bg-blue-600",
      price: "45"
    },
    {
      title: "Paseo de Leyenda",
      desc: "Cabalgata mística entre algarrobos centenarios. Siente el paso del caballo peruano en la arena.",
      img: "https://i.pinimg.com/736x/05/e7/1d/05e71d16f20566b0c17dddeeac6c70fc.jpg",
      tag: "Cultura Viva",
      color: "bg-emerald-700",
      price: "50"
    }
  ];
</script>

<section id="experiencias" class="pt-32 pb-16 bg-white">
  <div class="max-w-[1200px] mx-auto px-8">
    
    <header class="mb-24 text-center">
        <span class="text-orange-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Experiencias de Autor</span>
        <h2 class="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-slate-900">
            Elige tu propia <span class="text-orange-500">Aventura</span>
        </h2>
        <p class="text-slate-400 text-xs mt-6 font-bold uppercase tracking-widest flex items-center justify-center gap-3">
            <i class="fas fa-clock text-orange-500 animate-pulse"></i> Solo 4 cupos disponibles esta semana
        </p>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-20">
      {#each experiences as item}
        <article class="group relative flex flex-col cursor-pointer">
          <div class="relative aspect-[4/5] overflow-hidden bg-slate-100 mb-8 rounded-sm">
            <img 
              src={item.img} 
              alt={item.title}
              class="w-full h-full object-cover transition-all duration-1000 ease-in-out group-hover:scale-110 group-hover:rotate-1 brightness-[0.9]"
            />
            
            <span class="absolute top-4 left-4 {item.color} text-white text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 shadow-xl">
                {item.tag}
            </span>

            <div class="absolute bottom-0 right-0 bg-slate-900 text-white px-6 py-4">
                <p class="text-[8px] uppercase tracking-widest opacity-60 leading-none">Desde</p>
                <p class="text-xl font-bold italic leading-none">S/ {item.price}</p>
            </div>
          </div>
          
          <div class="flex flex-col flex-grow">
            <h3 class="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-orange-600 transition-colors">
              {item.title}
            </h3>
            
            <p class="text-[15px] text-slate-500 font-light leading-relaxed mb-6">
              {item.desc}
            </p>

            <div class="mt-auto flex items-center justify-between group/btn">
              <span class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 border-b-2 border-orange-500/20 group-hover:border-orange-500 transition-all pb-1">
                Ver itinerario
              </span>
              <i class="fas fa-plus text-[10px] p-2 bg-slate-100 rounded-full group-hover:bg-orange-600 group-hover:text-white transition-all"></i>
            </div>
          </div>
        </article>
      {/each}
    </div>

    <footer class="mt-2 py-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 opacity-60">
        <p class="text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <i class="fas fa-check-double text-green-500 mr-2"></i> Incluye Equipamiento y Guía Certificado
        </p>
        <div class="flex gap-6">
            <img src="https://img1.wsimg.com/isteam/ip/52243972-a564-4158-ac40-3b2264e2ff4a/agencia%20de%20viajes%20y%20turismo%20registrada.jpg" alt="MINCETUR" class="h-8 grayscale opacity-50">
        </div>
    </footer>
  </div>
</section>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap');
  .font-serif { font-family: 'Playfair Display', serif; }
</style>