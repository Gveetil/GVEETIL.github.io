import path from 'path';
import emailjs from 'emailjs-com';
// The email js api key to be used when sending mail
const emailjsKey = process.env.REACT_APP_EMAIL_CODE;
// Path to images folder
const IMAGE_FOLDER_PATH = path.join(process.env.PUBLIC_URL, "/images/");

const utilities = {
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

    // Path to images folder
    imageFolder: IMAGE_FOLDER_PATH,
}

export default utilities;