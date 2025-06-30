import { ConfigContext, ExpoConfig } from "expo/config"

const VERSION = "0.1.0"
const EAS_PROJECT_ID = "57b1bc88-a3e8-4edc-bf18-224c8c5987d3"
const PROJECT_SLUG = "stay"
const OWNER = "yestoall"

// App production config
const APP_NAME = "Stay"
const BUNDLE_IDENTIFIER = "com.yestoall.stay"
const PACKAGE_NAME = "com.yestoall.stay"
const ICON = "./src/assets/images/icons/iOS-Prod.png"
const ADAPTIVE_ICON = "./src/assets/images/icons/Android-Prod.png"
const SCHEME = "stay"

export default ({ config }: ConfigContext): ExpoConfig => {
  const configEnvironment = "development"
  // const configEnvironment = "preview"
  console.log("⚙️ Building app for environment:", configEnvironment)
  const { name, bundleIdentifier, icon, adaptiveIcon, packageName, scheme } =
    getDynamicAppConfig(configEnvironment)

  return {
    ...config,
    name: name,
    version: VERSION,
    slug: PROJECT_SLUG, // Must be consistent across all environments.
    orientation: "portrait",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    icon: icon,
    scheme: scheme,
    ios: {
      supportsTablet: true,
      bundleIdentifier: bundleIdentifier,
      backgroundColor: "#111",
      buildNumber: "1",
      infoPlist: {
        ITSAppUsesNonExemptEncryption: false,
      },
    },
    android: {
      adaptiveIcon: {
        foregroundImage: adaptiveIcon,
        backgroundColor: "#113241",
      },
      package: packageName,
    },
    updates: {
      url: `https://u.expo.dev/${EAS_PROJECT_ID}`,
    },
    runtimeVersion: {
      policy: "appVersion",
    },
    extra: {
      eas: {
        projectId: EAS_PROJECT_ID,
      },
    },
    web: {
      bundler: "metro",
      output: "server",
      backgroundColor: "#113241",
      favicon: "./src/assets/images/favicon_32.png",
      proxy: {
        "/api": "https://stay.expo.app",
      },
    },
    plugins: [
      ["expo-router", { origin: "https://stay.expo.app" }],
      [
        "expo-build-properties",
        {
          ios: {
            deploymentTarget: "15.1",
          },
        },
      ],
      [
        "expo-splash-screen",
        {
          image: "./src/assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#113241",
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
    owner: OWNER,
  }
}

// Dynamically configure the app based on the environment.
// Update these placeholders with your actual values.
export const getDynamicAppConfig = (
  environment: "development" | "preview" | "production"
) => {
  if (environment === "production") {
    return {
      name: APP_NAME,
      bundleIdentifier: BUNDLE_IDENTIFIER,
      packageName: PACKAGE_NAME,
      icon: ICON,
      adaptiveIcon: ADAPTIVE_ICON,
      scheme: SCHEME,
    }
  }

  if (environment === "preview") {
    return {
      name: `${APP_NAME} Prev`,
      bundleIdentifier: `${BUNDLE_IDENTIFIER}.preview`,
      packageName: `${PACKAGE_NAME}.preview`,
      icon: "./src/assets/images/icons/iOS-Prev.png",
      adaptiveIcon: "./src/assets/images/icons/Android-Prev.png",
      scheme: `${SCHEME}-prev`,
    }
  }

  return {
    name: `${APP_NAME} Dev`,
    bundleIdentifier: `${BUNDLE_IDENTIFIER}.dev`,
    packageName: `${PACKAGE_NAME}.dev`,
    icon: "./src/assets/images/icons/iOS-Dev.png",
    adaptiveIcon: "./src/assets/images/icons/Android-Dev.png",
    scheme: `${SCHEME}-dev`,
  }
}
