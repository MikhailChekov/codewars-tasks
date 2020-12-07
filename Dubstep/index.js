function songDecoder(song) {
    return song.split('WUB').filter(e => e !== '').join(' ');
}
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"));