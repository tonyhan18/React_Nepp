<template>
  <nav>
    <div class="side-block">
      <nuxt-link to="/">
        <img src="/logo/main.jpg" alt="알럼나이 로고" />
      </nuxt-link>
      <nuxt-link to="/"> 홈 </nuxt-link>
      <nuxt-link to="/company"> 기업리뷰 </nuxt-link>
    </div>
    <div class="side-block">
      <SmallSearchbar />
      <a @click.prevent="clickWritingButton"> 글쓰기 </a>
      <a @click.prevent="clickLoginButton">
        {{ user.email ? "로그아웃" : "로그인" }}
      </a>
    </div>
    <LoginModal />
    <WritingModal />
  </nav>
</template>
<script>
import SmallSearchbar from "@/components/GNB/SmallSearchbar";
import LoginModal from "@/components/Modal/Login";
import WritingModal from "@/components/Modal/Writing";
import { mapState } from "vuex";
export default {
  components: {
    SmallSearchbar,
    LoginModal,
    WritingModal,
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    clickWritingButton() {
      if (!this.user.email) {
        this.$store.commit("modal/SET_LOGIN_MODAL_OPEN");
      }
    },
    clickLoginButton() {
      if (!this.user.email) {
        this.$store.commit("modal/SET_LOGIN_MODAL_OPEN");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  .side-block {
    display: flex;
    align-items: flex-end;
  }
}
</style>
