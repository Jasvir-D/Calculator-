import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

function BracketButton({char, action, screenText}): JSX.Element {
  const handlePress = () => {
    const openBracketCount = (screenText.match(/\(/g) || []).length;
    const closeBracketCount = (screenText.match(/\)/g) || []).length;
    const lastChar = screenText.slice(-1);

    if (openBracketCount === closeBracketCount) {
      action(screenText + '(');
    } else if (/\d$/.test(screenText)) {
      action(screenText + ')');
    } else if (openBracketCount > closeBracketCount) {
      if (lastChar == '(') {
        action(screenText + '(');
      } else {
        action(screenText + ')');
      }
    }
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

export default BracketButton;
