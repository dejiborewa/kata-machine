export default function bubble_sort(arr: number[]): void {
    let temp = null;
    let j = arr.length - 1;

    for (let i = 0; i < j; i++) {
        if (arr[i] > arr[i + 1]) {
            temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }

        if (i === j - 1) {
            j -= 1;
            i = -1;
        }
    }
}
