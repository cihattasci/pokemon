import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {colors, metrics} from '../utils';
import {PokemonCard} from '../types';

interface CardItemProps {
  item: PokemonCard;
  navigate: () => void;
}

const CardItem: React.FC<CardItemProps> = ({item, navigate}) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={navigate}>
      <View style={styles.flex}>
        <Image
          resizeMode="cover"
          source={{uri: item.images.small}}
          style={styles.image}
        />
      </View>
      <View style={styles.flex}>
        <Text style={styles.name}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: metrics.width * 0.9,
    height: metrics.height * 0.32,
    margin: metrics.width * 0.02,
    borderBottomWidth: 2,
    borderTopWidth: 0.5,
    borderRightWidth: 0.5,
    borderLeftWidth: 0.5,
    borderColor: colors.gray,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flex: {
    flex: 1,
  },
  image: {
    width: metrics.width * 0.45,
    height: metrics.height * 0.32,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  name: {
    fontSize: 23,
    fontWeight: '500',
    color: colors.blue,
    marginLeft: metrics.width * 0.03,
    textAlign: 'center',
  },
});

export default CardItem;
