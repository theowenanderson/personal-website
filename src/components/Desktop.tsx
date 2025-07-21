import React, { useState } from 'react';
import { Github, Linkedin, FileText, User, Briefcase } from 'lucide-react';
import DesktopIcon from './DesktopIcon';
import XPWindow from './XPWindow';
import Taskbar from './Taskbar';

// Import Windows XP app icons
import resumeIcon from '@/assets/icons/resume.png';
import aboutIcon from '@/assets/icons/about.png';
import githubIcon from '@/assets/icons/github.png';
import linkedinIcon from '@/assets/icons/linkedin.png';
import backgroundImage from '@/assets/background.png';

const Desktop: React.FC = () => {
  const [openWindows, setOpenWindows] = useState<Record<string, boolean>>({
    resume: false,
    about: false
  });

  const [minimizedWindows, setMinimizedWindows] = useState<Record<string, boolean>>({
    resume: false,
    about: false
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
          about: 'About Me - Owen Anderson'
        };
        return { id: windowId, title: titles[windowId], isMinimized: minimizedWindows[windowId] };
      });
  };

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Desktop Icons */}
      <div className="absolute top-4 left-4 space-y-4">
        <DesktopIcon
          iconSrc={resumeIcon}
          label="Resume"
          onClick={() => openWindow('resume')}
          size="large"
        />
        <DesktopIcon
          iconSrc={aboutIcon}
          label="About Me"
          onClick={() => openWindow('about')}
          size="large"
        />
        <DesktopIcon
          iconSrc={githubIcon}
          label="GitHub"
          onClick={() => openExternalLink('https://github.com/theowenanderson')}
          size="large"
        />
        <DesktopIcon
          iconSrc={linkedinIcon}
          label="LinkedIn"
          onClick={() => openExternalLink('https://linkedin.com/in/theowenanderson')}
          size="large"
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
        width={700}
        height={950}
      >
        <div className="space-y-4 text-sm">
          <div className="text-center border-b pb-4">
            <h1 className="text-2xl font-bold text-xp-text">Owen Anderson</h1>
            <p className="text-xp-text-light">owentheanderson@gmail.com • owenanderson.dev • Tampa, FL</p>
          </div>
          
          <div>
            <h2 className="text-lg font-bold text-xp-text mb-2">Experience</h2>
            <div className="space-y-4">
              <div className="border-b pb-3">
                <h3 className="font-semibold text-xp-text">Software Engineer II</h3>
                <p className="text-xp-text-light font-medium">J.P. Morgan Chase & Co. | Tampa, FL • Jan 2024 – Present</p>
                <ul className="list-disc list-inside text-xp-text-light mt-2 space-y-1 text-xs">
                  <li>Led cloud migration of 8 Oracle production databases to the internal cloud, enabling an average of 12.8M daily SWIFT transactions totaling $25 trillion</li>
                  <li>Built an internal full-stack chat application using Python, React, OpenAI GPT-4, Pandas, and cx_Oracle for natural language SQL query generation and execution</li>
                  <li>Fine-tuned an OpenAI LLM to transform SWIFT message testing data in accordance with annual standards, reducing manual transformation time</li>
                  <li>Developed Java Spring Boot application to archive data into Amazon S3 Glacier, optimizing long-term storage and compliance</li>
                </ul>
              </div>
              
              <div className="border-b pb-3">
                <h3 className="font-semibold text-xp-text">Software Engineer I</h3>
                <p className="text-xp-text-light font-medium">J.P. Morgan Chase & Co. | Tampa, FL • Jul 2021 – Jan 2024</p>
                <ul className="list-disc list-inside text-xp-text-light mt-2 space-y-1 text-xs">
                  <li>Rebased 100+ managed file transfer services to new data centers, ensuring continuity of scheduled reporting and audit processes for clients</li>
                  <li>Created Java service to extract structured data from SWIFT XML messages via webMethods Integration Server</li>
                  <li>Built regression testing suite using JUnit, Cucumber, and Jenkins</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-xp-text">Paraspeech – ML Speech Therapy Mobile App (Capstone Project)</h3>
                <p className="text-xp-text-light font-medium">Orlando, FL • Jan 2021 - May 2021</p>
                <ul className="list-disc list-inside text-xp-text-light mt-2 space-y-1 text-xs">
                  <li>Built a mobile speech therapy app using React Native, Firebase, and TensorFlow to analyze and assist speech patterns</li>
                  <li>Designed responsive UI with end-to-end testing via Jest and Expo</li>
                  <li>Integrated voice recording, playback, and Firebase connectivity for real-time feedback</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold text-xp-text mb-2">Education</h2>
            <div>
              <h3 className="font-semibold text-xp-text">University of Central Florida</h3>
              <p className="text-xp-text-light">B.S. in Computer Science • Orlando, FL • May 2021</p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold text-xp-text mb-2">Certifications and Skills</h2>
            <div className="space-y-2">
              <div>
                <h3 className="font-semibold text-xp-text">Certifications:</h3>
                <p className="text-xp-text-light">AWS Cloud Practitioner</p>
              </div>
              <div>
                <h3 className="font-semibold text-xp-text">Languages & Tools:</h3>
                <p className="text-xp-text-light">Python, Java, SQL, React, JavaScript, Spring Boot, Git, Jenkins, CI/CD, AWS S3, TensorFlow, Pandas, Hugging Face (familiar), JUnit, Cucumber, Docker (familiar)</p>
              </div>
            </div>
          </div>

          <div className="text-center pt-4 border-t pb-4">
            <button 
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Resume.pdf';
                link.download = 'Owen_Anderson_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="xp-button px-6 py-2 text-sm font-medium"
            >
              📄 Download PDF Resume
            </button>
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
          <h2 className="text-lg font-bold text-xp-text">Hello, I'm Owen :)</h2>
          <p className="text-xp-text">
            I'm a software engineer currently working at JP Morgan Chase in the Commercial and Investment Banking division.
          </p>

          <div>
            <h3 className="font-semibold text-xp-text mb-2">Interests</h3>
            <ul className="list-disc list-inside text-xp-text-light">
              <li>AI Driven Development</li>
              <li>Generative AI solutions</li>
              <li>Python and React</li>
              <li>Completing JIRA tickets</li>
            </ul>
          </div>
        </div>
      </XPWindow>





      {/* Taskbar */}
      <Taskbar openWindows={getOpenWindowTitles()} onWindowClick={restoreWindow} />
    </div>
  );
};

export default Desktop;