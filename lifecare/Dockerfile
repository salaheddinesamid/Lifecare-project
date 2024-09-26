FROM node:18-alpine
WORKDIR /lifecare/src

COPY public/ /lifecare/public
COPY src/ /lifecare/src
COPY package.json /lifecare/


EXPOSE 3000
RUN npm install
CMD ["npm", "start"]