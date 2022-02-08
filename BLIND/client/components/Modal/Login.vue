<template>
  <div v-if="modal.login.show" class="modal-outside">
    <div id="login-modal">
      <div class="head">
        <h5>{{ modal.login.directLogin ? "로그인" : "Alumni 로그인" }}</h5>
        <a
          @click.prevent="$store.commit('modal/SET_LOGIN_MODAL_CLOSE')"
          class="close-btn"
        >
          <img src="@/static/icon/close.png" alt="닫기" />
        </a>
      </div>
      <div v-if="!modal.login.directLogin" class="body">
        <p>
          Alumni 에서는 <b>(취업자/졸업생/이너서클 완료자)</b>분들과
          <b>카뎃분들</b> 그리고 <b>42서울 내 프로젝트</b>들을 이어주는
          커뮤니티로 성장해 나갑니다.
        </p>
        <div class="info">42서울 로그인</div>
        <button class="seoul42-btn">42Seoul 계정으로 로그인하기</button>
        <div class="left-time">남은시간 : {{ displayTime }}</div>
      </div>
      <div v-else class="body">
        <div class="row">
          <label for="user-email">이메일</label>
          <input id="user-email" type="email" v-model="email" />
        </div>
        <div class="row">
          <label for="user-password">비밀번호</label>
          <input id="user-password" type="password" v-model="password" />
        </div>
        <button class="login-btn" @click="loginWithEmail">
          이메일로 로그인
        </button>
      </div>
      <div v-if="!modal.login.directLogin" class="foot">
        <a @click.prevent="$store.commit('modal/SET_LOGIN_MODAL_DIRECT_LOGIN')"
          >알럼나이는 처음이신가요?</a
        >
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: { ...mapState(["modal"]) },
  data() {
    return {
      leftTime: 180,
      displayTime: "3분",
      email: null,
      password: null,
    };
  },
  watch: {
    "modal.login.show": function (to, from) {
      if (to !== from && to) {
        this.leftTime = 180;
        setInterval(() => {
          this.timeModifier();
        }, 1000);
      }
    },
  },
  methods: {
    async loginWithEmail() {
      const data = await this.$axios.$post(`http://localhost:8000/user/login`, {
        email: this.email,
        password: this.password,
      });
      // 로그인 에러 캐칭
      if (data.error) {
        return;
      }
      this.$store.commit("user/SET_USER", {
        email: data.email,
        nickname: data.nickname,
        token: data.token,
      });
      this.$store.commit("modal/SET_LOGIN_MODAL_CLOSE");
    },
    timeModifier() {
      this.leftTime -= 1;
      if (this.leftTime <= 0) {
        this.leftTime = 180;
        this.displayTime = `3분 ${this.displayTime}`;
      } else if (this.leftTime >= 120) {
        this.displayTime = `2분 ${this.leftTime - 120}초`;
      } else if (this.leftTime >= 60) {
        this.displayTime = `1분 ${this.leftTime - 60}초`;
      } else {
        this.displayTime = `${this.leftTime}초`;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
#login-modal {
  background: white;
  width: 520px;
  .head {
    padding: 23px 30px;
    font-size: 18px;
    color: rgb(34, 34, 34);
    font-weight: 700;
    border-bottom: solid 1px rgb(223, 225, 228);
    h5 {
      margin: 0;
    }
  }
  .body {
    padding: 0 30px;
    font-size: 16px;
    line-height: 24px;

    p {
      padding: 20px 0;
      margin: 0;
    }
    .info {
      margin: 20px 0 30px;
      color: rgb(148, 150, 155);
      font-size: 14px;
      line-height: 21px;
      letter-spacing: -0.1px;
    }
    .row {
      margin: 20px 0;
      label {
        display: block;
      }
      input {
        width: 100%;
        box-sizing: border-box;
        padding: 12px;
      }
    }
    .seoul42-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 25px;
      font-weight: 400;
      width: 100%;
      height: 65px;
      background-color: rgb(55, 172, 201);
      border: none;
      color: white;
      cursor: pointer;
    }
    .login-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 25px;
      font-weight: 400;
      width: 100%;
      height: 64px;
      background-color: rgb(55, 172, 201);
      border: none;
      color: white;
      cursor: pointer;
      margin-bottom: 30px;
    }
    .left-time {
      text-align: center;
      color: rgb(55, 172, 201);
      font-size: 14px;
      font-weight: 700;
      margin-top: 16px;
    }
  }
  .body {
  }
  .foot {
    padding: 30px;
    color: rgb(160, 160, 174);
    font-size: 14px;
    line-height: 17.5px;
    text-align: center;
    text-decoration: underline;
  }
}
</style>
