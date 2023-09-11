import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import NumberButton from './DifferentButtonTypes/NumberButton';
import ClearButton from './DifferentButtonTypes/ClearButton';
import BackSpaceButton from './DifferentButtonTypes/BackSpaceButton';
import SignButton from './DifferentButtonTypes/SignButton';
import DecimalButton from './DifferentButtonTypes/DecimalButton';
import BracketButton from './DifferentButtonTypes/BracketButton';
import EqualsButton from './DifferentButtonTypes/EqualButton';

function Button({
  setAppendScreenText,
  setCheckState,
  checkState,
  setScreenText,
  screenText,
}): JSX.Element {
  return (
    <View style={styles.Container}>
      <ClearButton
        char={'ac'}
        action={setScreenText}
        //
      />
      <BracketButton
        char={'()'}
        action={setScreenText}
        screenText={screenText}
      />
      <NumberButton
        char={'%'}
        action={setAppendScreenText}
        setCheckState={setCheckState}
        checkState={checkState}
      />
      <SignButton char={'÷'} action={setScreenText} screenText={screenText} />
      <NumberButton
        char={'7'}
        action={setAppendScreenText}
        setCheckState={setCheckState}
        checkState={checkState}
      />
      <NumberButton
        char={'8'}
        action={setAppendScreenText}
        setCheckState={setCheckState}
        checkState={checkState}
      />
      <NumberButton
        char={'9'}
        action={setAppendScreenText}
        setCheckState={setCheckState}
        checkState={checkState}
      />
      <SignButton char={'×'} action={setScreenText} screenText={screenText} />
      <NumberButton
        char={'4'}
        action={setAppendScreenText}
        setCheckState={setCheckState}
        checkState={checkState}
      />
      <NumberButton
        char={'5'}
        action={setAppendScreenText}
        setCheckState={setCheckState}
        checkState={checkState}
      />
      <NumberButton
        char={'6'}
        action={setAppendScreenText}
        setCheckState={setCheckState}
        checkState={checkState}
      />
      <SignButton char={'-'} action={setScreenText} screenText={screenText} />
      <NumberButton
        char={'1'}
        action={setAppendScreenText}
        setCheckState={setCheckState}
        checkState={checkState}
      />
      <NumberButton
        char={'2'}
        action={setAppendScreenText}
        setCheckState={setCheckState}
        checkState={checkState}
      />
      <NumberButton
        char={'3'}
        action={setAppendScreenText}
        setCheckState={setCheckState}
        checkState={checkState}
      />
      <SignButton char={'+'} action={setScreenText} screenText={screenText} />
      <NumberButton
        char={'0'}
        action={setAppendScreenText}
        setCheckState={setCheckState}
        checkState={checkState}
      />
      <DecimalButton
        char={'.'}
        action={setScreenText}
        screenText={screenText}
      />
      <BackSpaceButton
        char={'<-'}
        action={setScreenText}
        screenText={screenText}
      />
      <EqualsButton char={'='} action={setScreenText} screenText={screenText} />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'red',
    flex: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Button;
