function arrays() {
    let find = 1;
    let matrix = [1, 2, 3, 4, 1, 6, 7, 1, 9, 0]
    console.log(matrix);
    let counter = 0;
    for (i = 0; i <= matrix.length; i++) {
        if (matrix[i] == find) {
            counter++
        }
    }
    console.log(`Có ${[counter]} số phần tử bằng với phần tử cần tìm trong mảng`);
}
arrays()