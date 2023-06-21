const proxy: Record<string, any> = {
  development: {
    "/api": {
      target: "http://localhost:8001",
      changeOrigin: true,
      secure: true,
      pathRewrite: {
        "^/api": "",
      },
    },
  },
};

export default proxy;
