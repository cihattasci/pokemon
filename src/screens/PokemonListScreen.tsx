import {SafeAreaView, FlatList, StyleSheet, View, Platform} from 'react-native';
import React, {useEffect} from 'react';
import Config from 'react-native-config';
import CardItem from '../components/CardItem';
import Spinner from 'react-native-loading-spinner-overlay';
import {useNavigation} from '@react-navigation/native';
import {colors, metrics, showToast} from '../utils';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../stores/store';
import {incrementPage, setCards, setLoading} from '../stores/slices/CardsSlice';
import {PokemonCard} from '../types';

export default function PokemonListScreen() {
  const navigation = useNavigation();
  const loading = useSelector((state: RootState) => state.card.loading);
  const cards = useSelector((state: RootState) => state.card.cards);
  const page = useSelector((state: RootState) => state.card.page);
  const dispatch = useDispatch();

  console.log(Config.API_URL)

  useEffect(() => {
    fetchPokemonCards();
  }, [page]);

  const loadMoreCards = () => {
    dispatch(incrementPage());
  };

  const navigate = (id: string) => {
    //@ts-ignore
    navigation.navigate('CardDetail', {cardId: id});
  };

  const fetchPokemonCards = async () => {
    try {
      const response = await fetch(
        Config.API_URL + `?page=${page}&pageSize=10`,
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data: PokemonCard = await response.json();
      //@ts-ignore
      dispatch(setCards([...cards, ...data.data]));
    } catch (error) {
      showToast('error', 'Oops!', 'Error fetching Pokémon cards');
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <SafeAreaView style={styles.main}>
      <Spinner visible={loading} />
      <View style={styles.listContainer}>
        <FlatList
          data={cards}
          renderItem={({item}) => (
            <CardItem item={item} navigate={() => navigate(item.id)} />
          )}
          keyExtractor={(item, index) => `${item.id.toString()}_${index}`}
          onEndReached={loadMoreCards}
          onEndReachedThreshold={0.1}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  listContainer: {
    marginVertical: Platform.OS === 'android' ? metrics.height * 0.06 : 0,
  },
});
