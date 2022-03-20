import React from 'react'
import {Link} from "react-router-dom"

const Signin = () => {
	return (
		<div className="signin">
			<div className="signin__container">
				<div className="signin__form">
					<div className="signin__form-container">
					<h4 className="signin__sub1">START FOR FREE</h4>
					<h1 className="signin__heading">Signin to your account</h1>
					<h4 className="signin__sub2">Don't have an account? <Link to="/signup" className="signin__link">Register</Link></h4>
					<form className="_form">
						<div className="_form__group">
							<div className="_form__group">
								<input
									type="email"
									name="email"
									id="email"
									placeholder="E-mail address"
									className="_form__input"
									autoComplete="off"
									required
								/>
								<label htmlFor="email" className="_form__label">
									E-mail address
								</label>
							</div>
						</div>

						<div className="_form__group">
							<div className="_form__group">
								<input
									type="password"
									name="password"
									id="password"
									placeholder="Password"
									className="_form__input"
									autoComplete="off"
									required
								/>
								<label htmlFor="password" className="_form__label">
									Password
								</label>
							</div>
						</div>

						<div className="_form__group _form__group--actions mt-2">
							<button type="submit" className="_form__submit">
								Sign in
							</button>

							<Link to="/" className="_form__submit _form__submit--back">
								Back to Home
							</Link>
						</div>
					</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Signin