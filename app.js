// Dynamic Portfolio Loader
let portfolioData = null;

// Load portfolio data
async function loadPortfolioData() {
    try {
        const response = await fetch('data.json');
        portfolioData = await response.json();
        renderPortfolio();
    } catch (error) {
        console.error('Error loading portfolio data:', error);
    }
}

// Render entire portfolio
function renderPortfolio() {
    if (!portfolioData) return;
    
    renderPersonalInfo();
    renderAbout();
    renderExperience();
    renderEducation();
    renderSkills();
    renderProjects();
    renderContact();
}

// Render personal information in hero section
function renderPersonalInfo() {
    const { personal } = portfolioData;
    
    // Update nav brand
    document.querySelector('.nav-brand').textContent = personal.initials;
    
    // Update hero section
    document.querySelector('.hero h1').textContent = personal.name;
    document.querySelector('.hero .subtitle').textContent = personal.title;
    document.querySelector('.hero .tagline').textContent = personal.tagline;
    
    // Update social links
    const socialLinks = document.querySelector('.social-links');
    socialLinks.innerHTML = `
        <a href="mailto:${personal.email}" aria-label="Email"><i class="fas fa-envelope"></i></a>
        <a href="${personal.linkedin}" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
        <a href="${personal.github}" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>
    `;
    
    // Update resume download link
    document.querySelector('.btn-secondary').href = personal.resumeFile;
    
    // Update page title
    document.title = `${personal.name} | ${personal.title}`;
    
    // Update footer
    document.querySelector('.footer p').textContent = `© ${new Date().getFullYear()} ${personal.name}. All rights reserved.`;
}

// Render about section
function renderAbout() {
    const aboutContent = document.querySelector('.about-content');
    aboutContent.innerHTML = portfolioData.about.map(paragraph => 
        `<p>${paragraph}</p>`
    ).join('');
}

// Render experience timeline
function renderExperience() {
    const timeline = document.querySelector('.timeline');
    timeline.innerHTML = portfolioData.experience.map(exp => `
        <div class="timeline-item">
            <div class="timeline-date">${exp.period}</div>
            <div class="timeline-content">
                <h3>${exp.title}</h3>
                <h4>${exp.company}</h4>
                <p>${exp.description}</p>
                <ul>
                    ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

// Render education and certifications
function renderEducation() {
    const educationGrid = document.querySelector('.education-grid');
    
    // Render education
    const educationHTML = portfolioData.education.map(edu => `
        <div class="education-item">
            <div class="education-icon"><i class="fas fa-${edu.icon}"></i></div>
            <h3>${edu.degree}</h3>
            <h4>${edu.institution}</h4>
            <p class="education-year">${edu.period}</p>
            <p>${edu.details}</p>
        </div>
    `).join('');
    
    // Render certifications
    const certificationsHTML = portfolioData.certifications.map(cert => `
        <div class="education-item">
            <div class="education-icon"><i class="fas fa-${cert.icon}"></i></div>
            <h3>${cert.name}</h3>
            <h4>${cert.issuer}</h4>
            <p class="education-year">${cert.date}</p>
        </div>
    `).join('');
    
    educationGrid.innerHTML = educationHTML + certificationsHTML;
}

// Render skills
function renderSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    skillsGrid.innerHTML = portfolioData.skills.map(skillCategory => `
        <div class="skill-category">
            <h3><i class="fas fa-${skillCategory.icon}"></i> ${skillCategory.category}</h3>
            <div class="skill-tags">
                ${skillCategory.items.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// Render projects
function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.innerHTML = portfolioData.projects.map(project => `
        <div class="project-card">
            <div class="project-icon"><i class="fas fa-${project.icon}"></i></div>
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            ${project.links.length > 0 ? `
                <div class="project-links">
                    ${project.links.map(link => `
                        <a href="${link.url}" target="_blank"><i class="${link.icon}"></i> ${link.text}</a>
                    `).join('')}
                </div>
            ` : ''}
        </div>
    `).join('');
}

// Render contact section
function renderContact() {
    const { personal } = portfolioData;
    const contactMethods = document.querySelector('.contact-methods');
    
    contactMethods.innerHTML = `
        <a href="mailto:${personal.email}" class="contact-method">
            <i class="fas fa-envelope"></i>
            <span>${personal.email}</span>
        </a>
        <a href="${personal.linkedin}" target="_blank" class="contact-method">
            <i class="fab fa-linkedin"></i>
            <span>LinkedIn Profile</span>
        </a>
        <a href="${personal.github}" target="_blank" class="contact-method">
            <i class="fab fa-github"></i>
            <span>GitHub Profile</span>
        </a>
    `;
}

// Mobile Navigation Toggle
function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Smooth scroll for navigation links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Navbar background on scroll
function initNavbarScroll() {
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.backgroundColor = 'var(--bg-color)';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    });
}

// Intersection Observer for fade-in animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections for animation
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Add animation to timeline items
    setTimeout(() => {
        document.querySelectorAll('.timeline-item').forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-30px)';
            item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            observer.observe(item);
        });
    }, 100);

    // Add animation to cards
    setTimeout(() => {
        document.querySelectorAll('.education-item, .project-card, .skill-category').forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            observer.observe(card);
        });
    }, 100);
}

// Active navigation link highlighting
function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', async () => {
    // Load portfolio data first
    await loadPortfolioData();
    
    // Then initialize all interactions
    initMobileNav();
    initSmoothScroll();
    initNavbarScroll();
    initScrollAnimations();
    initActiveNav();
});
