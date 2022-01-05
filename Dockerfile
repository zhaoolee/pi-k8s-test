FROM node:17 as build

WORKDIR /opt
RUN git clone --depth=1 https://github.com/zhaoolee/pi-k8s-test.git

WORKDIR /opt/pi-k8s-test
RUN npm install


EXPOSE 3000

CMD ["npm", "run", "server"]