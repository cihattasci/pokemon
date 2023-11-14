import config from 'react-native-config';

type FetchData = {
  page: number;
  setCards: (card: any) => void;
};

export const getPokemons = async ({page, setCards}: FetchData) => {
  try {
    const response = await fetch(
      `https://api.pokemontcg.io/v2/cards?page=${page}&pageSize=10`,
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    setCards(prevCards => [...prevCards, ...data.data]);
  } catch (error) {
    console.error('Error fetching Pokémon cards:', error.message);
  }
};
