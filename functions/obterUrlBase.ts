export function obterUrlBase(){
    const origin =
        typeof window !== 'undefined' && window.location.origin
            ? window.location.origin
            : '';

    return `${origin}`;
}