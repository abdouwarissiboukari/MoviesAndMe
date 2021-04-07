// Navigation/Navigation.js

import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator } from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {StyleSheet, Image} from 'react-native'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'
import Favorites from '../Components/Favorites'
import News from '../Components/News'
import Seeings from '../Components/Seeings'
//import Test from '../Components/Test'

const SearchStackNavigation = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Rechercher'
    }
  },
  FilmDetail: {
    screen: FilmDetail,
    navigationOptions: {
    title: 'Détail du film'
    }
  }
})

const FavoriteStackNavigation = createStackNavigator({
  favorites: {
    screen: Favorites,
    navigationOptions: {
      title: 'Films favoris'
    }
  },
  FilmDetail: {
    screen: FilmDetail,
    navigationOptions: {
      title: 'Détail du film'
    }
  }
})

const NewsStackNavigation = createStackNavigator({
  News: {
    screen: News,
    navigationOptions: {
      title: 'Dernières sorties'
    }
  },
  FilmDetail: {
    screen: FilmDetail,
    navigationOptions: {
      title: 'Détail du film'
    }
  }
})

const SeeingsStackNavigation = createStackNavigator({
  Seeings: {
    screen: Seeings,
    navigationOptions: {
      title: 'Déjà vus'
    }
  },
  FilmDetail: {
    screen: FilmDetail,
    navigationOptions: {
      title: 'Détail du film'
    }
  }
})

const MoviesTabNavigator = createBottomTabNavigator({
  /*Test: {
    screen: Test
  },*/

  Search: {
    screen: SearchStackNavigation,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image
          source={require('../Images/ic_search.png')}
          style={styles.icon} />
      }
    }
  },
  Favorites: {
    screen: FavoriteStackNavigation,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image
          source={require('../Images/ic_favorite.png')}
          style={styles.icon} />
      }
    }
  },
  News: {
    screen : NewsStackNavigation,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image
          source={require('../Images/ic_fiber_new.png')}
          style={styles.icon} />
      }
    }
  },
  Seeings: {
    screen : SeeingsStackNavigation,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image
          source={require('../Images/ic_seeing.png')}
          style={styles.icon} />
      }
    }
  }
},
{
  tabBarOptions: {
      activeBackgroundColor: '#DDDDDD', // Couleur d'arrière-plan de l'onglet sélectionné
      inactiveBackgroundColor: '#FFFFFF', // Couleur d'arrière-plan des onglets non sélectionnés
      showLabel: false, // On masque les titres
      showIcon: true // On informe le TabNavigator qu'on souhaite afficher les icônes définis
  }
}
)

const styles= StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
})

export default createAppContainer(MoviesTabNavigator)
