function tickets(line) {
    let d25 = 0;
    let d50 = 0;

    for (let i = 0; i < line.length; i++) {
        switch (line[i]) {
            case 25:
                d25++;
                break;
            case 50:
                if (d25 < 1) {
                    return 'NO';
                } else {
                    d50++;
                    d25--;
                }
                break;
            case 100:
                if ((d50 < 1 || d25 < 1) && (d25 < 3)) {
                    return 'NO';
                } else if (d50 > 0 && d25 > 0) {
                    d50--;
                    d25--;
                } else {
                    d25 -= 3;
                }
        }
    };
    return 'YES';
}