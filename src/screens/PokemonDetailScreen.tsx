import {
  View,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Switch,
  Platform,
} from 'react-native';
import React, {useEffect} from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RouteProps} from '../types';
import {colors, metrics, showToast} from '../utils';
import CardDetailAbility from '../components/CardDetailAbility';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../stores/store';
import {
  setLoading,
  setSelectedCard,
  setIsCardSaved,
} from '../stores/slices/CardsSlice';

export default function PokemonDetailScreen({route}: RouteProps) {
  const {cardId} = route.params;
  const loading = useSelector((state: RootState) => state.card.loading);
  const cardDetails = useSelector(
    (state: RootState) => state.card.selectedCard,
  );
  const isCardSaved = useSelector((state: RootState) => state.card.isCardSaved);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchCardDetails();
    checkIfCardSaved();
  }, []);

  const fetchCardDetails = async () => {
    try {
      const response = await fetch(
        `https://api.pokemontcg.io/v2/cards/${cardId}`,
      );
      const data = await response.json();
      dispatch(setSelectedCard(data.data));
    } catch (error) {
      showToast('error', 'Oops!', 'Error fetching Pokémon card details');
    }
  };

  const checkIfCardSaved = async () => {
    dispatch(setLoading(true));
    try {
      const savedCardsString = await AsyncStorage.getItem('savedCards');
      const savedCards = savedCardsString ? JSON.parse(savedCardsString) : [];
      dispatch(setIsCardSaved(savedCards.includes(cardId)));
    } catch (error) {
      showToast('error', 'Oops!', 'Error checking if card is saved ' + error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const toggleSaveCard = async () => {
    try {
      const savedCardsString = await AsyncStorage.getItem('savedCards');
      let savedCards = savedCardsString ? JSON.parse(savedCardsString) : [];

      if (isCardSaved) {
        savedCards = savedCards.filter((id: string) => id !== cardId);
      } else {
        savedCards.push(cardId);
      }

      await AsyncStorage.setItem('savedCards', JSON.stringify(savedCards));
      dispatch(setIsCardSaved(!isCardSaved));
    } catch (error) {
      showToast('error', 'Oops!', 'Error toggling save card ' + error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <View style={styles.infoContainer}>
          <Spinner visible={loading} />

          <Image
            source={{
              uri: cardDetails.images?.large || cardDetails.images?.small,
            }}
            style={styles.image}
          />
          <CardDetailAbility title={'Name'} ability={cardDetails?.name} />
          <CardDetailAbility title={'Artist'} ability={cardDetails.artist} />
          <CardDetailAbility
            title={'Type'}
            ability={cardDetails?.types?.join(', ')}
          />
          <CardDetailAbility title={'HP'} ability={cardDetails?.hp} />
          {cardDetails?.attacks?.map?.((attack, index) => {
            return (
              <CardDetailAbility
                vertical
                title={attack.name}
                ability={attack.text}
                key={`${index}_card_abilities`}
              />
            );
          })}
          {cardDetails?.weaknesses?.map?.((weak, index) => {
            return (
              <CardDetailAbility
                title={weak.type}
                ability={weak.value}
                key={`${index}_card_weakness`}
              />
            );
          })}

          <View style={styles.toggle}>
            <Switch value={isCardSaved} onValueChange={toggleSaveCard} />
            <Text
              onPress={toggleSaveCard}
              style={[
                styles.toggleText,
                {color: !isCardSaved ? colors.shadowBlue : colors.gray},
              ]}>
              {isCardSaved ? 'Remove Card' : 'Save Card'}
            </Text>
          </View>

          <Text
            style={[
              styles.toggleInfoText,
              {color: isCardSaved ? colors.green : colors.faded},
            ]}>
            {isCardSaved ? 'Card is saved!' : 'Card is not saved.'}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },
  infoContainer: {
    marginVertical: Platform.OS === 'android' ? metrics.height * 0.06 : 0,
    alignItems: 'center',
  },
  image: {
    width: metrics.width * 0.45,
    height: metrics.height * 0.32,
    borderRadius: 10,
    marginVertical: metrics.height * 0.05,
  },
  toggle: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  toggleText: {
    marginVertical: metrics.height * 0.02,
    fontSize: 15,
    fontWeight: '600',
  },
  toggleInfoText: {
    fontSize: 13,
    fontWeight: '400',
  },
});
