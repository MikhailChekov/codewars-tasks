function digital_root(n) {
    n = n + '';
    return Number(n.length > 1 ? digital_root(((n.split('').reduce((a, e) => (+a) + (+e))))) : n);
}