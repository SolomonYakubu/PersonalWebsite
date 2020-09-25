import React, { useState } from "react";
import swal from "sweetalert";
import { Helmet } from "react-helmet";
import "../App.css";

const Contact = () => {
	const [state, setState] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [sending, setSending] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		setSending(true);
		setTimeout(() => {
			setSending(false);
			swal({
				text: "Network error",
				icon: "error",

				dangerMode: true,
			});
		}, 45000);
		if (sending) {
			fetch("https://kingsolocontactform.herokuapp.com/send", {
				method: "POST",
				body: JSON.stringify(state),
				headers: {
					Accept: "application.json",
					"Content-Type": "application/json",
				},
			}).then((response) =>
				response.json().then((response) => {
					if (response.status === "success") {
						swal({
							text: "Message sent!!",
							icon: "success",
						});
						resetForm();

						setSending(false);
					} else if (response.status === "fail") {
						swal({
							text: "Message not sent!!",
							icon: "error",

							dangerMode: true,
						});
						setSending(false);
					}
				}),
			);
		}
	};
	const resetForm = () => {
		setState({ name: "", email: "", message: "" });
	};
	const onNameChange = (e) => {
		setState((prevState) => {
			return {
				...prevState,
				name: e,
			};
		});
	};
	const onEmailChange = (e) => {
		setState((prevState) => {
			return {
				...prevState,
				email: e,
			};
		});
	};
	const onMessageChange = (e) => {
		setState((prevState) => {
			return {
				...prevState,
				message: e,
			};
		});
	};

	return (
		<React.Fragment>
			<Helmet>
				<meta charset="utf-8" />
				<title>KingSolo</title>
				<meta name="keywords" content="Solomon, Yakubu, Kingsolo," />
				<meta name="author" content="Yakubu Solomon" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="My personal portfolio Website" />
			</Helmet>
			<div style={{}} className="aboutP">
				<div
					style={{
						borderBottomStyle: "solid",

						padding: "none",
					}}
					className="aboutStyles"
				>
					Get In Touch
				</div>
			</div>

			<form
				id="contact-form"
				onSubmit={handleSubmit.bind(this)}
				method="POST"
				className="form"
			>
				<div className="formItem contactText">
					Do you have a project or an idea and would like to work with me? I'll
					be glad to contribute and work with you.{" "}
					<p style={{ margin: 0 }}>Just send a message.</p>
				</div>
				<div className="formItem">
					<label htmlFor="name" className="label">
						Name
					</label>
					<input
						type="text"
						className="formInput details"
						placeholder="John Doe"
						value={state.name}
						onChange={(e) => onNameChange(e.target.value)}
						required
					/>
				</div>
				<div className="formItem">
					<label htmlFor="email" className="label">
						Email
					</label>
					<input
						type="email"
						className="formInput details"
						aria-describedby="emailHelp"
						placeholder="example@gmail.com"
						value={state.email}
						onChange={(e) => onEmailChange(e.target.value)}
						required
					/>
				</div>
				<div className="formItem">
					<label htmlFor="message" className="label">
						Message
					</label>
					<textarea
						className="formInput message"
						rows="5"
						value={state.message}
						onChange={(e) => onMessageChange(e.target.value)}
						required
					/>
				</div>
				<div className="formItem">
					<button
						type="submit"
						className={sending ? "btnSubmit sending" : "btnSubmit"}
					>
						{sending ? "Sending...." : "Send Email"}
					</button>
				</div>
			</form>
		</React.Fragment>
	);
};

export default Contact;
