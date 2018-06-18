function random<T>(elements: T[]): T
function random<T>(...elements: T[]): T

function random<T>(...elements: T[]): T {
    const a = Array.isArray(elements) && elements.length === 1
        ? elements[0]
        : elements

    return a[Math.floor(Math.random() * a.length)]
}

export default random
