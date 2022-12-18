// acknowledgement: this code is adapted from Steve Hayes's Medium blog
// https://medium.com/@stvehayes/working-with-spotifys-api-to-display-currently-playing-with-react-99544f8797d8

import { useEffect, useState } from "react";
import getNowPlayingItem from "./SpotifyAPI";
import '../../css/Spotify.scss';

export default function SpotifyNowPlaying(props) {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState({});
    useEffect(() => {
        if(loading) {
            Promise.all([
                getNowPlayingItem(
                    props.client_id,
                    props.client_secret,
                    props.refresh_token
                ),
            ]).then((results) => {
                setResult(results['0']);
                setLoading(false);
            });
        }
        else{
            const interval = setInterval(() => {
                Promise.all([
                    getNowPlayingItem(
                        props.client_id,
                        props.client_secret,
                        props.refresh_token
                    ),
                ]).then((results) => {
                    setResult(results['0']);
                    setLoading(false);
                });
            }, 10000);
            return () => clearInterval(interval);
        }
    });
    return (
        <div className="spotify">
            {loading && <p>Loading...</p>}
            {(!loading && !result.isPlaying) &&
                <div>
                    <span>I am not listening to Spotify right now.</span>
                </div>
            }
            {!loading && result.isPlaying &&
                <div className="song_wrapper">
                    <img src={result.albumImageUrl} alt={`${result.title} album art`}/>
                    <div className="text_wrapper">
                        <a href={result.songUrl} target="">{result.title}</a>
                        <p>{result.artist}</p>
                    </div>
                </div>
            }
        </div>
    )
};