export const getCards = () => JSON.parse(localStorage.getItem('cardsList'));

export const addCard = (newCard) => {
  if (getCards()) {
    localStorage.setItem('cardsList', JSON.stringify([...getCards(), newCard]));
  } else {
    localStorage.setItem('cardsList', JSON.stringify([newCard]));
  }
};
