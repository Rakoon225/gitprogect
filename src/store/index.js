import { createStore } from 'vuex'

export default createStore({
  state: { //список лишек
    links: [
      {
        name: "Главная",
        to: "main",
      },
      {
        name: "Контакты",
        to: "contacts",
      },
      {
        name: "Услуги",
        to: "services",
      },
    ],
  },
})
