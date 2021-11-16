import React, {useState, useEffect} from 'react';
// import './mcFormStyles.scss';
import MailchimpSubscribe from "react-mailchimp-subscribe"


const CustomForm = ({ status, message, onValidated }) => {


    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [modalOpen, setModalOpen] = useState(true)


    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        firstName &&
        lastName &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
            MERGE1: firstName,
            MERGE2: lastName,
        });

    }

    useEffect(() => {
        if(status === "success") clearFields();
        if(modalOpen && status === "success") clearFields();
    }, [status, modalOpen])

    const clearFields = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
    }


    return (
        <form
            className="mc__form"
            onSubmit={(e) => handleSubmit(e)}
        >
            <h3 className="mc__title">
                {status === "success" ? "Success!" :
                    "Join our email list for future updates."}
            </h3>

            {status === "sending" && (
                <div
                    className="mc__alert mc__alert--sending"
                >sending...</div>
            )}
            {status === "error" && (
                <div
                    className="mc__alert mc__alert--error"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status === "success" && (
                <div
                    className="mc__alert mc__alert--success"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}

            {status !== "success" ? (
                <div className="mc__field-container">
                    <input
                        label="First Name"
                        onChange={(e)=>setFirstName(e.target.value)}
                        type="text"
                        value={firstName}
                        placeholder="Jane"
                        
                    />

                    <input
                        label="Last Name"
                        onChange={(e)=>setLastName(e.target.value)}
                        type="text"
                        value={lastName}
                        placeholder="Doe"
                    />

                    <input
                        label="Email"
                        onChange={(e)=>setEmail(e.target.value)}
                        type="email"
                        value={email}
                        placeholder="your@email.com"
                    />

                </div>
            ) : null}

            {/*Close button appears if form was successfully sent*/}
            {
                status === 'success' ? <button
                    onClick={() => setModalOpen(false)}
                /> : <input
                    label="subscribe"
                    type="submit"
                />

            }
        </form>
    );
};


const MailchimpForm = props => {
    const url = `https://gmail.us2.list-manage.com/subscribe/post?u=68f65a90f91b3e89bf4c63790&id=8fe79a1ec8`;

    return (

        <div className="mc__form-container">
            <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                    <CustomForm
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </div>

    )
}

export default MailchimpForm;