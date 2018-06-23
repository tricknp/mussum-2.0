<template>
    <section class="page-form-feedback">
        <Header /> 
      
        <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSfSkHBUmSdjVYwEoOjYT7fc1egTqn3y3LAKAQ_gfH6UleYmpw/viewform?embedded=true" 
            class="google-form"
            frameborder="0" 
            marginheight="0" 
            marginwidth="0">
            Carregando…
        </iframe>

        <Footer />
    </section>    
</template>

<script>
import Header from '../FixedComponents/Header/Header'
import Footer from '../FixedComponents/Footer/Footer'
export default {
    components: { Header, Footer }
}
</script>

<style>
.page-form-feedback
{
    display: flex;
    flex-direction: column;
    height: 100vh;
}

.google-form
{   

    width: 100%;
    height: 760px; 
}
</style>
