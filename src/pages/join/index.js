import React from 'react';

export const JoinPage = () => {
  return (
    <main className="o-join-container">
      <section className="b-join">
        <header className="b-join__header">
          <h2 className="b-join__heading">Yes, we are going to Mars</h2>
          <h3 className="b-join__subheading">But not because it is easy</h3>
        </header>

        <form action="success.html" className="b-join__form">
          <h2>We need the bright and the brave</h2>
          <h3>Are you one of them?</h3>
          <h3>Apply today!</h3>

          <div className="b-join__form__form-group">
            <label id="join-first_name-label" htmlFor="join-first_name">
              First name <span>(And any middle names)</span>
            </label>
            <input
              className="b-join__form__form-group__input"
              type="text"
              name="join-first_name"
              id="join-first_name"
              required
              pattern=".{1,}"
            />
            <span
              id="join-first_name-message"
              className="b-join__form__error-message"
            >
              &#9888; We need your first name.
            </span>
          </div>

          <div className="b-join__form__form-group">
            <label htmlFor="join-last_name">Last name</label>
            <input
              className="b-join__form__form-group__input"
              type="text"
              name="last_name"
              id="join-last_name"
              required
              pattern=".{1,}"
            />
            <span
              id="join-last_name-message"
              className="b-join__form__error-message"
            >
              &#9888; We need your last name.
            </span>
          </div>

          <div className="b-join__form__form-group b-join__form__form-group__sex">
            <p>Sex</p>
            <small>(We are going to Mars, so we need to know)</small>
            <div className="b-join__form__form-group__input">
              <div>
                <input
                  type="radio"
                  name="join-sex"
                  id="join-sex-male"
                  value="male"
                  required
                />
                <label htmlFor="join-sex-male">Male</label>
              </div>
              <div className="b-join__join-sex-female">
                <input
                  className="b-join__form__form-group__input"
                  type="radio"
                  name="join-sex"
                  id="join-sex-female"
                  value="female"
                />
                <span
                  id="join-sex-message"
                  className="b-join__form__error-message"
                >
                  &#9888; We need to know your sex.
                </span>
                <label htmlFor="join-sex-female">Female</label>
              </div>
            </div>
            <div className="b-join__identifying-gender__container">
              <input type="checkbox" name="join-gender" id="join-gender" />
              <label htmlFor="join-gender">
                Is there anything about your <em>identifying gender</em> you
                would like to mention?
              </label>
              <div className="b-join__identifying-gender b-join__identifying-gender__hidden">
                <p>You are not required to inform about this</p>
                <label htmlFor="join-identifying-gender">
                  What is your gender?
                </label>
                <input
                  type="text"
                  id="join-identifying-gender"
                  name="join-identifying-gender"
                />
              </div>
            </div>
          </div>

          <div className="b-join__form__form-group">
            <label htmlFor="join-dob">Date of birth</label>
            <input
              className="b-join__form__form-group__input"
              type="date"
              name="join-dob"
              id="join-dob"
              required
            />
            <span id="join-dob-message" className="b-join__form__error-message">
              &#9888; We need your age.
            </span>
          </div>

          <div className="b-join__form__form-group b-join__form__form-group__email">
            <label htmlFor="join-email">Email</label>
            <small>
              You will receive a confirmation email after submitting the form
            </small>
            <input
              className="b-join__form__form-group__input"
              type="email"
              name="join-email"
              id="join-email"
              required
              pattern=".{1,}"
            />
            <span
              id="join-email-message"
              className="b-join__form__error-message"
            >
              &#9888; We need your email address in order to contact you.
            </span>
          </div>

          <input
            className="b-join__form__submit btn btn__cta"
            type="submit"
            value="Apply to join"
          />
        </form>
        <figure className="b-join__mars-bcg">
          <img src="../img/mars_half.webp" alt="The red planet Mars" />
        </figure>
      </section>
    </main>
  );
};
