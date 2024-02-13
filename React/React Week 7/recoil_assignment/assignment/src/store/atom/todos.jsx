import { atom, selector } from "recoil";

export const TodosAtom = atom({
  key: "TodosAtom",
  default: [
    {
      title: "khana",
      description: "subha khana khane ka re",
    },
    {
      title: "nahana",
      description: "2 din me ek baar to nahana",
    },
  ],
});

export const FilterTodosAtom = atom({
  key : "FilterTodosAtom",
  default : []
})
