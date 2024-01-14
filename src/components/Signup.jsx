
export default function Signup() {
    return (
        <form>

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

                </div>

            </div>
        </form>
    )
}
