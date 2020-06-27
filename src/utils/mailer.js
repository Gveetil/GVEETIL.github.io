import emailjs from 'emailjs-com';

const emailjsKey = "user_nccDGeyCbVLYWIItDNN4z";
const techListItemStyle = "list-group-item technology-item rounded m-1 px-1 px-sm-2 py-0";

const mailer = {
    /**
     * Makes a request to emailjs for sending an email and returns the result 
     * @param {string} message the message to be sent
     */
    sendMail: async (message) => {
        try {
            let result = await emailjs.send("default_service", "contact_form", { message }, emailjsKey);
            if (result != null && result.status === 200) {
                return true;
            }
            return false;
        }
        catch (err) {
            console.log(err);
            return false;
        }
    },
}

// Initialize email js
//emailjs.init(emailjsKey);

export default mailer;