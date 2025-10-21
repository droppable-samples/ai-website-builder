'use client';

import { useState } from 'react';
import Logo from '@/components/Logo';

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
    <div className="min-h-screen pb-16">
      {/* Header */}
      <header className="flex items-center justify-between px-6 md:px-10 py-5 bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-sm">
        <div className="flex items-center gap-3">
          <Logo className="w-8 h-8" />
          <span className="text-xl font-bold text-gray-900">Buildable</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#community" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">
            Community
          </a>
          <a href="#pricing" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">
            Pricing
          </a>
          <a href="#enterprise" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">
            Enterprise
          </a>
          <a href="#learn" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">
            Learn
          </a>
          <a href="#launched" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">
            Launched
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-xl">
            🎁
          </button>
          <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors text-xl">
            🔔
            <span className="absolute top-1 right-1 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              1
            </span>
          </button>
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white flex items-center justify-center font-bold text-sm">
            S
          </div>
          <span className="hidden md:block text-sm font-medium text-gray-700">Account Settings</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto mt-20 mb-20 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
          You Prompt, We Build
        </h1>
        <p className="text-xl text-gray-600 mb-10">
          Create apps and websites by chatting with AI
        </p>

        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <input
              type="text"
              placeholder="Ask Buildable to create a landing page for..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full border-none outline-none text-base py-3 text-gray-800 placeholder:text-gray-400"
            />
            <div className="flex items-center justify-between gap-3 mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-lg font-bold"
                >
                  +
                </button>
                <button
                  type="button"
                  className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors text-sm text-gray-600"
                >
                  🌍 Public
                </button>
                <button
                  type="button"
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-lg"
                >
                  🎤
                </button>
              </div>
              <button
                type="submit"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white flex items-center justify-center text-xl font-bold hover:scale-105 transition-transform"
              >
                ↑
              </button>
            </div>
          </div>
        </form>
      </section>

      {/* Community Projects Section */}
      <section className="max-w-7xl mx-auto my-16 px-6 md:px-10 bg-white/85 backdrop-blur-lg rounded-3xl p-8 md:p-10 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Community Projects</h2>
          <div className="flex flex-wrap items-center gap-3">
            <input
              type="search"
              placeholder="Search projects..."
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
            />
            <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white cursor-pointer outline-none hover:border-primary-500 transition-colors">
              <option>Last edited</option>
              <option>Name</option>
              <option>Created date</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white cursor-pointer outline-none hover:border-primary-500 transition-colors">
              <option>Newest first</option>
              <option>Oldest first</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white cursor-pointer outline-none hover:border-primary-500 transition-colors">
              <option>All creators</option>
            </select>
          </div>
          <a href="#" className="text-primary-500 font-semibold text-sm hover:underline whitespace-nowrap">
            View All
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer"
            >
              <div className="relative w-full h-48 bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-semibold text-lg text-center p-6">
                {project.description}
              </div>
              <div className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    S
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-gray-900 truncate">{project.title}</div>
                    <div className="text-sm text-gray-500">Edited {project.edited}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* From the Community Section */}
      <section className="max-w-7xl mx-auto my-16 px-6 md:px-10 bg-white/85 backdrop-blur-lg rounded-3xl p-8 md:p-10 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <h2 className="text-3xl font-bold text-gray-900">From the Community</h2>
          <div className="flex flex-wrap items-center gap-3">
            <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white cursor-pointer outline-none hover:border-primary-500 transition-colors">
              <option>Featured</option>
            </select>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all">
              Discover
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all">
              Internal Tools
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all">
              Website
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all">
              Personal
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all">
              Consumer App
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all">
              B2B App
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all">
              Prototype
            </button>
          </div>
          <a href="#" className="text-primary-500 font-semibold text-sm hover:underline whitespace-nowrap">
            View All
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {communityProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer"
            >
              <div className="relative w-full h-48 bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-semibold text-lg text-center p-6">
                {project.title}
                {project.tag && (
                  <span className="absolute top-3 right-3 bg-white text-primary-500 px-3 py-1 rounded-full text-xs font-semibold">
                    {project.tag}
                  </span>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full text-white flex items-center justify-center font-bold text-sm flex-shrink-0"
                    style={{ background: `hsl(${project.id * 60}, 70%, 60%)` }}
                  >
                    {project.title[0].toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-gray-900 truncate">{project.title}</div>
                    <div className="text-sm text-gray-500">{project.remixes} Remixes</div>
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
