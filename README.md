# Balena-Net

Note: For quicker builds and without the need for a BalenaFin module, see [Intel NUC](INTEL-NUC.md)

Install and run the balena CLI on a Ubuntu VM to isolate from Windows host machine. 

## Balena CLI

```console
cd ~
wget -q https://github.com/balena-io/balena-cli/releases/download/v11.30.16/balena-cli-v11.30.16-linux-x64-standalone.zip
sudo apt-get install -y unzip
sudo unzip balena-cli-v11.30.16-linux-x64-standalone.zip -d /usr/local/bin/
nano .bashrc
```

```text
export PATH="/usr/local/bin/balena-cli:$PATH"
```

```console
source ~/.bashrc
balena version
```

## balenaOS
Running raspberry Pi4 image off the balena could account (@orange.fr).
```console
balena ssh 192.168.0.8
```

## balenaOS from Windows
To get command line access from Windows, open command prompt and connect direclty to the balenaOS to bypass VM.
```console
ssh -p 22222 root@192.168.200.8
```

## Docker images for balenaOS on RPi 4
```console
balena-engine pull balenalib/raspberrypi4-64-alpine-node
```

## Docker images for balenaFin compute module

```console
balena-engine pull balenalib/fincm3-alpine-node
balena-engine pull balenalib/fincm3-golang
balena-engine pull balenalib/fincm3-dotnet
balena-engine pull balenalib/fincm3-dotnet:3.1-aspnet-build
balena-engine pull balenalib/fincm3-dotnet:3.1-aspnet-run
balena-engine pull balenalib/fincm3-dotnet:3.1-build
balena-engine images
```


