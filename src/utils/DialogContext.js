import React, { useReducer, useContext } from "react";

const SHOW_DIALOG = "SHOW_DIALOG";

const DialogContext = React.createContext();
const { Provider } = DialogContext;

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

const DialogProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        show: false, message: ""
    });
    return <Provider value={[state, dispatch]} {...props} />;
};

const useDialogContext = () => {
    return useContext(DialogContext);
};

export { DialogProvider, useDialogContext, SHOW_DIALOG };
