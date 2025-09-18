<script>
  import HeroSection from "../components/heroSection.svelte";
  import TopItem from "../components/topItem.svelte";
  import Carousel from "../components/carousel.svelte";
  import BackgroundWrapper from "../cards/backgroundWrapper.svelte";
</script>

<div class="hero-section-container">
  <BackgroundWrapper>
    <HeroSection />
    <TopItem />
    <Carousel />
  </BackgroundWrapper>
</div>
