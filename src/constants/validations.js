const fildIncomplete = '*Can’t be blank'
const dateIncorrect = '*Invalid date'

const NameValidation = {
    required: fildIncomplete,
    pattern: {
        value: /^[a-zA-Z]+$/,
        message: '*Non-existent name'
    }
}

const CardNumberValidation = {
    required: fildIncomplete,
    pattern: {
        value: /^[0-9]+$/,
        message: '*Wrong format, numbers only'
    },
    minLength: {
        value: 16,
        message: '*Must have 16'
    }
}

const CvcValidation = {
    required: CardNumberValidation.required,
    pattern: CardNumberValidation.pattern,
}

const MonthValidation = {
    required: fildIncomplete,
    pattern:{
        value:/^(0?[1-9]|1[0-2])$/,
        message: dateIncorrect,
    }
}

const YearValidation = {
    required: fildIncomplete,
    pattern:{
        value:/^(2[5-9]|[3-9][0-9])$/,
        message: dateIncorrect,
    }
}

export const VALIDATION_VALUES = {
    NAME: NameValidation,
    CARD_NUMBER: CardNumberValidation,
    MONTH: MonthValidation,
    YEAR: YearValidation,
    CVC: CvcValidation
}