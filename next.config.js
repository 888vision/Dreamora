const { withGTConfig } = require("gt-next/config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
};

// URL locale prefixes (/en, /ko, /de, /ja, /pt-BR) are resolved by
// gt-next's App Router proxy and the [locale] route segment.
module.exports = withGTConfig(nextConfig, {
  experimentalLocaleResolution: true,
});
