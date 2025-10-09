'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Building:', prompt);
  };

  const projects = [
    {
      id: 1,
      title: 'neon-dream-motors',
      image: '/projects/car.jpg',
      edited: '2 minutes ago',
      description: 'Drive Your Dreams',
    },
    {
      id: 2,
      title: 'parrot-splash-zone-landing',
      image: '/projects/parrot.jpg',
      edited: '6 months ago',
      description: 'Meet Your New Feathered Friend',
    },
    {
      id: 3,
      title: 'mccaw-notes-page-buddy',
      image: '/projects/notes.jpg',
      edited: '6 months ago',
      description: 'Your Digital Notebook',
    },
  ];

  const communityProjects = [
    {
      id: 1,
      title: 'naija-connect-platform',
      remixes: 7,
      image: '/community/naija.jpg',
      tag: '',
    },
    {
      id: 2,
      title: 'restrecoverywellness',
      remixes: 225,
      image: '/community/wellness.jpg',
      tag: 'Website',
    },
    {
      id: 3,
      title: 'ai-spark-toolkit-guide',
      remixes: 10,
      image: '/community/ai-toolkit.jpg',
      tag: 'Website',
    },
    {
      id: 4,
      title: 'mnagateway',
      remixes: 10,
      image: '/community/gateway.jpg',
      tag: 'Website',
    },
  ];

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>🎨</span>
          <span className={styles.logoText}>Buildable</span>
        </div>
        <nav className={styles.nav}>
          <a href="#community">Community</a>
          <a href="#pricing">Pricing</a>
          <a href="#enterprise">Enterprise</a>
          <a href="#learn">Learn</a>
          <a href="#launched">Launched</a>
        </nav>
        <div className={styles.userSection}>
          <button className={styles.giftButton}>🎁</button>
          <button className={styles.notificationButton}>
            🔔<span className={styles.badge}>1</span>
          </button>
          <div className={styles.userAvatar}>S</div>
          <span className={styles.userName}>Simon's Buildable</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Build something <span className={styles.logoIcon}>🎨</span> <span className={styles.brandName}>Buildable</span>
        </h1>
        <p className={styles.heroSubtitle}>Create apps and websites by chatting with AI</p>

        <form className={styles.promptForm} onSubmit={handleSubmit}>
          <div className={styles.promptInput}>
            <input
              type="text"
              placeholder="Ask Buildable to create a landing page for m"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <div className={styles.promptActions}>
              <button type="button" className={styles.addButton}>+</button>
              <button type="button" className={styles.visibilityButton}>
                🌍 Public
              </button>
              <button type="button" className={styles.voiceButton}>🎤</button>
              <button type="submit" className={styles.submitButton}>↑</button>
            </div>
          </div>
        </form>
      </section>

      {/* Projects Section */}
      <section className={styles.workspaceSection}>
        <div className={styles.sectionHeader}>
          <h2>Simon's Buildable's Workspace</h2>
          <div className={styles.filters}>
            <input type="search" placeholder="Search projects..." className={styles.searchInput} />
            <select className={styles.filterSelect}>
              <option>Last edited</option>
              <option>Name</option>
              <option>Created date</option>
            </select>
            <select className={styles.filterSelect}>
              <option>Newest first</option>
              <option>Oldest first</option>
            </select>
            <select className={styles.filterSelect}>
              <option>All creators</option>
            </select>
          </div>
          <a href="#" className={styles.viewAll}>View All</a>
        </div>

        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <div className={styles.projectImagePlaceholder}>
                  {project.description}
                </div>
              </div>
              <div className={styles.projectInfo}>
                <div className={styles.projectMeta}>
                  <div className={styles.projectAvatar}>S</div>
                  <div>
                    <div className={styles.projectTitle}>{project.title}</div>
                    <div className={styles.projectEdited}>Edited {project.edited}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Community Section */}
      <section className={styles.communitySection}>
        <div className={styles.sectionHeader}>
          <h2>From the Community</h2>
          <div className={styles.communityFilters}>
            <select className={styles.filterSelect}>
              <option>Featured</option>
            </select>
            <button className={styles.categoryButton}>Discover</button>
            <button className={styles.categoryButton}>Internal Tools</button>
            <button className={styles.categoryButton}>Website</button>
            <button className={styles.categoryButton}>Personal</button>
            <button className={styles.categoryButton}>Consumer App</button>
            <button className={styles.categoryButton}>B2B App</button>
            <button className={styles.categoryButton}>Prototype</button>
          </div>
          <a href="#" className={styles.viewAll}>View All</a>
        </div>

        <div className={styles.projectGrid}>
          {communityProjects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <div className={styles.projectImagePlaceholder}>
                  {project.title}
                </div>
                {project.tag && <span className={styles.projectTag}>{project.tag}</span>}
              </div>
              <div className={styles.projectInfo}>
                <div className={styles.projectMeta}>
                  <div className={styles.projectAvatar} style={{
                    background: `hsl(${project.id * 60}, 70%, 60%)`
                  }}>
                    {project.title[0].toUpperCase()}
                  </div>
                  <div>
                    <div className={styles.projectTitle}>{project.title}</div>
                    <div className={styles.projectEdited}>{project.remixes} Remixes</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
