class hashMap{
    constructor(){
        this.hashArray = new Array(2);
    }

    set(key, value){
        const hashIndex = this.getIndex(key);
        this.hashArray[hashIndex]=value;
    }

    get(key){
        const hashIndex = this.getIndex(key);
        return this.hashArray[hashIndex];
    }

    hash(value){
        let hashValue = 0 ;
        let key = value.toString();
        for(let i=0; i< key.length; i++){
            hashValue += key.charCodeAt(i) << (i*2);
        }
        return hashValue;
    }

    getIndex(key){
        const hashKey = this.hash(key);
        const index = hashKey;
        console.log(index, hashKey, this.hashArray.length);
        return index ;
    }
}

let hashMapObj = new hashMap();
hashMapObj.set("cat",12);
hashMapObj.set("dog",16);
hashMapObj.set("tac",20);

console.log(hashMapObj.get("cat")," ", hashMapObj.get("dog") , hashMapObj.get("tac"));

class DecentHashMap {

    constructor(initialCapacity = 2) {
      this.buckets = new Array(initialCapacity);
      this.collisions = 0;
    }
  
    set(key, value) {
      const bucketIndex = this.getIndex(key);
      if(this.buckets[bucketIndex]) {
        this.buckets[bucketIndex].push({key, value});
        if(this.buckets[bucketIndex].length > 1) { this.collisions++; }
      } else {
        this.buckets[bucketIndex] = [{key, value}];
      }
      return this;
    }
  
    get(key) {
      const bucketIndex = this.getIndex(key);
      for (let arrayIndex = 0; arrayIndex < this.buckets[bucketIndex].length; arrayIndex++) {
        const entry = this.buckets[bucketIndex][arrayIndex];
        if(entry.key === key) {
          return entry.value
        }
      }
    }
  
    hash(key) {
      let hashValue = 0;
      const stringTypeKey = `${key}${typeof key}`;
  
      for (let index = 0; index < stringTypeKey.length; index++) {
        const charCode = stringTypeKey.charCodeAt(index);
        hashValue += charCode << (index * 8);
      }
  
      return hashValue;
    }
  
    getIndex(key) {
      const indexHash = this.hash(key);
      const index = indexHash % this.buckets.length;
      console.log(index, indexHash, this.buckets.length);
      return index;
    }
  }

const decentHash = new DecentHashMap();
decentHash.set("cat",10);
decentHash.set("dog",20);
decentHash.set("tac",30);
console.log(decentHash.get("cat"), decentHash.get("dog"), decentHash.get("tac"))
