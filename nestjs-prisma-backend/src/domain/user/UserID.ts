import { ulid } from 'ulid'

export class UserId {
    private constructor(
        public readonly value: String
    ) {
    }

    static create(): UserId {
        const value = ulid()
        return new UserId(
            value
        )
    }

    static reConstructor(value: String): UserId {
        return new UserId(value)
    }
}