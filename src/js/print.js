export default async function printMe() {
    let [a, b] = [1, 2]
    console.log(a, b);
    [a, b] = await new Promise((resolve) => {
        setTimeout(() => {
            resolve([7, 6,4]);
        }, 1000)
    })
    alert(`a=${a};b=${b}`)
} 