import { Category, ObjectItem } from "@/utils/types";

export const categories: Category[] = [
  { id: "e753", name: "Entrace" },
  { id: "2e92", name: "Conference Room" },
  { id: "6adf", name: "Lab" },
  { id: "9885", name: "Room" },
  { id: "40cd", name: "Washroom" },
  { id: "856b", name: "Team" }
];

export const objects: ObjectItem[] = [
  
  {
    id: "l2m3", categoryId: "856b", name: "G136", desc: "Lab",floor: "ground"
  },
  { id: "6adf2", categoryId: "6adf", name: "G138", desc: "Lab",  floor: "ground" },
  { id: "m3n4", categoryId: "6adf", name: "G135", desc: "Lab",  floor: "ground" },{ id: "l2m3", categoryId: "9885", name: "Exam Hall", desc: "Room" ,floor:"first"},
  { id: "l2m6", categoryId: "6adf", name: "Electronics Lab - 2023", desc: "Lab" ,floor:"second"},
  { id: "l2m9", categoryId: "6adf", name: "Digital Hardware Lab - 2035", desc: "Lab" ,floor:"second"},
  { id: "l2m2", categoryId: "9885", name: "Creativity & Innovation Hall", desc: "Room" ,floor:"second"},
  { id: "l2m56", categoryId: "9885", name: "Dr. Irfan - 1084", desc: "Room" ,floor:"first"},
  { id: "l2m26", categoryId: "9885", name: "Dr. Atta - 1165", desc: "Room" ,floor:"first"},
  { id: "l2m256", categoryId: "9885", name: "Dr. Khalid Aloup - G060", desc: "Room" ,floor:"ground"},
];
