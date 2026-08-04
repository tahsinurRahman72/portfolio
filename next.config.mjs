/** @type {import('next').NextConfig} */

// GitHub Pages serves a project site under /<repo>. The repo name is read from
// GITHUB_REPOSITORY ("owner/repo"), which Actions sets automatically, so this
// works for any repo name without editing the config.
//
// A user/org site (repo named "<user>.github.io") is served from the root, so
// no base path is applied in that case.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repo = (process.env.GITHUB_REPOSITORY ?? "").split("/")[1] ?? "";
const isUserSite = repo.endsWith(".github.io");
const basePath = isGithubPages && repo && !isUserSite ? `/${repo}` : "";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  trailingSlash: true,
};

export default nextConfig;
