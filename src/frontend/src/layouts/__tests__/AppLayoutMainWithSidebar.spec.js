import { mount, createLocalVue } from "@vue/test-utils";
import AppLayoutMainWithSidebar from "@/layouts/AppLayoutMainWithSidebar";
import VueRouter from "vue-router";
import Vuex from "vuex";
import router from "@/router/index.js";
import { getVuexMock } from "@/store/mocks";

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);

describe("AppLayoutMainWithSidebar", () => {
  let wrapper;
  let store;

  const createComponent = (options) => {
    wrapper = mount(AppLayoutMainWithSidebar, options);
  };

  beforeEach(() => {
    store = getVuexMock({ authenticated: true });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("renders", () => {
    createComponent({ localVue, store, router });
    expect(wrapper.exists()).toBeTruthy();
  });
});
