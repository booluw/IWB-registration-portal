<template>
  <section class="jumbotron">
    <h3 class="jumbotron__heading jumbotron__heading--small">
      IWB Acceleration Conference '21
    </h3>
    <h1 class="jumbotron__heading">
      Connecting Ideas To Opportunities
    </h1>
    <p class="jumbotron__paragraph mx-md-5">
      The first of its kind in Africa, an event that connects over 20,000 youngsters to sustainable solutions and global opportunities.
    </p>
    <button class="btn btn--link jumbotron__btn" @click="$emit('clicked')">
      register now
    </button>
  </section>
</template>

<script>
export default {
  name: 'AppJumbotron'
}
</script>
