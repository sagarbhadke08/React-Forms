





export default function Signup() {

    function handleSubmit(event) {
        console.log("In handlesubmit");
        event.preventDefault();


        const fd = new FormData(event.target);
        const acquisitionChannel =fd.getAll('aquisition');
        const data = Object.fromEntries(fd.entries());
        data.aquisition = acquisitionChannel;
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit}>

            <h2>Welcome on Board! </h2>
            <p>We just need a littele bit of data frok yu to get yu started</p>

            <div className="control">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" />
            </div>

            <div className="control-row">
                <div className="control">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" name="password" />
                </div>
            </div>

            <div className="control">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                    type="password"
                    id="confirm-password"
                    name="confirm-password"
                />
            </div>

            <hr />

            <div className="control-row">
                <div className="control">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" name="first-name" />
                </div>
                <div className="control">
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" name="last-name" />
                </div>
            </div>

            <div className="control">
                <label htmlFor="phone">What best describes your role?</label>
                <select name="role" id="role">
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="employee">Employee</option>
                    <option value="founder">Founder</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <fieldset>
                <legend>How did you find Us?</legend>
                <div className="control">
                    <input
                        type="checkbox"
                        id="google"
                        name="aquisition"
                        value="google"
                    />

                </div>
                <label htmlFor="google">Google</label>


                <div className="control">
                    <input
                        type="checkbox"
                        id="friend"
                        name="acquisition"
                        value="friend"
                    />
                    <label htmlFor="friend">Referred by friend</label>
                </div>
                <div className="control">
                    <input type="checkbox" id="other" name="acquisition" value="other" />
                    <label htmlFor="other">Other</label>
                </div>

            </fieldset>
            <div className="control">
                <label htmlFor="terms-and-conditions">
                    <input type="checkbox" id="terms-and-conditions" name="terms" />I
                    agree to the terms and conditions
                </label>
            </div>

            <p className="form-actions">
                <button type="reset" className="button button-flat">
                    Reset
                </button>
                <button type="submit" className="button">
                    Sign up
                </button>
            </p>
        </form>
    )
}
