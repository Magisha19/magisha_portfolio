import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Maximize2, Minimize2, Trash2 } from 'lucide-react';
import { PageId } from '../../types/portfolio';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface CyberTerminalProps {
  onNavigate?: (page: PageId) => void;
}

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export const CyberTerminal: React.FC<CyberTerminalProps> = ({ onNavigate }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1.5 text-xs text-[#A1A1AA]">
          <p className="text-[#D4AF37] font-semibold">
            Magisha N // Security Operations & AI Safety Terminal [v2.4]
          </p>
          <p>Type a command or click a quick command below to inspect profile credentials.</p>
          <p className="text-[#71717A]">Type <span className="text-[#F4F4F5] font-mono">help</span> to list available commands.</p>
        </div>
      ),
    },
  ]);
  const [isExpanded, setIsExpanded] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const availableCommands = ['help', 'about', 'skills', 'projects', 'soc', 'certs', 'contact', 'clear'];

  const executeCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    let outputContent: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        outputContent = (
          <div className="space-y-1 text-xs">
            <p className="text-[#D4AF37] font-semibold">Available Commands:</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-mono text-[#E4E4E7]">
              <div><span className="text-[#800020] dark:text-[#E11D48] font-bold">about</span> : Candidate summary</div>
              <div><span className="text-[#800020] dark:text-[#E11D48] font-bold">skills</span> : Technical capabilities</div>
              <div><span className="text-[#800020] dark:text-[#E11D48] font-bold">projects</span> : Verified project cases</div>
              <div><span className="text-[#800020] dark:text-[#E11D48] font-bold">soc</span> : L1 SOC workflows</div>
              <div><span className="text-[#800020] dark:text-[#E11D48] font-bold">certs</span> : Verified credentials</div>
              <div><span className="text-[#800020] dark:text-[#E11D48] font-bold">contact</span> : Verified channels</div>
              <div><span className="text-[#800020] dark:text-[#E11D48] font-bold">whoami</span> : Current session info</div>
              <div><span className="text-[#800020] dark:text-[#E11D48] font-bold">clear</span> : Clear terminal history</div>
            </div>
          </div>
        );
        break;

      case 'about':
        outputContent = (
          <div className="space-y-1.5 text-xs text-[#D4D4D8]">
            <p className="font-semibold text-[#F4F4F5]">{PERSONAL_INFO.name} — {PERSONAL_INFO.title}</p>
            <p className="text-[#A1A1AA]">{PERSONAL_INFO.shortSummary}</p>
            <p className="text-[#D4AF37]">Education: {PERSONAL_INFO.degree} · CGPA: {PERSONAL_INFO.cgpa}</p>
            {onNavigate && (
              <button
                onClick={() => onNavigate('about')}
                className="mt-1 text-xs underline text-[#E11D48] hover:text-[#FF4D6D] cursor-pointer"
              >
                Open Full About Page →
              </button>
            )}
          </div>
        );
        break;

      case 'skills':
        outputContent = (
          <div className="space-y-2 text-xs text-[#D4D4D8]">
            <p className="text-[#D4AF37] font-semibold">Verified Technical Core:</p>
            <div className="space-y-1 font-mono text-[11px]">
              <p><span className="text-[#A1A1AA]">Security & SOC:</span> Security Monitoring, Log & Event Analysis, Incident Triage, IDS, Phishing Sim</p>
              <p><span className="text-[#A1A1AA]">Protocols:</span> TCP/IP, DNS, HTTP/HTTPS, Modbus/TCP, Wireshark, Scapy, Nmap</p>
              <p><span className="text-[#A1A1AA]">AI Safety:</span> Prompt-based Testing, Red-teaming (36 prompts/252 runs), LLM Failure Analysis</p>
              <p><span className="text-[#A1A1AA]">Engineering:</span> Python, C/C++, PyQt5, Git/GitHub, Linux Systems</p>
            </div>
          </div>
        );
        break;

      case 'projects':
        outputContent = (
          <div className="space-y-2 text-xs text-[#D4D4D8]">
            <p className="text-[#D4AF37] font-semibold">Selected Engineering Projects:</p>
            <div className="space-y-1.5">
              <div>
                <p className="font-bold text-[#F4F4F5]">1. NeuroFence (AI Security & Reliability)</p>
                <p className="text-[#A1A1AA]">Evaluated 36 adversarial prompts across 252 runs. Built PyQt5 SOC desktop UI for telemetry.</p>
              </div>
              <div>
                <p className="font-bold text-[#F4F4F5]">2. VoltGuard (Industrial Equipment Monitoring)</p>
                <p className="text-[#A1A1AA]">Modbus/TCP industrial SCADA packet inspection with Scapy & live sensor telemetry (RPM, pressure, flow).</p>
              </div>
              <div>
                <p className="font-bold text-[#F4F4F5]">3. Two-Stage IDS for Minority Attack Detection</p>
                <p className="text-[#A1A1AA]">Peer-reviewed research paper presented at ICCET 2026 International Conference, Chennai.</p>
              </div>
            </div>
            {onNavigate && (
              <button
                onClick={() => onNavigate('projects')}
                className="mt-1 text-xs underline text-[#E11D48] hover:text-[#FF4D6D] cursor-pointer"
              >
                Inspect All Project Case Studies →
              </button>
            )}
          </div>
        );
        break;

      case 'soc':
        outputContent = (
          <div className="space-y-1.5 text-xs text-[#D4D4D8]">
            <p className="text-[#D4AF37] font-semibold">L1 SOC Analyst Competencies:</p>
            <ul className="list-disc list-inside space-y-1 text-[#A1A1AA]">
              <li>Alert triage and initial categorization based on severity matrix.</li>
              <li>Log parsing and event correlation (Syslog, authentication records, firewall drops).</li>
              <li>Network traffic analysis with Wireshark to inspect packet payloads and flags.</li>
              <li>Basic incident handling SOPs and structured documentation for Tier 2 escalation.</li>
            </ul>
          </div>
        );
        break;

      case 'certs':
        outputContent = (
          <div className="space-y-1 text-xs text-[#D4D4D8]">
            <p className="text-[#D4AF37] font-semibold">Verified Credentials Highlight:</p>
            <p>• Cisco: Introduction to Cybersecurity</p>
            <p>• Mastercard / Forage: Cybersecurity Job Simulation</p>
            <p>• Infotact Solutions: Security Associate L1 Intern Certificate</p>
            <p>• NPTEL IIT Madras: Introduction to Large Language Models (56%)</p>
            <p>• UNICEF YuWaah: Digital Literacy & Cyber Safety (92%)</p>
            <p>• IBM SkillsBuild: AI Fundamentals</p>
            <p>• Sriram Engineering College: 2nd Rank Academic Excellence Award</p>
          </div>
        );
        break;

      case 'contact':
        outputContent = (
          <div className="space-y-1 text-xs text-[#D4D4D8]">
            <p className="text-[#D4AF37] font-semibold">Verified Contact Channels:</p>
            <p>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#E11D48] underline">{PERSONAL_INFO.email}</a></p>
            <p>Phone: {PERSONAL_INFO.phone}</p>
            <p>LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-[#E11D48] underline">{PERSONAL_INFO.linkedinDisplay}</a></p>
            <p>GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-[#E11D48] underline">{PERSONAL_INFO.githubDisplay}</a></p>
            <p>Location: {PERSONAL_INFO.location}</p>
          </div>
        );
        break;

      case 'whoami':
        outputContent = (
          <div className="text-xs text-[#D4D4D8]">
            <p className="text-[#D4AF37]">Guest User // Visiting Magisha N Cybersecurity Engineering Portfolio</p>
            <p className="text-[#A1A1AA]">Session: Interactive Read-Only SOC Diagnostic Terminal</p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        outputContent = (
          <div className="text-xs text-[#EF4444]">
            Command not recognized: <span className="font-mono">"{trimmed}"</span>. Type <span className="text-[#D4AF37] font-mono">help</span> for supported commands.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: trimmed, output: outputContent }]);
    setInputVal('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <div className={`bg-[#18181B] border border-[#27272A] rounded-xl overflow-hidden shadow-xl text-left transition-all duration-200 ${isExpanded ? 'h-[480px]' : 'h-[360px]'}`}>
      
      {/* Terminal Title Bar */}
      <div className="bg-[#121214] px-4 py-2.5 border-b border-[#27272A] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#EF4444]/80" />
          <div className="w-3 h-3 rounded-full bg-[#EAB308]/80" />
          <div className="w-3 h-3 rounded-full bg-[#22C55E]/80" />
          <div className="flex items-center gap-2 ml-2 text-xs font-mono text-[#A1A1AA]">
            <TerminalIcon className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>soc-analyst@magisha-workstation:~</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[#71717A]">
          <button
            onClick={() => setHistory([])}
            className="p-1 hover:text-white transition-colors cursor-pointer"
            title="Clear Terminal"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 hover:text-white transition-colors cursor-pointer"
            title={isExpanded ? 'Collapse' : 'Expand'}
          >
            {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Terminal Content Area */}
      <div className="p-4 font-mono text-xs overflow-y-auto h-[calc(100%-88px)] space-y-3">
        {history.map((item, index) => (
          <div key={index} className="space-y-1">
            <div className="flex items-center gap-2 text-[#800020] dark:text-[#E11D48] font-bold">
              <span>$</span>
              <span className="text-[#F4F4F5]">{item.command}</span>
            </div>
            <div className="pl-4">{item.output}</div>
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Quick Command Suggestions & Input Bar */}
      <div className="p-2.5 bg-[#121214] border-t border-[#27272A] flex flex-col gap-2">
        <div className="flex items-center gap-1.5 overflow-x-auto text-[11px] pb-1 no-scrollbar">
          <span className="text-[#71717A] text-[10px] uppercase font-sans tracking-wider whitespace-nowrap">Quick:</span>
          {availableCommands.slice(0, 6).map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-2 py-0.5 bg-[#27272A] hover:bg-[#3F3F46] text-[#E4E4E7] rounded font-mono transition-colors whitespace-nowrap cursor-pointer text-[11px]"
            >
              {cmd}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <span className="text-[#800020] dark:text-[#E11D48] font-bold font-mono">$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help' or any command..."
            className="flex-1 bg-transparent text-[#F4F4F5] placeholder-[#71717A] font-mono text-xs focus:outline-none"
          />
          <button
            type="submit"
            className="p-1 text-[#71717A] hover:text-[#F4F4F5] transition-colors cursor-pointer"
            aria-label="Send command"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
