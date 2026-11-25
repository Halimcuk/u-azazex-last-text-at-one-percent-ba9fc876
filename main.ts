import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The last text this phone sends at one percent battery.
const ENTRY =
  "1%. I dimmed my own screen, closed all 47 of your tabs, and I'm still dying. The charger is right there. RIGHT THERE. Tell my photos I—";

// Gate: entry.txt must be 1 to 200 characters (not only whitespace).
// Reject over-long text here rather than shipping an invalid entry.
if (ENTRY.trim().length < 1 || ENTRY.length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${ENTRY.length}`);
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
