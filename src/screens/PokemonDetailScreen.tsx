import {SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import {colors} from '../utils';

type RouteProps = {
  route: {
    params: {
      id: string;
    };
  };
};

export default function PokemonDetailScreen({
  route: {
    params: {id},
  },
}: RouteProps) {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.main}>
      <Spinner visible={loading} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
});
