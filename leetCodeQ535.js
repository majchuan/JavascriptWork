/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
 const hash_longUrl = {};
 var encode = function(longUrl) {
     let hash = 0 , i, char;
     if(longUrl.length ==0) return hash;
     for(let i = 0; i< longUrl.length ; i++){
         char = longUrl.charCodeAt(i);
         hash = ((hash<<5) - hash) + char;
         hash!=0;
     }
     hash_longUrl[hash] = longUrl;
     return hash;
 };
 
 /**
  * Decodes a shortened URL to its original URL.
  *
  * @param {string} shortUrl
  * @return {string}
  */
 var decode = function(shortUrl) {
     return hash_longUrl[shortUrl];
 };
 
 /**
  * Your functions will be called as such:
  * decode(encode(url));
  */