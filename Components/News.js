// Components/News.js

import React from 'react'
import {StyleSheet, View, TextInput, Text, Button, FlatList, ActivityIndicator } from 'react-native'
import FilmList from './FilmList'
import { getNewsFilmsFromApi } from '../API/TMDBApi'


class News extends React.Component {
  constructor(props) {
    super(props)
      this.page=0
      this.totalPages=0
      this.state = {
        films : [],
        isLoading: true // Par défaut à true car il y a de chargement
    }
    this._loadFilms = this._loadFilms.bind(this)
  }

  _loadFilms() {
        this.setState({ isLoading: true })
        getNewsFilmsFromApi(this.page + 1).then(data => {
          this.page=data.page
          this.totalPages=data.total_pages
          this.setState({
            films: this.state.films.concat(data.results),
            isLoading: false
          })
      })
  }

  componentDidMount () {
    {this._loadFilms()}
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' color="#0000ff"/>
          {/* Le component ActivityIndicator possède une propriété
            size pour définir la taille du visuel de chargement :
            small ou large. Par défaut size vaut small, on met
            donc large pour que le chargement soit bien visible */}
        </View>
      )
    }
  }

  render() {
    //console.log(this.props)
    return (
      <View style={styles.main_container}>
        <FilmList
          films={this.state.films}
          navigation={this.props.navigation}
          loadFilms={this._loadFilms}
          page={this.page}
          totalPages={this.totalPages}
          screenType={1}
          />
        {this._displayLoading()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 10
  },
  avatar_container: {
    alignItems: 'center'
  }
})

export default News
