import * as React from 'react';
import { AuthProvider } from './src/Context/AuthContext';
import AppNavigation from './src/Navigation/AppNavigation';
import { enableScreens } from 'react-native-screens';

enableScreens();


function App() {
  return (

    <AuthProvider>
     <AppNavigation />
    </AuthProvider>
  );
}

export default App;
