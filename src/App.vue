<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  @include mq(min) {
    font-size: 30px;
  }
}
</style>
