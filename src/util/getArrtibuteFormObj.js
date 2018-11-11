
function getObjFormRoute(source={}) {
    var obj =  Object.assign({},source);
    delete obj.history;
    delete obj.location;
    delete obj.match;
    return obj
}
export default getObjFormRoute