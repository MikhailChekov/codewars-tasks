function deleteNth(arr, n) {
    let sum = {};

    return arr.filter((e) => {
        sum[e] = (sum[e] || 0) + 1;
        return sum[e] <= n;
    });
}