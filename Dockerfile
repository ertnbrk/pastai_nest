FROM node:18

# App dizinine geç
WORKDIR /usr/src/app

# Paketleri yükle
COPY package*.json ./
RUN npm install

# Uygulama dosyalarını kopyala
COPY . .

# Uygulama başlat
CMD ["npm", "run", "start:dev"]
