import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';

import { submitForm } from '../../actions/index';
import mars_half from './mars_half.webp';

const schema = yup.object().shape({
  join_first_name: yup.string().required('⚠ We need your first name.'),
  join_last_name: yup.string().required('⚠ We need your last name.'),
  join_sex: yup.string().required('⚠ We need to know your sex.'),
  join_dob: yup.string().required('⚠ We really need to know your age.'),
  join_email: yup
    .string()
    .email("⚠ This email address doesn't look right.")
    .required('⚠ We need it for receipts and such.'),
});
export const JoinPage = () => {
  const [showIdGender, setShowIdGender] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });

  const onSubmit = (data) => {
    history.push('/join/success');
    dispatch(submitForm(data));
  };

  const handleShowIdGender = () => {
    setShowIdGender(!showIdGender);
  };
  return (
    <main className="o-join-container">
      <section className="b-join">
        <header className="b-join__header">
          <h2 className="b-join__heading">Yes, we are going to Mars</h2>
          <h3 className="b-join__subheading">But not because it is easy</h3>
        </header>

        <form onSubmit={handleSubmit(onSubmit)} className="b-join__form">
          <h2>We need the bright and the brave</h2>
          <h3>Are you one of them?</h3>
          <h3>Apply today!</h3>

          <div className="b-join__form__form-group">
            <label id="join-first_name-label" htmlFor="join_first_name">
              First name <span>(And any middle names)</span>
            </label>
            <input
              className="b-join__form__form-group__input"
              type="text"
              name="join_first_name"
              id="join_first_name"
              ref={register}
            />
            {errors.join_first_name && (
              <span
                id="join-first_name-message"
                className="b-join__form__error-message"
              >
                {errors.join_first_name.message}
              </span>
            )}
          </div>

          <div className="b-join__form__form-group">
            <label htmlFor="join-last_name">Last name</label>
            <input
              className="b-join__form__form-group__input"
              type="text"
              name="join_last_name"
              id="join-last_name"
              ref={register}
            />
            {errors.join_last_name && (
              <span
                id="join-last_name-message"
                className="b-join__form__error-message"
              >
                {errors.join_last_name.message}
              </span>
            )}
          </div>

          <div className="b-join__form__form-group b-join__form__form-group__sex">
            <p>Sex</p>
            <small>(We are going to Mars, so we need to know)</small>
            <div className="b-join__form__form-group__input">
              <div className="b-join__join-sex-male">
                <input
                  type="radio"
                  name="join_sex"
                  id="join-sex-male"
                  value="male"
                  ref={register}
                />
                <label htmlFor="join-sex-male">Male</label>
              </div>
              <div className="b-join__join-sex-female">
                <input
                  className="b-join__form__form-group__input"
                  type="radio"
                  name="join_sex"
                  id="join-sex-female"
                  ref={register}
                />
                {errors.join_sex && (
                  <span
                    id="join-sex-message"
                    className="b-join__form__error-message"
                  >
                    {errors.join_sex.message}
                  </span>
                )}
                <label htmlFor="join-sex-female">Female</label>
              </div>
            </div>
            <div className="b-join__identifying-gender__container">
              <input
                onChange={handleShowIdGender}
                type="checkbox"
                name="join-gender"
                id="join-gender"
              />
              <label htmlFor="join-gender">
                Is there anything about your <em>identifying gender</em> you
                would like to mention?
              </label>
              {showIdGender && (
                <div className="b-join__identifying-gender">
                  <p>You are not required to inform about this</p>
                  <label htmlFor="join-identifying-gender">
                    What is your gender?
                  </label>
                  <input
                    type="text"
                    id="join-identifying-gender"
                    name="join_identifying_gender"
                    ref={register}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="b-join__form__form-group">
            <label htmlFor="join-dob">Date of birth</label>
            <input
              className="b-join__form__form-group__input"
              type="date"
              name="join_dob"
              id="join-dob"
              ref={register}
            />
            {errors.join_dob && (
              <span
                id="join-dob-message"
                className="b-join__form__error-message"
              >
                {errors.join_dob.message}
              </span>
            )}
          </div>

          <div className="b-join__form__form-group b-join__form__form-group__email">
            <label htmlFor="join-email">Email</label>
            <small>
              You will receive a confirmation email after submitting the form
            </small>
            <input
              className="b-join__form__form-group__input"
              type="email"
              name="join_email"
              id="join-email"
              ref={register}
            />
            {errors.join_email && (
              <span
                id="join-email-message"
                className="b-join__form__error-message"
              >
                {errors.join_email.message}
              </span>
            )}
          </div>

          <input
            className="b-join__form__submit btn btn__cta"
            type="submit"
            value="Apply to join"
          />
        </form>
        <figure className="b-join__mars-bcg">
          <img src={mars_half} alt="The red planet Mars" />
        </figure>
      </section>
    </main>
  );
};
