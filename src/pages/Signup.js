import React from 'react'
import {Link} from "react-router-dom"

const Signin = () => {
	return (
		<div className="signin">
			<div className="signin__container">
				<div className="signin__form">
					<div>
					<h4 className="signin__sub1">START FOR FREE</h4>
					<h1 className="signin__heading">Create new Account</h1>
					<h4 className="signin__sub2">Already a member? <Link to="/signin" className="signin__link">Log in</Link></h4>
					<form className="_form">
						<div className="_form__grid">
							<div className="_form__group">
								<input
									name="firstname"
									type="text"
									id="firstname"
									placeholder="Firstname"
									className="_form__input"
									autoComplete="off"
									required
								/>
								<label htmlFor="firstname" className="_form__label">
									Firstname
								</label>
							</div>
							<div className="_form__group">
								<input
									name="lastname"
									type="text"
									id="lastname"
									placeholder="Lastname"
									className="_form__input"
									autoComplete="off"
									required
								/>
								<label htmlFor="lastname" className="_form__label">
									Lastname
								</label>
							</div>
						</div>

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

						<div className="_form__group">
							<div className="_form__group">
								<input
									type="password"
									name="repeat-password"
									id="repeatpassword"
									placeholder="Repeat Password"
									className="_form__input"
									autoComplete="off"
									required
								/>
								<label htmlFor="repeatpassword" className="_form__label">
									Repeat Password
								</label>
							</div>
						</div>

						<div className="_form__group">
							<button type="submit" className="_form__submit">
								Register
							</button>

							<Link to="/" className="_form__submit _form__submit--back">
								Back to home
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