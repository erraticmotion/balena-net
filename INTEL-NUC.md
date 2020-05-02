# INTEL NUC

Run the [Intel NUC belenaOS][balena-nuc] as a VM.

## Install 
```console
sudo apt-get install -y qemu-utils
qemu-img --version
```
Download the [resin image flasher][unwrap]

## Create vmdk

```console
./docker-run ~/src/lib/resin-image-flasher-unwrap/balenaOS-nuc-2.48.0+rev3.dev.img
qemu-img convert output/resin-image.img -O vmdk output/balenaOS-2.48.0+rev3.dev.vmdk
```

## Import disk as a VM
* Guest operating system: Other Linux 4.x 64-bit
* Memory: 8Gb
* Processors: 8
* Hard Disk: IDE 80 Gb
* Firmware type: BIOS
* Virtual device node: IDE 1:1 Hard Disk (IDE)

## Login 

```console
balena ssh balena.local
ip addr
# 192.168.200.142
```
[balena-nuc]: (https://www.balena.io/os/)
[unwrap]: (https://github.com/balena-os/resin-image-flasher-unwrap)