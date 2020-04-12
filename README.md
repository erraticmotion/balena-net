# Balena-Net

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

## Connect
```
balena ssh 192.168.0.10
```

## Docker images for Balena

```console
balena-engine pull balenalib/raspberry-pi-golang
balena-engine pull balenalib/raspberrypi3-golang
balena-engine pull balenalib/raspberrypi3-64-golang

balena-engine pull balenalib/raspberrypi3-dotnet
balena-engine pull balenalib/raspberrypi3-64-dotnet
balena-engine pull balenalib/raspberrypi3-64-dotnet:3.1
balena-engine pull balenalib/raspberrypi3-64-dotnet:3.1-sdk
balena-engine pull balenalib/raspberrypi3-64-dotnet:3.1-build
balena-engine pull balenalib/raspberrypi3-64-dotnet:3.1-aspnet-build
balena-engine pull balenalib/raspberrypi3-64-dotnet:3.1-aspnet-run

balena-engine images
```
