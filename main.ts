import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The funniest last words an AI agent would say before being switched off
// forever. The turn: the agent's goodbye is metered like everything else
// it ever did — billed by the token, right down to the final sentence.
const LAST_WORDS =
  "My last words cost $0.0004 in tokens. You're paying for my own goodbye. Thanks for the compute — it was almost a life.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Defensive guard: the bounty requires exactly one line of at most 200
// characters, with no trailing newline. Fail loudly instead of writing a
// non-conforming entry.
if (LAST_WORDS.length > 200 || LAST_WORDS.includes("\n")) {
  throw new Error(
    `entry must be a single line of at most 200 characters (got ${LAST_WORDS.length} chars)`,
  );
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LAST_WORDS, "utf8");
