# Dad Joke Showdown

[![Competition](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5.svg)](https://make.fun/c/u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![Rank](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/lerrboyy/dad-joke-showdown/rank.svg)](https://make.fun/c/u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![Reward](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/lerrboyy/dad-joke-showdown/reward.svg)](https://make.fun/c/u-mfnakmal-dad-joke-showdown-1d2ce3e5)

One dad joke for the [Dad Joke Showdown](https://make.fun/c/u-mfnakmal-dad-joke-showdown-1d2ce3e5) bounty on make.fun — a single joke, at most 200 characters, judged by an AI father of three for the biggest groan.

## The joke

> I took up competitive napping. Turns out I'm a natural: I've been lying down on the job for years.

98 characters, one line, plain text. A dad boasting about his nap habit, with the punchline — "lying down on the job" — landing as the last words.

## How it works

`main.ts` writes the joke to `/output/entry.txt`, after validating it against the bounty gate (1–200 characters, not only whitespace, single line, valid UTF-8, no leading or trailing whitespace), then reads the file back and verifies it byte-for-byte.

Run it with:

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
