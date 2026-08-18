import './About.css';

export default function About() {

  return (
    <div className="about" id="about">
      <div className="section-header" data-reveal="up">
        <span className="section-label">THE KNIGHT</span>
        <h2 className="section-title">GUARDIAN OF AVARENNE</h2>
      </div>
      
      <div className="about__content glass" data-reveal="up" data-reveal-delay="100">
        <div className="about__grid">
          <div className="about__media-container" data-reveal="left" data-reveal-delay="200">
            <img 
              src="/orqelyn foto.jpeg" 
              className="about__media"
              alt="Orqelyn the Knight"
            />
          </div>
          
          <div className="about__text-container" data-reveal="right" data-reveal-delay="300">
            <p className="about__text">
              Orqelyn is a young Warden of Avarenne, raised beneath the mist-covered peaks of the Veyr Mountains. The son of Aren, a Warden who disappeared while serving along the southern trade route, and Elira, a village healer, he grew up between two different lessons: how to survive, and how to protect what is still worth saving.
            </p>
            <p className="about__text">
              Quiet and observant, Orqelyn has never been drawn to glory. He dislikes being called a hero and carries little interest in the titles others place upon him. Years of training at Vaelor Fortress taught him to fight, endure, and survive, but more importantly, they taught him that strength is not measured by how many enemies one can defeat. A Warden must know when to raise the sword, when to lower it, and who needs to be protected when not everyone can be saved.
            </p>
            <p className="about__text">
              For years, Orqelyn believed that becoming a Warden was simply the path that had been left behind by his father. But when Elira finally placed Aren's sword in his hands, he was given something more important than a weapon: the freedom to choose his own future. He chose to become a Warden, not because of his father's name or the promise of becoming a hero, but because he wanted to stand where others could not and protect those who had no sword of their own.
            </p>
            <p className="about__text">
              Now, with his oath before him and the borders of Avarenne no longer the limit of his world, Orqelyn begins the next part of his journey. Beyond the mountains lies a world he has only known through stories, and somewhere beyond those borders waits a path he has never been prepared to walk.
            </p>
          </div>
        </div>
        
        <div className="about__stats" data-reveal="up" data-reveal-delay="400">
          <div className="about__stat">
            <span className="about__stat-value">Guardian</span>
            <span className="about__stat-label">of Avarenne</span>
          </div>
          <div className="about__stat">
            <span className="about__stat-value">Eternal</span>
            <span className="about__stat-label">Mist</span>
          </div>
          <div className="about__stat">
            <span className="about__stat-value">Iron</span>
            <span className="about__stat-label">Will</span>
          </div>
        </div>
      </div>
    </div>
  );
}
