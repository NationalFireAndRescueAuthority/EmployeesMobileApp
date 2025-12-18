IMPORTANT:

You must have android studio installed and run the app for the first time to install SDK 
https://developer.android.com/studio
**
Set the ANDROID_HOME environment variable on Windows:**

Open System Properties (press Win + X → System → Advanced system settings)
Click "Environment Variables"
Click "New" under System variables
Variable name: ANDROID_HOME
Variable value: C:\Users\{YourUsername}\AppData\Local\Android\Sdk (or wherever you installed Android SDK)
Click OK

If you don't see the Android in Local folder - you didnt run the android studio for the first time :) 

Add Android SDK tools to PATH:

In the same Environment Variables window, find the Path variable under System variables
Click "Edit"
Click "New"
Add: %ANDROID_HOME%\platform-tools
Click "New" again
Add: %ANDROID_HOME%\tools
Click OK

Restart your terminal and verify: adb --version

Using expo:

1. Port 8081 which is the base port for expo is not available

2. Use npx expo start --android --port 1234  (Barcode + link)
3. To install apk for testing download eas cli and use the command: eas build --platform ios\android --profile preview

