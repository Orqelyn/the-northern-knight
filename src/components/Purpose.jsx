import { useState, useMemo } from 'react';
import './Purpose.css';
import { storyText } from '../data/story';

export default function Purpose() {
  const chapters = useMemo(() => {
    const lines = storyText.split('\n');
    const parsedChapters = [];
    let currentChapter = null;
    let currentParagraph = [];

    const commitParagraph = () => {
      if (currentParagraph.length > 0 && currentChapter) {
        const text = currentParagraph.join(' ').replace(/\s+/g, ' ').trim();
        if (text.length > 0 && text !== '-' && text !== '—') {
           if (text.length < 50 && !text.endsWith('.') && currentChapter.paragraphs.length > 0) {
             currentChapter.paragraphs.push({ type: 'subtitle', text });
           } else {
             currentChapter.paragraphs.push({ type: 'text', text });
           }
        }
        currentParagraph = [];
      }
    };

    lines.forEach(line => {
      const tline = line.trim();
      
      if (tline.startsWith('Chapter ')) {
        commitParagraph();
        if (currentChapter) {
          parsedChapters.push(currentChapter);
        }
        currentChapter = { title: tline, subtitle: "", paragraphs: [] };
      } else if (tline === '') {
        commitParagraph();
      } else if (tline === 'BOOK I') {
        // Skip
      } else {
        if (!currentChapter) {
          currentChapter = { title: "Prologue", subtitle: "", paragraphs: [] };
        }
        if (currentChapter.paragraphs.length === 0 && currentParagraph.length === 0 && tline.length < 40 && !tline.includes('.')) {
          if (!currentChapter.subtitle) {
             currentChapter.subtitle = tline;
             return;
          }
        }
        currentParagraph.push(tline);
      }
    });
    
    commitParagraph();
    if (currentChapter) {
      parsedChapters.push(currentChapter);
    }
    
    return parsedChapters;
  }, []);

  const [activeChapter, setActiveChapter] = useState(0);
  const [activeBook, setActiveBook] = useState('BOOK I');

  const nextChapter = () => {
    if (activeChapter < chapters.length - 1) setActiveChapter(activeChapter + 1);
  };

  const prevChapter = () => {
    if (activeChapter > 0) setActiveChapter(activeChapter - 1);
  };

  return (
    <div className="purpose" id="purpose">
      <div className="section-header" data-reveal="up">
        <span className="section-label">LORE</span>
        <h2 className="section-title">THE STORY</h2>
      </div>
      
      <div className="purpose__content glass" data-reveal="up" data-reveal-delay="150">
        <div className="purpose__book-tabs">
          <button 
            className={`purpose__book-tab ${activeBook === 'BOOK I' ? 'purpose__book-tab--active' : ''}`}
            onClick={() => setActiveBook('BOOK I')}
          >
            BOOK I
          </button>
          <button 
            className={`purpose__book-tab ${activeBook === 'BOOK II' ? 'purpose__book-tab--active' : ''}`}
            onClick={() => setActiveBook('BOOK II')}
          >
            BOOK II
          </button>
          <button 
            className={`purpose__book-tab ${activeBook === 'BOOK III' ? 'purpose__book-tab--active' : ''}`}
            onClick={() => setActiveBook('BOOK III')}
          >
            BOOK III
          </button>
        </div>

        {activeBook === 'BOOK I' ? (
          <div className="purpose__book-layout">
            <div className="purpose__book-sidebar">
              <div className="purpose__book-cover-container">
                <img src={`${import.meta.env.BASE_URL}images/book1.jpg`} alt="The Warden Who Never Came Home, Book I" className="purpose__book-cover" />
              </div>
              <div className="purpose__book-title">
                The Warden Who Never Came Home<br/>
                <span>BOOK I</span>
              </div>
            </div>

            <div className="purpose__book-reader">
              <div className="purpose__navigation">
                <button 
                  className="purpose__nav-btn" 
                  onClick={prevChapter} 
                  disabled={activeChapter === 0}
                >
                  &#8592; Prev
                </button>
                
                <span className="purpose__chapter-indicator">
                  {chapters[activeChapter]?.title?.split('—')[0]?.split('-')[0]?.trim() || "Chapter"}
                </span>

                <button 
                  className="purpose__nav-btn" 
                  onClick={nextChapter} 
                  disabled={activeChapter === chapters.length - 1}
                >
                  Next &#8594;
                </button>
              </div>

              <div className="purpose__story-container">
                <h3 className="purpose__chapter-title">{chapters[activeChapter]?.title}</h3>
                {chapters[activeChapter]?.subtitle && (
                  <h4 className="purpose__chapter-subtitle">{chapters[activeChapter]?.subtitle}</h4>
                )}
                
                {chapters[activeChapter]?.paragraphs.map((p, index) => {
                  if (p.type === 'subtitle') {
                    return <h4 key={index} className="purpose__chapter-subtitle">{p.text}</h4>;
                  }
                  return <p key={index} className="purpose__paragraph">{p.text}</p>;
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="purpose__book-layout purpose__book-layout--empty">
            <div className="purpose__book-cover-container">
              <div className="purpose__book-cover purpose__book-cover--placeholder">
                <span>{activeBook}</span>
                <span className="coming-soon">Coming Soon</span>
              </div>
            </div>
            <div className="purpose__book-reader" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <p className="purpose__paragraph" style={{ textAlign: 'center', color: 'rgba(255, 255, 255, 0.4)' }}>
                The continuation of the story has not been written yet...<br/><br/>
                ({activeBook} is currently unavailable)
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
