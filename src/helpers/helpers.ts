/**
 * Get nested object if isset
 * @param obj
 * @param args
 * @param defaultValue
 */
export const getNested = <T>(
    obj: object | any,
    args: string[],
    defaultValue: any = ""
): typeof defaultValue | T => {
    const foundVal = args.reduce((obj, level) => obj && obj[level], obj);
    return foundVal || defaultValue;
}

/**
 * Get deep data object
 * @example {data: {data: {data: {key: value}}}} => {key:value}
 * @param object
 */
export const getDeepDataObject = (object: object | any): object => {
    if (object && typeof object?.data !== 'undefined')
        return getDeepDataObject(object.data);

    return object;
};

export const capitalize = (text: string): string => {
    if (!text) return "";

    return text[0].toUpperCase() + text.slice(1);
};

export const uid = (): string => "_" + Math.random().toString(36).substr(2, 9);

export const snakeToCamel = (str: string) => {
    return str.replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

export const convertKeysToCamelCase = (object: { [key: string]: any }): object => {
    const result: { [key: string]: any } = {};

    Object.keys(object).forEach((errorKey: string) => {
        result[snakeToCamel(errorKey)] = object[errorKey];
    });

    return result;
};
