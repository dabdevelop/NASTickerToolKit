FROM node:8
ENV KEY '{"version":4,"id":"3a0c3dda-1475-481d-bdcb-49cc366eec61","address":"n1Si9Br3BUZX6QxdJ7WbcZSPjuacL9UhRZJ","crypto":{"ciphertext":"c85bcc9e838e1da6e75cfb69f4a6fb7bf2df64621ff822704f4aa185c659a847","cipherparams":{"iv":"3f30282ce8508777f25c07dcc5e30c3d"},"cipher":"aes-128-ctr","kdf":"scrypt","kdfparams":{"dklen":32,"salt":"64a52016ead8e5422ab4591ab28e8ee902caa8c0b3725edd91603e2bda671831","n":4096,"r":8,"p":1},"mac":"180f9754a65f2bd3ff7f450a100637e9715ab32e65d7ed9fcb5f7e71070f5962","machash":"sha3256"}}'
ENV PASSWORD 'abcd12345'
WORKDIR /app
COPY . .
RUN npm install
CMD node main.js