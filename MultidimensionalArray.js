const numbers = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
    [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
    ];

    function sum(number){
        let sum = 0;

        for(let i = 0; i < numbers.length; i++){
            for(let j = 0; j < numbers[i].length; j++){
                if(numbers[i][j] === number){
                    const leftPosition = j - 1;
                    const currentPosition = j;
                    const rightPosition = j + 1;

                    const upRow = numbers[i - 1];
                    const bottomRow = numbers [i + 1];

                    const currentRow = numbers[i];

                    sum += currentRow[leftPosition] || 0;
                    sum += currentRow[currentPosition] || 0;
                    sum += currentRow[rightPosition] || 0;

                    if(upRow){
                        sum += upRow[leftPosition] || 0;
                        sum += upRow[currentPosition] || 0;
                        sum += upRow[rightPosition] || 0;
                    }
                    if(bottomRow){
                       sum += bottomRow[leftPosition] || 0;
                       sum += bottomRow[currentPosition] || 0;
                       sum += bottomRow[rightPosition] || 0;
                    }
                };
            }
        }
        return sum;
    }

    console.log(sum (26));