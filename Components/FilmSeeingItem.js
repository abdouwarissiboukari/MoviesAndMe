// Components/FilmSeeingItem.js

import React from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity, Animated, Dimensions } from 'react-native'
import { getImageFromApi} from '../API/TMDBApi'
import FadeIn from '../Animations/FadeIn'
import moment from 'moment'

class  FilmSeeingItem extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      PressType : 0
    }
  }

  _displayFavoriteImage() {
      var sourceImage = require('../Images/ic_favorite.png')
      //if (this.props.isFilmFavotite) {
      if (this.props.favoritesFilm.findIndex(item => item.id === this.props.film.id) !== -1) {
        return (
            <Image
              style={styles.favorite_image}
              source={sourceImage}
            />
        )
      }
  }

  _LongPressType () {
    //console.log(this.state.PressType)
    if (this.state.PressType === 0){
      this.setState =({
        PressType: 1
      })
    }
    else {
      this.setState =({
        PressType: 0
      })
    }
  }

  _displayLongPress() {
    console.log(this.state.PressType)
    if (this.state.PressType === 1) {
      return (
        <View style={styles.content_container}>
          <Text style={styles.date_text}>{moment(new
            Date(this.props.film.release_date)).format("DD/MM/YYYY")}</Text>
        </View>
      )
    }
    else if (this.state.PressType===0) {
      this.PressType=0
      return (
        <View style={styles.content_container}>
          {this._displayFavoriteImage()}
          <Text style={styles.title_text}>{this.props.film.title}</Text>
        </View>
      )
    }
  }

  render() {
    const { film, displayDetailForFilm } = this.props

    return(

      <FadeIn>
        <TouchableOpacity
          style={styles.main_container}
          onPress={() => displayDetailForFilm(film)}
          onLongPress={() => this._LongPressType()}>
          <Image
            style={styles.image}
            source={{uri: getImageFromApi(film.poster_path)}}
          />

          <View style={styles.content_container}>
            {this._displayLongPress()}
          </View>
        </TouchableOpacity>
      </FadeIn>
  )
  }
}

const styles =StyleSheet.create({
  main_container: {
    height:70,
    flexDirection: 'row'
  },
  image: {
    width: 60,
    height: 60,
    margin: 5,
    backgroundColor: 'gray',
    borderRadius: 150
  },
  content_container: {
    flex: 1,
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center'
  } ,
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  date_container: {
    flex: 1
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14
  },
  favorite_image: {
    width: 25,
    height: 25,
    marginTop: 3,
    marginRight: 5
  }
})

export default FilmSeeingItem
