import React from 'react';
import {View} from 'react-native';

const ViewDefaultStyle = ({children}) => {
  return (
    <View style={styles.root}>
      {children}
    </View>
  )
}

const styles = {
  root: {
    flex: 1,
  }
}

export default ViewDefaultStyle;
