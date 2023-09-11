import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';

import Button from './Coponents/Button/Button.tsx';
// import Button from './Coponents/Button/Button';
// import Logic from './Coponents/Logic/Logic';
import Screen from './Coponents/Screen/Screen';

function App(): JSX.Element {
  const [checkState, setCheckState] = useState(true);
  const [appendScreenText, setAppendScreenText] = useState('');
  const [screenText, setScreenText] = useState('');

  useEffect(() => {
    setScreenText(screenText + appendScreenText);
  }, [checkState]);

  return (
    <SafeAreaView style={styles.safeView}>
      <Screen screenText={screenText} />
      <Button
        setAppendScreenText={setAppendScreenText}
        setCheckState={setCheckState}
        checkState={checkState}
        setScreenText={setScreenText}
        screenText={screenText}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: 'gray',
  },
});

export default App;
