export const convertBytes = (bytes: number) => {
    const MBConvertion = 1048576;

    const result = bytes/MBConvertion

    return result.toFixed(2);
}