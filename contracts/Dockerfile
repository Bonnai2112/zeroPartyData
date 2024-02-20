FROM ghcr.io/foundry-rs/foundry:latest

ARG NVM_VERSION=v0.39.7

RUN git clone https://github.com/creationix/nvm.git /root/.nvm\
    && cd /root/.nvm \
    && git checkout $NVM_VERSION