 
const API_URL = "https://api.mymemory.translated.net/get";

export async function translateText(text, source, target) {
  const cleanText = text.trim();

  if (!cleanText) {
    throw new Error("Please enter some text.");
  }

  if (source === target) {
    return cleanText;
  }

  if (cleanText.length > 450) {
    throw new Error("Please keep your text under 450 characters.");
  }

  const params = new URLSearchParams({
    q: cleanText,
    langpair: `${source}|${target}`,
  });

  const response = await fetch(`${API_URL}?${params.toString()}`);

  if (!response.ok) {
    throw new Error("Translation service is unavailable.");
  }

  const data = await response.json();

  if (Number(data.responseStatus) !== 200) {
    throw new Error(
      data.responseDetails || "Translation could not be completed."
    );
  }

  const result = data.responseData?.translatedText;

  if (typeof result !== "string" || !result.trim()) {
    throw new Error("No translation was returned.");
  }

  return result.trim();
}
