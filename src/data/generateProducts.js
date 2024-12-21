import Chance from "chance";
const chance = new Chance();
const imageUrls = [
  "https://a.lmcdn.ru/product/R/T/RTLADU146001_25017049_1_v1.jpg",
  "https://a.lmcdn.ru/img600x866/M/P/MP002XW0WYIG_20049563_1_v1_2x.jpg",
  "https://a.lmcdn.ru/img600x866/M/P/MP002XW0N34V_20271566_1_v3_2x.jpeg",
  "https://a.lmcdn.ru/img600x866/R/T/RTLADE968601_25039305_1_v1_2x.jpg",
  "https://a.lmcdn.ru/img600x866/R/T/RTLADD293201_21771299_1_v1_2x.jpg",
  "https://a.lmcdn.ru/img600x866/R/T/RTLACD678701_18520021_1_v1.jpg",
  "https://a.lmcdn.ru/img600x866/R/T/RTLACH302801_18882248_1_v1.jpg",
  "https://a.lmcdn.ru/img600x866/R/T/RTLADS746601_24529813_1_v1.jpg",
  "https://a.lmcdn.ru/img600x866/R/T/RTLADT358301_24567977_1_v1.jpg",
  "https://a.lmcdn.ru/img600x866/R/T/RTLADK286401_22920922_1_v1.jpg",
  "https://a.lmcdn.ru/img600x866/R/T/RTLADF438801_23627221_1_v1_2x.jpg",
  "https://a.lmcdn.ru/img600x866/R/T/RTLADU070501_25161124_1_v6_2x.jpg",
  "https://a.lmcdn.ru/img600x866/R/T/RTLADG291801_24035563_1_v2_2x.jpg",
  "https://a.lmcdn.ru/img600x866/R/T/RTLADR191101_24824567_1_v3_2x.jpg",
  "https://a.lmcdn.ru/img600x866/R/T/RTLADR425401_24703023_1_v1_2x.jpg",
  "https://a.lmcdn.ru/img600x866/R/T/RTLADT711801_25056725_1_v1_2x.jpg",
  "https://a.lmcdn.ru/img600x866/R/T/RTLADN498701_23867491_1_v1.jpg",
  "https://a.lmcdn.ru/img600x866/M/P/MP002XW17TWP_24336466_1_v1_2x.jpg",
];

export const generateProducts = () => {
  const colors = ["Красный", "Синий", "Зеленый", "Черный", "Белый"];
  const categories = ["Футболка", "Джинсы", "Обувь", "Шапка", "Куртка", "Платье", "Брюки", "Юбка", "Толстовка", "Сумка"];
  return Array.from({ length: 100 }, () => ({
    id: chance.guid(),
    name: chance.word(),
    description: chance.sentence(),
    color: chance.pickone(colors),
    category: chance.pickone(categories),
    price: chance.integer({ min: 10, max: 9999 }),
    rating: chance.floating({ min: 0, max: 5, fixed: 1 }),
    imageUrl: chance.pickone(imageUrls),
  }));
};
