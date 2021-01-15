// import React, {useState} from 'react';
// import axios from 'axios';
// import './Search.css';
// import { instant } from '../utils'

// export default function Search() {
//     const [query, setQuery] = useState("");
//     const [loading, setLoading] = useState(false);
//     const [movie, setMovie] = useState("");

//     const fetchSearchResults = async (query) => {
//         setLoading(true);
//         const searchUrl = await axios(`http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}&s=${query}`);
//         const movies = await searchUrl.data.results;
//         setMovie(movies);
//         setLoading(false);
//     }

//     const instant = async query => {
//         setLoading(true);
//         const searchUrl = await axios(`http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}&s=${query}`);
//         const movies = searchUrl;
//         setMovie(movies);
//         setLoading(false);
//       }

//     const handleInputChange = e => {
//         const query = e.target.value;
//         // This check if query is empty or not
//         if (!query) {
//             this.setState({ query, results: {}, message: '' });
//         } else {
//             this.setState({ query, loading: true, message: '' },
//             () => {
//                 this.fetchSearchResults(query)
//             })
//         }
//     }

//     const renderSearchResults = () => {
//         const { results } = this.state;
//         if (Object.keys(results).length && results.length) {
//             return (
//                 <div className="results-container">
//                     {results.map((result => {
//                         return (
//                             <a key={result.id} href={result.previewURL} className="result-items">
//                                 <h6 className="image-username">{result.user}</h6>
//                                 <div className="image-wrapper">
//                                     <img className="image" src={result.previewURL} alt={result.user} />
//                                 </div>
//                             </a>
//                         )
//                     }))}
//                 </div>
//             )
//         } 
//     }

//     return (
//         // const { query } = this.state;
//         // return (
//             <div className="container">
//                 {/* Heading */}
//                 <h2 className="heading">Live Search: React Application</h2>
//                 {/* Search Input */}
//                 <label className="search-label" htmlFor="search-input">
//                     <input 
//                         type="text" 
//                         value=""
//                         id="search-input"
//                         placeholder="Search..."
//                         onChange={this.handleInputChange}
//                     />
//                     <i className="fa fa-search search-icon"/>
//                 </label>
//                 {/* Result */}
//                 { this.renderSearchResults()}
//             </div>
//         //)
//     )
// }
