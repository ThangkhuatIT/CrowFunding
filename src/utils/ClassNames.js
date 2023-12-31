
export default function ClassNames(...args) {
    return args
        .reduce(((acc, val) => {
            if (typeof(val) === 'string') {
                return acc.concat(val.split(' '))
            }
            return acc.concat(Object.values(val))
        }), [])
        .join(' ');
}