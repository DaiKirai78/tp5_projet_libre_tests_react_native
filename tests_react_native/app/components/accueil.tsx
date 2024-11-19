import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Acceuil = () => {
  return (
    <View style={styles.container}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerHeaderText}>Tests</Text>
      </View>

      <View style={styles.bodyContainer}>
        <View style={styles.bodyBox}>
          <Text style={styles.bodyText}>
            Explorez les tests dans le menu à gauche
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  drawerHeader: {
    width: '100%',
    backgroundColor: '#b3c7e6',
    padding: 20,
    alignItems: 'center',
  },
  drawerHeaderText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  bodyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyBox: {
    width: 250,
    backgroundColor: '#b3c7e6',
    borderRadius: 12,
    padding: 12,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 50 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  bodyText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  themeButton: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    marginBottom: 20,
  },
  themeButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Acceuil;