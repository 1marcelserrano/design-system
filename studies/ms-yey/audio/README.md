# MS YEY · áudio das faixas

Coloque aqui os arquivos de **música completa** de cada faixa. O player
(`../player.html`) já aponta pra esta pasta.

## Convenção de nomes

| Faixa | Arquivo esperado |
|-------|------------------|
| 01    | `01.mp3`         |
| 02    | `02.mp3`         |
| 03    | `03.mp3`         |
| 04    | `04.mp3`         |
| 05    | `05.mp3`         |
| 06    | `06.mp3`         |

- Formato recomendado: **MP3** (também aceita `.m4a`, `.ogg`, `.wav`).
- É só dropar os arquivos com esses nomes e dar commit — o player toca a
  música inteira, sem mexer no código.
- Se quiser outro nome/quantidade de faixas, edite o array `tracks` no
  topo do `<script>` em `player.html` (campo `audio:`).

## Capas

As capas que trocam enquanto cada música toca são puxadas **automático do
Spotify** — basta preencher o link de cada faixa no campo `spotify:` dentro
de `player.html`. Sem link, usa a capa do álbum.
