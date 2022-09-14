import { store } from "./main";

export const playerSwitch = () => {
  if (store.getPlayers.length === store.getActivePlayer) store.setActivePlayer(0);
  else {
    store.setActivePlayer(store.getActivePlayer + 1);
    console.log(store.getActivePlayer);
  }
};
