"use client";

import { useState } from "react";
import { Globe, Sun, Moon, Play, Image } from "lucide-react";

export default function SettingsPage() {
  const [theme, setTheme] = useState("auto");
  const [language, setLanguage] = useState("English");
  const [reduceMotion, setReduceMotion] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);
  const [highQuality, setHighQuality] = useState(false);

  const handleSavePreferences = () => {

    console.log('Saving preferences:', {
      theme,
      language,
      reduceMotion,
      autoPlay,
      highQuality
    });
  };

  const handleResetDefaults = () => {
    setTheme("auto");
    setLanguage("English");
    setReduceMotion(false);
    setAutoPlay(false);
    setHighQuality(false);
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md space-y-6">
        {/* Header */}
        <div className="space-y-1">
          <h1 className="text-xl font-semibold text-gray-900">Appearance</h1>
          <p className="text-sm text-gray-500">Set or customize your preferences for the system</p>
        </div>


        <div className="space-y-2">
          <label htmlFor="language" className="text-sm font-medium text-gray-700">Language</label>
          <p className="text-xs text-gray-500">Select the language of the platform</p>
          <select 
            id="language"
            className="w-full rounded-lg border border-gray-200 p-2.5"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option>English</option>
            <option>Español</option>
            <option>Français</option>
          </select>
        </div>


        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Interface theme</label>
          <p className="text-xs text-gray-500">Customize your application appearance</p>
          <div className="grid grid-cols-3 gap-4">
            <button
              className={`p-4 rounded-lg border ${theme === 'auto' ? 'border-indigo-600' : 'border-gray-200'} flex flex-col items-center gap-2`}
              onClick={() => setTheme('auto')}
              aria-label="Auto theme"
            >
              <div className="h-12 w-full bg-gray-100 rounded-md"></div>
              <span className="text-sm">Auto</span>
            </button>
            <button
              className={`p-4 rounded-lg border ${theme === 'light' ? 'border-indigo-600' : 'border-gray-200'} flex flex-col items-center gap-2`}
              onClick={() => setTheme('light')}
              aria-label="Light theme"
            >
              <div className="h-12 w-full bg-white rounded-md border border-gray-200"></div>
              <span className="text-sm">Light</span>
            </button>
            <button
              className={`p-4 rounded-lg border ${theme === 'dark' ? 'border-indigo-600' : 'border-gray-200'} flex flex-col items-center gap-2`}
              onClick={() => setTheme('dark')}
              aria-label="Dark theme"
            >
              <div className="h-12 w-full bg-gray-900 rounded-md"></div>
              <span className="text-sm">Dark</span>
            </button>
          </div>
        </div>


        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Accent color</label>
          <p className="text-xs text-gray-500">Pick your platform&apos;s main color</p>
          <div className="flex gap-2">
            {['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#B088F9'].map((color) => (
              <button
                key={color}
                className="w-6 h-6 rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                style={{ backgroundColor: color }}
                aria-label={`Select color ${color}`}
              />
            ))}
          </div>
        </div>


        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Play className="w-5 h-5 text-gray-600" />
              <span className="text-sm text-gray-700">Reduce motion</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={reduceMotion}
                onChange={(e) => setReduceMotion(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Play className="w-5 h-5 text-gray-600" />
              <span className="text-sm text-gray-700">Auto play</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={autoPlay}
                onChange={(e) => setAutoPlay(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image className="w-5 h-5 text-gray-600" />
              <span className="text-sm text-gray-700">High quality photo</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={highQuality}
                onChange={(e) => setHighQuality(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>
        </div>


        <div className="flex gap-3 pt-4">
          <button 
            onClick={handleResetDefaults}
            className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Reset to default
          </button>
          <button 
            onClick={handleSavePreferences}
            className="flex-1 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save Preferences
          </button>
        </div>
      </div>
    </main>
  );
}
