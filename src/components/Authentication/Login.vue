<template>
  <div>
      <Header />
      <FormLogin />
  </div>
</template>

<script>
import Header from '../FixedComponents/Header/Header'
import FormLogin from './Views/FormLogin'

export default {
  name: 'Login',

  components: { Header, FormLogin  }

}
</script>

