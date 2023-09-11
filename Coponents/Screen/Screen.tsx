import {StyleSheet, Text, View} from 'react-native';

function Screen({screenText}): JSX.Element {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>{screenText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'blue',
    flex: 2,
    textAlign: 'justify',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'yellow',
  },
});

export default Screen;
