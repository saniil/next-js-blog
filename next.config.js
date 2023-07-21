const nextConfig = {
  compiler: {
    styledComponets: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        port: "",
        pathname: "/images/**", //çift yıldız images içindeki tüm dosyalar demek oluyor.
      },
    ],
  },
};
module.exports = nextConfig;
