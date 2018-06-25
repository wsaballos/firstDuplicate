function firstDuplicate(a) {
    var storage = {}
    for(var i = 0; i <= a.length; i++){
        if (storage[a[i]] !== undefined){
            return a[i]
        } else {
            storage[a[i]] = a[i]
        }
    }
    return -1
}