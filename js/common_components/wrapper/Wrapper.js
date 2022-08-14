import React from 'react';

import { View, SafeAreaView } from 'react-native';
import TopBar from './topBar/TopBar';
// import styles from './WrapperStyle';
import PropTypes from 'prop-types';

const Wrapper = props => {
  const { children, style, containerStyle, withTopBar, ...rest } = props;
  return (
    <SafeAreaView >
      {!!withTopBar && <TopBar {...rest} />}
      <View>{children}</View>
    </SafeAreaView>
  );
};

Wrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  withTopBar: PropTypes.bool,
  style: PropTypes.object,
};
Wrapper.defaultProps = {
  withTopBar: true,
  topScreen: false,
  title: '',
};

export default React.memo(Wrapper);