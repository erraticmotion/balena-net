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
balena ssh 192.168.200.140
```

## balenaOS from Windows
To get command line access from Windows, open command prompt and connect direclty to the balenaOS to bypass VM.
```console
ssh -p 22222 root@192.168.200.140
```



## Docker images for balenaOS on intel Nuc
```console
balena-engine pull balenalib/amd64-alpine-node
```