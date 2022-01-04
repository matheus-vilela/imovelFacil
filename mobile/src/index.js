import React from 'react';
import { LogBox, Platform, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as StoreProvider, useDispatch } from 'react-redux';
import AuthRoutes from './routes/auth.routes';
import StatusBarComponent from './components/StatusBarComponent';
import Loading from './components/Loading';
import Alert from './components/Alert';
import store from './store';

function Main() {
  if (Platform.OS === 'android') {
    require('intl');
    require('intl/locale-data/jsonp/pt-BR');
  }
  LogBox.ignoreAllLogs();
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <StatusBarComponent />
        <AuthRoutes />
        <Loading />
        <Alert />
      </NavigationContainer>
    </StoreProvider>

  );
}

export default Main;
