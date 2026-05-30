/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — no server, no custodian. Honors the brand: the site is a
  // pile of static files that can be served from anywhere (Vercel today,
  // Cloudflare Pages tomorrow) with zero server-side state.
  output: "export",
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
