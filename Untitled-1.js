
var his = "089123801238"
console.log(his.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'))