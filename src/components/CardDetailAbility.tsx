import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {CardAbility} from '../types';
import {colors, metrics} from '../utils';

const CardDetailAbility: React.FC<CardAbility> = ({
  title,
  ability,
  vertical,
}) => {
  return (
    <View
      style={[styles.container, {flexDirection: vertical ? 'column' : 'row'}]}>
      <Text style={styles.title}>{title}:</Text>
      <Text style={styles.ability}>{ability}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: metrics.width * 0.8,
    paddingHorizontal: metrics.width * 0.03,
    backgroundColor: colors.white,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: colors.gray,
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  title: {
    marginVertical: metrics.height * 0.02,
    fontSize: 15,
    color: colors.shadowBlue,
    fontWeight: '600',
  },
  ability: {
    marginVertical: metrics.height * 0.02,
    fontSize: 13,
    color: colors.faded,
    fontWeight: '400',
  },
});

export default CardDetailAbility;
