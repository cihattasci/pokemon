import {SafeAreaView, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import CardItem from '../components/CardItem';
import Spinner from 'react-native-loading-spinner-overlay';
import {PokemonCard} from '../types';
import {useNavigation} from '@react-navigation/native';
import {colors, showToast} from '../utils';

export default function PokemonListScreen() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(true);
  const [cards, setCards] = useState<PokemonCard[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetchPokemonCards();
  }, [page]);

  const fetchPokemonCards = async () => {
    try {
      const response = await fetch(
        `https://api.pokemontcg.io/v2/cards?page=${page}&pageSize=10`,
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setCards((prevCards: any) => [...prevCards, ...data.data]);
    } catch (error) {
      showToast('error', 'Oops!', 'Error fetching Pokémon cards');
    } finally {
      setLoading(false);
    }
  };

  const loadMoreCards = () => {
    setPage(prevPage => prevPage + 1);
  };

  const navigate = (id: string) => {
    //@ts-ignore
    navigation.navigate('CardDetail', {cardId: id});
  };

  return (
    <SafeAreaView style={styles.main}>
      <Spinner visible={loading} />
      <FlatList
        data={cards}
        renderItem={({item}) => (
          <CardItem item={item} navigate={() => navigate(item.id)} />
        )}
        keyExtractor={(item, index) => `${item.id.toString()}_${index}`}
        onEndReached={loadMoreCards}
        onEndReachedThreshold={0.1}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.white,
    alignItems: 'center',
  },
});
