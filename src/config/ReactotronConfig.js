import { NativeModules } from 'react-native';
import Reactotron from 'reactotron-react-native';

let scriptHostname;

if (__DEV__) {
  const { scriptURL } = NativeModules.SourceCode;
  [scriptHostname] = scriptURL.split('://')[1].split(':');

  const tron = Reactotron.configure({ host: scriptHostname, name: 'App teste' })
    .useReactNative()
    .connect();

  tron.clear();

  console.tron = tron;
}
