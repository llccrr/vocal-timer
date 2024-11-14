import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface ControlsProps {
  isPlaying: boolean;
  isMuted: boolean;
  onPlayToggle: () => void;
  onMuteToggle: () => void;
}

export function Controls({ isPlaying, isMuted, onPlayToggle, onMuteToggle }: ControlsProps) {
  return (
    <div className="flex justify-center gap-4 pt-4">
      <button
        onClick={onPlayToggle}
        className={`px-6 py-3 rounded-lg font-medium text-white transition-all ${
          isPlaying
            ? 'bg-red-500 hover:bg-red-600'
            : 'bg-indigo-500 hover:bg-indigo-600'
        }`}
      >
        {isPlaying ? 'Arrêter' : 'Démarrer'}
      </button>

      <button
        onClick={onMuteToggle}
        className={`p-3 rounded-lg transition-all ${
          isMuted
            ? 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
        }`}
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>
    </div>
  );
}