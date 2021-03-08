export function VectorUtils() {

    function getRandomIndex(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    function getAllIndexOf(array, value) {
        let indices = []
        for (let i = 0; i < array.length; i++) {
            if (array[i] == value) {
                indices.push(i);
            }
        }
        return indices;
    }

    function getUnique(array) {
        return array.filter((v, i, a) => a.indexOf(v) === i);
    }

    return { getRandomIndex, getAllIndexOf, getUnique}
} 