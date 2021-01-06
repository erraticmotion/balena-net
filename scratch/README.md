# Scratch

Simple Node web server running on the Nuc VM's to test deployment and build.

## Deploynent via balena

```console
cd ~/src/scratch

# Authenticate using web, use Git login.
balena login

balena push swarm --source .
balena push dash --source .
balena push build --source .
```

# IP addresses of the 3 VM's running intel NUCs
http://192.168.200.140
http://192.168.200.141
http://192.168.200.143

## Local deployment

```console
cd ~/src/scratch
docker-compose build
docker run --name test -it -p 80:80 scratch_web:latest
```

http://192.168.200.167