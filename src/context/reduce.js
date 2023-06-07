export const Appreducer =(state, action) => {
    switch (action.type) {
       case 'ADD_TRANSACTION':
        return{
            ...state,
            transactions: [{...action.payload}, ...state.transactions ]
        };

        case 'REM_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(taction => taction.id !== action.payload )
            }
        default:
           return state;
    }
}