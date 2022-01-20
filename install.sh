#!/usr/bin/bash
apt update -y
apt upgrade -y
apt install termux-api -y
apt-get install nodejs -y
echo "Installed Node-JS"
apt-get install libwebp -y
apt-get install ffmpeg -y
echo "Installed ffmpeg for amazing filters"
apt-get install wget -y
apt-get install curl -y
apt-get install tesseract -y
apt-get install mmv -y
apt-get install python -y
apt-get install pip -y
apt-get install graphicsmagick -y
apt-get install sox pulseaudio -y

wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"

npm i imgbb-uploader
npm i
npm i ocr
npm i youtube-search-without-api-key
npm i instagram-followers
npm install get-json 
npm install owlbot-js
npm i randomquote-api
pip install -U yt-dlp
npm install nodemailer
npm install -g ddg-bulk-image-downloader
npm install --save termux
npm install deepai
npm install genius-lyrics
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
