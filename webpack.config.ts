const createExpoWebpackConfigAsync = require("@expo/webpack-config")
const { DefinePlugin } = require("webpack")

module.exports = async function (env: any, argv: any) {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      mode: "production",
    },
    argv
  )

  // Configuraciones adicionales de optimización
  config.optimization = {
    ...config.optimization,
    splitChunks: {
      chunks: "all",
      maxInitialRequests: 25,
      minSize: 20000,
    },
    minimize: true,
  }

  // Plugin para eliminar código no utilizado
  config.plugins.push(
    new DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    })
  )

  return config
}
