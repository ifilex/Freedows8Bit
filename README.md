### Freedows8Bit (a.k.a. WineBOX)
Open Source Windows Emulator for Mobile Devices, PCs, Tablets, and TV Boxes

Freedows8Bit (also known as WineBOX, or Code Freedows8Bit) is an advanced open-source project designed to emulate a Windows environment across various platforms, including smartphones, personal computers, tablets, and TV boxes.

This innovative emulator allows users to run Windows applications and games seamlessly, bringing the power of a complete Windows system to your fingertips, regardless of the device you’re using.


Experience the capabilities of Freedows8Bit through our live demo: 

[Web Testing](https://ifilex.github.io/Freedows8Bit/) 

Join us on this exciting journey to redefine accessibility in computing!

## Install Wine-Proton APK on Android Tablets (Recommended for MediaTek Devices):
## Full Gaming Support with Wine 9.0 + Proton Libraries

This installation method allows you to run Windows applications and video games directly on Android tablets, especially recommended for devices with MediaTek processors due to their efficient GPU-CPU integration. The APK uses Wine 9.0 as its compatibility base and integrates Proton libraries, originally developed by Valve to enable Windows games on Linux via Steam Play.

Thanks to this combination, many DirectX-based Windows games can now run more smoothly on Android through Wine, with better support for controllers, audio, and GPU acceleration. While performance may vary, tablets using MediaTek chipsets (like Helio or Dimensity series) have shown excellent compatibility and are ideal for this setup.

⚠️ Termux is not required for this APK installation — simply sideload it and start running Windows games and apps with near-native performance.

📦 Download the APK directly
🔗 Download [wine64-3D-1.0.apk](https://github.com/ifilex/Freedows8Bit/releases/download/binary/wine64-3D-1.0.apk)
This file is hosted in the GitHub repository: github.com/ifilex/Freedows8Bit


## Installation instructions for Android (via Termux):

1. Install [Termux](https://github.com/ifilex/Freedows8Bit/releases/download/apks/termux.apk) and [Termux-x11](https://github.com/ifilex/Freedows8Bit/releases/download/apks/termux-x11.apk).
2. Start Termux,and  run the WineBOX install command:
```
curl -o install https://raw.githubusercontent.com/ifilex/Freedows8Bit/main/src/install.sh && chmod +x install && ./install
```
3. After the installation is completed, run the command: "winebox". The script will start Termux-X11 and show the desktop.

### Settings for Termux-x11:
* `Display resolution mode` exact
* `Display resolution` 800x600
* `Reseed Screen While Soft Keyboard is open` OFF
* `Fullscreen on device display` ON
* `Force Landscape orientation` ON
* `Hide display cutout` ON
* `Show additional keyboard` OFF
* `Prefer scancodes when possible` ON

## Support status
**Android 10 or higher is recommended.

### Device
* Most Android phones equipped with a Mali GPU can run DirectX 9 games using [Mesa VirGL](https://github.com/alexvorxx/Mesa-VirGL) .

### Root
* Root is not required.

## Applications and scripts which were used in WineBOX E2A
- [Termux-app](https://github.com/termux/termux-app) - GPLv3 license
- [Box64 by ptitseb](https://github.com/ptitSeb/box64) - MIT license
- [Box86 by ptitseb](https://github.com/ptitSeb/box86) - MIT license
- [Wine Stable, Staging and Staging-tkg GPL-2.1 license](https://wiki.winehq.org/Licensing) (builded by [Kron4ek](https://github.com/Kron4ek) by MIT License), [Wine Proton by Valve](https://github.com/ValveSoftware/Proton) (own license), [Wine GE](https://github.com/GloriousEggroll/wine-ge-custom) (using in Lutris)
- [Mesa](https://docs.mesa3d.org/license.html) - MIT, Khronos, SGI Free Software License B and Boost (permissive) licenses
- [Termux-x11](https://github.com/termux/termux-x11) - GPL-3.0 license
- [DXVK](https://github.com/doitsujin/dxvk) - Zlib license
- [Proot-distro](https://github.com/termux/proot-distro) - GPL-3.0 license
- [Forked Mesa to work Turnip on Adreno 730 and 740](https://gitlab.freedesktop.org/Danil/mesa/-/tree/turnip/feature/a7xx-basic-support)
- [D8VK](https://github.com/AlpyneDreams/d8vk) - Zlib license
- [DXVK-Async](https://github.com/Sporif/dxvk-async)
- [DXVK-GPLAsync](https://gitlab.com/Ph42oN/dxvk-gplasync)
- [WineD3D for Windows](https://fdossena.com/?p=wined3d/index.frag) - GPL-2.0+ license
- [Winetricks](https://wiki.winehq.org/Winetricks)
- [vkd3d-proton](https://github.com/HansKristian-Work/vkd3d-proton) - LGPL v2.1 license
- [glibc-prefix](https://github.com/termux-pacman/glibc-packages) - MIT license

