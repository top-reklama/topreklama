import type { NextConfig } from "next";

// Baseline hardening for every response. Scripts and styles are left unrestricted so the
// framework's inline hydration keeps working; the policy only closes plugin, base-URL and
// form-hijacking vectors. Admin and API responses additionally refuse to be framed.
const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
  { key: "Content-Security-Policy", value: "object-src 'none'; base-uri 'self'; form-action 'self'" },
];
const noFraming = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Content-Security-Policy", value: "object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'" },
];

const nextConfig: NextConfig = {
  // The project folder is the app root, even when a parent folder holds another lockfile.
  outputFileTracingRoot: process.cwd(),
  async headers() {
    // Next.js applies every matching rule and the last one wins for a repeated header, so the general rules come
    // first and the stricter admin/API rules after them.
    return [
      { source: "/", headers: securityHeaders },
      { source: "/:path*", headers: securityHeaders },
      // Photos and fonts rarely change; a week of caching with background refresh keeps pages fast.
      { source: "/assets/:path*", headers: [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" }] },
      { source: "/admin", headers: noFraming },
      { source: "/admin/:path*", headers: noFraming },
      { source: "/api/:path*", headers: noFraming },
    ];
  },
};

export default nextConfig;
