export const state = () => ({ email: null, nickname: null });

export const mutations = {
  SET_USER(state, { email, nickname }) {
    (state.email = email), (state.nickname = nickname);
  },
};

export const actions = {};
