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

    function getVectorofRandomIndices(min, max, length, unique) {
        let indices = new Array(length);

        if ((max - min) < length) {
            unique = false
        }

        if (unique) {
            for (let i = 0; i < length; i++) {
                let index = this.getRandomIndex(min, max);
                while (indices.indexOf(index) > 0) {
                    index = this.getRandomIndex(min, max);
                }

                indices[i] = index;
            }

        }
        else {
            for (let i = 0; i < length; i++) {
                indices[i] = this.getRandomIndex(min, max);
            }
        }

        return indices;
    }

    return { getRandomIndex, getAllIndexOf, getUnique, getVectorofRandomIndices }
}