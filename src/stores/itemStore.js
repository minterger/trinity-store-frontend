import { defineStore } from "pinia";
import { ref } from "vue";

export const useItemStore = defineStore("item", () => {
  const moreInfoShow = ref(false);

  const itemShow = ref({});

  const items = ref([
    {
      name: "Vip Redstone",
      image:
        "https://dunb17ur4ymx4.cloudfront.net/packages/images/f439bb9fbfdc920cc409185f7dd9ae03662dd114.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse labore repudiandae excepturi...",
      list: ["Kit Mamadaso", "SlimeFun Mamadaso", "Quien Pa", "More Futures"],
      price: 300,
    },
    {
      name: "Vip Diamante",
      image:
        "https://dunb17ur4ymx4.cloudfront.net/packages/images/d0bf9a586189471109d60aa6cf93c449275e127e.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse labore repudiandae excepturi...",
      list: ["Kit Mamadaso", "SlimeFun Mamadaso", "Quien Pa", "More Futures"],
      price: 600,
    },
    {
      name: "Vip Netherite",
      image:
        "https://dunb17ur4ymx4.cloudfront.net/packages/images/11dc5695831cfc2e944457fabfa477357bb44f5c.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse labore repudiandae excepturi...",
      list: ["Kit Mamadaso", "SlimeFun Mamadaso", "Quien Pa", "More Futures"],
      price: 900,
    },
  ]);

  const openMoreShowInfo = (item) => {
    itemShow.value = item;
    moreInfoShow.value = true;
  };

  return { moreInfoShow, itemShow, items, openMoreShowInfo };
});
