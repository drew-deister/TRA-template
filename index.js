import { registerRootComponent } from 'expo';

import App from './App';
import { NavigationContainer } from '@react-navigation/native';
import { AppRegistry } from 'react-native';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

const AppComponent = () => (
    <NavigationContainer>
        <App/>
    </NavigationContainer>
)

// registerRootComponent(App);

AppRegistry.registerComponent('main', () => AppComponent) // change main to AppName
