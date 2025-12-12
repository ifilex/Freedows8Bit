![License](https://img.shields.io/badge/license-GPL-blue.svg)
![Platform](https://img.shields.io/badge/platform-ARM%20Linux-purple.svg)
![Status](https://img.shields.io/badge/status-Active-success.svg)
![Legacy](https://img.shields.io/badge/legacy-Termux%20Runtime-orange.svg)
![Tech](https://img.shields.io/badge/tech-Wine%2FProton%2FBox64-blueviolet.svg)

🟪 WineBox / Freedows8Bit
Legacy Windows Runtime + Next-Gen ARM Cognitive Therapeutic Environment

🌟 Overview

WineBox (formerly Freedows8Bit) began as an experimental project aimed at running Windows applications on platforms where Windows was never meant to run:

Android

Linux

Smart TVs & TV Boxes

ARM boards

Web browsers

Even consoles

Through years of experimentation using Wine, Proton, Box64, DXVK, and custom rendering pipelines, the system became extremely optimized — achieving surprising speed even on low-resource hardware.

Today, this legacy technology is the foundation of a new purpose:

🧠 WineBox ARM Cognitive Therapeutic System

A next-generation ARM Linux environment designed for:

Cognitive stimulation

Neurodevelopmental therapy

Autism (ASD/TEA) support

Executive function tasks

Hospital/clinic modules

Therapist-guided interventions

This README documents both eras:

🔵 The Legacy Emulator Era

🟣 The Next-Gen ARM Cognitive Era

Because one made the other possible.

🟣 NEXT-GEN ERA — WineBox ARM Cognitive Therapeutic System
The future of the project

WineBox ARM is an advanced Linux-based therapeutic OS for cognitive applications, optimized for extremely low latency and modular expansion.

✨ New Capabilities

Dedicated ARM Linux environment

DEB package support for installing modules

Fully redesigned therapeutic UI

Cognitive engine (sensory, attention, language, executive functions)

Secure sandbox for patient sessions

Offline mode for hospitals and institutions

Highly optimized rendering pipeline

Experimental compatibility with Windows RT (ARM)

Future APK with the new WineBox interface (not the legacy Wine-Proton UI)

This new system is the direct evolution of all the optimizations achieved during the emulator era.

🔵 LEGACY ERA — Freedows8Bit / WineBOX Emulator
The technology that made everything possible

This version allowed Windows apps to run on virtually any hardware, using a hybrid architecture combining Linux, Wine, Proton, Box64 and multiple graphics layers.

🧩 Legacy Features

Windows app execution (including some 3D)

32→64-bit translation without WOW64 or Box64

Proton / Wine environment

DXVK, D8VK, Turnip, VirGL renderer

Keyboard, mouse, joystick and virtual controller support

Early “EXE → APK” converter

WebApp launcher

Offline mode

Built-in developer console

📦 Legacy Binary (Preserved)

Wine-Proton APK (wine64-3D-1.0.apk)
→ Preserved as a legacy binary for historical reference.

📱 Termux Runtime Layer (Historical Build)
A key milestone in the evolution of WineBox

This historical version allowed WineBox to run inside Android without root, using a full Linux userspace inside Termux.

✔ Confirmed Architecture
Android
  → Termux
      → proot (Debian/Ubuntu rootfs)
          → Termux-X11
              → Box64
                  → Wine / Proton
                      → DXVK / D8VK / Turnip

✔ What it enabled

Full Windows apps running on Android

GPU-accelerated rendering on mobile drivers

Portable, multi-layer runtime

Extreme low-resource optimization

Real-world performance testing

The foundation for the modern ARM cognitive engine

Although deprecated, the Termux build is preserved in this repository as an important piece of WineBox history.

🧬 Modern Architecture (WineBox ARM Cognitive System)
WineBox ARM OS
   ├── Cognitive Engine
   │      ├── Sensory Stimulation
   │      ├── Executive Functions
   │      ├── Language & Attention Tools
   │      └── Adaptive Difficulty Layer
   ├── Therapist Dashboard
   ├── DEB Module Manager
   ├── Secure Session Sandbox
   ├── Next-Gen UI Engine
   └── Optional Windows RT ARM Support

🧱 Recommended Repository Structure
/legacy/
   /termux-runtime/
   /wine-proton-apk/
   /emulator-files/
   README-legacy.md

/arm/
   /rootfs/
   /modules/
   /ui/
   /debian/
   /scripts/
   README-arm.md

/docs/
   architecture.md
   changelog.md
   install-guide.md

README.md
LICENSE
