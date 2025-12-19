<script>
  const experiences = [
    {
      title: "Adrenalina en Dunas",
      desc: "Siente el poder de las cuatrimotos cruzando el desierto de Cañoncillo.",
      img: "https://i.pinimg.com/736x/56/84/ac/5684acac55521a4e4f1dbefa2eb05144.jpg",
      tag: "Retorno Turbo",
      color: "text-orange-600"
    },
    {
      title: "Paz en la Laguna",
      desc: "Remo suave en el espejo de agua de la Laguna Larga al amanecer.",
      img: "https://i.pinimg.com/736x/17/9f/f8/179ff8eb9d49fb48538c0f36a15ea7e5.jpg",
      tag: "Santuario de Aves",
      color: "text-blue-600"
    },
    {
      title: "Legado Norteño",
      desc: "Cabalgata por dunas con caballos de paso entre algarrobos.",
      img: "https://i.pinimg.com/736x/05/e7/1d/05e71d16f20566b0c17dddeeac6c70fc.jpg",
      tag: "Bosque de Cañoncillo",
      color: "text-emerald-700"
    }
  ];
</script>

<section id="experiencias" class="py-32 bg-slate-100">
  <div class="max-w-[1200px] mx-auto px-8">
    
    <header class="mb-20 max-w-2xl text-center mx-auto">
                  <h2 class="text-3xl font-black uppercase italic tracking-tighter">Nuestras Experiencias</h2>
                <div class="h-1 w-20 bg-orange-500 mx-auto mt-4"></div>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16">
      {#each experiences as item}
        <article class="group relative flex flex-col">
          <div class="relative aspect-[3/4] overflow-hidden bg-slate-50 mb-8 transition-all duration-500 group-hover:shadow-sm rounded-2xl">
            <img 
              src={item.img} 
              alt={item.title}
              class=" rounded-2xl w-full h-full object-cover saturate-[0.8] brightness-[0.95] group-hover:rounded-2xl group-hover:saturate-100 group-hover:scale-[1.03] transition-all duration-1000 ease-in-out"
            />
          </div>
          
          <div class="flex flex-col flex-grow">
            <span class="text-[9px] font-black uppercase tracking-[0.2em] {item.color} mb-3">
              {item.tag}
            </span>
            
            <h3 class="text-2xl font-normal text-slate-900 mb-3 tracking-tight group-hover:text-orange-600 transition-colors duration-300">
              {item.title}
            </h3>
            
            <p class="text-[15px] text-slate-500 font-light leading-relaxed max-w-[90%]">
              {item.desc}
            </p>

            <div class="mt-6 pt-6 border-t border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span class="text-xs font-bold uppercase tracking-tighter text-slate-900 flex items-center gap-2">
                Explorar detalles <i class="fas fa-arrow-right text-[10px]"></i>
              </span>
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  /* Importación de fuente para el toque Serif tipo Google Arts */
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap');
  
  .font-serif {
    font-family: 'Playfair Display', serif;
  }
</style>