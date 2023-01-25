import React from "react";

export default function Form() {
  const [formData, setFormData] = React.useState(
    {email: "", firstName: "", lastName: "", comment: ""}
  )

  function handleChange(event) {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  return (
    <form>
      <input
        type="email"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />
      <textarea
        placeholder="Comment"
        onChange={handleChange}
        name="comment"
        value={formData.comment}
      />
    </form>
  )
}
