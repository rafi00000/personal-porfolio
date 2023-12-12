
const Contact = () => {

    return (
        <div className="space-y-5 my-5 ">
                <form className="mx-auto border p-10 rounded-md space-y-3">
            <h1 className="text-4xl text-center  font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-800 via-red-600 to-pink-600 drop-shadow">Contact Me</h1>
                    <div className="form-control">
                        <label>Name</label>
                        <input type="text" name="name" id="" placeholder="Put your name" className="input input-bordered"/>
                    </div>
                    <div className="form-control">
                        <label>Email:</label>
                        <input type="text" name="name" id="" placeholder="Put your email" className="input input-bordered"/>
                    </div>
                    <div className="form-control">
                        <label>Message:</label>
                        <textarea name="message" id="" cols="30" rows="10" className="input input-bordered p-3" placeholder="Put your message here"></textarea>
                    </div>
                </form>
        </div>
    );
};

export default Contact;