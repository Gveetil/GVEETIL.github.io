import React, { useReducer, useContext } from "react";

// Action key - triggers a show / close of the portfolio dialog based on value passed in
const SHOW_DIALOG = "SHOW_DIALOG";

const DialogContext = React.createContext();
const { Provider } = DialogContext;

// Reducer to make changes to the dialog context state
const reducer = (state, action) => {
    switch (action.type) {
        case SHOW_DIALOG: {
            const message = action.show ? action.message : "";
            return {
                show: action.show,
                message
            }
        }
        default:
            return state;
    }
};

// Returns the Provider to be used when using the dialog context 
const DialogProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        show: false, message: ""
    });
    return <Provider value={[state, dispatch]} {...props} />;
};

// Returns the dialog context 
const useDialogContext = () => {
    return useContext(DialogContext);
};

export { DialogProvider, useDialogContext, SHOW_DIALOG };
