export const setProps = (props) => {
    return JSON.stringify(props).replaceAll('"', "'");
}

export const getProps = (strProps) => {
    const str = (strProps || '{}').replaceAll("'", '"');
    return JSON.parse(str);
}

export const generateId = () => {
    return Math.floor(Math.random() * 100000);
}