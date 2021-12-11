//-- Modules
const fs = require('fs');
const https = require('https');
//-- Command
const wiki_url = "https://en.wikipedia.org/w/api.php"


function getWikipedia (keyword, sender, complete) {

//-- Account
const _mywiki = JSON.parse(fs.readFileSync(`./data/users/${sender.split("@")[0]}/design.json`));	
const mywikidesign = _mywiki[0]	//-- account design Emojie

    let request = https.get(`${wiki_url}?action=opensearch&search=${keyword}&limit=1&namespace=0`, (res) => {
        if (res.statusCode !== 200) {
          console.error(`Did not get an OK from the server. Code: ${res.statusCode}`);
          res.resume();
          complete("There was an error.")
          return;
        }
      
        let data = '';
      
        res.on('data', (chunk) => {
          data += chunk;
        });

        res.on('close', () => {
          console.log('Retrieved search data');

        dataobj =  JSON.parse(data)
        
          if (dataobj[1].length != 0){
            
            let pageLink = JSON.parse(data)[3][0];
            let pageName = JSON.parse(data)[1][0];

            //pageName= pageName.replace(/ /g, "%20")
            console.log(pageName)
            
            let request = https.get(`${wiki_url}?action=query&prop=extracts&exintro&explaintext&format=json&titles=${pageName}`, (res) => {
              
              console.log("test")
              console.log(`gathering info from: {wiki_url}?action=query&prop=extracts&exintro&explaintext&format=json&titles=${pageName}`);
              
              if (res.statusCode !== 200) {
                console.error(`Did not get an OK from the server. Code: ${res.statusCode}`);
                res.resume();
                complete("There was an error.");
                return;
              }
            
              let data = '';
            
              res.on('data', (chunk) => {
                data += chunk;
              });
      
              res.on('close', () => {
                let downloadObj = JSON.parse(data)
                let pagesObj = downloadObj.query.pages;
                
                let title = pagesObj[Object.keys(pagesObj)[0]].title
                let extract = pagesObj[Object.keys(pagesObj)[0]].extract

                console.log('Retrieved page data');
                
                complete(`${mywikidesign} *${title}*` + "\n\n" + extract + pageLink);

              });
          });
        }
        else{
          complete("Lory doesnt know about this!")
        }
      });
    });
}

module.exports.getWikipedia = getWikipedia;

//getWikipedia("Albert Einst", (info) => {console.log(info)});