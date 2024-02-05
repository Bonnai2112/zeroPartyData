FROM rust:latest

ARG NVM_VERSION=v0.39.7

RUN apt update \
    && apt install -y cmake build-essential git nodejs wget \
    && rm -rf /var/lib/apt/lists* 

RUN git clone https://github.com/creationix/nvm.git /root/.nvm\
    && cd /root/.nvm \
    && git checkout $NVM_VERSION

RUN git clone --depth=1 https://github.com/iden3/circom.git 
WORKDIR /circom
RUN RUSTFLAGS="-g" cargo build --release
RUN cargo install --path circom
RUN strip -g /usr/local/cargo/bin/circom \
  && echo "CARGO_VERSION='$(cargo --version)'" >> /etc/image-info \
  && echo "RUST_VERSION='$(rustc --version)'" >> /etc/image-info

CMD /usr/local/cargo/bin/circom
