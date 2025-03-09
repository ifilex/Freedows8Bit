#!/bin/bash
clear
echo "WineBOX Installer"
echo "==========================================================="
echo ""
echo "- Installing linux packs.."
echo ""
apt-get update &>/dev/null
apt-get -y --with-new-pkgs -o Dpkg::Options::="--force-confdef" upgrade &>/dev/null
apt install python --no-install-recommends -y &>/dev/null
clear
echo "WineBOX Installer"
echo "==========================================================="
echo ""
echo "- Download the online installer.."
    
curl -o winebox.py https://raw.githubusercontent.com/ifilex/Freedows8Bit/main/src/winebox.py && python3 winebox.py && winebox
