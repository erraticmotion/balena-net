# Install 

Install belena OS for Intel NUC onto VMWare

# Install required software

```console
sudo apt-get install -y qemu-utils
qemu-img --version
```

## Create vmdk

```console
./docker-run ~/src/lib/resin-image-flasher-unwrap/balenaOS-nuc-2.48.0+rev3.dev.img

qemu-img convert output/resin-image.img -O vmdk output/balenaOS-2.48.0+rev3.dev.vmdk
```

## Import disk as a VM

```console

```

## Login 

```console
balena ssh balena.local
ip addr

192.168.200.142

```