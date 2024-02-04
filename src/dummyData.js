export const simpleData = [
  { id: 1, label: "Chocolate" },
  { id: 2, label: "Strawberry" },
  { id: 3, label: "Vanilla" },
  { id: 4, label: "Rasbari" },
  { id: 5, label: "Apple" },
  { id: 6, label: "Banana" },
  { id: 7, label: "Mango" },
  { id: 8, label: "Pineapple" },
  { id: 9, label: "Watermelon" },
  { id: 10, label: "Jackfruit" },
  { id: 11, label: "Starfruit" },
  { id: 12, label: "Orange" },
];

export const treeViewData = [
  { id: 1, parent: null, label: "Nepal" },

  // Provinces
  { id: 2, parent: 1, label: "Province No. 1" },
  { id: 3, parent: 1, label: "Province No. 2" },
  { id: 4, parent: 1, label: "Bagmati Province" },
  { id: 5, parent: 1, label: "Gandaki Province" },
  { id: 6, parent: 1, label: "Lumbini Province" },
  { id: 7, parent: 1, label: "Karnali Province" },
  { id: 8, parent: 1, label: "Sudurpashchim Province" },

  // Districts - Province No. 1
  { id: 9, parent: 2, label: "Bhojpur" },
  { id: 10, parent: 2, label: "Dhankuta" },
  { id: 11, parent: 2, label: "Ilam" },
  { id: 12, parent: 2, label: "Jhapa" },
  { id: 13, parent: 2, label: "Khotang" },
  { id: 14, parent: 2, label: "Morang" },
  { id: 15, parent: 2, label: "Panchthar" },
  { id: 16, parent: 2, label: "Sankhuwasabha" },
  { id: 17, parent: 2, label: "Solukhumbu" },
  { id: 18, parent: 2, label: "Sunsari" },
  { id: 19, parent: 2, label: "Taplejung" },
  { id: 20, parent: 2, label: "Terhathum" },
  { id: 21, parent: 2, label: "Udayapur" },

  // Districts - Province No. 2
  { id: 22, parent: 3, label: "Bara" },
  { id: 23, parent: 3, label: "Dhanusa" },
  { id: 24, parent: 3, label: "Mahottari" },
  { id: 25, parent: 3, label: "Parsa" },
  { id: 26, parent: 3, label: "Rautahat" },
  { id: 27, parent: 3, label: "Saptari" },
  { id: 28, parent: 3, label: "Sarlahi" },
  { id: 29, parent: 3, label: "Siraha" },
  { id: 30, parent: 3, label: "Dang" },
  { id: 31, parent: 3, label: "Rukum" },
  { id: 32, parent: 3, label: "Salyan" },
  { id: 33, parent: 3, label: "Rolpa" },
  { id: 34, parent: 3, label: "Pyuthan" },
  { id: 35, parent: 3, label: "Arghakhanchi" },

  // Districts - Bagmati Province
  { id: 36, parent: 4, label: "Bhaktapur" },
  { id: 37, parent: 4, label: "Chitwan" },
  { id: 38, parent: 4, label: "Dhading" },
  { id: 39, parent: 4, label: "Dolakha" },
  { id: 40, parent: 4, label: "Kathmandu" },
  { id: 41, parent: 4, label: "Kavrepalanchok" },
  { id: 42, parent: 4, label: "Lalitpur" },
  { id: 43, parent: 4, label: "Nuwakot" },
  { id: 44, parent: 4, label: "Ramechhap" },
  { id: 45, parent: 4, label: "Rasuwa" },
  { id: 46, parent: 4, label: "Sindhuli" },
  { id: 47, parent: 4, label: "Sindhupalchok" },

  // Major Cities - Kathmandu District
  { id: 48, parent: 40, label: "Thamel" },
  { id: 49, parent: 40, label: "Durbar Square" },

  // Districts - Gandaki Province
  { id: 50, parent: 5, label: "Gorkha" },
  { id: 51, parent: 5, label: "Kaski" },
  { id: 52, parent: 5, label: "Lamjung" },
  { id: 53, parent: 5, label: "Manang" },
  { id: 54, parent: 5, label: "Mustang" },
  { id: 55, parent: 5, label: "Myagdi" },
  { id: 56, parent: 5, label: "Nawalpur" },
  { id: 57, parent: 5, label: "Parbat" },
  { id: 58, parent: 5, label: "Syangja" },
  { id: 59, parent: 5, label: "Tanahun" },

  // Major Cities - Pokhara District
  { id: 60, parent: 51, label: "Lakeside" },
  { id: 61, parent: 51, label: "Sarangkot" },

  // Districts - Lumbini Province
  { id: 62, parent: 6, label: "Arghakhanchi" },
  { id: 63, parent: 6, label: "Gulmi" },
  { id: 64, parent: 6, label: "Kapilvastu" },
  { id: 65, parent: 6, label: "Nawalparasi" },
  { id: 66, parent: 6, label: "Palpa" },
  { id: 67, parent: 6, label: "Rupandehi" },
  { id: 68, parent: 6, label: "Dang" },
  { id: 69, parent: 6, label: "Pyuthan" },
  { id: 70, parent: 6, label: "Rolpa" },
  { id: 71, parent: 6, label: "Rukum" },
  { id: 72, parent: 6, label: "Eastern Rukum" },

  // Districts - Karnali Province
  { id: 73, parent: 7, label: "Dolpa" },
  { id: 74, parent: 7, label: "Humla" },
  { id: 75, parent: 7, label: "Jumla" },
  { id: 76, parent: 7, label: "Kalikot" },
  { id: 77, parent: 7, label: "Mugu" },
  { id: 78, parent: 7, label: "Surkhet" },
  { id: 79, parent: 7, label: "Dailekh" },
  { id: 80, parent: 7, label: "Jajarkot" },
  { id: 81, parent: 7, label: "Salyan" },
  { id: 82, parent: 7, label: "Rukum" },

  // Districts - Sudurpashchim Province
  { id: 83, parent: 8, label: "Achham" },
  { id: 84, parent: 8, label: "Baitadi" },
  { id: 85, parent: 8, label: "Bajhang" },
  { id: 86, parent: 8, label: "Bajura" },
  { id: 87, parent: 8, label: "Dadeldhura" },
  { id: 88, parent: 8, label: "Darchula" },
  { id: 89, parent: 8, label: "Doti" },
  { id: 90, parent: 8, label: "Kailali" },
  { id: 91, parent: 8, label: "Kanchanpur" },

  // Major Cities - Dhangadhi District
  { id: 92, parent: 90, label: "Dhangadhi" },
  { id: 93, parent: 90, label: "Mahendranagar" },

  // Major Cities - Nepalgunj District
  { id: 94, parent: 89, label: "Nepalgunj" },
  { id: 95, parent: 89, label: "Kohalpur" },
];
