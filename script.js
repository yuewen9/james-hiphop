// ========== MATRIX RAIN EFFECT ==========
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const charArray = chars.split('');

const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = [];
for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

function drawMatrix() {
    ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00ff41';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 50);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// ========== RANDOM DATA ==========
const randomData = {
    aliases: ['ghost', 'ph4nt0m', 'n0body', 'void', 'shadow', 'cipher', 'null', 'zero'],
    roles: [
        'Full Stack Sorcerer',
        'Code Wizard',
        'Digital Nomad',
        'System Architect',
        'Bug Hunter',
        'Pixel Pusher',
        'Data Alchemist'
    ],
    skills: {
        languages: [
            'JavaScript', 'TypeScript', 'Python', 'Rust', 'Go', 'C++', 'Haskell', 'Lua', 'Ruby', 'PHP'
        ],
        frameworks: [
            'React', 'Vue', 'Angular', 'Svelte', 'Next.js', 'Nuxt', 'Django', 'FastAPI', 'Express', 'NestJS'
        ],
        databases: [
            'PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'SQLite', 'Cassandra', 'DynamoDB', 'Firebase'
        ],
        devops: [
            'Docker', 'Kubernetes', 'AWS', 'GCP', 'Azure', 'CI/CD', 'Terraform', 'Ansible', 'Jenkins'
        ],
        security: [
            'Penetration Testing', 'Code Audit', 'Cryptography', 'Network Security', 'OWASP', 'CTF'
        ],
        tools: [
            'Git', 'Vim', 'Linux', 'Nginx', 'Webpack', 'Vite', 'GraphQL', 'gRPC', 'Kafka'
        ]
    },
    experience: [
        {
            role: 'Senior Systems Engineer',
            company: 'CyberDyne Systems',
            period: '2021 - Present',
            desc: 'Building the future, one commit at a time.'
        },
        {
            role: 'Full Stack Developer',
            company: 'Tyrell Corp',
            period: '2019 - 2021',
            desc: 'Created replicant... I mean, replica systems.'
        },
        {
            role: 'Security Researcher',
            company: 'Massive Dynamic',
            period: '2017 - 2019',
            desc: 'Breaking things to make them stronger.'
        },
        {
            role: 'Junior Developer',
            company: 'Stark Industries',
            period: '2015 - 2017',
            desc: 'Started my journey into the code.'
        }
    ],
    education: [
        {
            degree: 'B.S. Computer Science',
            school: 'MIT',
            year: '2015'
        },
        {
            degree: 'M.S. Cybersecurity',
            school: 'Stanford',
            year: '2017'
        }
    ],
    projects: [
        { name: 'shadow-broker', desc: 'Anonymous marketplace prototype' },
        { name: 'ghost-shell', desc: 'Privacy-focused communication tool' },
        { name: 'neural-net-viz', desc: 'AI network visualizer' },
        { name: 'crypto-miner', desc: 'Educational mining simulator' },
        { name: 'port-scanner', desc: 'Network reconnaissance tool' },
        { name: 'key-logger', desc: 'Security demonstration tool' }
    ],
    certifications: [
        'OSCP', 'CEH', 'CISSP', 'AWS Solutions Architect', 'GCP Professional',
        'CKA', 'RHCE', 'CompTIA Security+'
    ],
    contacts: [
        { label: 'Email', value: 'ghost@nullvoid.com' },
        { label: 'GitHub', value: 'github.com/ghost-shell' },
        { label: 'Twitter', value: '@ghost_protocol' },
        { label: 'Discord', value: 'ghost#1337' }
    ],
    funFacts: [
        'Once hacked into a smart toaster',
        'Can speak in binary... slowly',
        'Never used an IDE, vim for life',
        'Collected 500+ CTF flags',
        'Named my cat "Ping"',
        'Dream in regex patterns',
        'Firm believer that 127.0.0.1 is the loneliest number',
        'Still have my first "Hello World" program'
    ],
    quotes: [
        '"Any sufficiently advanced technology is indistinguishable from magic."',
        '"The matrix has its roots in primitive arcade games."',
        '"The code is the law."',
        '"In a world of 1s and 0s, be a maybe."',
        '"There is no spoon."',
        '"Wake up, Neo..."',
        '"Follow the white rabbit."',
        '"I know Kung Fu."'
    ]
};

// ========== ASCII ARTS ==========
const asciiArts = [
`
░██████╗██╗██████╗░██╗░░██╗░█████╗░░██████╗
██╔════╝██║██╔══██╗██║░░██║██╔══██╗██╔════╝
╚█████╗░██║██████╔╝███████║███████║╚█████╗░
░╚═══██╗██║██╔══██╗██╔══██║██╔══██║░╚═══██╗
██████╔╝██║██║░░██║██║░░██║██║░░██║██████╔╝
╚═════╝░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░
`,
`
▄████▄   ██░ ██  ▄▄▄       ███▄ ▄███▄
▒██▀ ▀█  ▓██░ ██▒▒████▄    ▓██▒▀█▀ ██▒
▒▓█    ▄ ▒██▀▀██░▒██  ▀█▄  ▓██    ▓██░
▒▓▓▄ ▄██▒░▓█ ░██ ░██▄▄▄▄██ ▒██    ▒██
▒ ▓███▀ ░░▓█▒░██▓ ▓█   ▓██▒▒██▒   ░██▒
░ ░▒ ▒  ░ ▒ ░░▒░▒ ▒▒   ▓▒█░░ ▒░   ░  ░
`,
`
┌─┐┌─┐┌┬┐┬ ┬┬─┐┌─┐
└─┐├┤  │ │ │├┬┘├─┘
└─┘└─┘ ┴ └─┘┴└─┴─┖
G H O S T
`,
`
███████╗███╗   ██╗ ██████╗ ██╗    ██╗
██╔════╝████╗  ██║██╔═══██╗██║    ██║
███████╗██╔██╗ ██║██║   ██║██║ █╗ ██║
╚════██║██║╚██╗██║██║   ██║██║███╗██║
███████║██║ ╚████║╚██████╔╝╚███╔███╔╝
╚══════╝╚═╝  ╚═══╝ ╚═════╝  ╚══╝╚══╝
`
];

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function randomItems(array, count) {
    return shuffle([...array]).slice(0, Math.min(count, array.length));
}

// ========== TYPEWRITER EFFECT ==========
const output = document.getElementById('output');
const cursor = document.getElementById('cursor');

let lineIndex = 0;
let charIndex = 0;
let currentLines = [];

function addLine(text, className = '') {
    const line = document.createElement('div');
    line.className = 'line ' + className;
    output.appendChild(line);
    currentLines.push(line);
    return line;
}

async function typeText(element, text, speed = 30) {
    for (let i = 0; i < text.length; i++) {
        element.textContent += text[i];
        await new Promise(r => setTimeout(r, speed + Math.random() * 20));
        // Auto scroll
        const terminalBody = document.querySelector('.terminal-body');
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }
}

async function instantText(element, text) {
    element.textContent = text;
}

// ========== BOOT SEQUENCE ==========
async function bootSequence() {
    // Boot messages
    const bootMessages = [
        { text: 'BIOS Version 4.5.2 - GHOST_CORP', class: 'dim' },
        { text: 'Memory Test: 640K OK', class: 'dim' },
        { text: 'Extended Memory: 1048576K OK', class: 'dim' },
        { text: 'Loading kernel...', class: 'dim' },
        { text: 'Mounting filesystems... [OK]', class: 'success' },
        { text: 'Starting network... [OK]', class: 'success' },
        { text: 'Initializing security protocols...', class: 'warning' },
        { text: 'Bypassing firewall... [OK]', class: 'success' },
        { text: '', class: '' },
        { text: 'WELCOME TO GHOST_SHELL v2.0', class: 'header' },
        { text: 'Unauthorized access will be traced... just kidding.', class: 'dim' },
        { text: '', class: '' }
    ];

    for (const msg of bootMessages) {
        const line = addLine('', msg.class);
        await typeText(line, msg.text, 15);
        await new Promise(r => setTimeout(r, 100));
    }
}

// ========== RESUME CONTENT ==========
async function showResume() {
    const alias = randomItem(randomData.aliases);
    const role = randomItem(randomData.roles);
    const ascii = randomItem(asciiArts);

    // ASCII Art Header
    const artLine = addLine('', 'ascii-art');
    await instantText(artLine, ascii);

    // Name Section
    addLine('', 'header');
    const headerLine = addLine('', 'header');
    await typeText(headerLine, `IDENTITY FILE: ${alias.toUpperCase()}`, 40);

    // Role
    const roleLine = addLine('', 'subheader');
    await typeText(roleLine, `Class: ${role}`, 30);

    await new Promise(r => setTimeout(r, 500));

    // Skills Section
    addLine('', 'divider');
    const skillsHeader = addLine('', 'header');
    await typeText(skillsHeader, 'SKILL MATRIX', 40);

    const skillCategories = Object.entries(randomData.skills);
    for (const [category, items] of skillCategories) {
        const catLine = addLine('', 'subheader');
        await typeText(catLine, category.toUpperCase(), 30);

        const selected = randomItems(items, Math.floor(Math.random() * 3) + 3);
        for (const skill of selected) {
            const skillLine = addLine('', 'skill-item');
            await instantText(skillLine, skill);
        }
        await new Promise(r => setTimeout(r, 200));
    }

    await new Promise(r => setTimeout(r, 500));

    // Experience Section
    addLine('', 'divider');
    const expHeader = addLine('', 'header');
    await typeText(expHeader, 'PROTOCOL LOGS', 40);

    const selectedExp = randomItems(randomData.experience, 3);
    for (const exp of selectedExp) {
        addLine('', 'subheader');
        const expTitle = addLine('');
        await typeText(expTitle, `${exp.role} @ ${exp.company}`, 25);

        const expPeriod = addLine('', 'dim');
        await instantText(expPeriod, `    [${exp.period}]`);

        const expDesc = addLine('', 'dim');
        await instantText(expDesc, `    > ${exp.desc}`);
        await new Promise(r => setTimeout(r, 200));
    }

    await new Promise(r => setTimeout(r, 500));

    // Projects Section
    addLine('', 'divider');
    const projHeader = addLine('', 'header');
    await typeText(projHeader, 'OPERATIONS', 40);

    const selectedProj = randomItems(randomData.projects, 4);
    for (const proj of selectedProj) {
        const projLine = addLine('', 'skill-item');
        await instantText(projLine, `${proj.name} - ${proj.desc}`);
        await new Promise(r => setTimeout(r, 100));
    }

    await new Promise(r => setTimeout(r, 500));

    // Certifications
    addLine('', 'divider');
    const certHeader = addLine('', 'header');
    await typeText(certHeader, 'CREDENTIALS', 40);

    const selectedCerts = randomItems(randomData.certifications, 4);
    const certLine = addLine('', 'dim');
    await instantText(certLine, '    ' + selectedCerts.join(' | '));

    await new Promise(r => setTimeout(r, 500));

    // Education
    addLine('', 'divider');
    const eduHeader = addLine('', 'header');
    await typeText(eduHeader, 'DATA UPLINKS', 40);

    for (const edu of randomData.education) {
        const eduLine = addLine('', 'skill-item');
        await instantText(eduLine, `${edu.degree} - ${edu.school} [${edu.year}]`);
    }

    await new Promise(r => setTimeout(r, 500));

    // Fun Facts
    addLine('', 'divider');
    const factHeader = addLine('', 'header');
    await typeText(factHeader, 'ENCRYPTED DATA', 40);

    const selectedFacts = randomItems(randomData.funFacts, 2);
    for (const fact of selectedFacts) {
        const factLine = addLine('', 'dim');
        await instantText(factLine, `    > ${fact}`);
    }

    await new Promise(r => setTimeout(r, 500));

    // Quote
    addLine('', 'divider');
    const quote = randomItem(randomData.quotes);
    const quoteLine = addLine('', 'dim');
    await typeText(quoteLine, quote, 50);

    await new Promise(r => setTimeout(r, 500));

    // Contacts
    addLine('', 'divider');
    const contactHeader = addLine('', 'header');
    await typeText(contactHeader, 'COMMUNICATION CHANNELS', 40);

    for (const contact of randomData.contacts) {
        const contactLine = addLine('', 'skill-item link');
        await instantText(contactLine, `${contact.label}: ${contact.value}`);
    }

    await new Promise(r => setTimeout(r, 500));

    // Footer
    addLine('', 'divider');
    addLine('', 'dim');
    const footerLine = addLine('', 'dim');
    await instantText(footerLine, '    [ Session terminated. Connection closed. ]');
    const footerLine2 = addLine('', 'dim');
    await instantText(footerLine2, '    Press F5 to establish new connection...');
}

// ========== INITIALIZE ==========
async function init() {
    await bootSequence();
    await new Promise(r => setTimeout(r, 500));
    await showResume();
}

// Start the show
window.addEventListener('load', init);

// Add glitch effect on random intervals
setInterval(() => {
    if (Math.random() > 0.95) {
        document.body.classList.add('glitch');
        setTimeout(() => document.body.classList.remove('glitch'), 300);
    }
}, 1000);
