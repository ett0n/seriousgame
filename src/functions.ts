import { storeToRefs } from "pinia";
import { store } from "./main";
import type Players from "./types/Players";
import type QuestionData from "./types/QuestionData";

export const changePlayerPos = () => {
  //debug
  //player variables
  let dice = store.getDice;
  let newPlayers: Array<Players> = [...store.getPlayers];
  let oldTile: number = newPlayers[store.getActivePlayer].curentTile;
  let newTile: number = oldTile + dice;
  //board variables
  let newBoard: Array<QuestionData> = [...store.getQuestions];
  //check if finish
  if (newTile >= 50) {
    newTile = 50;
    newPlayers[store.getActivePlayer].curentTile = 50;
    newPlayers[store.getActivePlayer].finished = true;
    return;
  }

  //on roll un challenge
  if (dice === 6) {
    if (newBoard.find((el, index) => el.challenge && index > oldTile) !== undefined) {
      newTile = newBoard.find((el, index) => el.challenge && index > oldTile)?.number!;
      console.log("on a un challenge", newTile);
      //on check si la case est deja visitée
      if (newBoard[newTile].visited) {
        if (!newBoard[newTile - 1].visited) newTile--;
      }
    }
  } else if (dice === 5) {
    newTile = oldTile;
  }
  //if dice 1-4
  else {
    //visited? challenge?
    if (newBoard[newTile].visited || newBoard[newTile].challenge) {
      //+1 visited? challenge?
      if (!newBoard[newTile + 1].visited && !newBoard[newTile + 1].challenge) {
        newTile++;
      }
      //-1 visited? challenge?
      else if (!newBoard[newTile - 1].visited && !newBoard[newTile - 1].challenge) {
        newTile--;
      } else {
        newTile = oldTile;
      }
    }
  }

  //on set la tile dans le board et le player et on push dans notre data store
  //finish line
  newPlayers[store.getActivePlayer].curentTile = newTile;
  store.setQuestions(newBoard);
  store.setPlayers(newPlayers);
};

export const playerSwitch = () => {
  if (!store.players[store.getActivePlayer].finished) changePlayerPos();
  questionSwitch();
  if (store.getPlayers.length - 1 === store.getActivePlayer) {
    store.setActivePlayer(0);
  } else {
    store.setActivePlayer(store.getActivePlayer + 1);
  }
};

export const questionSwitch = () => {
  store.setActiveQuestion({ ...store.getQuestions[store.getPlayers[store.activePlayer].curentTile] });
  console.log(store.getActiveQuestion);
};
