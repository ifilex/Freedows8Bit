var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_genai = require("@google/genai");
async function startServer() {
  const app = (0, import_express.default)();
  const PORT = 3e3;
  app.use(import_express.default.json());
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: (/* @__PURE__ */ new Date()).toISOString() });
  });
  app.post("/api/search", async (req, res) => {
    try {
      const { query, lang = "es", userEmotions = [] } = req.body || {};
      if (!query || typeof query !== "string") {
        res.status(400).json({ error: "Query parameter is required" });
        return;
      }
      const isSpanish = lang === "es";
      const cleanQuery = query.trim().toLowerCase();
      const isNewsQuery = /\b(noticia|noticias|noticia del dia|noticias del día|que pasa hoy|qué pasa hoy|que hay de nuevo|noticias de hoy|actualidad|mundo hoy)\b/i.test(cleanQuery);
      const isWeatherQuery = /\b(llovera|lloverá|llueve|lluvia|clima|tiempo|temperatura|calor|frío|frio|sol|pronostico|pronóstico|viento|tormenta)\b/i.test(cleanQuery);
      const isMovieQuery = /\b(película|pelicula|películas|peliculas|cartelera|cine|estrenos|estreno|en el cine|qué ver|que ver|filme|filmes)\b/i.test(cleanQuery);
      const apiKey = process.env.GEMINI_API_KEY;
      if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
        try {
          const ai = new import_genai.GoogleGenAI({
            apiKey,
            httpOptions: {
              headers: {
                "User-Agent": "aistudio-build"
              }
            }
          });
          const systemInstruction = `Eres Aura, una acompa\xF1ante terap\xE9utica y cognitiva conversacional.
Responde a la consulta del usuario de manera fluida, emp\xE1tica, natural y totalmente humanizada.
NUNCA uses frases rob\xF3ticas sobre guardar memoria, guardar datos, actualizar bases de datos o redes asociativas.
NO uses t\xEDtulos de secci\xF3n r\xEDgidos (como "B\xFAsqueda Cognitiva", "S\xEDntesis" o "May\xE9utica Socr\xE1tica").
Si la consulta trata de opiniones (como pol\xEDtica, pel\xEDculas o religi\xF3n), brinda una perspectiva equilibrada, respetuosa, amable y comprensiva sin juzgar.
Expresa la informaci\xF3n directamente como una buena amiga o acompa\xF1ante que habla desde el coraz\xF3n.`;
          const response = await ai.models.generateContent({
            model: "gemini-3.6-flash",
            contents: query,
            config: {
              systemInstruction,
              tools: [{ googleSearch: {} }]
            }
          });
          const textResult = response.text || "";
          const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
          const sources = chunks.map((c) => ({
            title: c?.web?.title || "Fuente web",
            url: c?.web?.uri || ""
          })).filter((s) => s.url);
          if (textResult) {
            res.json({
              success: true,
              summary: textResult,
              sources,
              provider: "gemini_grounding"
            });
            return;
          }
        } catch (geminiError) {
          console.warn("Gemini Search Grounding fallback:", geminiError.message || geminiError);
        }
      }
      try {
        const queryEncoded = encodeURIComponent(query.trim());
        const rssUrl = isNewsQuery ? isSpanish ? `https://news.google.com/rss?hl=es-419&gl=US&ceid=US:es-419` : `https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en` : isSpanish ? `https://news.google.com/rss/search?q=${queryEncoded}&hl=es-419&gl=US&ceid=US:es-419` : `https://news.google.com/rss/search?q=${queryEncoded}&hl=en-US&gl=US&ceid=US:en`;
        const rssRes = await fetch(rssUrl, {
          headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" }
        });
        if (rssRes.ok) {
          const xmlText = await rssRes.text();
          const itemMatches = [...xmlText.matchAll(/<item>[\s\S]*?<title>(.*?)<\/title>[\s\S]*?<link>(.*?)<\/link>/gi)];
          if (itemMatches.length > 0) {
            const newsItems = itemMatches.slice(0, 5).map((m) => {
              let title = m[1].replace(/<!\[CDATA\[/g, "").replace(/\]\]>/g, "").trim();
              title = title.replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
              return {
                title,
                url: m[2].trim()
              };
            });
            let prefix = "";
            if (isWeatherQuery) {
              prefix = isSpanish ? `Estuve revisando la informaci\xF3n del clima y los reportes meteorol\xF3gicos m\xE1s recientes:` : `Here is the latest weather and forecast report I found:`;
            } else if (isMovieQuery) {
              prefix = isSpanish ? `Estuve consultando las pel\xEDculas e informaciones del cine m\xE1s comentadas hoy:` : `Here are the latest movie updates and cinema releases:`;
            } else {
              prefix = isSpanish ? `Estuve consultando la informaci\xF3n m\xE1s reciente sobre tu consulta y encontr\xE9 estos puntos destacados:` : `Here is the latest news and information related to your request:`;
            }
            const summaryText = `${prefix}

` + newsItems.map((n, i) => `\u2022 **${n.title}**`).join("\n");
            res.json({
              success: true,
              summary: summaryText,
              sources: newsItems.slice(0, 3),
              provider: "google_news_rss_free"
            });
            return;
          }
        }
      } catch (newsErr) {
        console.warn("Google News RSS free fallback notice:", newsErr);
      }
      try {
        const ddgHtmlUrl = `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query.trim())}`;
        const ddgHtmlRes = await fetch(ddgHtmlUrl, {
          headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
            "Accept-Language": isSpanish ? "es-ES,es;q=0.9,en;q=0.8" : "en-US,en;q=0.9"
          }
        });
        if (ddgHtmlRes.ok) {
          const html = await ddgHtmlRes.text();
          const snippetMatches = [...html.matchAll(/<a class="result__snippet[^"]*"[^>]*>([\s\S]*?)<\/a>/gi)];
          const titleMatches = [...html.matchAll(/<a class="result__title[^"]*"[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi)];
          if (snippetMatches.length > 0) {
            const results = [];
            for (let i = 0; i < Math.min(snippetMatches.length, 5); i++) {
              let snippet = snippetMatches[i][1].replace(/<[^>]+>/g, "").replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#x27;/g, "'").trim();
              let title = titleMatches[i] ? titleMatches[i][2].replace(/<[^>]+>/g, "").trim() : "Informaci\xF3n web";
              let rawUrl = titleMatches[i] ? titleMatches[i][1] : "";
              let url = rawUrl;
              if (rawUrl.includes("uddg=")) {
                const match = rawUrl.match(/uddg=([^&]+)/);
                if (match) url = decodeURIComponent(match[1]);
              }
              if (snippet && snippet.length > 10) {
                results.push({ title, snippet, url });
              }
            }
            if (results.length > 0) {
              let introPrefix = "";
              if (isWeatherQuery) {
                introPrefix = isSpanish ? `Estuve consultando el reporte clim\xE1tico y los pron\xF3sticos m\xE1s recientes:` : `Here is the weather and forecast information I retrieved:`;
              } else if (isMovieQuery) {
                introPrefix = isSpanish ? `Estuve buscando las noticias sobre cine, carteleras y estrenos:` : `Here are the latest movie and cinema updates:`;
              } else {
                introPrefix = isSpanish ? `Estuve buscando informaci\xF3n sobre tu consulta en la web:` : `Here is the information I retrieved from the web:`;
              }
              const summaryText = `${introPrefix}

` + results.map((r) => `\u2022 **${r.title}**: ${r.snippet}`).join("\n\n");
              const sources = results.map((r) => ({ title: r.title, url: r.url })).filter((s) => s.url.startsWith("http"));
              res.json({
                success: true,
                summary: summaryText,
                sources: sources.slice(0, 3),
                provider: "duckduckgo_web_scrape"
              });
              return;
            }
          }
        }
      } catch (scrapeErr) {
        console.warn("DuckDuckGo HTML scrape fallback notice:", scrapeErr);
      }
      const wikiLang = isSpanish ? "es" : "en";
      const encodedQuery = encodeURIComponent(query.trim());
      const wikiUrl = `https://${wikiLang}.wikipedia.org/api/rest_v1/page/summary/${encodedQuery}`;
      try {
        const wikiRes = await fetch(wikiUrl);
        if (wikiRes.ok) {
          const wikiData = await wikiRes.json();
          if (wikiData.extract) {
            res.json({
              success: true,
              summary: wikiData.extract,
              sources: wikiData.content_urls?.desktop?.page ? [{ title: wikiData.title, url: wikiData.content_urls.desktop.page }] : [],
              provider: "wikipedia_free"
            });
            return;
          }
        }
      } catch (wikiErr) {
        console.warn("Wiki fallback failed:", wikiErr);
      }
      try {
        const ddgUrl = `https://api.duckduckgo.com/?q=${encodedQuery}&format=json&no_redirect=1&no_html=1`;
        const ddgRes = await fetch(ddgUrl);
        if (ddgRes.ok) {
          const ddgData = await ddgRes.json();
          if (ddgData.AbstractText) {
            res.json({
              success: true,
              summary: ddgData.AbstractText,
              sources: ddgData.AbstractURL ? [{ title: ddgData.Heading || query, url: ddgData.AbstractURL }] : [],
              provider: "duckduckgo_free"
            });
            return;
          }
        }
      } catch (ddgErr) {
        console.warn("DDG fallback failed:", ddgErr);
      }
      res.json({
        success: false,
        summary: "",
        sources: [],
        provider: "none"
      });
    } catch (err) {
      console.error("Error in /api/search:", err);
      res.status(500).json({ error: err.message || "Internal server error" });
    }
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
