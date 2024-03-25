namespace Models {
    /* <!--/// BEGIN TYPES ///--> */

    /* Numeric Types */

    //Integer Types
    export class SmallInt { } // -32 768 <-> 32 767
    export class Integer { } // -2 147 483 648 <-> 2 147 483 647
    export class BigInt { } // -9 223 372 036 854 775 808 <-> -9 223 372 036 854 775 807

    // Arbitrary Precision Types
    export class Numeric { }

    // Floating-point Types
    export class Real { }
    export class Double { }

    // Serial Types
    export class SmallSerial { }
    export class Serial { }
    export class BigSerial { }

    /* Monetary Types */
    export class Money { }

    /* Character Types */

    export class Char { }
    export class VarChar { }
    export class Text { }

    /* Binary Types */

    export class Binary { }

    /* Date Types */

    // No Time Zone 
    export class TimeStamp { }
    export class Date { }
    export class Time { }

    // Timezone
    export class LocalTimeStamp { }
    export class LocalTime { }

    /* Boolean Types */
    export class Bool { }

    /* <!--/// END TYPES ///--> */

    /* <!--/// BEGIN TABLES ///--> */

    export abstract class Model { }

    /* <!--/// END TABLES ///--> */
}
