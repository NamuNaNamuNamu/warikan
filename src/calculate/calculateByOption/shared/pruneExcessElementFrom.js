export function pruneExcessElementFrom(result) {
    let prunedResult = [];

    for (let resultElement of result) {
        if (resultElement.numberOfPeople === 0) {
            continue;
        }

        prunedResult.push(resultElement);
    }

    return prunedResult;
}