function sumOfDistinctElements(set1, set2) {
    // Combine both sets into a single array
    const combinedSet = set1.concat(set2);
    
    // Use a Set to remove duplicates and keep distinct elements
    const distinctElements = new Set(combinedSet);
    
    // Calculate the sum of distinct elements
    let result = 0;
    for (const element of distinctElements) {
        result += element;
    }
    
    return result;
}

// Example sets
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];

// Calculate the sum of distinct elements
const output = sumOfDistinctElements(set1, set2);

console.log(output); // Output: 13