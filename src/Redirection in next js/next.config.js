
const nextConfig = {
  async redirects() {
    return [
      // {
      //   source: "/user",
      //   destination: "/about",
      //   permanent: false,
      // },

       {
        source: "/about",
        destination: "/user",
        permanent: false,
      },

      {
        source: "/user/:userid",
        destination: "/",
        permanent: false,
      },
    ]
  },
};

export default nextConfig;
