document.addEventListener('DOMContentLoaded', () => {

    // Mobile Menu
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        // Toggle icon
        const icon = mobileMenuButton.querySelector('i');
        if (icon.getAttribute('data-feather') === 'menu') {
            icon.setAttribute('data-feather', 'x');
        } else {
            icon.setAttribute('data-feather', 'menu');
        }
        feather.replace();
    });

    // Close mobile menu on link click
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenuButton.querySelector('i').setAttribute('data-feather', 'menu');
            feather.replace();
        });
    });

    // Animate on Scroll
    AOS.init({
        duration: 1000,
        once: true,
        offset: 50,
    });

    // Particles.js
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#64ffda' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: '#64ffda', opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out' }
        },
        interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
        },
        retina_detect: true
    });
    
    // Feather Icons
    feather.replace();

    // --- Dynamic Content ---
    const projects = [
        {
            title: 'Cybersecurity Home Lab (VMware)',
            description: 'Set up VMs (Kali Linux, Metasploitable2, Windows 10) for hands-on security testing.',
            stack: ['VMware', 'Kali Linux', 'Metasploitable2'],
            github: null,
            demo: null
        },
        {
            title: 'Cybersecurity Tools & Scripts',
            description: 'Built password checker, port scanner, and phishing detector. GitHub: Cybersecurity-Projects',
            stack: ['Python', 'APIs', 'Sockets'],
            github: 'https://github.com/Somashekharh/Cybersecurity-Projects',
            demo: null
        },
        {
            title: 'Offensive Security Projects',
            description: 'Simulated Wi-Fi deauthentication, keystroke injection, and researched phishing payloads. GitHub: Ethical-Hacking-GadgetHub',
            stack: ['ESP8266', 'Raspberry Pi Pico', 'C++'],
            github: 'https://github.com/Somashekharh/Ethical-Hacking-GadgetHub',
            demo: null
        },
        {
            title: 'PhishNet– Phishing URL Detector',
            description: 'Django ML app for phishing URL detection with secure login and PDF export. GitHub: PhishNet',
            stack: ['Django', 'Machine Learning', 'Python'],
            github: 'https://github.com/Somashekharh/PhishNet',
            demo: null
        },
        {
            title: 'StudyBot AI',
            description: 'AI learning assistant using Streamlit, Gemini API, and Python. GitHub: StudyBot',
            stack: ['Streamlit', 'Gemini API', 'Python'],
            github: 'https://github.com/Somashekharh/StudyBot',
            demo: null
        }
    ];
    
    const skills = {
        'Cybersecurity Tools': ['Nmap', 'Netdiscover', 'Wireshark', 'Metasploit', 'VirusTotal API'],
        'IT Support': ['Remote access (AnyDesk)', 'troubleshooting', 'system setup'],
        'Networking': ['TCP/IP', 'subnetting', 'firewalls', 'IDS/IPS', 'Wi-Fi scanning'],
        'Operating Systems': ['Linux (Kali, Ubuntu)', 'Windows 10/11'],
        'Programming': ['Python', 'Bash', 'SQL'],
        'Virtualization/Cloud': ['VMware', 'VirtualBox', 'AWS (basic)'],
        'Other': ['Git', 'GitHub', 'hardware assembly', 'ESP8266 projects', 'software testing']
    };
    
    const certifications = [
        'Information Technology Fundamentals — IBM (Jun 2025)',
        'Cybersecurity Job Simulation — Deloitte Australia / Forage (May 2025)',
        'Google Cybersecurity Specialization (Apr 2024)',
        'Computer Hardware Basics — Cisco (Apr 2024)'
    ];

    const experience = [
        {
            role: 'Cybersecurity Intern',
            company: 'System Tron (Remote)',
            date: 'Mar 2025 – Apr 2025',
            description: 'Hardened networks by identifying and addressing vulnerabilities using Nmap, Wireshark, and Metasploit. Responded to security incidents and performed forensic log analysis to improve system defenses. Built and managed a home cybersecurity lab, conducting OS security configurations and real-world attack simulations.'
        },
        {
            role: 'Cybersecurity Job Simulation',
            company: 'Deloitte Australia (Forage)',
            date: 'Mar 2025',
            description: 'Detected and reported anomalies in simulated web logs to improve incident visibility. Documented incident response steps and actively contributed to simulated breach handling and reporting.'
        }
    ];

    const education = [
        {
            degree: 'Bachelor of Computer Applications (BCA)',
            institution: 'KLE Society’s College of BCA, Belagavi',
            details: 'GPA: 87.13% (Jun 2025)'
        },
        {
            degree: 'Pre-University Course (PCMB)',
            institution: 'Government PU College, Bailhongal',
            details: 'GPA: 81% (May 2022)'
        }
    ];

    const achievements = [
        'Winner, Abhimanyu’s Cyber Vyuh, National IT Fest– Gogte College of Commerce (KLS), Apr 2025'
    ];


    function renderProjects() {
        const projectContainer = document.querySelector('#projects .grid');
        projectContainer.innerHTML = projects.map(p => `
            <div class="bg-gray-800 rounded-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 shadow-lg" data-aos="fade-up">
                <div class="p-6">
                    <h3 class="text-xl font-bold text-white mb-2">${p.title}</h3>
                    <p class="text-gray-400 mb-4 text-sm">${p.description}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${p.stack.map(s => `<span class="bg-green-900/50 text-green-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">${s}</span>`).join('')}
                    </div>
                    <div class="flex items-center gap-4">
                        ${p.github ? `<a href="${p.github}" target="_blank" class="text-green-400 hover:text-green-300 font-semibold text-sm flex items-center gap-1">
                            <i data-feather="github" class="w-4 h-4"></i> GitHub
                        </a>` : ''}
                        ${p.demo ? `<a href="${p.demo}" target="_blank" class="text-green-400 hover:text-green-300 font-semibold text-sm flex items-center gap-1">
                            <i data-feather="external-link" class="w-4 h-4"></i> Live Demo
                        </a>` : ''}
                    </div>
                </div>
            </div>
        `).join('');
    }

    function renderSkills() {
        const skillsContainer = document.getElementById('skills-container');
        skillsContainer.innerHTML = Object.keys(skills).map(category => `
            <div class="mb-8" data-aos="fade-up">
                <h3 class="text-xl font-semibold text-green-400 mb-4">${category}</h3>
                <div class="flex flex-wrap gap-4">
                    ${skills[category].map(skill => `<span class="bg-gray-700 text-gray-200 py-2 px-5 rounded-lg text-sm">${skill}</span>`).join('')}
                </div>
            </div>
        `).join('');
    }

    function renderCertifications() {
        const container = document.getElementById('certifications-container');
        container.innerHTML = certifications.map(cert => `
            <div class="bg-gray-800 p-4 rounded-lg flex items-center gap-4" data-aos="fade-up">
                <i data-feather="award" class="text-green-400"></i>
                <span>${cert}</span>
            </div>
        `).join('');
    }

    function renderExperience() {
        const container = document.getElementById('experience-container');
        // The timeline bar
        container.innerHTML = `<div class="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-gray-700 -translate-x-1/2"></div>`;
        
        container.innerHTML += experience.map((job, index) => {
            const isRight = index % 2 !== 0;

            const contentBlock = `
                <div class="bg-gray-800 p-6 rounded-lg shadow-lg w-full">
                    <h3 class="text-xl font-bold text-white">${job.role}</h3>
                    <p class="text-green-400 font-semibold">${job.company}</p>
                    <p class="text-gray-500 text-sm mt-1">${job.date}</p>
                    <p class="text-gray-400 mt-2">${job.description}</p>
                </div>
            `;

            const leftCard = `
                <div class="md:w-1/2 md:pr-8">${contentBlock}</div>
                <div class="md:w-1/2"></div> <!-- Spacer -->
            `;

            const rightCard = `
                <div class="md:w-1/2"></div> <!-- Spacer -->
                <div class="md:w-1/2 md:pl-8">${contentBlock}</div>
            `;

            return `
            <div class="relative pl-10 md:pl-0 py-4" data-aos="${isRight ? 'fade-left' : 'fade-right'}">
                 <div class="md:flex">
                    ${isRight ? rightCard : leftCard}
                 </div>
                 <!-- Timeline Dot -->
                 <div class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-gray-900 md:left-1/2 md:-translate-x-1/2"></div>
            </div>
            `;
        }).join('');
    }

    function renderEducation() {
        const container = document.getElementById('education-container');
        container.innerHTML = education.map(edu => `
            <div class="bg-gray-800 p-4 rounded-lg" data-aos="fade-up">
                <p class="font-bold text-green-400">${edu.degree}</p>
                <p class="text-gray-300">${edu.institution}</p>
                <p class="text-gray-400 text-sm">${edu.details}</p>
            </div>
        `).join('');
    }

    function renderAchievements() {
        const container = document.getElementById('achievements-container');
        container.innerHTML = achievements.map(ach => `
            <div class="bg-gray-800 p-4 rounded-lg flex items-center gap-4" data-aos="fade-up">
                <i data-feather="star" class="text-green-400"></i>
                <span>${ach}</span>
            </div>
        `).join('');
    }
    
    // Contact Form
    /*
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message!');
        contactForm.reset();
    });
    */

    // --- Terminal ---
    const terminalOutput = document.getElementById('terminal-output');
    const terminalInput = document.getElementById('terminal-input');
    const terminalBody = document.getElementById('terminal-body');
    const terminalContainer = document.getElementById('terminal-container');

    const termCommands = {
        help: 'Available commands: <br> - about<br> - skills<br> - projects<br> - experience<br> - education<br> - contact<br> - clear',
        about: 'Motivated and detail-oriented IT support and cybersecurity professional with hands-on experience in network scanning, system troubleshooting, and threat detection. Proficient in leading tools such as Nmap, Wireshark, Metasploit, and remote access platforms. Strong foundation in vulnerability assessment, technical support, and secure systems operations. Passionate about continuous learning, cybersecurity research, and building robust and reliable infrastructures.',
        skills: () => Object.keys(skills).map(category => `<strong>${category}:</strong> ${skills[category].join(', ')}`).join('<br>'),
        projects: () => projects.map(p => `<strong>${p.title}:</strong> ${p.description}`).join('<br>'),
        experience: () => experience.map(e => `<strong>${e.role} at ${e.company} (${e.date}):</strong> ${e.description}`).join('<br>'),
        education: () => education.map(e => `${e.degree} from ${e.institution} (${e.details})`).join('<br>'),
        contact: 'Email: somashekharh999@gmail.com<br>LinkedIn: linkedin.com/in/somashekharhiremath<br>GitHub: github.com/Somashekharh',
        clear: () => {
            terminalOutput.innerHTML = '';
            return '';
        }
    };

    function printToTerminal(text) {
        terminalOutput.innerHTML += `<p>${text}</p>`;
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    function handleTerminalCommand(command) {
        printToTerminal(`<span class="text-green-400">user@somashekhar:~$</span> ${command}`);
        const cmd = command.toLowerCase().trim();
        const output = termCommands[cmd];
        
        if (output) {
            if (typeof output === 'function') {
                printToTerminal(output());
            } else {
                printToTerminal(output);
            }
        } else {
            printToTerminal(`Command not found: ${command}. Type 'help' for a list of commands.`);
        }
        terminalInput.value = '';
    }

    terminalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && terminalInput.value) {
            handleTerminalCommand(terminalInput.value);
        }
    });

    terminalContainer.addEventListener('click', () => {
        terminalInput.focus();
    });
    
    printToTerminal("Welcome to my interactive terminal!");
    printToTerminal("Type 'help' to see a list of available commands.");


    renderProjects();
    renderSkills();
    renderCertifications();
    renderExperience();
    renderEducation();
    renderAchievements();

    // Final feather icons replacement
    feather.replace();
}); 