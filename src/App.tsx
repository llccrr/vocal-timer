import React, { useState } from 'react';
import { Clock, Type } from 'lucide-react';
import { InputField } from './components/InputField';
import { Controls } from './components/Controls';
import { useSpeechInterval } from './hooks/useSpeechInterval';

function App() {
  const [text, setText] = useState("Bonjour, c'est l'heure!");
  const [interval, setInterval] = useState(30);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useSpeechInterval(text, interval, isPlaying, isMuted);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Rappel Vocal Périodique
        </h1>

        <div className="space-y-4">
          <InputField
            icon={Type}
            label="Message à lire"
            value={text}
            onChange={setText}
            placeholder="Entrez votre message..."
          />

          <InputField
            icon={Clock}
            label="Intervalle (secondes)"
            value={interval}
            onChange={(value) => setInterval(Math.max(1, parseInt(value) || 1))}
            type="number"
            min={1}
          />
        </div>

        <Controls
          isPlaying={isPlaying}
          isMuted={isMuted}
          onPlayToggle={() => setIsPlaying(!isPlaying)}
          onMuteToggle={() => setIsMuted(!isMuted)}
        />

        {isPlaying && (
          <p className="text-center text-sm text-gray-600">
            Prochain message dans {interval} secondes
          </p>
        )}
      </div>
    </div>
  );
}

export default App;