<template>
  <div class="loader"></div>
</template>

<style lang="scss" scoped>
.card .loader {
  background: #2c3e50;
  background: -moz-linear-gradient(
    left,
    #2c3e50 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: -webkit-linear-gradient(
    left,
    #2c3e50 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: -o-linear-gradient(left, #2c3e50 10%, rgba(255, 255, 255, 0) 42%);
  background: -ms-linear-gradient(
    left,
    #2c3e50 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: linear-gradient(
    to right,
    #2c3e50 10%,
    rgba(255, 255, 255, 0) 42%
  );

  &:before {
    background: #2c3e50;
  }

  &:after {
    background: #ffffff;
  }
}
</style>
