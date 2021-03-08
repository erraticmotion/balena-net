# Intel NUC

Run the [Intel NUC][balena-os] as a VM and deploy to ESXi v7. 

Monitor using the [Balena Cloud Dashboard][dashboard]

Push Docker images using an Ubuntu 18.04 VM as a build and integration server.

## Install 
```console
sudo apt-get install -y qemu-utils
qemu-img --version
```

## Create vmdk

```console
qemu-img convert balena-cloud-HUBZ-VM-intel-nuc-2.68.1+rev1-dev-v12.3.0.img -O vmdk balena-cloud-HUBZ-VM-intel-nuc-2.68.1+rev1-dev-v12.3.0.vmdk
qemu-img convert balena-cloud-HUBZ-CIRCUS-Sandbox-intel-nuc-2.68.1+rev1-dev-v12.3.0.img -O vmdk balena-cloud-HUBZ-CIRCUS-Sandbox-intel-nuc-2.68.1+rev1-dev-v12.3.0.vmdk
```

```
setlocal
set PATH=C:\Program Files (x86)\VMware\VMware Workstation

vmware-vdiskmanager -r balena-cloud-HUBZ-VM-intel-nuc-2.68.1+rev1-dev-v12.3.0.vmdk -t 4 balena-cloud-HUBZ-VM-intel-nuc-2.68.vmdk
-or-
vmware-vdiskmanager -r balena-cloud-HUBZ-Circus-Sandbox-intel-nuc-2.68.1+rev1-dev-v12.3.0.vmdk -t 4 balena-cloud-HUBZ-CIRCUS-Sandbox-intel-nuc-2.68.vmdk
```

## Import disk as a VM
* Configuration: Custom (advanced).
* Hardware compatability: Workstation 16.x.
* Select : I will install the operating system later.
* Guest operating system: Linux - Debian 6 64-bit.
* VM name: Intel Nuc.
* Processors: 1, Cores 1.
* Memory: 2Gb.
* Use NAT.
* LSI Logic.
* Virtual Disk Type: SATA. Note: It is critical that the original Balena VMDK is set to SATA 0:0 otherwise it will not boot properly. It should be already configured as such, but you can click the Advanced button to double check.
* Use and existing virtual disk.
* Existing disk file: Navigate to the `balena-cloud-HUBZ-VM-intel-nuc-2.68.vmdk` (1kb file)
* Click finish.

## Customize VM.
* Remove USB Controller, Sound Card and Printer
* Add a new Hard Disk: SATA, Create virtual, 2 Gb, store virtual as single file.
* Check: Firmware type: BIOS

Power on the VM, it will boot, press F10 to select the virtual pen drive, copy the contents of the virtual pen drive, then shut itself down.

## Post provisioning
* Remove Hard Disk (SATA - v pen drive)
* Click OK.
* File/Export to OVF: Node-{id).ova. NOTE: Change extension to `.ova`.
* File/Open: Open the Node-{id}.ova. The VM will provision itself and become alive in the balena cloud web site.
* Intel Nuc: Edit Virtual machine settings. Add... Hard Disk. SATA. Use and existing virtual disk. Select `balena-cloud-HUBZ-VM-Sandbox-intel-nuc-2.68.vmdk` (1kb file). Think of this as inserting the pen drive back into a new instance of a physical machine that is virtualized as `Intel Nuc`.
* Repeat `Power on the VM,...` until the required number of instances have been created.

## Login 

```console
balena ssh 192.168.200.140
```

## Intel NUC balena OS from Windows
To get command line access from Windows, open command prompt and connect direclty to the balenaOS to bypass VM.
```console
ssh -p 22222 root@192.168.200.140
```

[balena-os]: (https://www.balena.io/os/)
[dashboard]: (https://dashboard.balena-cloud.com/apps)
[info]: (https://forums.balena.io/t/how-to-create-vmware-or-virtualbox-virtual-machine-from-balena-app-image/95385)