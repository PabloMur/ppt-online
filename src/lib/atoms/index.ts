import { atom } from "recoil";

export const userState = atom({
  key: "user_state",
  default: {
    userName: "",
    email: "",
    loged: false,
    move: "",
    hasChoosed: false,
    token: "",
    avatarImage: "",
  },
});
