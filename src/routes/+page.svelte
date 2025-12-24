<script>
    // Importamos todas las piezas que creamos
    import TopBar from '$lib/components/TopBar.svelte';
    import Hero from '$lib/components/Hero.svelte';
    import Offer from '$lib/components/Offer.svelte';
    import Policies from '$lib/components/Policies.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import OurEssence from '$lib/components/OurEssence.svelte';
    import OurExperiences from '$lib/components/OurExperiences.svelte';
    import Testimonials from '$lib/components/Testimonials.svelte';
    import Payment from '$lib/components/Payment.svelte';
    import TrustTicker from '$lib/components/TrustTicker.svelte';
</script>

<TopBar />

<main>
    <Hero />

    <OurEssence />
    
    <Offer />

    <OurExperiences />

    <Testimonials />

    <TrustTicker />
    <Payment />
    <Policies />
</main>

<Footer />