# Rise BluetoothToMqtt

L'application va transférer le data du véhicule rise(ryse?) vers une destination de notre choix.

Pour déterminer la position du véhicule, j'ai utilisé le plugin [@nativescript/geolocation](https://www.npmjs.com/package/@nativescript/geolocation)

## Utilisation:

* Utiliser la commande suivante pour builder et démarrer un android virtuel: ``` tns run android ```

## prérequis:

* Installer chocolatey (commande powershell):
    ```Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))```
* Installer [nativescript pour windows (android)](https://v7.docs.nativescript.org/angular/start/ns-setup-win): ```npm install -g nativescript```
* Pour l'emulateur, j'ai utilisé:
  * ```cd %ANDROID_HOME%/tools/bin```
  * ```sdkmanager --install "system-images;android-28;google_apis;x86"```
  * ```echo "no" | avdmanager --verbose create avd --force --name "pixel_9.0" --device "pixel" --package "system-images;android-28;google_apis;x86" --tag "google_apis" --abi "x86```
* Suivre les instructions pour configurer l'environnement avec android studio: [nativescript-android](https://www.npmjs.com/package/@nativescript/android)

