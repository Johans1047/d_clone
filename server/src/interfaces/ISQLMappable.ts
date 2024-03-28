interface ISQLMappable {
    values: Value[];
}

interface Value {
    colName: string;
    value: any;
}

export default ISQLMappable;