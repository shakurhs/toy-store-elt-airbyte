function parse_datetime(date_col) {
    return `
        PARSE_DATETIME('%d/%m/%Y %H:%M', ${date_col})
`; 
}

module.exports = {parse_datetime};