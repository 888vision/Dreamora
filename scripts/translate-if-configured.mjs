// Run General Translation before production builds when credentials are configured.
// This keeps builds usable before the project owner adds the GT API key.
import { spawnSync } from 'node:child_process';

if (!process.env.GT_API_KEY) {
  console.log('[Dreamora] GT_API_KEY is not configured; skipping automatic translation.');
  process.exit(0);
}

const command = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const result = spawnSync(command, ['--yes', 'gt@latest', 'translate'], {
  stdio: 'inherit',
  env: process.env,
  shell: process.platform === 'win32',
});

if (result.error) {
  console.error('[Dreamora] Translation command failed to start:', result.error);
  process.exit(1);
}

process.exit(result.status ?? 1);
