import "./styles.css";
import { useState } from "react";

const songsData = {
  Rappers: [
    {
      artist: "MOB D",
      song: "Bade tu Chal",
      link: "https://open.spotify.com/track/1HpLaSa2uaQKfShxAkYtWj",
      rating: 4
    },
    {
      artist: "J Trix",
      song: "Khayal",
      link: "https://open.spotify.com/track/70Dr69JNzUcWV17WC21hJY",
      rating: 3
    },
    {
      artist: "Rawal",
      song: "Baat Bangayi",
      link: "https://open.spotify.com/track/0hnHxTlTDjYysw9mf5BgxA",
      rating: 5
    },
    {
      artist: "Kaam Bhari",
      song: "Mohabbat",
      link: "https://open.spotify.com/track/2cbTH0FqDD2wv9KBXuWjme",
      rating: 5
    }
  ],
  Singers: [
    {
      artist: "Ankur Tewari",
      song: "Tum Badal Gaye",
      link: "https://open.spotify.com/track/1Dvcr61hD39MAMrN65eDMe",
      rating: 5
    },
    {
      artist: "Bawari Basanti",
      song: "Chalein Kahin",
      link: "https://open.spotify.com/track/6FuRLbqyMlk0lugKxoH2qB",
      rating: 4
    },
    {
      artist: "Namita Choudhary",
      song: "Chaap Tilak",
      link: "https://open.spotify.com/track/0XCtRvfDHT98h0iUSDFtyO",
      rating: 3
    },
    {
      artist: "Osho Jain",
      song: "Tu Aisa Kaise Hai",
      link: "https://open.spotify.com/track/7eadaD2SBArRbebB9CP70X",
      rating: 2
    }
  ],
  Bands: [
    {
      artist: "The Local Train",
      song: "Choo Lo",
      link: "https://open.spotify.com/track/2qgXrzJsry4KgYoJCpuaul",
      rating: 4
    },
    {
      artist: "Nalayak",
      song: "Zakir",
      link: "https://open.spotify.com/track/7bd6i95HUlQkNkTQClwcW5",
      rating: 2
    },
    {
      artist: "The Yellow Diary",
      song: "Roz Roz",
      link: "https://open.spotify.com/track/6E6BCsQHXDAdXsrL7zV71N",
      rating: 3
    },
    {
      artist: "When Chai Met Toast",
      song: "Khoj",
      link: "https://open.spotify.com/track/4QK1qv4mgsfdWmMzp1Z3fx",
      rating: 5
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Singers");
  function genreSelected(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1 style={{ color: "var(--primary-color)" }}>
        <span aria-labelledby="img" role="img">
          🎵
        </span>
        Artists and Song Recommandation{" "}
        <span aria-labelledby="img" role="img">
          🎤
        </span>
      </h1>
      <h3 className="subheading">
        Here are some recommendations for songs; click on the song to listen to
        it on Spotify.
      </h3>
      <div>
        {Object.keys(songsData).map((genre) => {
          return (
            <button
              className={selectedGenre === genre ? "btn btn-primary" : "btn"}
              key={genre}
              onClick={() => genreSelected(genre)}
            >
              {genre}
            </button>
          );
        })}
      </div>
      <div>
        <ul>
          {songsData[selectedGenre].map((artistsData, i) => (
            <li className="list list-non-bullet" key={artistsData.artist}>
              <a
                className="link"
                target="_blank"
                rel="noreferrer"
                href={artistsData.link}
              >
                <div
                  style={{
                    backgroundColor:
                      i % 2 === 0 ? "var(--secondary-color)" : "#fafafa"
                  }}
                  className="container"
                >
                  <div>
                    <span className="key">Artist -</span>
                    <span className="value">{artistsData.artist}</span>
                  </div>
                  <div>
                    {" "}
                    <span className="key">Song -</span>
                    <span className="value">{artistsData.song}</span>{" "}
                  </div>
                  <div>
                    <span className="key">Rating -</span>
                    <span className="key">{artistsData.rating}/5</span>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
