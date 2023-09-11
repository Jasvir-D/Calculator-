import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

function ClearButton({char, action}): JSX.Element {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          action('');
        }}>
        <Text style={styles.text}>{char}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  button: {
    width: 67,
    height: 67,
    borderRadius: 20,
    backgroundColor: 'yellow',
    alignSelf: 'flex-start',
    marginHorizontal: 3,
    marginBottom: 6,
  },
  text: {
    textAlign: 'center',
    marginVertical: 7,
    fontSize: 44,
    fontWeight: 'bold',
  },
});

export default ClearButton;
