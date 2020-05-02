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

## Raspberry Pi4

```console
balena ssh 192.168.0.13
```

## balenaFin

```console
balena ssh 192.168.0.15
```

## Intel NUC

```console
balena ssh 192.168.200.142
```

## Docker images for balenaOS on Pi4

```console
balena-engine pull balenalib/raspberrypi4-64-alpine-node
balena-engine pull balenalib/raspberrypi4-64-golang
balena-engine pull balenalib/raspberrypi4-64-dotnet
balena-engine pull balenalib/raspberrypi4-64-dotnet:3.1-aspnet-build
balena-engine pull balenalib/raspberrypi4-64-dotnet:3.1-aspnet-run
balena-engine images
```

## Docker images for balenaFin compute module

```console
balena-engine pull balenalib/fincm3-alpine-node
balena-engine pull balenalib/fincm3-golang
balena-engine pull balenalib/fincm3-dotnet
balena-engine pull balenalib/fincm3-dotnet:3.1-aspnet-build
balena-engine pull balenalib/fincm3-dotnet:3.1-aspnet-run
balena-engine images
```

## Docker images for balenaOS on intel NUC

```console
balena-engine pull balenalib/amd64-alpine-node
balena-engine pull balenalib/amd64-golang
balena-engine pull balenalib/amd64-dotnet
balena-engine pull balenalib/amd64-dotnet:3.1-aspnet-build
balena-engine pull balenalib/amd64-dotnet:3.1-aspnet-run
balena-engine images
```

## Dotnet Core on Ubuntu 18.04

```console
wget https://packages.microsoft.com/config/ubuntu/18.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb
sudo add-apt-repository universe
sudo apt-get update
sudo apt-get install apt-transport-https
sudo apt-get update
sudo apt-get install dotnet-sdk-3.1
```

## Docker images for Balena-Net

```console
docker pull balenalib/amd64-alpine-node
docker pull balenalib/amd64-golang
docker pull balenalib/amd64-dotnet
docker pull balenalib/amd64-dotnet:3.1-aspnet-build
docker pull balenalib/amd64-dotnet:3.1-aspnet-run

docker pull mcr.microsoft.com/dotnet/core/runtime-deps
docker pull mcr.microsoft.com/dotnet/core/runtime
docker pull mcr.microsoft.com/dotnet/core/aspnet
docker pull mcr.microsoft.com/dotnet/core/sdk
docker images
```

## Install Go

```console
export GO_VERSION=1.13.6
curl -sfLo go$GO_VERSION.linux-amd64.tar.gz https://dl.google.com/go/go$GO_VERSION.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go$GO_VERSION.linux-amd64.tar.gz

nano ~/.profile
--add the following line to the bottom of the file
export PATH=$PATH:/usr/local/go/bin
-- save and exit
source $HOME/.profile
go version
```

## Install `direnv`
```console
export DE_VERSION=2.20.0
curl -sfLo direnv https://github.com/direnv/direnv/releases/download/v$DE_VERSION/direnv.linux-amd64
chmod +x direnv
sudo mv direnv /usr/local/bin

nano ~/.bashrc
--add the following line to the bottom of the file
eval "$(direnv hook bash)"
-- save and exit
exec bash
```