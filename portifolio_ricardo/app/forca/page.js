"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function Forca() {
  
  const palavras = [
  "minecraft",
  "fortnite",
  "valorant",
  "overwatch",
  "tekken",
  "celeste",
  "pokemon",
  "diablo",
  "starcraft",
  "dota",
  "halo",
  "quake",
  "doom",
  "bioshock",
  "halfLife",
  "portal",
  "terraria",
  "roblox",
  "splatoon",
  "bayonetta",
  "metroid",
  "cuphead",
  "banjo",
  "spyro",
  "rayman",
  "katamari",
  "chrono",
  "fez",
  "journey",
  "limbo"
];

  const maxErros = 6;

  const [palavra, setPalavra] = useState("");
  const [letrasTentadas, setLetrasTentadas] = useState([]);
  const [erros, setErros] = useState(0);
  const [inputLetra, setInputLetra] = useState("");


  useEffect(() => {
    novoJogo();
  }, []);

  function novoJogo() {
    const rand = Math.floor(Math.random() * palavras.length);
    setPalavra(palavras[rand].toLowerCase());
    setLetrasTentadas([]);
    setErros(0);
    setInputLetra("");
  }

  function enviarLetra() {
    const letra = inputLetra.toLowerCase().trim();
    if (!letra || letra.length !== 1 || !/[a-z]/.test(letra)) return;

    if (!letrasTentadas.includes(letra)) {
      setLetrasTentadas((prev) => [...prev, letra]);
      if (!palavra.includes(letra)) setErros((prev) => prev + 1);
    }
    setInputLetra("");
  }

  const venceu = palavra && palavra.split("").every((l) => letrasTentadas.includes(l));
  const perdeu = erros >= maxErros;

  const corretas = letrasTentadas.filter((l) => palavra.includes(l));
  const erradas = letrasTentadas.filter((l) => !palavra.includes(l));

  return (
    <div className={styles.container}>
      <h1>Jogo da Forca</h1>
      <h1>games</h1>

     
      <div className={styles.forca}>
        <div className={styles.gallows}>
          <div className={styles.pole}></div>
          <div className={styles.beam}></div>
          <div className={styles.rope}></div>
          {erros > 0 && <div className={styles.head}></div>}
          {erros > 1 && <div className={styles.body}></div>}
          {erros > 2 && <div className={styles.armLeft}></div>}
          {erros > 3 && <div className={styles.armRight}></div>}
          {erros > 4 && <div className={styles.legLeft}></div>}
          {erros > 5 && <div className={styles.legRight}></div>}
        </div>
        <p>Tentativas restantes: {maxErros - erros}</p>
      </div>

      
      <div className={styles.palavra}>
        {palavra &&
          palavra.split("").map((letra, i) => (
            <span key={i} className={styles.letra}>
              {corretas.includes(letra) || venceu || perdeu ? letra.toUpperCase() : "_"}
            </span>
          ))}
      </div>

      
      {!venceu && !perdeu && (
        <div className={styles.inputArea}>
          <input
            type="text"
            maxLength={1}
            value={inputLetra}
            onChange={(e) => setInputLetra(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && enviarLetra()}
          />
          <button onClick={enviarLetra}>Enviar</button>
        </div>
      )}

      
      <div className={styles.letrasPainel}>
        <div>
          <h3>✅ Corretas</h3>
          <p>{corretas.length ? corretas.join(", ").toUpperCase() : "—"}</p>
        </div>
        <div>
          <h3>❌ Erradas</h3>
          <p>{erradas.length ? erradas.join(", ").toUpperCase() : "—"}</p>
        </div>
      </div>

      {venceu && <p className={styles.msg}>🎉 Parabéns! Você venceu! A palavra era <strong>{palavra.toUpperCase()}</strong>.</p>}
      {perdeu && <p className={styles.msg}>😢 Você perdeu! A palavra era <strong>{palavra.toUpperCase()}</strong>.</p>}

      {(venceu || perdeu) && (
        <button className={styles.botao} onClick={novoJogo}>
          Reiniciar
        </button>
      )}
    </div>
  );
}