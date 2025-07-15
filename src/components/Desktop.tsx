import React, { useState } from 'react';
import { Github, Linkedin, Twitter, FileText, User, Briefcase, GraduationCap, Award } from 'lucide-react';
import DesktopIcon from './DesktopIcon';
import XPWindow from './XPWindow';
import Taskbar from './Taskbar';

const Desktop: React.FC = () => {
  const [openWindows, setOpenWindows] = useState<Record<string, boolean>>({
    resume: false,
    about: false,
    skills: false,
    experience: false
  });

  const [minimizedWindows, setMinimizedWindows] = useState<Record<string, boolean>>({
    resume: false,
    about: false,
    skills: false,
    experience: false
  });

  const openWindow = (windowId: string) => {
    setOpenWindows(prev => ({ ...prev, [windowId]: true }));
  };

  const closeWindow = (windowId: string) => {
    setOpenWindows(prev => ({ ...prev, [windowId]: false }));
    setMinimizedWindows(prev => ({ ...prev, [windowId]: false }));
  };

  const minimizeWindow = (windowId: string) => {
    setMinimizedWindows(prev => ({ ...prev, [windowId]: true }));
  };

  const restoreWindow = (windowId: string) => {
    setMinimizedWindows(prev => ({ ...prev, [windowId]: false }));
  };

  const openExternalLink = (url: string) => {
    window.open(url, '_blank');
  };

  const getOpenWindowTitles = () => {
    return Object.entries(openWindows)
      .filter(([_, isOpen]) => isOpen)
      .map(([windowId, _]) => {
        const titles: Record<string, string> = {
          resume: 'Resume - Owen Anderson',
          about: 'About Me - Owen Anderson',
          skills: 'Skills - Owen Anderson',
          experience: 'Experience - Owen Anderson'
        };
        return { id: windowId, title: titles[windowId], isMinimized: minimizedWindows[windowId] };
      });
  };

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: 'url(/lovable-uploads/256b2b3e-03f7-4071-8d63-a740debde2aa.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Desktop Icons */}
      <div className="absolute top-4 left-4 space-y-4">
        <DesktopIcon
          icon={FileText}
          label="Resume"
          onClick={() => openWindow('resume')}
        />
        <DesktopIcon
          icon={User}
          label="About Me"
          onClick={() => openWindow('about')}
        />
        <DesktopIcon
          icon={Award}
          label="Skills"
          onClick={() => openWindow('skills')}
        />
        <DesktopIcon
          icon={Briefcase}
          label="Experience"
          onClick={() => openWindow('experience')}
        />
        <DesktopIcon
          icon={Github}
          label="GitHub"
          onClick={() => openExternalLink('https://github.com')}
        />
        <DesktopIcon
          icon={Linkedin}
          label="LinkedIn"
          onClick={() => openExternalLink('https://linkedin.com')}
        />
        <DesktopIcon
          icon={Twitter}
          label="Twitter"
          onClick={() => openExternalLink('https://twitter.com')}
        />
      </div>

      {/* Windows */}
      <XPWindow
        title="Resume - Owen Anderson"
        isOpen={openWindows.resume}
        isMinimized={minimizedWindows.resume}
        onClose={() => closeWindow('resume')}
        onMinimize={() => minimizeWindow('resume')}
        initialPosition={{ x: 150, y: 50 }}
        width={600}
        height={500}
      >
        <div className="space-y-4 text-sm">
          <div className="text-center border-b pb-4">
            <h1 className="text-2xl font-bold text-xp-text">Owen Anderson</h1>
            <p className="text-xp-text-light">Software Developer</p>
            <p className="text-xp-text-light">owen@example.com | (555) 123-4567</p>
          </div>
          
          <div>
            <h2 className="text-lg font-bold text-xp-text mb-2">Professional Summary</h2>
            <p className="text-xp-text">
              Experienced software developer with expertise in modern web technologies including React, TypeScript, and Node.js. 
              Passionate about creating user-friendly applications and solving complex technical challenges.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-xp-text mb-2">Experience</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-xp-text">Senior Frontend Developer</h3>
                <p className="text-xp-text-light">Tech Company Inc. | 2022 - Present</p>
                <ul className="list-disc list-inside text-xp-text-light text-xs ml-4">
                  <li>Led development of React-based applications</li>
                  <li>Implemented responsive designs and improved UX</li>
                  <li>Mentored junior developers</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-xp-text">Frontend Developer</h3>
                <p className="text-xp-text-light">Startup Solutions | 2020 - 2022</p>
                <ul className="list-disc list-inside text-xp-text-light text-xs ml-4">
                  <li>Built modern web applications using React and TypeScript</li>
                  <li>Collaborated with design team on UI/UX implementation</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold text-xp-text mb-2">Education</h2>
            <div>
              <h3 className="font-semibold text-xp-text">Bachelor of Computer Science</h3>
              <p className="text-xp-text-light">University of Technology | 2016 - 2020</p>
            </div>
          </div>
        </div>
      </XPWindow>

      <XPWindow
        title="About Me - Owen Anderson"
        isOpen={openWindows.about}
        isMinimized={minimizedWindows.about}
        onClose={() => closeWindow('about')}
        onMinimize={() => minimizeWindow('about')}
        initialPosition={{ x: 200, y: 100 }}
        width={500}
        height={400}
      >
        <div className="space-y-4 text-sm">
          <h2 className="text-lg font-bold text-xp-text">About Owen Anderson</h2>
          <p className="text-xp-text">
            Hello! I'm Owen Anderson, a passionate software developer with a love for creating 
            innovative web applications. I enjoy working with modern technologies and am always 
            eager to learn new skills and take on challenging projects.
          </p>
          <p className="text-xp-text">
            When I'm not coding, you can find me exploring new technologies, contributing to 
            open-source projects, or enjoying outdoor activities. I believe in writing clean, 
            maintainable code and creating exceptional user experiences.
          </p>
          <div>
            <h3 className="font-semibold text-xp-text mb-2">Interests</h3>
            <ul className="list-disc list-inside text-xp-text-light">
              <li>Web Development</li>
              <li>Open Source Contributions</li>
              <li>UI/UX Design</li>
              <li>Technology Innovation</li>
            </ul>
          </div>
        </div>
      </XPWindow>

      <XPWindow
        title="Skills - Owen Anderson"
        isOpen={openWindows.skills}
        isMinimized={minimizedWindows.skills}
        onClose={() => closeWindow('skills')}
        onMinimize={() => minimizeWindow('skills')}
        initialPosition={{ x: 250, y: 150 }}
        width={450}
        height={400}
      >
        <div className="space-y-4 text-sm">
          <h2 className="text-lg font-bold text-xp-text">Technical Skills</h2>
          
          <div>
            <h3 className="font-semibold text-xp-text mb-2">Frontend Technologies</h3>
            <div className="grid grid-cols-2 gap-2 text-xp-text-light">
              <div>• React</div>
              <div>• TypeScript</div>
              <div>• JavaScript</div>
              <div>• HTML5/CSS3</div>
              <div>• Tailwind CSS</div>
              <div>• Next.js</div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-xp-text mb-2">Backend Technologies</h3>
            <div className="grid grid-cols-2 gap-2 text-xp-text-light">
              <div>• Node.js</div>
              <div>• Express</div>
              <div>• PostgreSQL</div>
              <div>• MongoDB</div>
              <div>• REST APIs</div>
              <div>• GraphQL</div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-xp-text mb-2">Tools & Platforms</h3>
            <div className="grid grid-cols-2 gap-2 text-xp-text-light">
              <div>• Git</div>
              <div>• Docker</div>
              <div>• AWS</div>
              <div>• Vercel</div>
              <div>• VS Code</div>
              <div>• Figma</div>
            </div>
          </div>
        </div>
      </XPWindow>

      <XPWindow
        title="Experience - Owen Anderson"
        isOpen={openWindows.experience}
        isMinimized={minimizedWindows.experience}
        onClose={() => closeWindow('experience')}
        onMinimize={() => minimizeWindow('experience')}
        initialPosition={{ x: 300, y: 200 }}
        width={550}
        height={450}
      >
        <div className="space-y-4 text-sm">
          <h2 className="text-lg font-bold text-xp-text">Professional Experience</h2>
          
          <div className="space-y-4">
            <div className="border-b pb-3">
              <h3 className="font-semibold text-xp-text">Senior Frontend Developer</h3>
              <p className="text-xp-text-light font-medium">Tech Company Inc. | 2022 - Present</p>
              <ul className="list-disc list-inside text-xp-text-light mt-2 space-y-1">
                <li>Led a team of 4 developers in building scalable React applications</li>
                <li>Implemented modern state management solutions using Redux Toolkit</li>
                <li>Improved application performance by 40% through code optimization</li>
                <li>Mentored junior developers and conducted code reviews</li>
                <li>Collaborated with product managers and designers on feature planning</li>
              </ul>
            </div>

            <div className="border-b pb-3">
              <h3 className="font-semibold text-xp-text">Frontend Developer</h3>
              <p className="text-xp-text-light font-medium">Startup Solutions | 2020 - 2022</p>
              <ul className="list-disc list-inside text-xp-text-light mt-2 space-y-1">
                <li>Built responsive web applications using React and TypeScript</li>
                <li>Implemented pixel-perfect designs from Figma mockups</li>
                <li>Integrated RESTful APIs and managed application state</li>
                <li>Participated in agile development processes and sprint planning</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-xp-text">Junior Web Developer</h3>
              <p className="text-xp-text-light font-medium">Digital Agency | 2019 - 2020</p>
              <ul className="list-disc list-inside text-xp-text-light mt-2 space-y-1">
                <li>Developed client websites using HTML, CSS, and JavaScript</li>
                <li>Maintained and updated existing web applications</li>
                <li>Learned modern development practices and tools</li>
              </ul>
            </div>
          </div>
        </div>
      </XPWindow>

      {/* Taskbar */}
      <Taskbar openWindows={getOpenWindowTitles()} onWindowClick={restoreWindow} />
    </div>
  );
};

export default Desktop;