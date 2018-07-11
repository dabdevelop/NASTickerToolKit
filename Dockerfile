FROM node:8
ENV KEY '{"version":4,"id":"d9577e8e-f7b1-4ec0-8fe3-56a907a69906","address":"n1StvdEwQA3Ks9nDFxTEgD2HKwzqoKpwwjR","crypto":{"ciphertext":"a368a649e216ae2d63c8e134b223badb4047f13e9646671ece4e574959863d27","cipherparams":{"iv":"12d45fc389958c65efa0982d9c000c75"},"cipher":"aes-128-ctr","kdf":"scrypt","kdfparams":{"dklen":32,"salt":"030cc52b190848d8d3004ab8f3ae5483ccbb47917d97d1bf569ab99ecb1180aa","n":4096,"r":8,"p":1},"mac":"fed48c6eab5fe763ddf7b1b90c697bf6a22f48e05dc44bf2eebe7690caa93335","machash":"sha3256"}}'
ENV PASSWORD '"123456789"'
WORKDIR /app
COPY . .
RUN npm install
# RUN mkdir accounts
# RUN echo [${KEY},${PASSWORD}] > accounts/accounts.json
CMD node main.js