export const getUrl = (apiString) => {
    if (typeof apiString !== 'string') {
        throw new Error('apiString must be a string');
    }

    const MODE = process.env.MODE;
    const HOST_NAME = process.env.HOST_NAME;
    const PORT = process.env.PORT;

    if (MODE === 'development') {
        return `http://${HOST_NAME}:${PORT}/${apiString}`;
    } else {
        return `https://${HOST_NAME}/${apiString}`;
    }
}