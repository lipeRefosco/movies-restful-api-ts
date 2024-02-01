export interface ICrud {
    create(values: object): void
    read(values: object): void
    update(values: object, condition: object): void
    delete(condition: object): void
}