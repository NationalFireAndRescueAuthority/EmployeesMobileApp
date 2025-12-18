
const BUNDLE_ID = "com.dedi102.fireandrescuecrews";
const PROJECT_ID = "e09c516d-7a11-4ce3-82f5-4650aff4f22f";
const APP_NAME = "כיבוי והצלה - עובדים";

const environments = {
  development: {
    envName: "development",
    baseUrl: "http://localhost:3000",
    eas: {
      projectId: PROJECT_ID,
    },
  },
  production: {
    envName: "production",
    baseUrl: "https://your-production-api.com", // TODO: Replace with your production API URL
    eas: {
      projectId: PROJECT_ID,
    },
  },
};

const getEnvironment = () => {
  const buildProfile = process.env.EAS_BUILD_PROFILE;
  if (buildProfile === "production") {
    return environments.production;
  }
  return environments.development;
};

const env = getEnvironment();

export default {
  expo: {
    name: APP_NAME,
    slug: "fireandrescuecrews",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/new_app_icon.png",
    scheme: "fireandrescuecrews",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        backgroundColor: "#000000",
        foregroundImage: "./assets/images/new_app_icon.png",
      },
      edgeToEdgeEnabled: true,
      predictiveBackGestureEnabled: false,
      package: BUNDLE_ID,
    },
    web: {
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.jpg",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
          dark: {
            backgroundColor: "#000000",
          },
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
      reactCompiler: false,
    },
    extra: {
      ...env,
      router: {},
    },
  },
};
