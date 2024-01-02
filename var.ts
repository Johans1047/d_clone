const ONLINE_STATUS: Object = {
    OFFLINE: 0 as number,
    ONLINE: 1 as number,
    IDLE: 2 as number,
    DO_NOT_DISTURB: 3 as number,
    INVISIBLE: 4 as number,
};

const ACCOUNT_STATUS: Object = {
    ACTIVE: 0 as number,
    DELETED: 1 as number,
    INACTIVE: 2 as number,
};

const ACTIVITY_TYPE: Object = {
    GO_ONLINE: 0 as number,
    GO_OFFLINE: 1 as number,
};

export {
    ONLINE_STATUS,
    ACCOUNT_STATUS,
    ACTIVITY_TYPE
};