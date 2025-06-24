document.addEventListener('DOMContentLoaded', function() {
    // Calculate and display age
    function calculateAge(birthdate) {
        const birthDate = new Date(birthdate);
        const today = new Date();
        
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        
        return age;
    }
    
    const dob = '1991-07-10';
    document.getElementById('age').textContent = calculateAge(dob);
    
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Terminal simulation
    const terminalOutput = document.getElementById('terminal-output');
    const terminalMessages = [
        "> System check complete",
        "> Loading professional profile...",
        "> AI Deployment: ONLINE",
        "> Network Admin: ONLINE",
        "> CCTV Systems: ONLINE",
        "> All systems operational",
        "> Type 'help' for commands"
    ];
    
    let messageIndex = 0;
    const terminalInterval = setInterval(() => {
        if (messageIndex < terminalMessages.length) {
            const p = document.createElement('p');
            p.textContent = terminalMessages[messageIndex];
            terminalOutput.appendChild(p);
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
            messageIndex++;
        } else {
            clearInterval(terminalInterval);
        }
    }, 800);
    
    // Tab functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            
            // Update active tab button
            tabBtns.forEach(btn => btn.classList.remove('active'));
            btn.classList.add('active');
            
            // Show corresponding content
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabId) {
                    content.classList.add('active');
                }
            });
        });
    });
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.tech-nav');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });
    
    // Smooth scrolling for nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                hamburger.classList.remove('active');
                nav.classList.remove('active');
            }
        });
    });
    
    // Form submission
    const contactForm = document.getElementById('tech-contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = {
            name: this.querySelector('#name').value,
            email: this.querySelector('#email').value,
            subject: this.querySelector('#subject').value,
            message: this.querySelector('#message').value
        };
        
        // Simulate form submission
        terminalOutput.innerHTML += `<p>> New message from ${formData.name}</p>`;
        terminalOutput.innerHTML += `<p>> Subject: ${formData.subject || 'No subject'}</p>`;
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
        
        // Show alert
        alert('Message sent! Thank you for contacting me.');
        
        // Reset form
        this.reset();
    });
    
    // Add blinking cursor to terminal
    setInterval(() => {
        const cursor = document.querySelector('.terminal-body .blink');
        if (cursor) {
            cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
        }
    }, 500);
});