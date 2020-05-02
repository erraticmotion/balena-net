# Scratch

## Install NPM

```console
sudo apt install npm
```

## Raspberry Pi4

```text
FROM balenalib/raspberrypi4-64-alpine-node
```

```console
balena push 192.168.0.13
```

## balenaFin

```text
FROM balenalib/fincm3-alpine-node
```

```console
balena push 192.168.0.15
```

## Intel NUC

```text
FROM balenalib/amd64-alpine-node
```

```console
balena push 192.168.200.142
```