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
  async headers() {
    // The first rule to set a header wins, so the stricter rules come first.
    return [
      { source: "/admin", headers: noFraming },
      { source: "/admin/:path*", headers: noFraming },
      { source: "/api/:path*", headers: noFraming },
      { source: "/", headers: securityHeaders },
      { source: "/:path*", headers: securityHeaders },
    ];
  },
};

export default nextConfig;
