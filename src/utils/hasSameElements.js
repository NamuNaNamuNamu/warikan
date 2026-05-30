export function hasSameElements(array1, array2) {
    if (array1.length !== array2.length) return false;

    const counts = new Map();

    for (const el of array1) {
        counts.set(el, (counts.get(el) ?? 0) + 1);
    }

    for (const el of array2) {
        if (!counts.has(el)) return false;

        const count = counts.get(el) - 1;
        if (count === 0) {
            counts.delete(el);
        } else {
            counts.set(el, count);
        }
    }

    return counts.size === 0;
}