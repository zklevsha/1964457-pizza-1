<template>
  <div>
    <div class="layout__title">
      <h1 class="title title--big">Мои данные</h1>
    </div>

    <div class="user">
      <picture>
        <img :src="user.avatar" :alt="user.name" width="72" height="72" />
      </picture>
      <div class="user__name">
        <span>{{ user.name }} </span>
      </div>
      <p class="user__phone">Контактный телефон:{{ user.phone }}</p>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "ProfileUserInfo",
  computed: {
    ...mapState("Auth", ["user"]),
  },
};
</script>
