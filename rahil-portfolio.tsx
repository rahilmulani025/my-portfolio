import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Instagram, Download, ExternalLink, Code, BarChart3, Moon, Sun, ChevronDown, Send, Award, Briefcase, GraduationCap, MapPin } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showToast, setShowToast] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  
  const roles = ['Web Developer', 'Data Analyst', 'Problem Solver', 'Tech Enthusiast'];
  const currentRole = roles[roleIndex];

  useEffect(() => {
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex <= currentRole.length) {
        setTypedText(currentRole.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [roleIndex, currentRole]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      const sections = ['home', 'about', 'resume', 'projects', 'skills', 'certifications', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setShowToast(false), 3000);
  };

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop',
      description: 'Full-stack shopping platform with payment integration',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveLink: '#',
      codeLink: '#'
    },
    {
      title: 'Sales Dashboard',
      category: 'data',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      description: 'Interactive analytics dashboard with real-time data',
      tech: ['Python', 'Pandas', 'Power BI', 'SQL'],
      liveLink: '#',
      codeLink: '#'
    },
    {
      title: 'Portfolio Website',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
      description: 'Modern responsive portfolio with animations',
      tech: ['React', 'Tailwind', 'Framer Motion'],
      liveLink: '#',
      codeLink: '#'
    },
    {
      title: 'Customer Segmentation',
      category: 'data',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      description: 'ML model for customer behavior analysis',
      tech: ['Python', 'Scikit-learn', 'Jupyter'],
      liveLink: '#',
      codeLink: '#'
    }
  ];

  const skills = {
    web: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'React', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'Tailwind CSS', level: 90 }
    ],
    data: [
      { name: 'Python', level: 88 },
      { name: 'SQL', level: 85 },
      { name: 'Pandas', level: 82 },
      { name: 'Power BI', level: 80 },
      { name: 'Excel', level: 90 },
      { name: 'Data Visualization', level: 85 }
    ],
    tools: [
      { name: 'Git', level: 85 },
      { name: 'VS Code', level: 95 },
      { name: 'Figma', level: 75 },
      { name: 'Canva', level: 80 }
    ]
  };

  const certifications = [
    { title: 'React Developer Certification', org: 'Meta', date: '2024', link: '#' },
    { title: 'Data Analytics Professional', org: 'Google', date: '2024', link: '#' },
    { title: 'Python for Data Science', org: 'IBM', date: '2023', link: '#' },
    { title: 'Full-Stack Web Development', org: 'Coursera', date: '2023', link: '#' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-700 z-50">
        <div 
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${isDarkMode ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-lg border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              RM
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'resume', 'projects', 'skills', 'certifications', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors ${
                    activeSection === item 
                      ? 'text-cyan-400' 
                      : isDarkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-700 hover:text-cyan-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="px-4 py-4 space-y-3">
              {['home', 'about', 'resume', 'projects', 'skills', 'certifications', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left px-4 py-2 rounded capitalize ${
                    activeSection === item 
                      ? 'bg-cyan-500 text-white' 
                      : isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
        }} />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 p-1">
              <div className={`w-full h-full rounded-full ${isDarkMode ? 'bg-gray-900' : 'bg-white'} flex items-center justify-center text-4xl font-bold`}>
                RM
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
            Rahil Mulani
          </h1>
          
          <div className="text-xl md:text-2xl mb-8 h-8">
            <span className="text-cyan-400">{typedText}</span>
            <span className="animate-pulse">|</span>
          </div>

          <p className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Crafting digital experiences through code and transforming data into actionable insights
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-cyan-500 rounded-full font-semibold hover:bg-cyan-500 transition-all transform hover:scale-105"
            >
              Get in Touch
            </button>
          </div>

          <div className="mt-16 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-cyan-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-4 ${isDarkMode ? 'bg-gray-800/50' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm a passionate technologist with a deep love for building elegant web solutions and uncovering insights from data. My journey in tech combines creative problem-solving with analytical thinking.
              </p>
              <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                With expertise spanning full-stack development and data analytics, I bridge the gap between beautiful user interfaces and data-driven decision making.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-900/50' : 'bg-gray-100'} backdrop-blur-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} hover:border-cyan-500 transition-all transform hover:scale-105`}>
                <GraduationCap className="text-cyan-400 mb-3" size={32} />
                <h3 className="font-semibold mb-2">Education</h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Computer Science</p>
              </div>

              <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-900/50' : 'bg-gray-100'} backdrop-blur-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} hover:border-cyan-500 transition-all transform hover:scale-105`}>
                <MapPin className="text-cyan-400 mb-3" size={32} />
                <h3 className="font-semibold mb-2">Location</h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Mumbai, India</p>
              </div>

              <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-900/50' : 'bg-gray-100'} backdrop-blur-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} hover:border-cyan-500 transition-all transform hover:scale-105`}>
                <Briefcase className="text-cyan-400 mb-3" size={32} />
                <h3 className="font-semibold mb-2">Experience</h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>2+ Years</p>
              </div>

              <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-900/50' : 'bg-gray-100'} backdrop-blur-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} hover:border-cyan-500 transition-all transform hover:scale-105`}>
                <Award className="text-cyan-400 mb-3" size={32} />
                <h3 className="font-semibold mb-2">Projects</h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>15+ Completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Resume
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-white to-gray-50'} border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} hover:border-cyan-500 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20`}>
              <Code className="text-cyan-400 mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4">Web Development</h3>
              <p className={`mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Full-stack development expertise with modern frameworks and tools
              </p>
              <div className="flex gap-4">
                <button className="flex-1 px-6 py-3 bg-cyan-500 rounded-lg font-semibold hover:bg-cyan-600 transition-all flex items-center justify-center gap-2">
                  <ExternalLink size={18} />
                  View
                </button>
                <button className="flex-1 px-6 py-3 border-2 border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500 transition-all flex items-center justify-center gap-2">
                  <Download size={18} />
                  Download
                </button>
              </div>
            </div>

            <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-white to-gray-50'} border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} hover:border-blue-500 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20`}>
              <BarChart3 className="text-blue-400 mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4">Data Science & Analytics</h3>
              <p className={`mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Data analysis, visualization, and machine learning capabilities
              </p>
              <div className="flex gap-4">
                <button className="flex-1 px-6 py-3 bg-blue-500 rounded-lg font-semibold hover:bg-blue-600 transition-all flex items-center justify-center gap-2">
                  <ExternalLink size={18} />
                  View
                </button>
                <button className="flex-1 px-6 py-3 border-2 border-blue-500 rounded-lg font-semibold hover:bg-blue-500 transition-all flex items-center justify-center gap-2">
                  <Download size={18} />
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-4 ${isDarkMode ? 'bg-gray-800/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Projects
          </h2>

          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {['all', 'web', 'data'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full capitalize font-semibold transition-all ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                    : isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {filter === 'all' ? 'All Projects' : filter === 'web' ? 'Web Dev' : 'Data Analytics'}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-white'} border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} hover:border-cyan-500 transition-all transform hover:scale-105 hover:shadow-2xl group`}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 text-xs rounded-full ${isDarkMode ? 'bg-gray-800 text-cyan-400' : 'bg-gray-100 text-cyan-600'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.liveLink}
                      className="flex-1 px-4 py-2 bg-cyan-500 rounded-lg text-center font-semibold hover:bg-cyan-600 transition-all flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.codeLink}
                      className="flex-1 px-4 py-2 border-2 border-cyan-500 rounded-lg text-center font-semibold hover:bg-cyan-500 transition-all flex items-center justify-center gap-2"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Web Development */}
            <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-gray-800/50' : 'bg-white'} border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <Code className="text-cyan-400 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-6">Web Development</h3>
              <div className="space-y-4">
                {skills.web.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className={`h-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} overflow-hidden`}>
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Analytics */}
            <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-gray-800/50' : 'bg-white'} border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <BarChart3 className="text-blue-400 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-6">Data Analytics</h3>
              <div className="space-y-4">
                {skills.data.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <div className={`h-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} overflow-hidden`}>
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-gray-800/50' : 'bg-white'} border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <Award className="text-purple-400 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-6">Tools & More</h3>
              <div className="space-y-4">
                {skills.tools.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-purple-400">{skill.level}%</span>
                    </div>
                    <div className={`h-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} overflow-hidden`}>
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className={`py-20 px-4 ${isDarkMode ? 'bg-gray-800/50' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-900' : 'bg-white'} border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} hover:border-cyan-500 transition-all transform hover:scale-105`}
              >
                <Award className="text-cyan-400 mb-3" size={32} />
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className={`mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{cert.org}</p>
                <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>{cert.date}</p>
                <a
                  href={cert.link}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  View Certificate
                  <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className={`w-full px-4 py-3 rounded-lg ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} border focus:border-cyan-500 focus:outline-none transition-colors`}
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className={`w-full px-4 py-3 rounded-lg ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} border focus:border-cyan-500 focus:outline-none transition-colors`}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className={`w-full px-4 py-3 rounded-lg ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} border focus:border-cyan-500 focus:outline-none transition-colors resize-none`}
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                <p className={`mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:rahil@example.com"
                  className={`flex items-center gap-4 p-4 rounded-lg ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-all transform hover:scale-105`}
                >
                  <Mail className="text-cyan-400" size={24} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>rahil@example.com</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-lg ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-all transform hover:scale-105`}
                >
                  <Linkedin className="text-cyan-400" size={24} />
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Connect with me</p>
                  </div>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-lg ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-all transform hover:scale-105`}
                >
                  <Github className="text-cyan-400" size={24} />
                  <div>
                    <p className="font-semibold">GitHub</p>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>View my code</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-lg ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-all transform hover:scale-105`}
                >
                  <Instagram className="text-cyan-400" size={24} />
                  <div>
                    <p className="font-semibold">Instagram</p>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Follow me</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 border-t ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                © 2024 Rahil Mulani. All rights reserved.
              </p>
            </div>

            <div className="flex gap-6">
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <Mail size={24} />
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-8 right-8 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-4 rounded-lg shadow-2xl animate-pulse z-50">
          <p className="font-semibold">Message sent successfully! 🎉</p>
          <p className="text-sm">I'll get back to you soon.</p>
        </div>
      )}
    </div>
  );
};

export default Portfolio;