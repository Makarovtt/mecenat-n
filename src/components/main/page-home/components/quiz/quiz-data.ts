export const QUIZ_STATE = {
  activePage: "page1",
  progresBar: {
    progres: "25%",
    value: "1 из 4",
  },
  page1: {
    title: "Кому небходима помощь?",
    items: [
      {
        id: 1,
        title: "Физическое лицо",
        checked: false,
      },
      {
        id: 2,
        title: "Юридическое лицо",
        checked: false,
      },
    ],
  },

  page2: {
    title: "Заполните основную информацию для связи",
    items: [
      {
        id: 1,
        title: "Физическое лицо",
        checked: false,
      },
      {
        id: 2,
        title: "Юридическое лицо",
        checked: false,
      },
    ],
  },
  page3: {
    title: "Подробно опишите Вашу проблему и/или загрузите фото/видео",
    items: [
      {
        id: 1,
        title: "Физическое лицо",
        checked: false,
      },
      {
        id: 2,
        title: "Юридическое лицо",
        checked: false,
      },
    ],
  },
  userSelected: null,
};
