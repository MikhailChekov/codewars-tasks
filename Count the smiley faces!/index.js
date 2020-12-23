
function countSmileys(arr) {
    return arr.filter(e => {
        if ([':)', ':D', ';)', ';D', ':~)', ':~D', ';~)', ';~D', ':-)', ':-D', ';-)', ';-D'].includes(e.trim())) {
            return e;
        }
    }).length
}