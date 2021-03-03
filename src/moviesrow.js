import React, { Component } from 'react'
import './App.css';


class Movierow extends Component {
    render() {
        return <table key={this.props.movie.id}>
            <tbody className='movie_cont'>
                <tr>
                    <td className='movie_data'> <img src={this.props.movie.img} alt="poster" className='poster_img' /></td>
                    <td className='movie_data'>
                        <div className='title'>
                            {this.props.movie.original_title}
                        </div>
                        <p className='movie_cont'> <span className='view'>Overview : </span>{this.props.movie.overview}</p>
                        <p>Release date : {this.props.movie.release_date}</p>
                    </td>
                </tr>
            </tbody>
        </table>
    }
}

export default Movierow;