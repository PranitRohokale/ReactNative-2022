

import {AppRegistry} from 'react-native';
import App from './App';

import {name as appName} from './app.json';
import Payment from './components/paymenter';

AppRegistry.registerComponent(appName, () => Payment);
