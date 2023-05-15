import { v4 as uuidv4 } from 'uuid';

export default function useArbitraryValue(seed: string) {
    const myuuid = uuidv4();
    return `${myuuid}.${seed}`
}