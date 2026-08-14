import { useState, useRef, useEffect } from 'react';
import './Songs.css';

const trackList = [
  { 
    id: 1, 
    title: 'When You Sleep - My Bloody Valentine', 
    duration: '4:12',
    url: '/my bloody valentine - when you sleep - Alexander Geogaddi (128k).mp3',
    image: '/mybloodyvalentine.jpg',
    releaseDate: 'November 4, 1991',
    description: '"When You Sleep" is a song about love, longing, and the uncertainty that can come with being deeply attached to someone. The lyrics do not tell a clear story, which makes the song feel more like a collection of personal thoughts and emotions. There is a strong feeling of wanting to understand someone while also realizing that you can never fully know what they are thinking or feeling. The title itself gives the song an intimate feeling because sleeping represents a moment when someone is physically close but mentally distant. The dreamy guitars and soft vocals make the song feel almost like a dream or a memory. Everything sounds blurred and distant, which fits the feeling of being completely absorbed in someone. Rather than describing love in a direct way, the song captures the confusion, excitement, and vulnerability that can come with it.'
  },
  { 
    id: 2, 
    title: 'Does Anyone Else - Enola', 
    duration: '3:30',
    url: '/Does Anyone Else - Enola - Topic (128k).mp3',
    image: '/Enola.jpg',
    releaseDate: 'August 11, 2023',
    description: '"Does Anyone Else" focuses on loneliness, emotional distance, and the desire to know whether someone else feels the same way. The title reflects the main feeling of the song, which is the question of whether your emotions are shared by another person. It describes a kind of loneliness that does not necessarily come from being physically alone, but from feeling like nobody truly understands what is happening inside your mind. There is also a sense of wanting reassurance and connection. You may care about someone, think about them often, or feel emotionally overwhelmed, but you are not sure if they feel the same way. The song feels personal because it does not present sadness in an exaggerated way. Instead, it sounds like an honest thought that someone might have while being alone at night. It is about wanting to be understood and hoping that somewhere, someone else is experiencing the same emotions.'
  },
  {
    id: 3,
    title: 'Spiralling Out - Softcult',
    duration: '3:58',
    url: '/Softcult - Spiralling Out [official video] - Softcult (128k).mp3',
    image: '/Softcult - Spiralling Out [official video] - Softcult (128k).jpeg',
    releaseDate: 'March 22, 2024',
    description: '"Spiralling Out" is about losing control of your thoughts and becoming trapped in a cycle of overthinking. The song captures the feeling of having one thought lead to another until something that started small becomes emotionally overwhelming. You begin questioning yourself, your decisions, your relationships, and eventually even your own understanding of a situation. One of the strongest parts of the song is that it feels like the person knows they are overthinking but cannot simply stop. That makes the emotion feel very realistic. The heavier and atmospheric sound also adds to the feeling of being overwhelmed. The music feels beautiful but also slightly suffocating, which reflects how emotional struggles can sometimes feel. The song is not only about sadness. It is about frustration, confusion, and the feeling of being unable to escape your own thoughts even when you know they are hurting you.'
  },
  {
    id: 4,
    title: 'Enough for you - Wisp',
    duration: '3:04',
    url: '/Wisp - Enough for you (Official Visualizer) - Wisp Music (128k).mp3',
    image: '/Wisp - Enough for you (Official Visualizer) - Wisp Music (128k).jpeg',
    releaseDate: 'May 3, 2024',
    description: '"Enough for You" is about insecurity, longing, and the fear that you may not be good enough for someone you care about. The main emotion behind the song comes from wanting to be accepted by another person while constantly questioning your own worth. When you care deeply about someone, their attention and approval can become very important to you. You may start wondering what you are missing, whether you are attractive enough, interesting enough, or simply enough for them. This can make love feel less like something comforting and more like something that constantly needs to be proven. Wisp\'s dreamy and hazy sound fits this feeling very well because the music feels distant, almost like remembering a relationship that is slowly becoming harder to reach. The song can also be understood as the realization that constantly trying to change yourself for someone else can become exhausting. At some point, you have to question whether you should really have to become someone different just to feel worthy of being loved.'
  },
  {
    id: 5,
    title: 'Your face - Wisp',
    duration: '3:55',
    url: '/Wisp - Your face (Official Music Video) - Wisp Music (128k).mp3',
    image: '/Wisp - Your face (Official Music Video) - Wisp Music (128k).jpeg',
    releaseDate: 'April 14, 2023',
    description: '"Your Face" is about attraction, memory, and being unable to completely let go of someone. The song focuses on how a person can remain in your mind even after they are no longer around. Sometimes it is not the entire relationship that stays with you, but small details such as someone\'s face, expression, eyes, or the way they looked at you. Those memories can appear unexpectedly and make you think about that person again. There is also a sense of obsession because the person becomes difficult to forget. You may remember the good parts more clearly than the painful ones, which can make the person seem even more special in your memory. The dreamy sound of the song strengthens this feeling because it feels distant and almost unreal, like remembering someone through a dream. It is ultimately about how emotional attachment can continue even after a relationship or connection has changed.'
  },
  {
    id: 6,
    title: 'Let Down - Radiohead',
    duration: '4:59',
    url: '/Let Down (Remastered) - Radiohead (128k).mp3',
    image: '/Let Down (Remastered) - Radiohead (128k).jpeg',
    releaseDate: 'May 21, 1997',
    description: '"Let Down" is a deeply melancholic song about disappointment, loneliness, and feeling disconnected from the world around you. The song does not focus on one specific heartbreak. Instead, it expresses a broader feeling of being disappointed with life, other people, expectations, or even yourself. There is a feeling of watching everything around you continue moving while you remain emotionally stuck. People are going to work, traveling, talking, and living their lives, but you may still feel completely disconnected from all of it. The beauty of the song comes from the contrast between its emotional weight and its gentle, atmospheric sound. The music feels almost uplifting at certain moments, while the lyrics express feelings of isolation and exhaustion. Because of that contrast, the song feels both beautiful and painful at the same time. "Let Down" is about feeling small and insignificant, but there is also something comforting about hearing those feelings expressed so honestly.'
  },
  {
    id: 7,
    title: 'Creep - Radiohead',
    duration: '3:58',
    url: '/Radiohead - Creep Lirik Terjemahan - Indolirik (128k).mp3',
    image: '/Radiohead_-_Creep_terbitan_ulang.png',
    releaseDate: 'September 21, 1992',
    description: '"Creep" is about insecurity, self-doubt, and feeling like you do not belong with someone you admire. The narrator sees another person as beautiful and special, while seeing himself as inferior and unworthy of that person\'s attention. This creates a strong feeling of self-comparison. Instead of simply thinking that he likes someone, he begins to believe that he is not good enough for them. The painful part is that the rejection is not necessarily coming directly from the other person. Much of it comes from the narrator\'s own perception of himself. He wants to be special, attractive, and worthy, but he does not believe that he can become that person. The quieter parts of the song make the narrator sound vulnerable, while the louder guitar sections express the frustration and self-hatred that have been building underneath. "Creep" remains relatable because almost everyone has experienced moments of feeling out of place or believing that someone else is better than them. At its core, the song is about wanting to belong while feeling like there is something fundamentally wrong with you.'
  }
];

export default function Songs() {
  const [playingId, setPlayingId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const listRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.log('Audio playback failed:', e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [playingId, isPlaying]);

  const handleScroll = (direction) => {
    if (listRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      listRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  
  const handlePlayToggle = (id) => {
    if (playingId === id) {
      setIsPlaying(!isPlaying);
    } else {
      setPlayingId(id);
      setCurrentTime(0);
      setIsPlaying(true);
    }
  };

  const handleSongEnded = () => {
    const currentIndex = trackList.findIndex(t => t.id === playingId);
    if (currentIndex !== -1) {
      const nextIndex = (currentIndex + 1) % trackList.length;
      setPlayingId(trackList[nextIndex].id);
      setCurrentTime(0);
      setIsPlaying(true);
    }
  };

  const handleSeek = (e) => {
    if (!audioRef.current || duration === 0) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const activeTrack = trackList.find(t => t.id === playingId);

  return (
    <div className="songs" id="songs">
      <div className="section-header" data-reveal="up">
        <span className="section-label">TRACKLIST</span>
        <h2 className="section-title">SONGS</h2>
      </div>
      
      {/* Global Player Box */}
      <div className="songs__global-player glass" data-reveal="fade">
        <div className="vinyl-record">
          <img 
            src={activeTrack ? `${import.meta.env.BASE_URL}${activeTrack.image.slice(1)}` : `${import.meta.env.BASE_URL}favicon.svg`} 
            alt={activeTrack ? activeTrack.title : "The Northern Knight"} 
            className="vinyl-label" 
            style={{ opacity: activeTrack ? 1 : 0.2 }}
          />
          <div className="vinyl-hole"></div>
        </div>
        <div className="songs__playing-details">
          <span className="songs__playing-label">NOW PLAYING</span>
          <h4 className="songs__playing-track">{activeTrack ? activeTrack.title : "Select a track to play"}</h4>
            
            <div className="songs__progress-container">
              <span className="songs__progress-time">{formatTime(currentTime)}</span>
              <div className="songs__progress-bar" onClick={handleSeek}>
                <div 
                  className="songs__progress-fill" 
                  style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
                ></div>
              </div>
              <span className="songs__progress-time">{activeTrack ? activeTrack.duration : '0:00'}</span>
            </div>
          </div>
        </div>
        {activeTrack && (
          <audio 
            ref={audioRef}
            src={`${import.meta.env.BASE_URL}${activeTrack.url.slice(1)}`}
            onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
            onLoadedMetadata={(e) => setDuration(e.target.duration)}
            onEnded={handleSongEnded}
          />
        )}
      
      <div className="songs__carousel-container" data-reveal="up" data-reveal-delay="150">
        <button 
          className="songs__scroll-btn songs__scroll-btn--left"
          onClick={() => handleScroll('left')}
          aria-label="Scroll left"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div className="songs__list" ref={listRef}>
          {trackList.map((track, index) => {
            const isTrackActive = playingId === track.id;
            const isTrackPlaying = isTrackActive && isPlaying;
            
            return (
              <div 
                key={track.id} 
                className={`songs__card glass ${isTrackPlaying ? 'songs__card--playing' : ''}`}
                onClick={() => handlePlayToggle(track.id)}
              >
                <div className="songs__card-image">
                  <img src={`${import.meta.env.BASE_URL}${track.image.slice(1)}`} alt={track.title} />
                  <div className="songs__card-play">
                    {isTrackPlaying ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="6" y="4" width="4" height="16"></rect>
                        <rect x="14" y="4" width="4" height="16"></rect>
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    )}
                  </div>
                </div>
                <div className="songs__card-info">
                  <h3 className="songs__card-title">{track.title}</h3>
                  <span className="songs__card-duration">
                    {isTrackActive ? `${formatTime(currentTime)} - ${track.duration}` : track.duration}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <button 
          className="songs__scroll-btn songs__scroll-btn--right"
          onClick={() => handleScroll('right')}
          aria-label="Scroll right"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      {activeTrack && activeTrack.description && (
        <div className="songs__description glass">
          <h4 className="songs__description-title">{activeTrack.title}</h4>
          {activeTrack.releaseDate && (
            <div className="songs__description-date">RELEASED: {activeTrack.releaseDate}</div>
          )}
          <p className="songs__description-text">{activeTrack.description}</p>
        </div>
      )}
    </div>
  );
}
