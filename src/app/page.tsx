'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { projects, heroImages, type Project } from './projectData'

// ==========================================
// CAROUSEL COMPONENT (for project modals)
// ==========================================
function Carousel({ images, alt }: { images: string[]; alt: string }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }, [images.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide()
      if (e.key === 'ArrowLeft') prevSlide()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide])

  return (
    <div className="relative w-full aspect-video bg-black">
      <img src={images[currentSlide]} alt={`${alt} - Image ${currentSlide + 1}`} className="w-full h-full object-contain" />
      {images.length > 1 && (
        <>
          <button onClick={(e) => { e.stopPropagation(); prevSlide(); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/50 hover:bg-white hover:text-black transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={(e) => { e.stopPropagation(); nextSlide(); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/50 hover:bg-white hover:text-black transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </>
      )}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
          <span className="text-white/70 text-sm font-mono tracking-wider">
            {String(currentSlide + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
          </span>
        </div>
      )}
    </div>
  )
}

// ==========================================
// PROJECT MODAL
// ==========================================
function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.body.style.overflow = project ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [project])

  useEffect(() => {
    if (!project) return
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [project, onClose])

  if (!project) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8" onClick={onClose}>
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm animate-fade-in" />
      <div ref={modalRef} className="relative z-10 bg-[#0f0f0f] border border-gray-800 max-w-5xl w-full max-h-[90vh] overflow-auto animate-scale-in" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-white hover:text-black transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <Carousel images={project.images} alt={project.title} />
        <div className="p-8 md:p-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gray-500 text-sm tracking-widest">{project.category}</span>
            <span className="text-gray-700">•</span>
            <span className="text-gray-500 text-sm tracking-widest">{project.client}</span>
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-bold tracking-wider mt-2 mb-6">{project.title}</h2>
          <p className="text-gray-400 leading-relaxed">{project.description}</p>
          <div className="mt-6 text-gray-600 text-sm tracking-wider">{project.images.length} {project.images.length === 1 ? 'IMAGE' : 'IMAGES'}</div>
        </div>
      </div>
    </div>
  )
}

// ==========================================
// NAVIGATION
// ==========================================
function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-center">
        <div className="flex items-center gap-10">
          {['HOME', 'WORK', 'ABOUT', 'CONTACT'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white text-sm tracking-widest transition-colors duration-300 font-medium">{item}</a>
          ))}
        </div>
      </div>
    </nav>
  )
}

// ==========================================
// HERO SECTION WITH AUTO-CAROUSEL
// ==========================================
function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)
  const [nextImage, setNextImage] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentImage(nextImage)
        setNextImage((nextImage + 1) % heroImages.length)
        setIsTransitioning(false)
      }, 1000)
    }, 3000)
    return () => clearInterval(interval)
  }, [nextImage])

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img key={`c-${currentImage}`} src={heroImages[currentImage]} alt="Portfolio" className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000" style={{ opacity: isTransitioning ? 0 : 1 }} />
        <img key={`n-${nextImage}`} src={heroImages[nextImage]} alt="Portfolio" className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000" style={{ opacity: isTransitioning ? 1 : 0 }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]" />
      </div>
      <div className="relative z-10 text-center px-6 animate-fade-in">
        <p className="text-gray-400 text-sm md:text-base tracking-[0.3em] mb-6 font-light">3D GENERALIST &amp; TECHNICAL ARTIST</p>
        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-10">RODRIGO AMORIM</h1>
        <a href="#work" className="inline-block bg-white text-black px-10 py-4 text-sm font-semibold tracking-widest hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-xl">VIEW PROJECTS</a>
      </div>
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroImages.map((_, index) => (
          <div key={index} className={`h-0.5 transition-all duration-500 ${index === currentImage ? 'bg-white w-8' : 'bg-white/20 w-4'}`} />
        ))}
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-500 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}

// ==========================================
// FEATURED WORKS
// ==========================================
function FeaturedWorks({ onProjectClick }: { onProjectClick: (project: Project) => void }) {
  return (
    <section id="work" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-white text-3xl md:text-4xl font-bold tracking-widest mb-4">FEATURED WORKS</h2>
          <div className="w-24 h-0.5 bg-white mx-auto opacity-50" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={project.id} className="group relative aspect-square overflow-hidden cursor-pointer" style={{ animationDelay: `${index * 100}ms` }} onClick={() => onProjectClick(project)}>
              <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-end">
                <div className="w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <span className="text-gray-400 text-xs tracking-widest block mb-1">{project.client}</span>
                  <h3 className="text-white text-sm font-semibold tracking-wider">{project.title}</h3>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-white text-xs tracking-widest mb-2">{project.category}</p>
                    <h3 className="text-white text-xl font-semibold tracking-wider mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm tracking-wider">{project.images.length} IMAGES — VIEW PROJECT</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ==========================================
// ABOUT SECTION
// ==========================================
function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-white text-3xl md:text-4xl font-bold tracking-widest mb-6">ABOUT ME</h2>
            <div className="w-24 h-0.5 bg-white opacity-50 mb-8" />
            <p className="text-gray-400 leading-relaxed mb-8">
              I am a 3D Generalist focused on visual solutions for companies and agencies. I develop projects from initial modeling to final rendering for booths, press kits, products, brand activations, corporate events, and promotional materials. With both a technical and creative approach, I deliver realistic and functional imagery that aids in project visualization and approval, directly contributing to the success of activations, presentations, and campaigns.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Blender', 'Cycles', 'Twinmotion', 'Photoshop', 'Illustrator', 'Affinity'].map((skill) => (
                <span key={skill} className="px-4 py-2 border border-gray-700 text-gray-400 text-sm tracking-wider hover:border-white hover:text-white transition-colors duration-300">{skill}</span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {[{ number: '7+', label: 'YEARS EXPERIENCE' }, { number: '60+', label: 'PROJECTS COMPLETED' }, { number: '20+', label: 'HAPPY CLIENTS' }, { number: '2', label: 'AWARDS WON' }].map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-[#0a0a0a] border border-gray-800">
                <div className="text-white text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-500 text-xs tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ==========================================
// CONTACT & FOOTER
// ==========================================
function CallToAction() {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold tracking-wider mb-12">LET&apos;S BUILD SOMETHING EXTRAORDINARY.</h2>
        <div className="flex items-center justify-center mb-10">
          <a href="https://www.linkedin.com/in/rodrigoamorim91/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="LinkedIn">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
          </a>
        </div>
        <a href="mailto:gomessa.rodrigo@gmail.com" className="text-white text-lg md:text-xl hover:text-gray-300 transition-colors duration-300 underline underline-offset-4 decoration-gray-500">gomessa.rodrigo@gmail.com</a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-8 bg-[#0a0a0a] border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm tracking-wider">© 2025 RODRIGO AMORIM. ALL RIGHTS RESERVED.</p>
        <p className="text-gray-500 text-sm tracking-wider">DESIGNED FOR THE DIGITAL FRONTIER.</p>
      </div>
    </footer>
  )
}

// ==========================================
// MAIN PAGE
// ==========================================
export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <main className="min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <FeaturedWorks onProjectClick={setSelectedProject} />
      <AboutSection />
      <CallToAction />
      <Footer />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </main>
  )
}
