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
ssh -p 22222 root@192.168.0.10
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
docker pull balenalib/raspberry-pi-golang
docker pull balenalib/raspberrypi3-golang
docker pull balenalib/raspberrypi3-64-golang
docker pull golang

docker pull balenalib/raspberrypi3-dotnet
docker pull balenalib/raspberrypi3-64-dotnet:3.1-sdk
docker pull balenalib/raspberrypi3-64-dotnet:3.1-aspnet-build
docker pull balenalib/raspberrypi3-64-dotnet:3.1-aspnet-run

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