# Balena-Net

See [Intel NUC](INTEL-NUC.md)

Install and run the balena CLI on a Ubuntu VM to isolate from Windows host machine. Acts as a integration and build server separate form the underlying operation system.

## Set NFS share
```console
sudo apt-get install -y nfs-kernel-server
mkdir ~/src
sudo nano /etc/fstab
```

```text
192.168.0.6:/nfs/Source/balena-net    /home/ubuntu/src   nfs      defaults    0       0
```

```console
sudo mount -a
```

## Docker and Compose
```console
sudo apt-get update
sudo apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io
sudo usermod -aG docker $USER
su -l $USER

sudo apt install docker-compose
```

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

## Docker images for balenaOS on Intel NUC

```console
docker pull balenalib/amd64-alpine-node
docker pull balenalib/amd64-dotnet
docker pull balenalib/amd64-dotnet:3.1-aspnet-build
docker pull balenalib/amd64-dotnet:3.1-aspnet-run
docker pull balenalib/amd64-dotnet:3.1-sdk
docker pull balenalib/amd64-dotnet:3.1-build
```