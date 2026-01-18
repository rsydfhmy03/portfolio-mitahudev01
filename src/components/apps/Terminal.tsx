import React, { useState, useRef, useEffect } from 'react';
import { TerminalLine } from '../../types/os.types';
import { useOS } from '../../context/OSContext';

const INITIAL_LINES: TerminalLine[] = [
  { type: 'output', content: 'Mitahudev OS [Version 1.0.4]' },
  { type: 'output', content: '(c) 2026 Sorcerer Corp. All rights reserved.' },
  { type: 'output', content: '' },
  { type: 'success', content: 'Connected to Colony Server.' },
  { type: 'output', content: 'Type "help" for a list of commands.' },
  { type: 'output', content: '' },
];

const TerminalApp: React.FC = () => {
  const { openWindow, setLanguage, language } = useOS();
  const [lines, setLines] = useState<TerminalLine[]>(INITIAL_LINES);
  const [inputValue, setInputValue] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  const handleCommand = (cmd: string) => {
    const args = cmd.trim().split(' ');
    const command = args[0].toLowerCase();

    let response: TerminalLine[] = [];

    switch (command) {
      case 'help':
        response.push({ type: 'output', content: 'Available commands:' });
        response.push({ type: 'output', content: '  about     - View player profile' });
        response.push({ type: 'output', content: '  projects  - List archived missions' });
        response.push({ type: 'output', content: '  skills    - View cursed tools inventory' });
        response.push({ type: 'output', content: '  clear     - Clear terminal' });
        response.push({ type: 'output', content: '  ping      - Check network latency' });
        response.push({ type: 'output', content: '  sudo      - Execute admin privs' });
        response.push({ type: 'output', content: '  language  - Set system language [en/id]' });
        break;
      case 'clear':
        setLines([]);
        return;
      case 'about':
        response.push({ type: 'success', content: 'Opening Player Profile...' });
        openWindow('profile');
        break;
      case 'projects':
        response.push({ type: 'success', content: 'Accessing Archives...' });
        openWindow('projects');
        break;
      case 'skills':
        response.push({ type: 'success', content: 'Inspecting Cursed Tools...' });
        openWindow('skills');
        break;
      case 'ping':
        response.push({ type: 'output', content: 'Pinging google.com...' });
        response.push({ type: 'output', content: 'Reply from 142.250.190.46: time<1ms (Domain Expansion Active)' });
        break;
      case 'language':
        if (args[1] === 'id') {
            setLanguage('id');
            response.push({ type: 'success', content: 'Language set to Indonesian.' });
        } else if (args[1] === 'en') {
            setLanguage('en');
            response.push({ type: 'success', content: 'Language set to English.' });
        } else {
            response.push({ type: 'output', content: `Current language: ${language}` });
            response.push({ type: 'output', content: 'Usage: language [en|id]' });
        }
        break;
      case 'sudo':
        if (args[1] === 'hire_me') {
           response.push({ type: 'success', content: 'INITIATING RECRUITMENT PROTOCOL...' });
           response.push({ type: 'output', content: 'Contact: dev@sorcerer.net' });
        } else {
           response.push({ type: 'error', content: 'Permission denied. You are not a Special Grade yet.' });
        }
        break;
      case '':
        break;
      default:
        response.push({ type: 'error', content: `Command not found: ${command}` });
    }

    setLines(prev => [...prev, { type: 'input', content: cmd }, ...response]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(inputValue);
      setInputValue('');
    }
  };

  return (
    <div 
      className="h-full bg-black/90 p-4 font-mono text-sm overflow-hidden flex flex-col"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex-1 overflow-y-auto space-y-1">
        {lines.map((line, i) => (
          <div key={i} className={`${
            line.type === 'error' ? 'text-cursed-red' :
            line.type === 'success' ? 'text-green-400' :
            line.type === 'input' ? 'text-gray-400' : 'text-cursed-cyan'
          }`}>
            {line.type === 'input' && <span className="text-gray-500 mr-2">$</span>}
            {line.content}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <div className="flex items-center gap-2 mt-2 border-t border-white/10 pt-2">
        <span className="text-green-500">➜</span>
        <span className="text-cursed-cyan">~</span>
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none text-white placeholder-gray-600"
          placeholder="Enter command..."
          autoFocus
        />
      </div>
    </div>
  );
};

export default TerminalApp;