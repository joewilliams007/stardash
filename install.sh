#!/usr/bin/bash

apt install termux-api
apt-get install nodejs
echo "Installed Node-JS"
apt-get install libwebp
apt-get install ffmpeg
echo "Installed ffmpeg for amazing filters"
apt-get install wget
apt-get install curl
apt-get install tesseract
apt-get install mmv
apt-get install python
apt-get install pip
apt-get install graphicsmagick
apt-get install sox pulseaudio

wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"

npm i imgbb-uploader
npm i
npm i ocr
pip install -U yt-dlp
npm install nodemailer
npm install -g ddg-bulk-image-downloader
npm install --save termux
npm install deepai
npm i image-scraper
echo "Installed Bing image search"
npm install weather-js
echo "Installed weather Api"
npm install --save translate-google
echo "Installed google translator"
npm i alexa-bot-api-v4
echo "Installed ai"
apt-get install espeak
echo "Everything installed. Starting now."
node index


echo "[*] Shiba has installed all dependencies, please run the command \"node index\" to start the script"
echo "Updates : avaible in command .updates"
