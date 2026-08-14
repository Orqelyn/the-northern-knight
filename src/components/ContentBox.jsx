import './ContentBox.css';
import Songs from './Songs';
import About from './About';
import Purpose from './Purpose';
import Contact from './Contact';

export default function ContentBox() {
  return (
    <section className="content-box">
      <div className="content-box__glass glass-strong" data-reveal="up">
        <Songs />
      </div>
      <div className="content-box__glass glass-strong" data-reveal="up">
        <About />
      </div>
      <div className="content-box__glass glass-strong" data-reveal="up">
        <Purpose />
      </div>
      <div className="content-box__glass glass-strong" data-reveal="up">
        <Contact />
      </div>
    </section>
  );
}
