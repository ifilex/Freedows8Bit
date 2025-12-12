![License](https://img.shields.io/badge/license-GPL-blue.svg)
![Platform](https://img.shields.io/badge/platform-ARM%20Linux-purple.svg)
![Status](https://img.shields.io/badge/status-Active-success.svg)
![Legacy](https://img.shields.io/badge/legacy-Termux%20Runtime-orange.svg)
![Tech](https://img.shields.io/badge/tech-Wine%2FProton%2FBox64-blueviolet.svg)



🧠 WINEBOX: Where Retro Tech Meets Modern Minds
From a quirky Android emulator to a groundbreaking cognitive tool. Discover the project that's redefining digital therapy through the power of "less is more".
<p align="center"> <img src="https://img.shields.io/badge/🚀-Project%20Journey-blueviolet"> <img src="https://img.shields.io/badge/🧩-For%20Neurodivergent%20Minds-ff69b4"> <img src="https://img.shields.io/badge/⚙️-Runs%20Everywhere-success"> <img src="https://img.shields.io/badge/🔓-100%25%20Open%20Source-9cf"> </p><p align="center"> <strong>✨ Choose Your Adventure ✨</strong><br> <a href="#-try-it-now-web-demo"><strong>🚀 Try it NOW (Web Demo)</strong></a> • <a href="#-the-apk-android-super-app"><strong>📱 The APK (Android Super-App)</strong></a> • <a href="#-the-legacy-system-full-android-experience"><strong>⏳ The Legacy System (Full Experience)</strong></a> </p>
⚡ The "Aha!" Moment: How a Tech Toy Became a Therapy Tool
"We weren't building therapy software. Therapy found us."

This is the story of Freedows 8-Bit. What started as a mad science experiment—running a full Windows-like desktop inside an Android phone, NO root required—unexpectedly revealed something profound.

👀 Clinicians noticed it first: Kids and adults, especially those with autism, ADHD, or attention difficulties, weren't just using this clunky retro environment. They were engaging with it on a deeper level. The simple graphics, predictable windows, and quiet interface didn't overwhelm them—it focused them.

The Discovery: The low-fidelity, distraction-free environment was accidentally training Executive Functions: planning, task-switching, working memory, and digital autonomy.

And so, WineBOX was born. The same powerful technical core, now with a purpose: Cognitive Stimulation through Designed Simplicity.

🧠 The Science of Simplicity: Why Old-School Pixels Beat Fancy Graphics
Forget complex 3D games. WineBOX is built on a counter-intuitive but rock-solid scientific principle:

"Reduce the visual noise, and you free the mind to think."

This isn't just a hunch. It's Cognitive Load Theory (Sweller, 1988) in action. By stripping away extraneous stimuli (flashy animations, chaotic UIs), we reduce cognitive overload, allowing the brain to focus its power on reasoning, planning, and learning.

It trains your brain to infer and imagine, activating the prefrontal cortex (Miller & Cohen, 2001).

It builds digital confidence through a familiar, non-threatening desktop metaphor.

It's a safe sandbox to explore, make mistakes, and learn technology autonomy.

📊 The Clinical Impact
Challenge	How WineBOX Helps	Scientific Basis
Sensory Overload	Minimalist interface reduces extraneous cognitive load	Mayer & Moreno (2003)
Executive Function	Simple tasks train planning & cognitive flexibility	Monsell (2003)
Attention Regulation	Low-intensity environment improves focus	Barkley ADHD model
Digital Anxiety	Predictable retro GUI builds confidence	Baron-Cohen autism research
WineBOX isn't a game. It's a cognitive gym.

🚀 TRY IT NOW: Web Demo
Experience the magic in your browser in 10 seconds. No install, no fuss.

👉 LAUNCH THE LIVE WEB DEMO

This WebAssembly-powered version lets you instantly interact with the WineBOX environment. See the desktop, open apps, and feel the unique calm of the interface. Perfect for a first look.

📱 THE APK: Android Super-App (The Future, Today)
Tired of complex setups? Get the full power in one tap. This is the streamlined future of WineBOX, packaged for modern Android tablets and phones.

🔥 What Makes This APK Special?
No Termux, No Commands: Just install and run.

Wine + Proton Power: Runs real Windows applications and games smoothly.

Optimized for MediaTek: Leverages efficient GPU-CPU integration for best performance.

DirectX & 3D Support: Goes far beyond simple emulation.

⬇️ Download & Install (It's Easy)
Download the APK: wine64-3D-1.0.apk

On your Android device, open the downloaded file and allow installation from "Unknown Sources" if prompted.

Launch the app and step into the cognitive desktop.

⚠️ Perfect for: Tablets, powerful phones, users who want a seamless "app-like" experience.

⏳ THE LEGACY SYSTEM: Full Android Experience (The OG Journey)
This is where it all began. For purists, tinkerers, and anyone who wants to understand the deep technical magic of WineBOX. Run the complete original Freedows 8-Bit environment on any Android device.

🔧 Installation Guide (The Original Ritual)
Step 1: Get the Tools

Download Termux

Download Termux-X11

Install both APKs.

Step 2: Unleash WineBOX
Open Termux and paste this one magical command:

bash
curl -o install https://raw.githubusercontent.com/ifilex/Freedows8Bit/main/src/install.sh && chmod +x install && ./install
Wait for the symphony of Linux packages to download and configure itself.

Step 3: Launch!
Once installed, simply type:

bash
winebox
Watch as Termux-X11 fires up and the legendary desktop appears.

⚙️ Optimal Settings for Termux-X11
Setting	Recommended Value	Why
Display Resolution Mode	exact	Pixel-perfect clarity
Resolution	800x600	The classic, comfortable view
Fullscreen	ON	Immersive experience
Force Landscape	ON	Desktop-friendly orientation
Prefer Scancodes	ON	Better keyboard compatibility
Hide Display Cutout	ON	Clean, distraction-free view
✅ Requirements: Android 10+, any ARM device. NO ROOT NEEDED.

📸 See It in Action
<p align="center"> <img src="/src/cap1.png" width="280" alt="Boot Screen"> <img src="/src/cap2.png" width="280" alt="Desktop"> <img src="/src/cap3.png" width="280" alt="Applications"> </p>
🏗️ Under the Hood: A Technical Marvel
WineBOX is a Russian doll of open-source ingenuity. Here's how the magic works:

The Software Stack (With Credit Where It's Due!)
text
Your Android Device
├── 📦 **Termux** (GPLv3) - The Linux playground on Android.
├── 🐚 **PRoot** (GPLv3) - Creates a virtual Linux filesystem.
│   └── 🖥️ **Ubuntu Rootfs** - A full ARM Linux environment.
│       ├── 🎭 **Box86/Box64** (MIT) - Translates x86 apps for ARM CPUs.
│       ├── 🍷 **Wine/Proton** (LGPL) - The heart of it all. Runs Windows apps.
│       ├── 🎮 **DXVK / VKD3D-Proton** (zlib/LGPL) - Turns DirectX into Vulkan for gaming.
│       ├── 🖌️ **Mesa 3D** (MIT) - The open-source graphics driver powerhouse.
│       └── 🖱️ **Termux-X11** (GPLv3) - Paints the desktop on your screen.
└── ✨ **Your Interaction** - Where cognition meets code.
📚 Complete Credit & Licensing
Termux & Termux-X11: GPLv3 - Android terminal and display server

Box86/Box64: MIT License - x86 to ARM translation layers

Wine/Proton: LGPL/Valve License - Windows compatibility layer

DXVK/VKD3D-Proton: zlib/LGPL - Direct3D to Vulkan translation

Mesa 3D Graphics: MIT License - OpenGL/Vulkan implementation

PRoot: GPLv3 - User-space chroot/chroot implementation

js-DOS: MIT License - Browser-based DOS emulation (Web version)

All clinical research and documentation: CC BY-NC 4.0

🎯 The Pillars of Our Philosophy
Legality First: Every piece of software is free, open-source, or shareware. No piracy.

Accessibility by Design: Runs on decade-old devices. No subscription fees.

Human-Centered: Technology should serve people, especially those it often leaves behind.

Evidence-Based: Grounded in cognitive science and neuropsychology.

📈 The Road Ahead: From Hobby Project to Global Tool
The journey is just getting started. Here's where we're going:

Phase	Status	Focus
1. The Origin (2022)	✅ Complete	Technical proof (Freedows 8-Bit). Accidental discovery.
2. The Awakening (2023-2024)	🚧 In Progress	Formalizing WineBOX. APK development. Clinical partnerships.
3. The Impact (2025+)	🔮 Future	Dedicated "Cognitive Tablet." Large-scale studies. Global accessibility.
🔬 Current Research Directions
Controlled clinical trials with neurodivergent participants

fNIRS/EEG studies measuring prefrontal cortex activation

Longitudinal studies on digital autonomy development

Cross-cultural adaptation for global accessibility

We are actively seeking collaborations with researchers, therapists, and developers. If our vision resonates with you, get in touch.

❤️ Join the Revolution
WineBOX proves that compassionate technology doesn't need to be complicated or expensive. It's a testament to the power of open source, curiosity, and seeing potential where others see limitations.

How You Can Help:
⭐ Star this repo if you believe in tech that makes a real difference

🍴 Fork it to dive into the code or create your own version

🐛 Report issues to help us improve

📬 Share it with teachers, therapists, or neurodiversity communities

🔬 Collaborate if you're a researcher or clinician

This project is maintained with ❤️ by an interdisciplinary team of developers, neuropsychologists, and families who believe technology should empower everyone.

📜 License & Credit: This project stands on the shoulders of giants. All integrated software is used under its respective open-source license (GPL, MIT, LGPL). The WineBOX concept and clinical research direction are released under CC BY-NC 4.0.

⚕️ Important Disclaimer: WineBOX is a cognitive stimulation environment and digital tool. It is designed as a supportive resource, not a medical device or replacement for professional medical diagnosis, therapy, or treatment. Always consult qualified healthcare providers for medical advice.

<p align="center"> <em>WineBOX: More than an emulator. A window to a more focused mind.</em><br> <strong>Website:</strong> <a href="http://www.winebox.cloud">www.winebox.cloud</a> • <strong>Whitepaper:</strong> <a href="http://www.winebox.cloud/whitepaper">Cognitive Optimization Through Reduced Visual Fidelity</a> • <strong>Contact:</strong> <a href="mailto:ifflex@gmail.com">ifflex@gmail.com</a> </p><p align="center"> <img src="https://img.shields.io/github/stars/ifilex/Freedows8Bit?style=for-the-badge&label=🌟%20Star%20This%20Journey&color=gold"> <img src="https://img.shields.io/github/forks/ifilex/Freedows8Bit?style=for-the-badge&label=🍴%20Fork%20%26%20Explore&color=blue"> <img src="https://img.shields.io/github/issues/ifilex/Freedows8Bit?style=for-the-badge&label=💡%20Join%20the%20Conversation&color=green"> </p> ```
