import os, shutil, time
def packages():
    os.system("pkg install x11-repo -y &>/dev/null")
    os.system("pkg install pulseaudio wget xkeyboard-config virglrenderer-android proot-distro termux-x11-nightly termux-am -y &>/dev/null")
def check_prev_version():
    config = "/sdcard/WineBOX"
    if os.path.exists(config):
        shutil.rmtree(config)
    os.system("proot-distro remove ubuntu-winebox &>/dev/null")
def install_rootfs():
    os.makedirs("/data/data/com.termux/files/usr/var/lib/proot-distro", exist_ok=True)
    os.makedirs("/data/data/com.termux/files/usr/var/lib/proot-distro/installed-rootfs", exist_ok=True)
    os.makedirs("/data/data/com.termux/files/usr/var/lib/proot-distro/installed-rootfs/ubuntu", exist_ok=True)
    os.system("wget -q --show-progress https://github.com/ifilex/Freedows8Bit/releases/download/main/winebox.tar.xz")
    os.system("proot-distro restore winebox.tar.xz &>/dev/null")
def scripts():
    os.system("wget https://raw.githubusercontent.com/ifilex/Freedows8Bit/main/src/winebox &>/dev/null")
    os.system("chmod +x winebox")
    os.system("mv winebox $PREFIX/bin/")
def clear_waste():
    os.system("rm winebox.tar.xz install winebox.py")
    os.system("clear")
def storage():
    if not os.path.exists("/data/data/com.termux/files/home/storage"):
        os.system("termux-setup-storage")
        time.sleep(2)
os.system("clear")
print("WineBOX Installer")
print("===========================================================")
print("")
print(" [-] Please allow storage permission")
storage()
print(" [-] Installing packages...")
packages()
print(" [-] Checking for older WineBOX versions and removing them if any...")
print("")
check_prev_version()
print(" [-] Downloading and installing rootfs, please wait...")
print("")
install_rootfs()
print("")
print(" [-] Downloading starting scripts...")
print("")
scripts()
print(" [-] Removing the installation temp files...")
clear_waste()
print("")
print(" Installation finished. To start WineBOX run 'winebox'")
print("")

