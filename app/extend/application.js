let cacheData={};
exports.cache={
    get(key) {
        return cacheData[key];
    },
    set(key,val) {
        cacheData[key]=val;
    }
}