import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Acceuil from './components/accueil';
import Podometre from './components/podometre';
import Stockage from './components/stockage';
import Graphique from './components/graphique';
import BgProcess from './components/bg_process';
import Notifications from './components/notifications';
import Couleurs from './components/couleurs';

const Drawer = createDrawerNavigator();

const App = () => {
    return (
        <Drawer.Navigator initialRouteName="Acceuil">
          <Drawer.Screen name="Acceuil" component={Acceuil} />
          <Drawer.Screen name="Podomètre" component={Podometre} />
          <Drawer.Screen name="Stocker les données" component={Stockage} />
          <Drawer.Screen name="Graphique" component={Graphique} />
          <Drawer.Screen name="Background Process" component={BgProcess} />
          <Drawer.Screen name="Notifications" component={Notifications} />
          <Drawer.Screen name="Couleurs" component={Couleurs} />
        </Drawer.Navigator>
    );
  };
  
  export default App;