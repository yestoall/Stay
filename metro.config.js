const { getDefaultConfig } = require("expo/metro-config")
const { withNativeWind } = require("nativewind/metro")

const config = getDefaultConfig(__dirname)
// console.log("Using Metro config:", config)

config.transformer.getTransformOptions = async () => ({
  transform: {
    inlineRequires: true,
    experimentalImportSupport: true,
  },
})

// config.transformer.minifierPath = "metro-minify-terser"
// config.transformer.minifierConfig = {
//   compress: {
//     // Elimina código no utilizado
//     arrows: true,
//     booleans: true,
//     collapse_vars: true,
//     comparisons: true,
//     computed_props: true,
//     conditionals: true,
//     dead_code: true,
//     // drop_console: isProduction, // Solo en producción
//     drop_debugger: true,
//     evaluate: true,
//     hoist_funs: true,
//     hoist_props: true,
//     hoist_vars: true,
//     if_return: true,
//     inline: true,
//     join_vars: true,
//     loops: true,
//     negate_iife: true,
//     properties: true,
//     reduce_funcs: true,
//     reduce_vars: true,
//     sequences: true,
//     side_effects: true,
//     switches: true,
//     typeofs: true,
//     unused: true,
//     // Optimizaciones agresivas
//     unsafe: true,
//     unsafe_arrows: true,
//     unsafe_comps: true,
//     unsafe_Function: true,
//     unsafe_math: true,
//     unsafe_symbols: true,
//     unsafe_methods: true,
//     unsafe_proto: true,
//     unsafe_regexp: true,
//     unsafe_undefined: true,
//     // Eliminación de código no usado
//     keep_classnames: false,
//     keep_fnames: false,
//     keep_infinity: false,
//     // Funciones puras que se pueden eliminar
//     pure_funcs: [
//       "console.log",
//       "console.info",
//       "console.warn",
//       "console.debug",
//       "console.trace",
//       "console.assert",
//     ],
//     // Eliminación global de propiedades
//     pure_getters: true,
//     // Límites de pases
//     passes: 3,
//   },
//   mangle: {
//     toplevel: true,
//     safari10: true,
//     eval: true,
//     reserved: [], // No reservar nombres
//     properties: {
//       regex: /^_/, // Mangling de propiedades privadas
//     },
//   },
//   output: {
//     beautify: false,
//     comments: false,
//     ascii_only: true, // Mejor compatibilidad
//     max_line_len: 1000, // Líneas más largas
//   },
//   module: true,
//   toplevel: true,
// }

// Tree shaking mejorado
// config.resolver.resolverMainFields = ["react-native", "browser", "main"]
// config.resolver.platforms = ["ios", "android", "native", "web"]

// Optimización de assets
// config.transformer.assetPlugins = ["expo-asset/tools/hashAssetFiles"]

// Configuración de cache más agresiva
// config.cacheStores = [
//   {
//     name: "filesystem",
//     options: {
//       directory: require("path").resolve(__dirname, ".metro-cache"),
//     },
//   },
// ]

// Excluir módulos de desarrollo en producción
// config.resolver.blockList = isProduction
//   ? [
//       /\/__tests__\/.*/,
//       /\/test\/.*/,
//       /\.test\.(js|jsx|ts|tsx)$/,
//       /\.spec\.(js|jsx|ts|tsx)$/,
//       /\/stories\/.*/,
//       /\.stories\.(js|jsx|ts|tsx)$/,
//     ]
//   : undefined

// cosas adicionales para web
// if (config.mode === "production") {
//   config.optimization = {
//     ...config.optimization,
//     sideEffects: false,
//     usedExports: true,
//   }
// }

module.exports = withNativeWind(config, { input: "./src/global.css" })
