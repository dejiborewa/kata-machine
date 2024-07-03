export default function two_crystal_balls(breaks: boolean[]): number {
    const jumps = Math.floor(Math.sqrt(breaks.length));
    let failpoint;

    let i = jumps;
    for (; i < breaks.length; i += jumps) {
        if (breaks[i]) {
            failpoint = i;
            break;
        }
    }

    i -= jumps;

    if (failpoint) {
        for (let j = i; j < failpoint; j++, ++i) {
            if (breaks[j]) {
                return i;
            }
        }
    }

    return -1;
}
