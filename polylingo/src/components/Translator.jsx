 
import { useState } from "react";
import {
  ArrowLeftRight,
  Copy,
  Languages,
  Loader2,
  Trash2,
  Volume2,
} from "lucide-react";
import { translateText } from "../services/translate";

const languages = [
  { code: "en", name: "English" },
  { code: "ur", name: "Urdu" },
  { code: "hi", name: "Hindi" },
  { code: "ko", name: "Korean" },
  { code: "fr", name: "French" },
  { code: "tr", name: "Turkish" },
  { code: "ar", name: "Arabic" },
  { code: "es", name: "Spanish" },
  { code: "de", name: "German" },
  { code: "it", name: "Italian" },
  { code: "pt", name: "Portuguese" },
  { code: "ja", name: "Japanese" },
  { code: "zh", name: "Chinese (Simplified)" },
  { code: "ru", name: "Russian" },
  { code: "bn", name: "Bengali" },
  { code: "nl", name: "Dutch" },
  { code: "id", name: "Indonesian" },
  { code: "vi", name: "Vietnamese" },
  { code: "th", name: "Thai" },
  { code: "fa", name: "Persian" },
  { code: "pl", name: "Polish" },
  { code: "uk", name: "Ukrainian" },
  { code: "el", name: "Greek" },
  { code: "sv", name: "Swedish" },
  { code: "ro", name: "Romanian" },
  { code: "ms", name: "Malay" },
  { code: "tl", name: "Filipino" },
  { code: "he", name: "Hebrew" },
  { code: "ta", name: "Tamil" },
  { code: "sw", name: "Swahili" },
];

function Translator() {
  const [sourceLanguage, setSourceLanguage] = useState("en");
  const [targetLanguage, setTargetLanguage] = useState("ur");
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      setError("Please enter some text to translate.");
      return;
    }

    if (sourceLanguage === targetLanguage) {
      setTranslatedText(inputText.trim());
      setError("");
      return;
    }

    setLoading(true);
    setError("");
    setTranslatedText("");

    try {
      const result = await translateText(
        inputText.trim(),
        sourceLanguage,
        targetLanguage
      );

      setTranslatedText(result);
    } catch (err) {
      setError(
        err.message || "Translation failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSwap = () => {
    setSourceLanguage(targetLanguage);
    setTargetLanguage(sourceLanguage);
    setInputText(translatedText);
    setTranslatedText(inputText);
    setError("");
  };

  const handleClear = () => {
    setInputText("");
    setTranslatedText("");
    setError("");
    setCopied(false);
  };

  const handleCopy = async () => {
    if (!translatedText) return;

    try {
      await navigator.clipboard.writeText(translatedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setError("Could not copy text. Please copy it manually.");
    }
  };

  const handleSpeak = (text, language) => {
    if (!text.trim() || !("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <section className="translator-section" id="translator">
      <div className="section-heading">
        <span className="section-tag">
          <Languages size={16} />
          TRANSLATION STUDIO
        </span>

        <h2>Say it in another language.</h2>
        <p>
          Enter your text, choose your languages, and let
          PolyLingo help you communicate.
        </p>
      </div>

      <div className="translator-card">
        <div className="language-bar">
          <div className="language-select">
            <label htmlFor="source-language">Translate from</label>
            <select
              id="source-language"
              value={sourceLanguage}
              onChange={(e) => setSourceLanguage(e.target.value)}
            >
              {languages.map((language) => (
                <option key={language.code} value={language.code}>
                  {language.name}
                </option>
              ))}
            </select>
          </div>

          <button
            type="button"
            className="swap-button"
            onClick={handleSwap}
            aria-label="Swap languages"
            title="Swap languages"
          >
            <ArrowLeftRight size={20} />
          </button>

          <div className="language-select">
            <label htmlFor="target-language">Translate to</label>
            <select
              id="target-language"
              value={targetLanguage}
              onChange={(e) => setTargetLanguage(e.target.value)}
            >
              {languages.map((language) => (
                <option key={language.code} value={language.code}>
                  {language.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="translation-panels">
          <div className="translation-panel">
            <div className="panel-heading">
              <span>Your text</span>
              <button
                type="button"
                onClick={() => handleSpeak(inputText, sourceLanguage)}
                aria-label="Listen to original text"
                title="Listen"
              >
                <Volume2 size={18} />
              </button>
            </div>

            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type something you want to translate..."
              maxLength={5000}
            />

            <div className="panel-footer">
              <span>{inputText.length}/5000</span>
              <button type="button" onClick={handleClear}>
                <Trash2 size={15} />
                Clear
              </button>
            </div>
          </div>

          <div className="translation-panel result-panel">
            <div className="panel-heading">
              <span>Translation</span>
              <div className="result-actions">
                <button
                  type="button"
                  onClick={() =>
                    handleSpeak(translatedText, targetLanguage)
                  }
                  aria-label="Listen to translation"
                  title="Listen"
                >
                  <Volume2 size={18} />
                </button>

                <button
                  type="button"
                  onClick={handleCopy}
                  disabled={!translatedText}
                  aria-label="Copy translation"
                  title="Copy translation"
                >
                  <Copy size={17} />
                </button>
              </div>
            </div>

            <div className="translated-output">
              {loading ? (
                <div className="loading-message">
                  <Loader2 className="spin" size={22} />
                  Translating...
                </div>
              ) : translatedText ? (
                translatedText
              ) : (
                <span className="placeholder-text">
                  Your translation will appear here...
                </span>
              )}
            </div>

            <div className="panel-footer">
              <span>
                {copied ? "Copied!" : " "}
              </span>
              <span>
                {translatedText.length > 0
                  ? `${translatedText.length} characters`
                  : ""}
              </span>
            </div>
          </div>
        </div>

        {error && (
          <p className="translation-error" role="alert">
            {error}
          </p>
        )}

        <button
          type="button"
          className="translate-button"
          onClick={handleTranslate}
          disabled={loading || !inputText.trim()}
        >
          {loading ? (
            <>
              <Loader2 className="spin" size={18} />
              Translating...
            </>
          ) : (
            <>
              <Languages size={18} />
              Translate Text
            </>
          )}
        </button>
      </div>
    </section>
  );
}

export default Translator;
