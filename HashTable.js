class HashTable {

    constructor(){
        this.table=[];
    }

    hashKey(key){
        let hash = 0;
        for(let i=0; i<key.length; i++) {

            let code = key.charCodeAt(i);
            hash = ((hash << 5) - hash) + code | 0;

        }

        return hash;

    }

    get(key){

        let index = this.hashKey(key);

        return this.table[index];

    }

    set(key, value){
        let index = this.hashKey(key);
        this.table[index]=value;

    }

    showTable() {
      for (const key in this.table) {
        if(this.table[key] !== undefined) {
          console.log(key, ' : ', this.table[key]);
        }
      }
    }

    remove(key){
        let index = this.hashKey(key);

        if (this.table[index]) {
            delete this.table[index];
        }

    }

}