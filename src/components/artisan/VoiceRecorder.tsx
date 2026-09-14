'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Volume2, Sparkles, AlertCircle, RefreshCw, CheckCircle2 } from 'lucide-react';
import { useMockAuth } from '@/context/MockAuthContext';
import { isSpeechRecognitionSupported, createSpeechRecognition, getDemoPresets, VoicePreset, SPEECH_LANG_MAP } from '@/lib/speech';

interface VoiceRecorderProps {
  transcript: string;
  onTranscriptChange: (text: string) => void;
  onApplyPresetPhoto?: (photoUrl: string) => void;
}

export default function VoiceRecorder({
  transcript,
  onTranscriptChange,
  onApplyPresetPhoto,
}: VoiceRecorderProps) {
  const { t, language } = useMockAuth();
  const [isRecording, setIsRecording] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const [interimText, setInterimText] = useState('');
  const [speechError, setSpeechError] = useState<string | null>(null);
  const recognitionRef = useRef<any>(null);

  // Derived recognition language code (e.g. kn-IN, hi-IN, ta-IN, en-IN)
  const speechLanguage = SPEECH_LANG_MAP[language] || 'en-IN';

  // Demo presets strictly matching the active global language
  const activePresets: VoicePreset[] = getDemoPresets(language);

  useEffect(() => {
    setIsSupported(isSpeechRecognitionSupported());
  }, []);

  // Clean up recognition on unmount
  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch (_) {}
      }
    };
  }, []);

  // Stop recording if language changes mid-recording
  useEffect(() => {
    if (isRecording && recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (_) {}
      setIsRecording(false);
    }
  }, [language]);

  const startRecording = () => {
    setSpeechError(null);
    if (!isSupported) {
      setSpeechError(t('Voice input is not supported in this browser.', 'इस ब्राउज़र में वॉयस इनपुट समर्थित नहीं है।'));
      return;
    }

    try {
      const recognition = createSpeechRecognition(speechLanguage);
      if (!recognition) {
        setSpeechError(t('Voice input is not supported in this browser.', 'इस ब्राउज़र में वॉयस इनपुट समर्थित नहीं है।'));
        return;
      }

      recognition.onstart = () => {
        setIsRecording(true);
        setSpeechError(null);
        setInterimText('');
      };

      recognition.onresult = (event: any) => {
        let finalStr = '';
        let interimStr = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          const res = event.results[i];
          if (res.isFinal) {
            finalStr += res[0].transcript + ' ';
          } else {
            interimStr += res[0].transcript;
          }
        }

        if (finalStr) {
          onTranscriptChange((transcript ? transcript.trim() + ' ' : '') + finalStr.trim());
        }
        setInterimText(interimStr);
      };

      recognition.onerror = (event: any) => {
        console.warn('Speech recognition error:', event.error);
        setIsRecording(false);

        if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
          setSpeechError(t('Microphone permission is required for voice input.', 'वॉयस इनपुट के लिए माइक्रोफ़ोन की अनुमति आवश्यक है।'));
        } else if (event.error === 'no-speech') {
          setSpeechError(t('No speech was detected. Please speak clearly into your microphone and try again.', 'कोई आवाज़ सुनाई नहीं दी। कृपया माइक्रोफ़ोन के पास साफ़ बोलें और पुनः प्रयास करें।'));
        } else {
          setSpeechError(t(`Voice recognition error: ${event.error || 'Please retry.'}`, `वॉयस पहचान में त्रुटि: ${event.error || 'कृपया पुनः प्रयास करें।'}`));
        }
      };

      recognition.onend = () => {
        setIsRecording(false);
        setInterimText('');
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (err) {
      console.error('Failed to start speech recognition', err);
      setIsRecording(false);
      setSpeechError(t('Failed to start microphone. Please check permissions.', 'माइक्रोफ़ोन प्रारंभ करने में विफल। कृपया अनुमतियां जांचें।'));
    }
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (_) {}
    }
    setIsRecording(false);
  };

  const handleApplyPreset = (preset: VoicePreset) => {
    onTranscriptChange(preset.transcript);
    if (onApplyPresetPhoto) {
      onApplyPresetPhoto(preset.samplePhotoUrl);
    }
    setSpeechError(null);
  };

  return (
    <div className="bg-white rounded-3xl p-5 border border-stone-200/80 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs">
            2
          </span>
          <h3 className="font-extrabold text-stone-900 text-sm sm:text-base">
            {t('Voice Description', 'अपनी आवाज में बताएं')}
          </h3>
        </div>

        {/* Global Language Badge */}
        <div className="text-[11px] font-bold text-stone-500 bg-stone-100 px-2.5 py-1 rounded-xl">
          {speechLanguage.toUpperCase()}
        </div>
      </div>

      <p className="text-xs text-stone-500 mb-4 leading-relaxed">
        {t(
          'Tap the microphone and speak naturally about the craft (materials, making time, and price expected).',
          'माइक दबाएं और अपनी भाषा में बताएं कि यह क्या है, किस सामग्री से बना है और कितना समय लगा।'
        )}
      </p>

      {/* Main Microphone Action Card */}
      <div
        className={`p-5 rounded-2xl border transition-all text-center ${
          isRecording
            ? 'bg-red-50/70 border-red-300 ring-2 ring-red-400/20'
            : 'bg-stone-50/70 border-stone-200'
        }`}
      >
        <div className="flex flex-col items-center justify-center gap-3">
          {/* Pulsing Mic Button */}
          <button
            type="button"
            onClick={isRecording ? stopRecording : startRecording}
            className={`w-16 h-16 rounded-full flex items-center justify-center text-white transition-all shadow-lg active:scale-95 ${
              isRecording
                ? 'bg-red-600 hover:bg-red-700 animate-pulse motion-reduce:animate-none ring-8 ring-red-500/20'
                : 'bg-terracotta-600 hover:bg-terracotta-700 hover:scale-105'
            }`}
            title={isRecording ? t('Stop Recording', 'रोकें') : t('Start Recording', 'बोलना शुरू करें')}
            aria-label={isRecording ? t('Stop Recording', 'रोकें') : t('Start Recording', 'बोलना शुरू करें')}
          >
            {isRecording ? (
              <MicOff className="w-7 h-7" aria-hidden="true" focusable="false" />
            ) : (
              <Mic className="w-7 h-7" aria-hidden="true" focusable="false" />
            )}
          </button>

          <div>
            <div className="text-xs font-bold text-stone-800">
              {isRecording
                ? t('Listening live... Speak now', 'सुन रहे हैं... कृपया बोलें')
                : t('Tap microphone to speak', 'बोलने के लिए माइक दबाएं')}
            </div>
            <div className="text-[11px] text-stone-500 mt-0.5 font-medium">
              {t('Recognition Language: ', 'पहचान भाषा: ')}{speechLanguage}
            </div>
          </div>
        </div>

        {/* Live Interim Transcript Display */}
        {interimText && (
          <div className="mt-3 p-2.5 rounded-xl bg-white/90 border border-red-200 text-xs text-stone-700 animate-pulse motion-reduce:animate-none italic">
            "{interimText}..."
          </div>
        )}
      </div>

      {/* Voice Error Notice with Retry */}
      {speechError && (
        <div className="mt-3 p-3 bg-red-50 rounded-2xl border border-red-200 text-xs text-red-900 flex items-start justify-between gap-3">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" aria-hidden="true" focusable="false" />
            <div>
              <span className="font-bold">{t('Voice Notice: ', 'वॉयस सूचना: ')}</span>
              <span>{speechError}</span>
            </div>
          </div>
          <button
            type="button"
            onClick={startRecording}
            className="px-2.5 py-1 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-bold shrink-0 inline-flex items-center gap-1 transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3 h-3" aria-hidden="true" focusable="false" />
            <span>{t('Retry', 'पुनः प्रयास')}</span>
          </button>
        </div>
      )}

      {/* Browser Speech API Fallback Notice if not supported */}
      {!isSupported && !speechError && (
        <div className="mt-3 p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-800 flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" focusable="false" />
          <span>
            {t('Voice input is not supported in this browser.', 'इस ब्राउज़र में वॉयस इनपुट समर्थित नहीं है।')}
          </span>
        </div>
      )}

      {/* Recognized Voice Transcript Area */}
      <div className="mt-4">
        <div className="flex items-center justify-between mb-1.5">
          <label className="text-xs font-bold text-stone-700 flex items-center gap-1.5">
            <Volume2 className="w-3.5 h-3.5 text-terracotta-600" aria-hidden="true" focusable="false" />
            <span>{t('Voice Note Transcript', 'बोली गई आवाज का विवरण')}</span>
          </label>
          {transcript && (
            <button
              type="button"
              onClick={() => onTranscriptChange('')}
              className="text-[11px] text-stone-400 hover:text-red-600 font-semibold cursor-pointer"
            >
              {t('Clear Voice Note', 'मिटाएं')}
            </button>
          )}
        </div>

        <textarea
          rows={3}
          value={transcript}
          onChange={(e) => onTranscriptChange(e.target.value)}
          placeholder={t(
            'Your spoken words will appear here automatically. You can also edit or type directly...',
            'आपके द्वारा बोले गए शब्द यहां अपने आप दिखेंगे। आप चाहें तो यहां लिख भी सकते हैं...'
          )}
          className="w-full p-3 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-800 outline-none focus:ring-2 focus:ring-terracotta-500/20 focus:bg-white transition-all leading-relaxed"
        />
      </div>

      {/* Language-Specific Demo Presets */}
      <div className="mt-4 pt-3 border-t border-stone-100">
        <div className="flex items-center gap-1.5 text-xs font-bold text-stone-700 mb-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" aria-hidden="true" focusable="false" />
          <span>{t('Demo Voice Presets', 'डेमो वॉयस नमूने')} ({language.toUpperCase()})</span>
        </div>
        <p className="text-[11px] text-stone-400 mb-2.5">
          {t('Click any chip to load an authentic artisan voice description & craft photo:', 'प्रामाणिक कारीगर विवरण और शिल्प फोटो लोड करने के लिए किसी भी बटन पर क्लिक करें:')}
        </p>

        <div className="flex flex-wrap gap-2">
          {activePresets.map((preset) => (
            <button
              key={preset.id}
              type="button"
              onClick={() => handleApplyPreset(preset)}
              className="px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200/80 text-amber-900 text-xs font-semibold flex items-center gap-1.5 transition-all active:scale-95 text-left shadow-2xs cursor-pointer"
            >
              <span>🎙️</span>
              <span>{preset.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
