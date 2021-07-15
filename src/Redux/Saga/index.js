import { watchGetUsers } from './movies';

export default function* () {
    yield [
        watchGetUsers()
    ]
}