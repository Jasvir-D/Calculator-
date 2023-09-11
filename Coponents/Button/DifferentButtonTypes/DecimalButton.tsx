import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

function DecimalButton({char, action, screenText}): JSX.Element {
  const handlePress = () => {
    const lastChar = screenText.slice(-1);
    if (lastChar === '.') {
      return;
    }
    if (/\d/.test(lastChar)) {
      const lastNumber = screenText.split(/[-+×÷]/).pop();
      if (lastNumber.includes('.')) {
        return;
      }
    }
    action(screenText + char);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
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

export default DecimalButton;
