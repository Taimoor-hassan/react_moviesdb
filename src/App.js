import './App.css';
import React, { Component } from 'react'
import Movierow from './moviesrow.js'
import $, { event } from 'jquery'
import Footer from './footer'
import Oauth from './oauth'

export class App extends Component {

  constructor(props) {
    super(props)
    this.state = {}

    this.search('a')
  }

  search(input) {
    const api = 'https://api.themoviedb.org/3/search/movie?api_key=161a45e74e056bb50759cf60f15ae920&language=en-US&query=' + (input) + '&page=1&include_adult=false';
    $.ajax({
      url: api,

      success: (result) => {
        console.log('sucess')

        const resl = result.results
        var moviesrow = [];

        resl.forEach(
          (movie) => {
            // console.log(movie);
            movie.img = 'https://images.tmdb.org/t/p/w185' + movie.poster_path
            const mov = <Movierow key={movie.id} movie={movie} />

            moviesrow.push(mov)
          }
        )
        this.setState({ row: moviesrow })

      },
      error: (xhr, status, err) => {
        console.error("failed")
      }
    }
    )
  }

  input(event) {
    // console.log(event.target.value);
    const sr = event.target.value
    //bound down at input binds the input to this to
    const bound = this
    bound.search(sr)

  }

  render() {
    return (
      <>
        <table className='header'>
          <tbody>
            <tr>
              <td className='header_img'><img width='40' src="data:image/png;base64,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" /></td>
              <td className='header_img'>Movies Data Base</td>
              <td><img src="../public.favicon.ico" alt="" srcset=""/></td>
              <td className='header_img'><Oauth /></td>
            </tr>
          </tbody>
        </table>

        <input placeholder='Enter movie name' onChange={this.input.bind(this)} />

        {this.state.row}
        <Footer />

      </>
    );
  }
}

export default App;
