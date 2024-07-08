export const removeSufix = (value: string, sufix?:string): string => {

    const result = value.replace(sufix ? sufix: '.xlsx', '');

    return result;
}