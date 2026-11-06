import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="p-2.5 rounded-lg bg-white/10 hover:bg-white/20 active:scale-95 text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#F58220] flex items-center justify-center min-w-[40px] min-h-[40px]"
      aria-label={theme === 'light' ? "Ativar Modo Escuro" : "Ativar Modo Claro"}
      title={theme === 'light' ? "Mudar para modo escuro" : "Mudar para modo claro"}
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-amber-300 fill-amber-300/20" />
      ) : (
        <Sun className="w-5 h-5 text-amber-400 fill-amber-400/20 animate-spin-slow" />
      )}
    </button>
  );
};
